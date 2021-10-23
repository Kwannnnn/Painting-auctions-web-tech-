<script>
    import {createEventDispatcher} from "svelte";
    import SearchIcon from "../icons/SearchIcon.svelte";

    export let searchTerm;

    let dispatch = createEventDispatcher();

    const handleSubmit = () => {
        dispatch('search', searchTerm);
    };
</script>

<form class="pt-2 relative mx-auto text-gray-600" on:submit|preventDefault={handleSubmit}>
    <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none border-2"
           type="search" name="search" placeholder="Search for a painting" bind:value={searchTerm}>
    <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
        <SearchIcon/>
    </button>
</form>