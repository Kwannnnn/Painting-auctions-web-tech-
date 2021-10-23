<script>
    import HeaderComponent from "../Navigation/HeaderComponent.svelte";
</script>

<div class="bg-bgColors bg-cover text-gray-800 overflow-y-auto ">
    <HeaderComponent/>
    <div class="flex flex-col h-screen w-screen overflow-x-auto items-center bg-white bg-opacity-60 saturate-200"
         style="backdrop-filter: blur(10px);">
        <slot/>

    </div>
</div>