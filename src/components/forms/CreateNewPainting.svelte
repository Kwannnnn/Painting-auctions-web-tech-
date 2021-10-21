<script>
    import router from "page";
    import isAdmin from "../../middleware/is-admin";

    let name;
    let artist;
    let year_of_origin;
    let current_price;
    let end_date;

    let result = null;

    //gives a 401(unauthorized)
    const handleSubmit = async () => {
        const res = await fetch('http://localhost:3000/paintings', {
            method: "POST",
            body: JSON.stringify({
                name : name,
                artist_name : artist,
                year_of_origin : year_of_origin,
                current_price : current_price,
                end_date : end_date
            })
        });
        const painting = await res.json();
        result = JSON.stringify(painting);

    }


</script>


    <div class="pt-10 px-10">
        <h1 class="text-gray-800 text-2xl"><strong>Add a new painting for auction</strong></h1>
    </div>
    <div class="p-10">
        <div class="mt-10 sm:mt-0">

            <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6 w-4/12">


                    <label for="paintingName" class="block text-sm font-medium text-gray-700">Painting
                        name</label>
                    <input type="text" required bind:value={name} name="paintingName" id="paintingName"
                           class="mt-1 py-2 px-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">

                    <label for="artistName" class="block text-sm font-medium text-gray-700">Artist name</label>
                    <input type="text" required bind:value={artist} name="artistName" id="artistName"
                           class="mt-1 py-2 px-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">

                    <label for="yearOfOrigin" class="block text-sm font-medium text-gray-700">Year of origin</label>
                    <input type="text" required bind:value={year_of_origin} name="yearOfOrigin" id="yearOfOrigin"
                           class="mt-1 py-2 px-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">

                    <label for="currentPrice" class="block text-sm font-medium text-gray-700">Initial
                        price</label>
                    <input type="text" required bind:value={current_price} name="currentPrice" id="currentPrice"
                           class="mt-1 py-2 px-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">

                    <label for="endDate" class="block text-sm font-medium text-gray-700">End of auction</label>
                    <input type="date" required bind:value={end_date} name="endDate" id="endDate"
                           class="mt-1 py-2 px-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
            </div>
        </div>

    </div>
    <div class="mx-4">
        <input type="button" value="Continue" on:click={handleSubmit}
               class="mx-7 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"/>
    </div>

