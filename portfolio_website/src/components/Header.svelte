<script>
	import Router, { link } from "svelte-spa-router";
	import { onMount } from 'svelte';

	let src = "images/";
    let url = window.location.pathname;
	onMount(() => url = window.location.pathname);
	console.log(url);
</script>

<header>
	<div class="header-name">
		<a href="/" style="text-decoration:none">
			<h1 class="header-title">Welcome to Alec Beccaria's Website!</h1>
		</a>

		<div class="header-img">
			<a
				href="https://www.linkedin.com/in/alec-beccaria-8547231b8/"
				rel="noreferrer"
				target="_blank"
			>
				<img src={src + "LinkedIn.png"} alt="Linked In" />
			</a>
			<a
				href="https://github.com/alecBeccaria"
				rel="noreferrer"
				target="_blank"
			>
				<img src={src + "github.svg"} alt="GitHub" />
			</a>
		</div>
		{#if url != ""}
		<nav>
			<ul>
				<li>
					<a href="/aboutme" use:link>About Me</a>
				</li>
				|
				<li>
					<a href="/resume" use:link>Resume</a>
				</li>
				|
				<li>
					<a href="/projects" use:link>Projects</a>
				</li>
			</ul>
		</nav>
		{/if}
	</div>
</header>

<style>
	.header-name {
		display: flex;
		justify-content: center;
		text-align: center;
		flex-direction: column;
	}

	header {
		display: flex;
		justify-content: space-between;
	}

	.header-img img {
		width: 2em;
		height: 2em;
		object-fit: contain;
		padding-left: 0.5em;
		padding-right: 0.5em;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	nav a:hover {
		color: blue;
	}

	a:visited {
		color: white;
	}
</style>
