<script>
    export let data = {};
</script>

<!--show info of the painting-->


{#if data}
    <div class="flex flex-wrap -mx-1 overflow-hidden my-4">
        <div class="my-3 px-3 w-1/2 h-full overflow-hidden">
            <img src="http://localhost:3000/{data.img_name}.jpg" alt={data.name}
                 class="px-4 relative w-min h-auto inset-0 object-cover"/>
        </div>
        <form class="my-3 px-3 w-1/2 overflow-hidden">
            <div class="flex ">
                <h1 class="flex-auto text-2xl font-semibold">{data.name} ({data.year_of_origin})</h1>
                <div class="text-2xl font-semibold text-gray-500 px-8 mx-9">${data.current_price}</div>
            </div>
            <h1 class="w-full flex-none text-xl font-medium text-gray-800 mt-2">{data.artist}</h1>

<!--            Change color based on if the bid is sold-->
            {#if !data.is_sold}
                <p class="text-green-900 text-xl">Still available!</p>
            {:else}
                <p class="text-red-900 text-xl ">Not available!</p>
            {/if}

            <p class="text-l"><br/>You can bid till: {data.end_date}</p>
            <div class="flex space-x-3 mb-4 text-sm font-medium">

                <div class="flex-auto flex space-x-3">
                    <button class="w-1/3 h-2/3 flex items-center justify-center rounded-md bg-black text-white text-xl my-2" type="submit">
                        Bid</button>
                </div>

            </div>
            <div>
                <p><br/> Bidders: {data.list_of_bidders}</p>
            </div>

        </form>
    </div>
{/if}