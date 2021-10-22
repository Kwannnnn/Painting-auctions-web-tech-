<script>
import HeaderComponent from "../Navigation/HeaderComponent.svelte";
</script>

<div class="bg-bgColors bg-cover text-gray-800">
    <HeaderComponent/>
    <div class="flex h-screen bg-white bg-opacity-60 saturate-200" style="backdrop-filter: blur(10px);">
        <main class="relative flex flex-col flex-1 w-full h-full overflow-y-auto">
            <slot />
        </main>
    </div>
</div>