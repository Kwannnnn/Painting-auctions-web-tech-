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
            <div class="sm:self-center">
                <a href="/">
                    <img class="h-8 w-auto"
                         src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
                </a>

            </div>

            <!--items-->
            <div class="hidden sm:block sm:mr-auto">
                <div class="flex space-x-4">
                    <div>
                        <a href="/"
                           class="text-white inline w-full text-center px-3 mx-1 py-2 rounded-md text-sm font-medium tracking-wide text-xl hover:bg-purple-400"
                           aria-current="page">Home</a>
                        <a href="/admin"
                           class="text-white inline w-full text-center px-3 mx-1 py-2 rounded-md text-sm font-medium tracking-wide text-xl hover:bg-purple-400"
                           aria-current="page">Admin</a>
                    </div>

                </div>
            </div>

            <div class="">
                {#if $tokenStore.token}
                    <p class="text-white inline w-full text-center px-3 mx-1 py-2 rounded-md text-sm font-medium tracking-wide text-xl hover:bg-purple-400"

                       aria-current="page">{$currentUser.email_address}</p>
                    <a on:click={logout} href="/login"
                       class="text-white inline w-full text-center px-3 mx-1 py-2 rounded-md text-sm font-medium tracking-wide text-xl hover:bg-purple-400"
                       aria-current="page">Log out</a>
                {:else}
                    <a href="/login"
                       class="text-white inline w-full text-center px-3 mx-1 py-2 rounded-md text-sm font-medium tracking-wide text-xl hover:bg-purple-400"
                       aria-current="page">Log in</a>
                {/if}
            </div>
    </div>

    <!-- mobile menu -->
    <div class="{showMobileMenu} flex flex-col items-center space-y-1.5 p-3 sm:hidden">
        <div class="text-white inline w-full text-center px-3 mx-1 py-2 rounded-md text-sm font-medium tracking-wide text-xl hover:bg-purple-400">
            <a href="/">Home</a>
        </div>

        <div class="text-white inline w-full text-center px-3 mx-1 py-2 rounded-md text-sm font-medium tracking-wide text-xl hover:bg-purple-400">
            <a href="/admin">Admin</a>
        </div>
    </div>

    <!--    old mobile menu-->
    <!--    <div class="sm:hidden" id="mobile-menu">-->
    <!--        <div class="px-2 pt-2 pb-3 space-y-1">-->
    <!--            <a href="/" class="bg-gray-900 text-center text-white block px-3 py-2 rounded-md text-base font-medium"-->
    <!--               aria-current="page">Home</a>-->

    <!--            {#if $currentUser.isAdmin}-->
    <!--                <a href="/admin"-->
    <!--                   class="text-gray-300 text-center hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">-->
    <!--                    Admin</a>-->
    <!--            {/if}-->

    <!--        </div>-->
    <!--    </div>-->
</nav>