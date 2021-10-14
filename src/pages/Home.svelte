<script>
    import HeaderComponent from "../components/HeaderComponent.svelte";
    import PageLayout from "../components/layout/PageLayout.svelte";
    import PaintingModal from "../components/PaintingModal.svelte";
    import {writable} from "svelte/store";
    import {onMount} from "svelte";
    import Painting from "./Painting.svelte";
    import Button from "../components/button/Button.svelte";
    import {currentUser} from "../stores/currentUser";
    import PaintingsList from "../components/PaintingsList.svelte";

    let showModal;

    let paintings = [];

    // onMount(async () => {
    //     paintings = getPaintings()
    // })

    const toggleModal = () => {
        showModal = !showModal;
    }

    const getPaintings = async () => {
        const resp = await fetch('http://localhost:3000/paintings');

        if (resp.ok) {
            return await resp.json();
        } else {
            throw new Error(await resp.text());

        }
    }

</script>
<PageLayout>

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
</PageLayout>



