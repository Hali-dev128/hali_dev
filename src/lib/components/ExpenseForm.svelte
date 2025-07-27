<script>
	import Button from "$lib/shared/Button.svelte";
    import { User, UserNBudget } from "$lib/stores/ExpenseStore";
	import toast from "svelte-french-toast";
	import { scale } from "svelte/transition";
    
    export let budgets;
    const formatter = new Intl.DateTimeFormat(undefined)
    const date = formatter.format(new Date());
    $: name = ''
    $: amount = ''
    $: budget = ''
    $: total = 0;

    $: for (let i = 0; i < budgets.length; i++) {
        const ele = budgets[i];
        if (ele.name === budget) {
            total = ele.expenses.reduce((sum, item) => sum + item.amount,0);
        }
    }

    const handleSubmit = () => {
        let formData = {
            id: crypto.randomUUID(),
            name,
            amount,
            date,
            budget
        }
        if (amount + total > $User[0].budgets.find(bud => bud.name === budget).amount) {
            toast.error('Expense is more than remaining budget')
        } else if ($User[0].budgets.find(bud => bud.name === budget).expenses.find(ex => ex.name === name)) {
            toast.error('Expense Already Exists')
        } else {
            User.addExpense($User[0]?.id, budget, formData);
            UserNBudget.addExpense($User[0]?.id, budget, formData);
    
            toast.success('Expense Added')
            name = ''
            amount = ''
        }
    }
</script>

<form 
    transition:scale={{duration: 300}}
    on:submit|preventDefault={handleSubmit}
    style="background-color: var(--pri-color);box-shadow: var(--set-shadow);width: min(35vw, 100%);min-width: 285px" 
    class="rounded p-4 flex flex-col gap-4"
>
    <h4 class="font-bold text-xl">Add New Expense</h4>
    <div class="flex justify-between gap-3.5">
        <span class="flex flex-col w-full">
            <label for="bud" class="font-bold">Expense Name</label>
            <input class="rounded w-full" bind:value={name} type="text" id="bud" placeholder="e.g.Groceries" required>
        </span>
        <span class="flex flex-col w-full">
            <label for="amount" class="font-bold">Amount</label>
            <input class="rounded w-full" bind:value={amount} type="number" id="amount" placeholder="$350" required>
        </span>
    </div>

    <span class="flex flex-col w-full">
        <label for="select" class="font-bold">Budget Category</label>
        <select id="select" class="rounded" bind:value={budget} required>
            {#each budgets as budget (budget?.id)}
                <option value={budget?.name}>{budget?.name}</option>
            {/each}
        </select>
    </span>

    <Button type="submit">
        Add Expense
        <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-plus-icon lucide-circle-plus lucide-icon customizable"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
    </Button>
</form>
