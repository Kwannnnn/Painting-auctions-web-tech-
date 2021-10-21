<script>
    import HeaderComponent from "../components/HeaderComponent.svelte";
    import PageLayout from "../components/layout/PageLayout.svelte";
    import {writable} from "svelte/store";
    import {onMount} from "svelte";
    import Painting from "./Painting.svelte";
    import Button from "../components/button/Button.svelte";
    import {currentUser} from "../stores/currentUser";
    import PaintingsList from "../components/paintings/PaintingsList.svelte";
    import CreateNewPainting from "../components/forms/CreateNewPainting.svelte";

    let paintings = [];
    const getPaintings = async () => {
        const resp = await fetch('http://localhost:3000/paintings');

        if (resp.ok) {
            return await resp.json();
        } else {
            throw new Error(await resp.text());
        }
    }

    let showModal = false;
    let btnValue = "Add painting";
    const toggleModal = () => {
        showModal = !showModal;
        if(showModal){
            btnValue = "Close modal";
        }else{
            btnValue = "Add painting";
        }
    }
</script>
<PageLayout>
    {#if $currentUser.isAdmin}
    <div class="text-right mx-8 my-4">
        <input type="button" value={btnValue} on:click={toggleModal}
               class="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-800 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-700"/>
    </div>
    {/if}

    {#if showModal}
        <div>
            <CreateNewPainting/>
        </div>

    {:else}

    {#await getPaintings()}
        <p>Loading paintings...</p>
    {:then paintings}
        <div class="container max-w-7xl">
            <div class="grid grid-flow-row auto-rows-max gap-8">
                <div>
                    <h2>Welcome back, {$currentUser.email_address}</h2>

                    <PaintingsList paintingsList={paintings}/>
                </div>

            </div>
        </div>
    {:catch error}
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
    {/await}
    {/if}
</PageLayout>



