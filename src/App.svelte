<script>
	import Adder from './Adder.svelte';
	import Marquee from './Marquee.svelte';
	export let greeting;
</script>

<main>
	<h1>{greeting} world!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<Adder/>

	<div class="footer">
		<Marquee/>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.footer {
		background-color: aliceblue;
		position: fixed;
		width: 100%;
		bottom: 0.5%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
