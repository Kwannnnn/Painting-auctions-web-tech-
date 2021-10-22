<script>
    import {currentUser} from "../../stores/currentUser";
    import {createEventDispatcher} from 'svelte';
    import TrashIcon from "../../icons/TrashIcon.svelte";


    let dispatch = createEventDispatcher();

    const handleDelete = (id) => {
        dispatch("deleteBid", id);
    }

    export let bids;
</script>

<div class="mx-6 flex flex-col text-left">
    <div class=" overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block lg:min-w-xl sm:min-w-xs sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 rounded-l-lg">
                <table class="divide-y divide-gray-200 my-6 mx-4">
                    <thead class="bg-gray-100">
                    <tr>
                        <th scope="col"
                            class="px-10 py-3 text-left text-l font-medium text-gray-800 uppercase tracking-wide">Bid id
                        </th>
                        <th scope="col"
                            class="px-10 py-3 text-left text-l font-medium text-gray-800 uppercase tracking-wide">User
                            id
                        </th>
                        <th scope="col"
                            class="px-10 py-3 text-left text-l font-medium text-gray-800 uppercase tracking-wide">
                            Painting id
                        </th>
                        <th scope="col"
                            class="px-10 py-3 text-left text-l font-medium text-gray-800 uppercase tracking-wide">Amount
                        </th>
                        {#if $currentUser.isAdmin}
                            <th scope="col"
                                class="px-10 py-3 text-left text-l font-medium text-gray-800 uppercase tracking-wide">
                                Delete Bid
                            </th>
                        {/if}
                    </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                    {#each bids as bid}
                        <tr class="hover:bg-gray-100">
                            <td class="px-10 py-2 whitespace-nowrap">{bid.id}</td>
                            <td class="px-10 py-2 whitespace-nowrap">{bid.user_id}</td>
                            <td class="px-10 py-2 whitespace-nowrap">{bid.painting_id}</td>
                            <td class="px-10 py-2 whitespace-nowrap text-indigo-900"><i><b>${bid.amount}</b></i></td>
                            {#if $currentUser.isAdmin}
                                <td class="px-10 py-2 whitespace-nowrap">
                                    <TrashIcon on:click={() => handleDelete(bid.id)}/>
                                </td>

                            {/if}
                            </tr>
                    {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>