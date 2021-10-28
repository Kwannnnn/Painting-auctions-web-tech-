<script>
    export let showModal = false;
    export let isPromo = false;
</script>

{#if showModal}
    <div class="w-screen z-20 h-screen absolute top-0 left-0 flex items-center justify-center bg-gray-100 bg-opacity-60 xl:translate-x-0" style="backdrop-filter: blur(10px);" class:promo={isPromo} on:click|self>
        <div class="container max-w-3xl mx-auto bg-white shadow-calendar rounded-3xl">
            <button class="cursor-pointer" on:click={() => showModal = !showModal}>&#10006</button>

            <slot></slot>
        </div>
    </div>
{/if}
