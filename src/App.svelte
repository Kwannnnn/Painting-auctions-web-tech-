<script>
    import router from "page";
    import isLoggedIn from "./middleware/is-logged-in";

    import LogIn from "./pages/LogIn.svelte";
    import Main from "./pages/Main.svelte";
    import Profile from "./pages/Profile.svelte";
    import Item from "./pages/Item.svelte";

    let page;
    let params;

    router('/login', (ctx) => page = LogIn);
    router('/main', (ctx) => page = Main);
    router('/profile/:id', (ctx) => {
        params = ctx.params;
        page = Profile
    });
    router('/item/:id', (ctx) => {
        params = ctx.params;
        page = Item
    });

    router.start();
</script>

<svelte:component this="{page}" {params}/>


<main>

</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
