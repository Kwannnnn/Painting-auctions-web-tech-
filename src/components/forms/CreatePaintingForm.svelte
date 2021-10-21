<script>
    import { createEventDispatcher } from 'svelte';
    import FormHeading from "../FormHeading.svelte";
    import Button from "../button/Button.svelte";

    let dispatch = createEventDispatcher();


    let name;
    let artist;
    let year_of_origin;
    let end_date;
    let current_price;

    const handleSubmit = () => {
        const painting = {
            name: name,
            artist: artist,
            year_of_origin: year_of_origin,
            current_price: current_price,
            end_date: end_date,
            is_sold: false,
            list_of_bidders: [],
            img_name: "",
        };
        dispatch('addPainting', painting);

        name = undefined;
        artist = undefined;
        year_of_origin = undefined;
        end_date = undefined;
        current_price = undefined;
    }
</script>


<form on:submit|preventDefault={handleSubmit}>
    <div class="p-10">
        <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                        <FormHeading title="Painting Information">Information about the new painting</FormHeading>
                    </div>
                </div>
                <div class="mt-5 md:mt-0 md:col-span-2">
                    <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="name" class="block text-sm font-medium text-gray-700">Painting name</label>
                                    <input type="text" required bind:value={name} name="name" autocomplete="no" id="name" class="mt-1 py-2 px-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="artist" class="block text-sm font-medium text-gray-700">Artist name</label>
                                    <input type="text" required bind:value={artist} name="artist" autocomplete="no" id="artist" class="mt-1 py-2 px-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>

                                <div class="col-span-6 sm:col-span-4">
                                    <label for="year_of_origin" class="block text-sm font-medium text-gray-700">Year of origin</label>
                                    <input type="number" required bind:value={year_of_origin} name="year_of_origin" autocomplete="nope" id="year_of_origin" class="mt-1 py-2 px-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>

                                <div class="col-span-6 sm:col-span-4">
                                    <label for="current_price" class="block text-sm font-medium text-gray-700">Starting price (€)</label>
                                    <input type="number" min="0" required bind:value={current_price} name="current_price" autocomplete="nope" id="current_price" class="mt-1 py-2 px-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="end_date" class="block text-sm font-medium text-gray-700">End date</label>
                                    <input type="date" required bind:value={end_date} name="end_date" autocomplete="no" id="end_date" class="mt-1 py-2 px-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-4 ">
        <Button>Create</Button>
    </div>
</form>