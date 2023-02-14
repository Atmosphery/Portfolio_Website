<script>
	import Header from "./components/Header.svelte";
	import Router from "svelte-spa-router";
	import { routes } from "./routes";
</script>

<main>
	<div class="app">
		<Header />
		<body class="text">
			<Router {routes} />
		</body>
	</div>
	<footer>yo mamma</footer>
</main>

<style>
	.app {
		margin: 50px 250px 50px 250px;
		padding-bottom: 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		background-color: #1e2122;
		border-radius: 15px;
	}

	.text {
		max-width: 80rem;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
