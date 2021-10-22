<script>
    import {onMount} from 'svelte';
    import Painting from "../components/paintings/Painting.svelte";
    import Button from "../components/button/Button.svelte";
    import tokenStore from "../stores/token"
    import BidsTable from "../components/bids/BidsTable.svelte";
    import Painting404 from "../components/paintings/Painting404.svelte";
    import PageLayout from "../components/layout/PageLayout.svelte";
    import BidForm from "../components/BidForm.svelte";
    import Modal from "../components/Modal.svelte";

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
    let showBidModal = false;

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

    const toggleBidModal = () => {
        showBidModal = !showBidModal;
    }

    const addBid = async (e) => {
        const bid = e.detail;
        console.log(bid);

        const response = await fetch('http://localhost:3000/bids', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': bearer
            },
            body: JSON.stringify({
                user_id: bid.user_id,
                painting_id: bid.painting_id,
                amount: bid.amount
            })
        });

        if (response.status === 201) {
            alert("Bid successfully added");
            reloadPainting();
            reloadTable();
        } else {
            alert("Failed to add new bid \n" + response.statusText);
        }

        toggleBidModal();
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
            <Modal isPromo={true} bind:showModal={showBidModal} on:click={toggleBidModal}>
                <BidForm bind:painting={painting} on:addBid={(data) => {addBid(data)}}/>
            </Modal>

            <Painting bind:painting={painting}/>

            <BidsTable bind:bids={bidsForPainting} on:deleteBid={(id) => deleteBid(id)}/>

            {#if $tokenStore.token}
                <Button on:click={toggleBidModal}>
                    Place a bid
                </Button>
            {/if}


        {:else }
            <Painting404/>
        {/if}

    {/await}

</PageLayout>
