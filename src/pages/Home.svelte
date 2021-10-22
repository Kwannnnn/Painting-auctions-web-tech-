<script>
    import PageLayout from "../components/layout/PageLayout.svelte";
    import {currentUser} from "../stores/currentUser";
    import PaintingsList from "../components/paintings/PaintingsList.svelte";
    import SearchBar from "../components/SearchBar.svelte";


    let paintings = [];
    const getPaintings = async () => {
        const resp = await fetch('http://localhost:3000/paintings');

        if (resp.ok) {
            return await resp.json();
        } else {
            throw new Error(await resp.text());
        }
    }

</script>


<PageLayout>
    {#await getPaintings()}
        <p>Loading paintings...</p>
    {:then paintings}
        <SearchBar>

        </SearchBar>

        <div class="container w-full mx-auto">
            <PaintingsList paintingsList={paintings}/>
        </div>
    {:catch error}
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
    {/await}
</PageLayout>



