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
<!--        <PaintingModal message="Hey" isPromo={true} {showModal} on:click={toggleModal}>-->
<!--&lt;!&ndash;                        pass paintings to Painting component&ndash;&gt;-->
<!--            <Painting/>-->
<!--        </PaintingModal>-->

<!--        <div class="ml-auto" on:click={toggleModal}>-->
<!--            <Button/>-->
<!--        </div>-->
<!--        <h1>Have a nice day</h1>-->

        <!--    <div class="container max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 grid px-6 py-10">-->
        <div class="container max-w-7xl">
            <div class="grid grid-flow-row auto-rows-max gap-8">
                <div>
                    <h2>Welcome back, {$currentUser.displayName}</h2>

                    <PaintingsList paintingsList={paintings}/>
                </div>

            </div>
        </div>
    {:catch error}
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
    {/await}
</PageLayout>



