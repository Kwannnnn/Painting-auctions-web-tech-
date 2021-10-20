<script>
    import router from 'page';
    import Painting from "./Painting.svelte";

    export let paintingsList = [];

</script>

<main>
    {#if paintingsList.length === 0}
        <p>There are no items</p>
    {:else}
        <div class="grid grid-flow-row lg:grid-flow-col lg:grid-cols-3 lg:gap-12">
            {#each paintingsList as painting, i}
                <div on:click={() => router.redirect(`/paintings/${i+1}`)}  class="flex pb-sm md:pb-md overruled rounded-2xl border border-gray-100 sm:rounded-3xl shadow-sidebar">
                    <Painting data={painting}/>
                </div>
            {/each}
        </div>
    {/if}
</main>