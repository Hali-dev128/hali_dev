<script>
	import { goto, replaceState } from "$app/navigation";
	import Button from "$lib/shared/Button.svelte";
	import toast from "svelte-french-toast";
	import { User } from "$lib/stores/ExpenseStore";
</script>

<header class="flex justify-between gap-8 pt-8 items-center">
    <h1 class="font-bold text-xl flex gap-2 cursor-default">
        <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house lucide-icon customizable"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
        HomeBudget
    </h1>

    {#if $User.length}
        <Button small={false} on:click={() => {
            toast.success(`Logged out`)
            User.reset();
            goto('/', {replaceState: true});
        }}>
            Logout
            <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2 lucide-icon customizable"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
        </Button>
    {/if}
</header>

<style>
    h1 > svg {
        color: var(--sec-color);
    }
</style>