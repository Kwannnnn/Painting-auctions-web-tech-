<script>
import tokenStore from "../stores/token";
import router from "page";

function logout() {
    $tokenStore.token = undefined;
    router.redirect("/login");
}
</script>

<header class="flex justify-center bg-purple-700 opacity-80 text-gray-100 text-2xl p-1">

    <a href="/" class="no-underline text-current cursor-pointer m-1">Home</a>

    {#if $tokenStore.token}
        <a href="" class="no-underline text-current cursor-pointer m-1">Profile</a>
        <a on:click={logout} class="no-underline text-current cursor-pointer m-1 justify-self-end">Logout</a>
    {:else }
        <a href="/login" class="no-underline text-current cursor-pointer m-1 justify-self-end">Login</a>
    {/if}
</header>