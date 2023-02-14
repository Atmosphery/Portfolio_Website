<script>
	import { link } from "svelte-spa-router";

	let src = "images/";
</script>

<header>
	<div class="header-name">
		<h1>Alec Beccaria</h1>
		<div class="header-img">
			<a href="https://www.linkedin.com/in/alec-beccaria-8547231b8/">
				<img src={src + "LinkedIn.png"} alt="Linked In" />
			</a>
			<a href="https://github.com/alecBeccaria">
				<img src={src + "github.svg"} alt="GitHub" />
			</a>
		</div>
		<nav>
			<ul>
				<li>
					<a href="/" use:link>About Me</a>
				</li>
				|
				<li>
					<a href="/resume" use:link>Resume</a>
				</li>
				|
				<li>
					<a href="/portfolio" use:link>Portfolio</a>
				</li>
			</ul>
		</nav>
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

	a:hover {
		color: blue;
	}
</style>
