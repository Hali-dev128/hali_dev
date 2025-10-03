<script>
        const faqs = [
        {
            summary: '1. What kind of websites do you build?',
            p: 'I specialize in clean, responsive, and lightweight websites for small businesses, student entrepreneurs, and individuals who want a professional online presence. From landing pages to simple online stores, I focus on speed, usability, and modern design.'
        },{
            summary: '2. Will my website work on phones and tablets?',
            p: 'Absolutely! Every site I build is mobile-first and responsive, meaning it automatically adjusts to different screen sizes for the best user experience.'
        },{
            summary: '3. Do you provide SEO services?',
            p: 'Yes, I apply basic SEO best practices such as proper meta tags, fast loading, and clean code to help your website rank better on Google. For advanced SEO campaigns, I can recommend specialized partners.'
        },{
            summary: '4. How long will it take to finish my website?',
            p: 'The timeline depends on the project size. A simple landing page may take 3–5 days, while a full small-business website may take 1–2 weeks. I’ll always give you a clear timeline before starting.'
        },{
            summary: '5. How much do you charge?',
            p: 'Pricing depends on the complexity of the project. I offer flexible packages for students, startups, and small businesses. Contact me for a free quote.'
        }
    ]
</script>

<section class="faq">
    <h2 class="text-3xl font-bold text-center bright currColor">FAQ's</h2>

    <div class="faq">
        {#each faqs as faq (faq.p)}
            <details class="bright toScrollAnimate2">
                <summary>{faq.summary}</summary>
                <p>{faq.p}</p>
            </details>
        {/each}
    </div>
</section>

<style>
    section {
        width: var(--width);
        margin: 0 auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
    }

    .faq {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    summary::marker {
        color: #fff;
    }
    summary {
        cursor: pointer;
    }

    details {
        padding: 20px;
        background-color: var(--sec-color);
        color: #fff;
        box-shadow: var(--set-shadow);
        border-radius: 10px;
    }

    details p {
        padding-left: 45px;
        padding-top: 10px;
    }
</style>
