<script>
	import Button from "$lib/shared/Button.svelte";
    import emailjs from '@emailjs/browser';
	import toast from "svelte-french-toast";

    $: name = ''
    $: title = ''
    $: message = ''

    $: templateParams = {
        name,
        title,
        message,
        time: new Date()
    };

    $: console.log(templateParams)

    const handleSubmit = e => {
        e.preventDefault();

        emailjs
        .send('service_ghzkpx2', 'template_of61qpq', templateParams, {
            publicKey: '45C22vGJ-jwqvdHjF',
        })
        .then(response => {
                console.log('SUCCESS!', response.status, response.text);
                toast.success('SUCCESS!')
                name = ''
                title = ''
                message = ''
            }
        ).catch((err) => {
            console.log('FAILED...', err);
                toast.error('FAILED...')
                name = ''
                title = ''
                message = ''
            })
    }
</script>

<section id="Contact">
    <form on:submit={handleSubmit}>
        <h2 class="text-2xl font-bold">Ready to launch your first website?</h2>

        <input type="text" bind:value={name} name="name" placeholder="Full Name *" required>
        <input type="email" bind:value={title} name="email" placeholder="Email *" required>
        <textarea name="message" bind:value={message} placeholder="Message *" required></textarea>

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
