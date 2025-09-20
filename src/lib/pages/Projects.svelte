<script>
    import ExpenseTracker from '../imgs/my-sveltekitapp 12_07_2025 12_48_02.png';
    import Blog from '../imgs/HiiT PLC SIWES Webinar - Google Chrome 12_07_2025 12_44_06.png';
    import Mart from '../imgs/Expense Tracker - Google Chrome 12_07_2025 13_08_22.png';
</script>

<section id="Projects">
    <h2 class="text-3xl font-bold text-center">Projects</h2>

    <ul>
        <li>
            <img src={ExpenseTracker} alt="Expense Tracker Screenshot">
            <div>
                <h3 class="font-bold">HomeBudget - Personal Expense Tracker</h3>
                <p>A simple and intuitive budgeting app that helps users manage their finances. HomeBudget allows users to add expenses, categorize them, and view a summary of their monthly spending habits.</p>
                <p><strong>Built with:</strong> HTML, CSS, Sveltekit</p>
                <p><strong>Features:</strong> Dynamic input, localStorage saving, responsive layout</p>
            </div>
            <a href="../" target="_blank" aria-label="View code" title="View code">
                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github lucide-icon customizable"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
        </li>
        <li>
            <img src={Blog} alt="Food History Blog Screenshot">
            <div>
                <h3 class="font-bold">Snack to the Past - Food History Blog</h3>
                <p>A blog website that explores the history of different snacks and how they evolved into what we know today. Readers can browse categories, read full articles, and explore images of traditional and modern snack recipes.</p>
                <p><strong>Built with:</strong> HTML, CSS, Sveltekit</p>
                <p><strong>Features:</strong> Article layout, search filter, mobile-first design</p>
            </div>
            <a href="../" target="_blank" aria-label="View code" title="View code">
                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github lucide-icon customizable"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
        </li>
        <li>
            <img src={Mart} alt="BingMart Screenshot">
            <div>
                <h3 class="font-bold">BingMart - Advertising Site for Online Store</h3>
                <p>BingMart is a clean and modern promotional website for an online student store. It highlights featured products, allows store owners to list their items, and introduces customers to student entrepreneurs.</p>
                <p><strong>Built with:</strong> HTML, CSS</p>
                <p><strong>Features:</strong> Product cards, responsive grid, call-to-action sections</p>
            </div>
            <a href="../" target="_blank" aria-label="View code" title="View code">
                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github lucide-icon customizable"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
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

    section > ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }

    section > ul li {
        max-width: 350px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 10px;
        background-color: var(--sec-color);
        color: var(--bg-color);
    }

    section > ul li > a {
        background-color: var(--bg-color);
        color: var(--sec-color);
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: grid;
        place-items: center;
    }

    section > ul li > div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
    }
</style>