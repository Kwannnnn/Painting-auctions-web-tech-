<script>
    import {onMount} from 'svelte';
    import Painting from "../components/paintings/Painting.svelte";
    import Button from "../components/button/Button.svelte";
    import tokenStore from "../stores/token"
    import BidsTable from "../components/bids/BidsTable.svelte";
    import Painting404 from "../components/paintings/Painting404.svelte";
    import PageLayout from "../components/layout/PageLayout.svelte";

    export let params;

    let paintingId;

    let bearer = `Bearer ${$tokenStore.token}`

    onMount(async () => {
        paintingId = params.id;
        bidsForPainting = await getBidsForPainting(paintingId);
        painting = await getPainting(paintingId);
    });

    let painting;
    let bidsForPainting;

    const getPainting = async (id) => {
        if (id) {
            const resp = await fetch(`http://localhost:3000/paintings/${id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if (resp.ok) {
                const result = await resp.json();
                return result;
            }
        }
    }

    const reloadPainting = async () => {
        painting = await getPainting(paintingId);
    }

    const deletePainting = async (id) => {
        if (id) {
            const resp = await fetch(`http://localhost:3000/paintings/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': bearer
                }
            });

            if (resp.ok) {
                alert("deleted")
                reloadPainting();
            } else {
                throw new Error(await resp.text());
            }
        }
    }

    const getBidsForPainting = async (id) => {
        if (id) {
            const resp = await fetch(`http://localhost:3000/bids`, {
                method: "Get",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });

            if (resp.ok) {
                const bids = await resp.json();
                const result = bids.filter(bid => bid.painting_id == id);
                return result;
            }
        }
    }


    const reloadTable = async () => {
        bidsForPainting = await getBidsForPainting(paintingId);
    }

    const deleteBid = async (e) => {
        const id = e.detail;
        console.log(id);

        if (id) {
            const resp = await fetch(`http://localhost:3000/bids/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': bearer
                }
            });

            if (resp.ok) {
                alert("deleted bid")
                reloadTable();
            } else {
                alert("delete failed")
            }
        }
    }

</script>
<PageLayout>
    {#await getPainting(paintingId)}
    {:then a}
        {#if a}
            <Painting bind:data={painting}/>

            <BidsTable bind:bids={bidsForPainting} on:deleteBid={(id) => deleteBid(id)}/>

            <Button on:click={() => deletePainting(paintingId)}>
                Delete Auction
            </Button>

        {:else }
            <Painting404/>
        {/if}

    {/await}

</PageLayout>
