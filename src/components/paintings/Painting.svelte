<script>
    export let painting;

</script>

<!--show info of the painting-->

{#if painting}

    <div class="flex flex-wrap -mx-1 my-4">
        <div class="my-3 px-3 overflow-hidden">
            <img src="http://localhost:3000/{painting.img_name}.jpg" alt={painting.name}
                 class="px-4 relative w-min h-auto inset-0 object-cover"/>
        </div>

        <div class="my-3 px-3 w-1/2 overflow-hidden ">
            <div class="my-3 px-3 w-1/2 overflow-hidden">
                <div class="flex ">
                    <h1 class="flex-auto text-2xl font-semibold">{painting.name} ({painting.year_of_origin})</h1>
                    <div class="text-2xl font-semibold text-gray-500 px-8 mx-9">${painting.current_price}</div>
                </div>

                <h1 class="w-full flex-none text-xl font-medium text-gray-800 mt-2 inline">Artist: </h1>
                <h2 class="inline">{painting.artist}</h2>

                <br/>

                <h1 class="w-full flex-none text-xl font-medium text-gray-800 mt-2 mb-2 inline">Year of origin: </h1>
                <h2 class="inline ">{painting.year_of_origin}</h2>

                <br/>
                <h1 class="w-full flex-none text-xl font-medium text-gray-800 mt-2">{painting.artist}</h1>


                <h1 class="w-full flex-none text-xl font-medium text-gray-800 mt-2 mb-2 inline">Status: </h1>
                {#if !painting.is_sold}
                    <p class="text-green-900 text-xl inline">Available</p>
                {:else}
                    <p class="text-red-900 text-xl inline">SOLD!</p>
                {/if}

                <br/>
                <p><br/> Bidders: {painting.list_of_bidders}</p>

                <p class="text-xl"><br/>You can bid till: {painting.end_date}</p>
            </div>
        </div>
    </div>
{/if}