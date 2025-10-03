<script>
	$: theme = 'light';

    const handleTheme = () => {
        if (theme === 'dark') {
            theme = 'light';
            document.documentElement.style.setProperty('--sec-color', '#222d52');
            document.documentElement.style.setProperty('--bg-color', '#f9f6ef');
            // @ts-ignore
            document.querySelector('nav').style.boxShadow = '4px 4px 5px #3332'
            // @ts-ignore
            document.querySelectorAll('.link').forEach(btn => btn.style.color = '#222d52');
            // @ts-ignore
            document.querySelectorAll('.currColor').forEach(btn => btn.style.color = '#222d52');
        } else {
            theme = 'dark';
            document.documentElement.style.setProperty('--sec-color', '#333');
            document.documentElement.style.setProperty('--bg-color', '#000');
            // @ts-ignore
            document.querySelector('nav').style.boxShadow = '2px 2px 8px #fff5'
            // @ts-ignore
            document.querySelectorAll('.bright').forEach(btn => btn.style.color = '#fff');
        }
    }
</script>

<header>
    <div>
        <h1 class="bright m">Hali.dev</h1>

        <button class="bright cursor-pointer btn-active m" on:click={handleTheme}>
            {#if theme === 'dark'}
                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun lucide-icon customizable"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                {:else if theme === 'light'}
                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon lucide-icon customizable"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
            {/if}
        </button>
    </div>
</header>

<style>
    header {
        position: sticky;
        z-index: 99;
        top: 0;
        background: var(--sec-color);
        color: var(--bg-color);
    }

    header > div {
        width: var(--width);
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 0;
    }
</style>
