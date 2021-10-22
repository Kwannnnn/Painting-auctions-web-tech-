<script>
    import router from 'page';
    import Painting from "./Painting.svelte";

    export let paintingsList = [];

</script>

<main>
    {#if paintingsList.length === 0}
        <p>There are no items</p>
    {:else}
        <div class="flex flex-wrap mx-3 overflow-hidden">
            {#each paintingsList as painting, i}
                <div on:click={() => router.redirect(`/paintings/${i+1}`)}  class="my-3 px-10 w-full h-full overflow-hidden sm:w-full xl:w-1/2">
                    <div class="flex rounded-2xl border border-gray-100 sm:rounded-3xl shadow-sidebar">
                        <Painting painting={painting}/>
                    </div>

                </div>
            {/each}
        </div>
    {/if}
</main>