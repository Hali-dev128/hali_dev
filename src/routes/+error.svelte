<script>
	import { page } from "$app/stores";
	import Button from "$lib/shared/Button.svelte";
</script>

<section id="err-page" class="err-page">
    <div>
        <h1 class="font-bold text-5xl mb-3">{$page.status}: {$page.error.message}</h1>
        <a href="/">
            <Button small={false}>Go Home</Button>
        </a>
    </div>
</section>

<style>
    .err-page {
        margin: var(--gap) 0;
    }
</style>