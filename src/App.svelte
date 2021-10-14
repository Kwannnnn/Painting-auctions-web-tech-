<script>
    import router from "page";
    import isLoggedIn from "./middleware/is-logged-in";

    import LogIn from "./pages/LogIn.svelte";
    import Home from "./pages/Home.svelte";
    import User from "./pages/User.svelte";
    import Painting from "./pages/Painting.svelte";
    import SignUp from "./pages/SignUp.svelte";

    let page;
    let params;

    router('/login', (ctx) => page = LogIn);
    router('/signup', (ctx) => page = SignUp);
    router('/', (ctx) => page = Home);
    router('/users/:id', isLoggedIn, (ctx) => {
        params = ctx.params;
        page = User
    });
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
