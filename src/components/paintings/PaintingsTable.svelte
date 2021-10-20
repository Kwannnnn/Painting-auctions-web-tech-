<script>
    import {createEventDispatcher, onMount} from 'svelte';
    import TrashIcon from "../../icons/TrashIcon.svelte";
    import EditIcon from "../../icons/EditIcon.svelte";

    export let paintings = [];

    let dispatch = createEventDispatcher();

    const handleDelete = (id) => {
        dispatch("deletePainting", id);
    }

    const handleUpdate = (painting) => {
        dispatch("updatePainting", painting);
    }

</script>

<table class="border-collapse border border-gray-800">
    <thead>
    <tr class="bg-gray-300">
        <th class="text-left border border-gray-800">Painting id</th>
        <th class="text-left border border-gray-800">Name</th>
        <th class="text-left border border-gray-800">Artist</th>
        <th class="text-left border border-gray-800">Year of origin</th>
        <th class="text-left border border-gray-800">Current price</th>
        <th class="text-left border border-gray-800">End date</th>
        <th class="text-left border border-gray-800">isSold</th>
        <th class="text-left border border-gray-800">Bidder ids</th>
        <th class="text-left border border-gray-800">Delete Painting</th>
        <th class="text-left border border-gray-800">Edit Painting</th>

    </tr>
    </thead>
    <tbody>
    {#each paintings as painting}
        <tr class="hover:bg-yellow-50">
            <td>{painting.id}</td>
            <td>{painting.name}</td>
            <td>{painting.artist}</td>
            <td>{painting.year_of_origin}</td>
            <td>{painting.current_price}</td>
            <td>{painting.end_date}</td>
            <td>{painting.is_sold}</td>
            <td>{painting.list_of_bidders}</td>
            <td class="text-left border border-gray-800">
                <TrashIcon on:click={handleDelete(painting.id)}/>
            </td>
            <td class="text-left border border-gray-800">
                <EditIcon on:click={handleUpdate(painting)}/>
            </td>
        </tr>
    {/each}
    </tbody>
</table>

