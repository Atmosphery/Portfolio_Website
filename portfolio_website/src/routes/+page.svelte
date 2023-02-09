<script>
	import AboutMe from '../components/About_Me.svelte';
    import Resume from '../components/Resume.svelte';
    import Portfolio from '../components/Portfolio.svelte';
    import Router from 'svelte-spa-router'

    const routes = {
        '/': AboutMe,
        '/resume': Resume,
        '/portfolio': Portfolio
    }
</script>

<main>
	<Router {routes}/>
</main>

<style>
	main {
		text-align: center;
	}
</style>
