<script>
	import Button from "$lib/shared/Button.svelte";
    
</script>

<section id="Contact">
    <form>
        <h2 class="text-2xl font-bold">Ready to launch your first website?</h2>

        <input type="text" name="name" placeholder="Full Name *" required>
        <input type="email" name="email" placeholder="Email *" required>
        <textarea name="msg" placeholder="Message *" required></textarea>

        <Button err={true}>Let's build something together.</Button>
    </form>
</section>

<style>
    section {
        width: var(--width);
        margin: 0 auto;
    }

    section form input, section form textarea {
        background-color: var(--sec-color);
        color: var(--bg-color);
    }

    section form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>