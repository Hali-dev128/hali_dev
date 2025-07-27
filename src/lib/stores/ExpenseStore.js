import { browser } from "$app/environment";
import { writable } from "svelte/store";

function createWritable(initVal) {
    const {subscribe, update, set} = writable(initVal);

    return {
        subscribe,
        update,
        set,
        addUser: obj => update(storeVal => storeVal = [obj, ...storeVal]),
        addBudget: (id, obj) => update(storeVal => {
            return storeVal.map(val => {
                if (val.id === id) {
                    return {
                        ...val,
                        budgets: [obj, ...val.budgets]
                    }
                }
                return val
            })
        }),
        removeBudget: (id, itemId) => update(storeVal => {
            return storeVal.map(val => {
                if (val.id === id) {
                    return {
                        ...val,
                        budgets: [...val.budgets.filter(bud => bud.id !== itemId)]
                    }
                }
                return val
            })
        }),
        addExpense: (id, budget, obj) => update(storeVal => {
            return storeVal.map(val => {
                if (val?.id == id) {
                    return {
                        ...val,
                        budgets: val.budgets.map(bud => {
                            if (bud?.name === budget) {
                                return {
                                    ...bud,
                                expenses: [obj, ...bud.expenses]
                            }
                        }
                        return bud
                        })
                    }
                }
                return val
            })
        }),
        removeExpense: (id, budget, exId) => update(storeVal => {
            return storeVal.map(val => {
                if (val.id === id) {
                    return {
                        ...val,
                        budgets: val.budgets.map(bud => {
                            if (bud.name === budget) {
                                return {
                                    ...bud,
                                expenses: [...bud.expenses.filter(bud => bud.id !== exId)]
                            }
                        }
                        return bud
                        })
                    }
                }
                return val
            })
        }),
        reset: () => set([])
    }
}

export const UserNBudget = createWritable(browser && JSON.parse(localStorage.getItem('UserNBudget')) || []);
UserNBudget.subscribe(val => browser && localStorage.setItem('UserNBudget', JSON.stringify(val)));

export const User = createWritable(browser && JSON.parse(localStorage.getItem('User')) || []);
User.subscribe(val => browser && localStorage.setItem('User', JSON.stringify(val)));

