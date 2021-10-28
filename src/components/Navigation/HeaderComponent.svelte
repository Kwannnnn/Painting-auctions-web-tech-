<script>
    import tokenStore from "../../stores/token";
    import router from "page";
    import {currentUser} from "../../stores/currentUser";

    let uid = $currentUser.id;

    function logout() {
        $tokenStore.token = undefined;
        router.redirect("/");
    }

    let showMobileMenu = 'hidden';

    let toggleMobileMenu = () => {
        showMobileMenu = showMobileMenu === 'hidden' ? '' : 'hidden';
    };
</script>


<nav class="bg-gray-800 flex flex-col">
    <div class="w-full px-2 px-5 relative flex flex-row items-center justify-between h-16">
            <!-- Mobile menu button -->
            <div class="sm:hidden flex items-center">
                <button class="outline-none mobile-menu-button" on:click={toggleMobileMenu}>
                    <svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
                         x-show="!showMenu"
                         fill="none"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         stroke-width="2"
                         viewBox="0 0 24 24"
                         stroke="currentColor">

                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            <!--logo-->
            <div class="sm:self-center mr-4">
                <a href="/">
                    <img class="h-10 w-auto"
                         src="/logo.png" alt="PaintBids">
                </a>

            </div>

            <!--items-->
            <div class="hidden sm:block sm:mr-auto">
                <div class="flex space-x-4">
                    <div>
                        <a href="/"
                           class="text-white inline w-full text-center px-3 mx-1 py-2 rounded-md text-sm font-medium tracking-wide text-xl hover:bg-purple-900"
                           aria-current="page">Home</a>

                        {#if $currentUser.isAdmin}
                            <a href="/admin"
                               class="text-white inline w-full text-center px-3 mx-1 py-2 rounded-md text-sm font-medium tracking-wide text-xl hover:bg-purple-400"
                               aria-current="page">Admin</a>
                        {/if}
                    </div>

                </div>
            </div>

            <div>
                {#if $tokenStore.token}
                    <p class="text-white inline w-full text-center px-3 mx-1 py-2 rounded-md text-sm font-medium tracking-wide text-xl hover:bg-purple-900"

                       aria-current="page">{$currentUser.email_address}</p>
                    <a on:click={logout} href="/login"
                       class="text-white inline w-full text-center px-3 mx-1 py-2 rounded-md text-sm font-medium tracking-wide text-xl hover:bg-purple-900"
                       aria-current="page">Log out</a>
                {:else}
                    <a href="/login"
                       class="text-white inline w-full text-center px-3 mx-1 py-2 rounded-md text-sm font-medium tracking-wide text-xl hover:bg-purple-900"
                       aria-current="page">Log in</a>
                {/if}
            </div>
    </div>

    <!-- mobile menu -->
    <div class="{showMobileMenu} flex flex-col items-center space-y-1.5 p-3 sm:hidden">
        <div class="text-white inline w-full text-center px-3 mx-1 py-2 rounded-md text-sm font-medium tracking-wide text-xl hover:bg-purple-400">
            <a href="/">Home</a>
        </div>

        {#if $currentUser.isAdmin}
            <div class="text-white inline w-full text-center px-3 mx-1 py-2 rounded-md text-sm font-medium tracking-wide text-xl hover:bg-purple-400">
                <a href="/admin">Admin</a>
            </div>
        {/if}

    </div>
</nav>