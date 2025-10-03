<script>
	import { browser } from "$app/environment";
	import { page } from "$app/state";

    const links = [
        {
            link: 'Home',
            html: '<svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house lucide-icon customizable"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>'
        }, {
            link: 'About',
            html: '<svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round-icon lucide-circle-user-round lucide-icon customizable"><path d="M18 20a6 6 0 0 0-12 0"></path><circle cx="12" cy="10" r="4"></circle><circle cx="12" cy="12" r="10"></circle></svg>'
        }, {
            link: 'Services',
            html: '<svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-coins-icon lucide-hand-coins lucide-icon customizable"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path><path d="m2 16 6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="5" r="3"></circle></svg>'
        }, {
            link: 'Projects',
            html: '<svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-open-dot-icon lucide-folder-open-dot lucide-icon customizable"><path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"></path><circle cx="14" cy="15" r="1"></circle></svg>'
        }, {
            link: 'Contact',
            html: '<svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone lucide-icon customizable"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>'
        }
    ];

    if (browser) {
        const elements = window.document.querySelectorAll('section');
        const lis = window.document.querySelectorAll('.link');
    
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                const navLink = document.querySelector(`a[href="#${id}"] li.link`);
                if (entry.isIntersecting) {
                    lis.forEach(l => l.classList.remove('active'));
                    // @ts-ignore
                    navLink.classList.add('active');
                }
            })
        });
    
        elements.forEach(el => observer.observe(el));
    }
</script>

<nav>
    <ul>
        {#each links as link}    
            <a href={`#${link.link}`} title={`${link.link}`} aria-label={`${link.link}`}>
                <li class={`bright link`}>
                    {@html link.html}
                </li>
            </a>
        {/each}
    </ul>
</nav>

<style>
    nav {
        background-color: var(--bg-color);
        position: fixed;
        z-index: 99;
        box-shadow: var(--set-shadow);
        left: 50%;
        display: grid;
        place-items: center;
        transform: translateX(-50%);
        bottom: 10%;
        border-radius: 100vmax;
        padding: 10px 15px;
        color: var(--sec-color);
    }

    nav ul {
        width: 100%;
        align-items: center;
        justify-content: space-between;
        display: flex;
        gap: 15px;
    }

    nav ul li {
        border-radius: 50%;
        transition: 200ms ease-in-out;
        padding: 5px;
    }

    li.active, nav ul li:hover {
        background-color: var(--sec-color);
        color: #fff !important;
    }
</style>
