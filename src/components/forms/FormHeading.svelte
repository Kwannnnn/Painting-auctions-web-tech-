<script>
    export let title;
</script>

{#if title}
    <h3 class="mb-4 text-lg font-semibold text-gray-600">{title}</h3>
{/if}
<p class="mt-1 text-sm text-gray-600">
    <slot />
</p>