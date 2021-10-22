<script>
    export let painting;

</script>

<!--show info of the painting-->

{#if painting}

    <div class="flex flex-col justify-between md:flex-row mx-1 my-4 w-full mx-auto px-6">
        <div class="my-3 px-3 w-2/5 overflow-hidden">
            <img src="http://localhost:3000/{painting.img_name}.jpg" alt={painting.name}
                 class="px-4 relative w-full h-full inset-0 object-cover"/>
        </div>

        <div class="flex flex-col my-3 px-3 w-1/2 overflow-hidden ">
            <h1 class="text-2xl font-semibold w-full">{painting.name} ({painting.year_of_origin})</h1>
            <h1 class="w-full flex-none text-xl font-medium text-gray-800 inline">{painting.artist}</h1>

            <div class="mt-4 space-y-1">


                <div>
                    <h1 class="w-full flex-none text-xl font-medium text-gray-800 mt-2 mb-2 inline">Status: </h1>
                    {#if !painting.is_sold}
                        <p class="text-green-900 text-xl inline">Available</p>
                    {:else}
                        <p class="text-red-900 text-xl inline">SOLD!</p>
                    {/if}
                </div>

                <div>
                    <h1 class="w-full flex-none text-xl font-medium text-gray-800 mt-2 mb-2 inline">Bidders: </h1>
                    <h2 class="inline">{painting.list_of_bidders}</h2>
                </div>

                <div>
                    <h1 class="w-full flex-none text-xl font-medium text-gray-800 mt-2 mb-2 inline">You can bid till:</h1>
                    <h2 class="inline">{painting.end_date}</h2>
                </div>
            </div>
            <h2 class="text-2xl font-semibold text-gray-500 text-right mt-auto">${painting.current_price}</h2>
        </div>
    </div>
{/if}