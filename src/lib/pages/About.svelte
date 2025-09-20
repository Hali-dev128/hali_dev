<script>
    import AboutMe from '../imgs/ce478da14e49ad27593ba27d1d4e38f0.jpg';
    import HTMLIcon from '../imgs/html-5.png';
    import CSSIcon from '../imgs/css.png';
    import Javascript from '../imgs/java-script.png';
    import Sveltekit from '../imgs/icons8-svelte-50.png';
</script>

<section id="About">
    <h2 class="text-3xl font-bold text-center">About Me</h2>
    <div class="about">
        <img src={AboutMe} alt="Pic of a keyboard with a stairway">
        <div class="details">
            <span>
                <p>Hi, I'm Odumu Muhammad Halidu the mind behind Hali Tech. I'm a Computer Science student passionate about building fast, mobile-friendly websites using HTML, CSS, Javascript and Sveltekit.</p>
                <p>I specialize in helping small businesses and student entrepreneurs create an online presence even if they're starting from scratch.</p>
            </span>
            <ul>
                <li>
                    <img src={HTMLIcon} alt="HTML Icon">
                    <p>HTML</p>
                </li>
                <li>
                    <img src={CSSIcon} alt="CSS Icon">
                    <p>CSS</p>
                </li>
                <li>
                    <img src={Javascript} alt="Javascript Icon">
                    <p>Javascript</p>
                </li>
                <li>
                    <img src={Sveltekit} alt="Sveltekit Icon">
                    <p>Sveltekit</p>
                </li>
            </ul>
        </div>
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

    .about {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        flex-wrap: wrap;
    }

    .about > img {
        width: max(280px, 33%);
        max-height: 450px;
    }

    .about p:first-child::first-letter {
        font-size: 45px;
        line-height: 20px;
    }

    .details img {
        width: 25px;
    }

    .details {
        display: flex;
        flex-direction: column;
        width: max(280px, 64%);
        gap: 20px;
    }

    .details ul {
        display: flex;
        flex-wrap: wrap;
        background-color: var(--sec-color);
        padding: 10px;
        gap: 10px;
    }

    .details ul li {
        display: flex;
        align-items: center;
        padding: 5px;
        gap: 5px;
        font-weight: bold;
        background-color: var(--bg-color);
    }

    @media (max-width: 980px) {
        .about {
            justify-content: center;
        }
    }
</style>