<script>
    import HeaderComponent from "../Navigation/HeaderComponent.svelte";
</script>



<div class="bg-bgColors bg-cover text-gray-800 overflow-y-auto ">
    <HeaderComponent/>


        <div class="w-screen h-screen bg-no-repeat bg-cover"
            style="background-image: url('/background.jpg');">
            <div class="flex flex-col h-screen w-screen overflow-x-auto items-center">


            <slot/>
            </div>
        </div>



</div>



