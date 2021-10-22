<script>
    import {createEventDispatcher} from 'svelte';
    import FormHeading from "./forms/FormHeading.svelte";
    import Button from "./button/Button.svelte";
    import {currentUser} from "../stores/currentUser";

    let dispatch = createEventDispatcher();

    export let painting;

    let amount;

    const handleSubmit = () => {
        const bid = {
            user_id: $currentUser.id,
            painting_id: painting.id,
            amount: amount
        };
        dispatch('addBid', bid);

        amount = undefined;
    }
</script>


<form on:submit|preventDefault={handleSubmit}>
    <div class="p-10">
        <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                        <FormHeading title="New bid">Enter the amount you want to bid (must be higher than current price)</FormHeading>
                    </div>
                </div>
                <div class="mt-5 md:mt-0 md:col-span-2">
                    <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">

                                <div class="col-span-6 sm:col-span-4">
                                    <label for="amount" class="block text-sm font-medium text-gray-700">Amount: </label>
                                    <input type="number" required bind:value={amount} name="amount"
                                           min="{painting.current_price}"
                                           autocomplete="nope" id="amount"
                                           class="mt-1 py-2 px-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-4">
        <Button>Place bid</Button>
    </div>
</form>