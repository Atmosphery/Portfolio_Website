<script>
	import { page } from '$app/stores';
	import LinkedIn from '$lib/images/LinkedIn.png';
	import github from '$lib/images/github.svg';
</script>

<header>
	<div class="header-name">
		<div class="header-img">
			<h1>Alec Beccaria</h1>
			<a href="https://kit.svelte.dev">
				<img src={LinkedIn} alt="Linked In" />
			</a>
			<a href="https://github.com/sveltejs/kit">
				<img src={github} alt="GitHub" />
			</a>
		</div>
		<nav>
			<ul>
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/aboutme">About Me</a>
				</li>
				|
				<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					<a href="/resume">Resume</a>
				</li>
				|
				<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
					<a href="/portfolio">Portfolio</a>
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

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: blue;
	}
</style>
