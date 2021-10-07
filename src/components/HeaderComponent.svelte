<script>
import tokenStore from "../stores/token";
</script>

<header class="bg-gray-800 text-gray-100 text-2xl">
    <a href="/main">Home</a>
    <a href="/profile">Profile</a>

    {#if tokenStore}
        <a href="/login">LogIn</a>
    {:else }
        <a href="/login">LogOut</a>
    {/if}
</header>