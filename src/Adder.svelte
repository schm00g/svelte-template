<script>
	let a = 1;
	let b = 2;
</script>

<main>
	<h2>Truly reactive adder</h2>
	<input type="number" min="0" bind:value={a}>
	<input type="number" min="0" bind:value={b}>

	<p>{a} + {b} = {a + b}</p>

	<div class="potassium-source">
		{#each Array(a + b) as _, index}
			<p key={index}>🍌</p>
		{/each}
	</div>

	{#if (a + b) <= 0}
		<p>🙈 All gone!</p>
	{/if}
</main>

<style>
    h2 {
        padding: 1%;
        color: #ff400096;
    }

	.potassium-source {
		margin: 5% 15% 0 15%;
		display: grid;
		grid-template-columns: repeat(15, 1fr);
		gap: 2px;
	}
</style>
