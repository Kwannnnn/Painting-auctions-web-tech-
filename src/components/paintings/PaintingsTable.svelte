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

<div class="flex flex-col text-left">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block lg:min-w-xl sm:min-w-xs sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 rounded-l-lg">
                <table class="divide-y divide-gray-200 my-6 mx-4">
                    <thead class="bg-gray-100">
                    <tr>
                        <th></th>
                        <th scope="col" class="px-6 py-3 text-left text-l font-medium text-gray-800 uppercase tracking-wide">Name</th>
                        <th scope="col" class="px-6 py-3 text-left text-l font-medium text-gray-800 uppercase tracking-wide">Artist</th>
                        <th scope="col" class="px-6 py-3 text-center text-l font-medium text-gray-800 uppercase tracking-wide">Year of origin</th>
                        <th scope="col" class="px-6 py-3 text-center text-l font-medium text-gray-800 uppercase tracking-wide">Current price</th>
                        <th scope="col" class="px-6 py-3 text-left text-l font-medium text-gray-800 uppercase tracking-wide">End date</th>
                        <th scope="col" class="px-6 py-3 text-left text-l font-medium text-gray-800 uppercase tracking-wide">isSold</th>
                        <th scope="col" class="px-6 py-3 text-left   text-l font-medium text-gray-800 uppercase tracking-wide">Bidder ids</th>
                        <th scope="col" class="relative px-4 py-3">-</th>
                        <th scope="col" class="relative px-4 py-3">-</th>
                    </tr>
                    </thead>

                    <tbody class="bg-white divide-y divide-gray-200">
                    {#each paintings as painting, i}
                        <tr class="hover:bg-gray-100">
                       <!-- showing an image of the painting -->
                            <div class="px-6 py-2 flex items-center">
                                <div class="flex-shrink-0 h-10 w-10">
                                    <img class="h-10 w-10 rounded-full"
                                         src="http://localhost:3000/{painting.img_name}.jpg" alt="">
                                </div>
                            </div>
                            <td class="px-6 py-2 whitespace-nowrap">{painting.id}. <strong>{painting.name}</strong> </td>
                            <td class="px-6 py-2 whitespace-nowrap">{painting.artist}</td>
                            <td class="px-6 py-2 whitespace-nowrap text-center">{painting.year_of_origin}</td>
                            <td class="px-6 py-2 whitespace-nowrap text-center">{painting.current_price}</td>
                            <td class="px-6 py-2 whitespace-nowrap">{painting.end_date}</td>
                            <div class="px-6 py-2 whitespace-nowrap">
                     <!--            Change color based on if the bid is sold-->
                                {#if !painting.is_sold}
                                    <td class="inline-flex bg-green-100 text-green-900 text-xl font-semibold rounded-full" >Still available</td>
                                {:else}
                                    <td class="inline-flex bg-red-100 text-red-900 text-xl font-semibold rounded-full">Not available</td>
                                {/if}
                            </div>
                     <!--Action buttons to edit and delete a painting-->
                            <td class="px-6 py-2 whitespace-nowrap">{painting.list_of_bidders}</td>
                            <td class="px-2 py-2 text-left border border-gray-800 whitespace-nowrap hover:bg-red-500">
                                <TrashIcon on:click={handleDelete(painting.id)} class="whitespace-nowrap "/>
                            </td>
                            <td class="px-2 py-2 text-left border border-gray-800 whitespace-nowrap hover:bg-indigo-500">
                                <EditIcon on:click={handleUpdate(painting)} class="whitespace-nowrap"/>
                            </td>
                        </tr>
                    {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

