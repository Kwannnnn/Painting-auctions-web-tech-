<script>
    import router from 'page';
    import Painting from "./Painting.svelte";
    import { paginate, LightPaginationNav } from 'svelte-paginate';

    export let paintingsList = [];


    $: items = paintingsList;
    let currentPage = 1;
    let pageSize = 4;
    $: paginatedItems = paginate( {items, pageSize, currentPage });


</script>

<main>
    {#if paintingsList.length === 0}
        <p>There are no items</p>
    {:else}
        <div class="flex flex-wrap mx-3 overflow-hidden">
            {#each paginatedItems as painting}
                <div on:click={() => router.redirect(`/paintings/${painting.id}`)}  class="my-3 px-10 w-full h-full overflow-hidden sm:w-full xl:w-1/2">
                    <div class="flex rounded-2xl border border-gray-100 sm:rounded-3xl shadow-sidebar">
                        <Painting painting={painting}/>
                    </div>

                </div>
            {/each}
        </div>

        <LightPaginationNav
                totalItems={items.length} pageSize={pageSize}
                currentPage={currentPage} limit={1}
                showStepOptions={true}
                on:setPage={(e) => currentPage = e.detail.page}/>
    {/if}
</main>