<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
	import { Toaster } from 'svelte-french-toast';
</script>

<Toaster />

<svelte:head>
    <title>Hali.dev 🫡</title>
</svelte:head>


<main>
	<Header/>
	<Navbar/>
	
	<article>
		<slot></slot>
	</article>

	<Footer/>
</main>
 
<style>
	article {
		display: grid;
		grid-gap: var(--gap);
		margin-bottom: var(--gap);
	}
</style>
