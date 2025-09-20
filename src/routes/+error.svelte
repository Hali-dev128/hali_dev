<script>
	import { page } from "$app/stores";
	import Button from "$lib/shared/Button.svelte";
</script>

<section id="err-page" class="err-page">
    <div>
        <h1 class="font-bold text-3xl mb-3">{$page.status}: {$page.error.message}</h1>
        <a href="/">
            <Button errBtn={true}>Go Home</Button>
        </a>
    </div>
</section>

<style>
    section {
        width: var(--width);
        height: 75vh;
        margin: 0 auto;
        display: flex;
        align-items: center;
    }
</style>