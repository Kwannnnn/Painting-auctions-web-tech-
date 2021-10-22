<script>
    import {onMount} from "svelte";
    import PaintingsTable from "../components/paintings/PaintingsTable.svelte";
    import tokenStore from "../stores/token";
    import NewPaintingModal from "../components/Modal.svelte";
    import CreatePaintingForm from "../components/forms/CreatePaintingForm.svelte";
    import Button from "../components/button/Button.svelte";
    import UpdatePaintingForm from "../components/forms/UpdatePaintingForm.svelte";
    import PageLayout from "../components/layout/PageLayout.svelte";

    let paintings;
    let bearer = `Bearer ${$tokenStore.token}`;
    let showAddPaintingModal = false;
    let showUpdatePaintingModal = false;

    onMount(async () => {
        paintings = await getAllPaintings();
        console.log(bearer);
    });

    const reloadTable = async () => {
        paintings = await getAllPaintings();
    }

    const getAllPaintings = async () => {
        const resp = await fetch(`http://localhost:3000/paintings`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        if (resp.ok) {
            const result = await resp.json();
            return result;
        }
    }

    const deletePainting = async (e) => {
        const id = e.detail;

        if (id) {
            const resp = await fetch(`http://localhost:3000/paintings/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': bearer
                }
            });

            if (resp.ok) {
                alert("delete successful")
                await reloadTable();
            } else {
                throw new Error(await resp.text());
            }
        }
    }

    const toggleAddPaintingModal = () => {
        showAddPaintingModal = !showAddPaintingModal;
    }

    const toggleUpdatePaintingModal = () => {
        showUpdatePaintingModal = !showUpdatePaintingModal;
    }


    const addPainting = async (data) => {
        const painting = data.detail;

        const response = await fetch('http://localhost:3000/paintings', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': bearer
            },
            body: JSON.stringify({
                name: painting.name,
                artist: painting.artist,
                year_of_origin: painting.year_of_origin,
                current_price: painting.current_price,
                end_date: painting.end_date,
                is_sold: painting.is_sold,
                list_of_bidders: painting.list_of_bidders,
                img_name: painting.img_name,
            })
        });

        if (response.status === 201) {
            alert("Painting successfully added");
        } else {
            alert("Failed to add painting \n" + response.statusText);
        }

        await reloadTable();
        toggleAddPaintingModal();
    }

    const updatePainting = async (data) => {
        const painting = data.detail;

        const response = await fetch(`http://localhost:3000/paintings/${painting.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': bearer
            },
            body: JSON.stringify({
                id: painting.id,
                name: painting.name,
                artist: painting.artist,
                year_of_origin: painting.year_of_origin,
                current_price: painting.current_price,
                end_date: painting.end_date,
                is_sold: painting.is_sold,
                list_of_bidders: painting.list_of_bidders,
                img_name: painting.img_name
            })
        });

        if (response.ok) {
            alert("Painting successfully updated")
        } else {
            alert("Failed to update painting \n" + response.statusText);
        }

        await reloadTable();
        toggleUpdatePaintingModal();
    }

    let modalData;
</script>

<PageLayout>
    {#await getAllPaintings()}
{:then a}
    <PaintingsTable bind:paintings={paintings}
                    on:deletePainting={(data) => deletePainting(data)}
                    on:updatePainting={(data) => {
                        modalData = data.detail;
                       toggleUpdatePaintingModal();
                    }}/>

    <NewPaintingModal isPromo={true} bind:showModal={showAddPaintingModal} on:click={toggleAddPaintingModal}>
        <CreatePaintingForm on:addPainting={(data) => addPainting(data)}/>
    </NewPaintingModal>

    <NewPaintingModal isPromo={true} bind:showModal={showUpdatePaintingModal} on:click={toggleUpdatePaintingModal}>
        <UpdatePaintingForm bind:painting={modalData} on:updatePainting={(data) => updatePainting(data)}/>
    </NewPaintingModal>

    <Button on:click={toggleAddPaintingModal}>
        Add painting
    </Button>
{:catch error}
    <h1>Something went wrong</h1>
    <p>{error.message}</p>
{/await}

</PageLayout>
