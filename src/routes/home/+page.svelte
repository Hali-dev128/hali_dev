<script>
	import { goto } from "$app/navigation";
	import BudgetForm from "$lib/components/BudgetForm.svelte";
	import Budgets from "$lib/components/Budgets.svelte";
	import ExpenseForm from "$lib/components/ExpenseForm.svelte";
	import Expenses from "$lib/components/Expenses.svelte";
	import { User } from "$lib/stores/ExpenseStore";

    $: expenses = $User[0]?.budgets.flatMap(bud=> bud.expenses);
</script>

<section class="flex flex-col gap-5">
    <h2 class="font-bold text-4xl">
        Welcome back, <span style="color: var(--sec-color);" class="capitalize">{$User[0]?.username}</span>
    </h2>

    <div class="flex gap-5 flex-wrap">
        <BudgetForm budgets={$User[0]?.budgets}/>
        {#if $User[0]?.budgets.length > 0}
            <ExpenseForm budgets={$User[0]?.budgets}/>
        {/if}
    </div>
    
    {#if $User[0]?.budgets.length > 0}
        <div class="flex gap-5 flex-col">
            <h3 class="font-bold text-2xl">Existing Budgets</h3>
            <ul class="flex gap-5 flex-wrap">
                <Budgets budgets={$User[0]?.budgets}/>
            </ul>
        </div>
    {/if}
    
    {#if expenses?.length }
        <div class="flex gap-5 flex-col">
            <h3 class="font-bold text-2xl">Recent Expenses</h3>

            <table class="text-center">
                <thead>
                    <tr>
                        <td class="font-bold text-xl">Name</td>
                        <td class="font-bold text-xl">Amount</td>
                        <td class="font-bold text-xl">Date</td>
                        <td class="font-bold text-xl">Budget</td>
                    </tr>
                </thead>
                <tbody>
                    <Expenses expenses={expenses}/>
                </tbody>
            </table>
        </div>
    {/if}
</section>

<style>
    td {
        padding: 10px 0;
    }
</style>