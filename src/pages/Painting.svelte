<script>
    import {onMount} from 'svelte';
    import Painting from "../components/Painting.svelte";
    import Button from "../components/button/Button.svelte";
    import tokenStore from "../stores/token"

    export let params;

    let paintingId;

    onMount(() => {
        paintingId = params.id;
    });


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
                return await resp.json();
            }
        }
    }

    let bearer = `Bearer ${$tokenStore.token}`
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
                return await resp.json();
            } else {
                alert("delete failed")
            }
        }
    }

</script>

{#await getPainting(paintingId)}
    {:then painting}
    <Painting data={painting}/>

    <Button on:click={() => deletePainting(paintingId)}>

    </Button>
{/await}