<script>
	import AboutMe from '../components/About_Me.svelte';
    import Resume from '../components/Resume.svelte';
    import Portfolio from '../components/Portfolio.svelte';
    import Router from 'svelte-spa-router';
    

    const routes = {
        '/': AboutMe,
        '/resume': Resume,
        '/portfolio': Portfolio
    }
</script>

<body>
	<Router {routes}/>
</body>

<style>
	body {
		text-align: center;
	}
</style>
