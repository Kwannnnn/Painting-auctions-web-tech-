<script>
    import {currentUser} from "../../stores/currentUser";
    import {createEventDispatcher, onMount} from 'svelte';
    import TrashIcon from "../../icons/TrashIcon.svelte";

    let dispatch = createEventDispatcher();

    const handleDelete = (id) => {
        dispatch("deleteBid", id);
    }

    export let bids;
</script>

<table class="border-collapse border border-gray-800">
    <thead>
    <tr class="bg-gray-300">
        <th class="text-left border border-gray-800">Bid id</th>
        <th class="text-left border border-gray-800">User id</th>
        <th class="text-left border border-gray-800">Painting id</th>
        <th class="text-left border border-gray-800">Amount</th>
        {#if $currentUser.isAdmin}
            <th class="text-left border border-gray-800">Delete Bid</th>
        {/if}
    </tr>
    </thead>
    <tbody>
    {#each bids as bid}
        <tr class="hover:bg-yellow-50">
            <td>{bid.id}</td>
            <td>{bid.user_id}</td>
            <td>{bid.painting_id}</td>
            <td>{bid.amount}</td>
            {#if $currentUser.isAdmin}
                <td class="text-left border border-gray-800">
                    <TrashIcon on:click={handleDelete(bid.id)}/>
                </td>
            {/if}
        </tr>
    {/each}
    </tbody>
</table>