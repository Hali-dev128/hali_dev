<script>
    import Maintenance from '../imgs/maintenance.png';
    import Responsive from '../imgs/responsive-design.png';
    import Code from '../imgs/code.png';
    import SEOIcon from '../imgs/seo.png';
    import Response from '../imgs/response.png';
</script>

<section  id="Services">
    <h2 class="text-3xl font-bold text-center">My Services</h2>
    <ul class="services">
       <li>
        <img src={Maintenance} alt="Maintenance Icon">
        <h3 class="font-bold">Website Fixes and Maintenance</h3>
        <p>I can help you fix layout problems, broken links, and bugs. I also offer ongoing support to update content, manage backups, and improve your website without starting from scratch.</p>
       </li>
       <li>
        <img src={Responsive} alt="Responsive Icon">
        <h3 class="font-bold">Responsive Design</h3>
        <p>I design every website to automatically adjust to all screen sizes, making sure your users have the best experience no matter what device they use.</p>
       </li>
       <li>
        <img src={Code} alt="Code Icon">
        <h3 class="font-bold">Clean Code</h3>
        <p>I write well-structured, semantic code that,s easy to understand and maintain. This makes future updates faster, cheaper, and less stressful for both of us.</p>
       </li>
       <li>
        <img src={SEOIcon} alt="SEO Icon">
        <h3 class="font-bold">SEO Optimization</h3>
        <p>I use proper HTML structure, meta tags, alt text, and performance best practices to make sure your website is visible to search engines like Google.</p>
       </li>
       <li>
        <img src={Response} alt="Response Icon">
        <h3 class="font-bold">Fast Response</h3>
        <p>I optimize images, minimize code, and follow best practices to ensure your site loads quickly. A fast website keeps visitors engaged and improves SEO.</p>
       </li>
    </ul>
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

    .services img {
        width: 40px;
    }

    .services {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }

    .services li {
        max-width: 350px;
        display: flex;
        gap: 5px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 10px;
        background-color: var(--sec-color);
        color: var(--bg-color);
    }
</style>