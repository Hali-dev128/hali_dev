<script>
    import Maintenance from '../imgs/maintenance.png';
    import Responsive from '../imgs/responsive-design.png';
    import Code from '../imgs/code.png';
    import SEOIcon from '../imgs/seo.png';
    import Response from '../imgs/response.png';
</script>

<section  id="Services">
    <h2 class="text-3xl font-bold text-center bright currColor">My Services</h2>
    <ul class="services">
       <li class="bright toScrollAnimate">
        <img src={Maintenance} alt="Maintenance Icon">
        <h3 class="font-bold">Website Fixes and Maintenance</h3>
        <p>I can help you fix layout problems, broken links, and bugs. I also offer ongoing support to update content, manage backups, and improve your website without starting from scratch.</p>
       </li>
       <li class="bright toScrollAnimate">
        <img src={Responsive} alt="Responsive Icon">
        <h3 class="font-bold">Responsive Design</h3>
        <p>I design every website to automatically adjust to all screen sizes, making sure your users have the best experience no matter what device they use.</p>
       </li>
       <li class="bright toScrollAnimate">
        <img src={Code} alt="Code Icon">
        <h3 class="font-bold">Clean Code</h3>
        <p>I write well-structured, semantic code that's easy to understand and maintain. This makes future updates faster, cheaper, and less stressful for both of us.</p>
       </li>
       <li class="bright toScrollAnimate">
        <img src={SEOIcon} alt="SEO Icon">
        <h3 class="font-bold">SEO Optimization</h3>
        <p>I use proper HTML structure, meta tags, alt text, and performance best practices to make sure your website is visible to search engines like Google.</p>
       </li>
       <li class="bright toScrollAnimate">
        <img src={Response} alt="Response Icon">
        <h3 class="font-bold">Fast Response</h3>
        <p>I value your time. That’s why I respond to client messages, questions, and requests quickly and on time. Whether you need project updates, minor changes, or answers to your concerns, you can always count on me to stay available and keep communication smooth.</p>
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
        border-radius: 10px;
        box-shadow: var(--set-shadow);
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 10px;
        background-color: var(--sec-color);
        color: var(--bg-color);
    }
</style>
