<script>
	import Button from "$lib/shared/Button.svelte";
</script>

<section id="Home">
    <div>
        <h1 class="text-4xl font-bold">Hali.dev</h1>
        <span class="text-xl">
            <p>Clean, fast websites for small businesses.</p>
            <p>Helping startups and students yet online with simple, modern design.</p>
        </span>
        <a href="#Contact" aria-label="Contact">
            <Button>Lets work Together</Button>
        </a>
    </div>
</section>

<style>
    section {
        background-image: url(../../lib/imgs/57468d8387042651790a73ade6a0d224.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        position: relative;
        height: 90vh;
    }

    section > div {
        width: var(--width);
        margin: 0 auto;
        color: #f9f6ef;
        z-index: 2;
        display: flex;
        align-items: flex-start;
        gap: 10px;
        flex-direction: column;
    }

    section::before {
        content: '';
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        height: 100%;
        background-color: #0009;
    }
</style>