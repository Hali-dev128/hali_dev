<script>
	import Button from "$lib/shared/Button.svelte";
	import { User, UserNBudget } from "$lib/stores/ExpenseStore";
	import toast from "svelte-french-toast";

    export let budgets;
    $: name = ''
    $: amount = ''

    const handleSubmit = () => {
        let formData = {
            name,
            amount,
            id: crypto.randomUUID(),
            specialColor: `#${Math.random().toString(16).substring(2, 8)}`,
            expenses: []
        }

        const findBud = budgets.find(bud=>bud.name.toLowerCase() === name.toLowerCase());

        if (findBud) {
            toast.error('Sorry Budget Already Exists')
        } else {
            User.addBudget($User[0].id, formData);
            UserNBudget.addBudget($User[0].id, formData);
    
            toast.success('Budget Added')
            name = ''
            amount = ''
        }
    }
</script>

<form
    on:submit|preventDefault={handleSubmit}
    style="background-color: var(--pri-color);box-shadow: var(--set-shadow);width: min(35vw, 100%);min-width: 285px"
    class="rounded p-4 flex flex-col gap-4"
>
    <h4 class="font-bold text-xl">Create Budget</h4>
    <div class="flex flex-col">
        <label for="bud" class="font-bold">Budget Name</label>
        <input class="rounded" type="text" id="bud" bind:value={name} placeholder="e.g.Groceries" required>
    </div>
    <div class="flex flex-col">
        <label for="amount" class="font-bold">Amount</label>
        <input class="rounded" type="number" id="amount" placeholder="$350" bind:value={amount}>
    </div>

    <Button type="submit">
        Create Budget
        <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-dollar-sign-icon lucide-badge-dollar-sign lucide-icon customizable"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
    </Button>
</form>
