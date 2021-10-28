<script>
    import router from "page";

    import LogIn from "./pages/LogIn.svelte";
    import Home from "./pages/Home.svelte";
    import Admin from "./pages/Admin.svelte";
    import Painting from "./pages/Painting.svelte";
    import SignUp from "./pages/SignUp.svelte";

    let page;
    let params;

    router('/login', () => page = LogIn);
    router('/signup', () => page = SignUp);
    router('/', () => page = Home);
    router('/admin', () => page = Admin);
    router('/paintings/:id', (ctx) => {
        params = ctx.params;
        page = Painting;
    });

    router.start();
</script>

<svelte:component this="{page}" {params}/>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
