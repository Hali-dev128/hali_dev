<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import Header from '$lib/components/Header.svelte';
	import { Toaster } from "svelte-french-toast";
</script>

<svelte:head>
    <title>Expense Tracker</title>
</svelte:head>

<Toaster/>

<div class="layout">
	<Header/>

	{#key $page.url.pathname}
		<main in:fade={{duration: 300}}>
			<slot></slot>
		</main>
	{/key}
</div>

<style>
	.layout {
		display: grid;
		grid-gap: 30px;
		grid-template-rows: auto 1fr;
		grid-template-columns: var(--width);
		justify-content: center;
		padding-bottom: 30px;
	}
</style>