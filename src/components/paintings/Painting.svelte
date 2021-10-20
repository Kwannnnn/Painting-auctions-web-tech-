<script>
    export let data = {};
</script>

{#if data}
    <div>
        <p>{data.name}</p>
        <p>{data.artist}</p>
        <p>{data.year_of_origin}</p>
        <p>{data.current_price}</p>
        <p>{data.end_date}</p>
        <p>{data.is_sold}</p>
        <p>{data.list_of_bidders}</p>
    </div>
{/if}