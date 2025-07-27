<script>
	import Button from "$lib/shared/Button.svelte";
	import { User, UserNBudget } from "$lib/stores/ExpenseStore";
    import { flip } from "svelte/animate";
	import { scale } from "svelte/transition";

    export let expenses;
	const formatter = new Intl.NumberFormat(undefined, {currency: 'USD', style: 'currency'});
</script>

{#each expenses as expense (expense.id)}
    <tr
        out:scale={{duration: 300}}
        animate:flip={{duration: 300}}
    >
        <td>{expense.name}</td>
        <td>{formatter.format(expense.amount)}</td>
        <td>{expense.date}</td>
        <td>
            <span class="text-sm">{expense?.budget}</span>
        </td>
        <td>
            <Button inverse={true} on:click={() => {
                User.removeExpense($User[0].id, expense.budget, expense.id);
                UserNBudget.removeExpense($User[0].id, expense.budget, expense.id);
            }}>
                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2 lucide-icon customizable"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
            </Button>
        </td>
    </tr>
{/each}

<style>
    tr:nth-child(odd) {
        box-shadow: var(--set-shadow);
        background-color: var(--pri-color);
    }
    td {
        padding: 10px 0;
    }
    td > span {
        background-color: var(--sec-color);
        color: #fff;
        border-radius: 100vmax;
        padding: 3px 6px;
    }
</style>