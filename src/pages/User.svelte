<script>
    import PageLayout from "../components/layout/PageLayout.svelte"
    import UserIcon from "../icons/UserIcon.svelte";
    import {onMount} from 'svelte';

    export let params;
    let uid;

    onMount(() => {
       uid = params.id;
    });



</script>

<PageLayout>
    <h1>Welcome. This is your page: </h1>
    <div class="flex justify-center">
        <div class="w-1/12">
            <UserIcon/>
        </div>
    </div>
    <p class="flex justify-center">Username: </p>
    <p class="flex justify-center">E-mail address: </p>

</PageLayout>
