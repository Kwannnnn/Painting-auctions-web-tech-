<script>
    import HeaderComponent from "../components/HeaderComponent.svelte";
    import PageLayout from "../components/layout/PageLayout.svelte";
    import PaintingModal from "../components/PaintingModal.svelte";
    import {writable} from "svelte/store";

    let showModal;
    let toggleModal;
    export const currentUser = writable({});
    let paintings = [];

</script>

<PageLayout>
    <PaintingModal message="Hey" isPromo={true} {showModal} on:click={toggleModal} >

    </PaintingModal>

    <h1>Have a nice day</h1>

<!--    <div class="container max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 grid px-6 py-10">-->
    <div class="container max-w-7xl">
        <div class="grid grid-flow-row auto-rows-max gap-8">
            <div>
                <h2>Welcome back, {$currentUser.displayName}</h2>
            </div>

        </div>
    </div>
</PageLayout>
