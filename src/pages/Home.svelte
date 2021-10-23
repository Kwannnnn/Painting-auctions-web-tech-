<script>
    import PageLayout from "../components/layout/PageLayout.svelte";
    import PaintingsList from "../components/paintings/PaintingsList.svelte";
    import SearchBar from "../components/SearchBar.svelte";
    import Button from "../components/button/Button.svelte";


    let paintings = [];
    let searchTerm;

    const getPaintings = async () => {
        const resp = await fetch('http://localhost:3000/paintings');

        if (resp.ok) {
            paintings = await resp.json();
            return paintings;
        } else {
            throw new Error(await resp.text());
        }
    }


    const search = async () => {
        await getPaintings();
        const trimmedInput = searchTerm.trim().replace('/ /g', '').toLowerCase();
        paintings = paintings.filter((painting) => painting.name.trim().replace('/ /g', '').toLowerCase().includes(trimmedInput));
    }

    let availableFilter;
    let startPriceFilter;
    let endDateFilter;

    const filterPaintings = async () => {
        await getPaintings();

        if (startPriceFilter) {
            paintings = paintings.filter(painting => painting.current_price >= startPriceFilter);
        }

        if (endDateFilter) {
            paintings = paintings.filter(painting => new Date(painting.end_date) >= new Date(endDateFilter));
        }

        if (availableFilter === true) {
            paintings = paintings.filter(painting => painting.is_sold !== availableFilter);
        }
    }
    const clearFilters = async () => {
        availableFilter = undefined;
        endDateFilter = undefined;
        startPriceFilter = undefined;

        await getPaintings();
    };
</script>


<PageLayout>
    {#await getPaintings()}
        <p>Loading paintings...</p>
    {:then p}
        <div class="flex flex-row justify-center items-center space-x-5">
            <SearchBar bind:searchTerm={searchTerm} on:search={search}/>

            <div>
                <input id="available_checkbox" type="checkbox" bind:checked={availableFilter} on:change={filterPaintings}>
                <label for="available_checkbox">Available</label>
            </div>

            <div>
                <label for="start_price_checkbox">Starting price</label>
                <input id="start_price_checkbox" type="number" class="w-20 border-2 rounded-lg" bind:value={startPriceFilter} on:change={filterPaintings}>
            </div>

            <div>
                <label for="end_date">Available until</label>
                <input id="end_date" type="date" class="border-2 rounded-lg" bind:value={endDateFilter} on:change={filterPaintings}>
            </div>

            <Button on:click={clearFilters}>
                Clear all filters
            </Button>
        </div>

        <div class="container w-full mx-auto">
            <PaintingsList bind:paintingsList={paintings}/>
        </div>
    {:catch error}
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
    {/await}
</PageLayout>



