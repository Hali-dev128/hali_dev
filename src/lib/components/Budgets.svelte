<script>
	import Button from "$lib/shared/Button.svelte";
	import { User, UserNBudget } from "$lib/stores/ExpenseStore";
	import { flip } from "svelte/animate";
	import { scale } from "svelte/transition";

    export let budgets;
	const formatter = new Intl.NumberFormat(undefined, {currency: 'USD', style: 'currency'});

    const setTween = (id) => {
        let percentA = Math.floor((budgets.find(bud => bud.id === id).expenses.reduce((sum, item) => sum + item.amount,0) / budgets.find(bud => bud.id === id).amount) * 100) || 0;
        return percentA;
    }
</script>

{#each budgets as budget (budget.id)}
    <li 
        out:scale={{duration: 300}}
        animate:flip={{duration: 300}}
        style="background-color: var(--pri-color);box-shadow: var(--set-shadow);width: min(30vw, 100%)"
        class="rounded p-4 flex flex-col gap-4"
    >
        <span class="flex gap-4 justify-between">
            <h4 class="font-bold">{budget.name}</h4>
            <p class="font-bold">{formatter.format(budget.amount)} Budgeted</p>
        </span>

        <div>
            <div class="bar">
                <span class="percent" style="width: {setTween(budget.id)}%;">{setTween(budget.id)}%</span>
            </div>
            <span class="flex gap-4 justify-between text-gray-500">
                <small>{formatter.format(budget.expenses.reduce((sum, item) => sum + item.amount,0))} spent</small>
                <small>{formatter.format(budget.amount - budget.expenses.reduce((sum, item) => sum + item.amount,0))} remaining</small>
            </span>
        </div>

        <div class="flex gap-4">
            <Button full={true}>
                View
                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-columns2-icon lucide-columns-2 lucide-icon customizable"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M12 3v18"></path></svg>
            </Button>
            <Button full={true} on:click={() => {
                User.removeBudget($User[0].id, budget.id);
                UserNBudget.removeBudget($User[0].id, budget.id);
            }}>
                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2 lucide-icon customizable"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
            </Button>
        </div>
    </li>
{/each}

<style>
    li {
        outline: 2px solid var(--sec-color);
    }
    .bar {
        position: relative;
        background-color: var(--bg-color);
        height: 13px;
        margin-bottom: 6px;
        border-radius: 100vmax;
    }
    .percent {
        position: absolute;
        left: 0;
        color: var(--pri-color);
        display: flex;
        justify-content: end;
        width: 0;
        align-items: center;
        font-size: 12px;
        transition: 350ms ease-in-out;
        top: 0;
        background-color: var(--sec-color);
        height: 100%;
        border-radius: inherit;
    }
</style>