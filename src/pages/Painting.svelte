<script>
    import {onMount} from 'svelte';

    export let params;

    let paintingId;

    const getPainting = async (paintingId) => {
        const resp = await fetch(`http://localhost:3000/paintings/${paintingId}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'

            }
        });
    }

    // onMount(() => {
    // })
</script>