<script>
    import {onMount} from 'svelte';

    export let params;

    let paintingId;

    onMount(() => {
        paintingId: params.id;
    })
</script>