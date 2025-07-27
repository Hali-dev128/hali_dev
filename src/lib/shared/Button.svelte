<script>
    export let inverse = false;
    export let type = 'button'
    export let small = true;
    export let full = false;
</script>

<button 
    class={`${small ? 'text-sm' : ''} ${full ? 'w-full' : ''}`}
    class:inverse={inverse}
    type={type === 'button' ? 'button' : 'submit'}
    on:click
>
    <slot></slot>
</button>

<style>
    button {
        background-color: var(--sec-color);
        border: 2px solid transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        color: var(--pri-color);
        padding: 5px 12px;
        cursor: pointer;
        border-radius: 6px;
        transition: 150ms ease-in-out;
    }
    button.inverse {
        background-color: transparent;
        border: 2px solid var(--sec-color);
        color: var(--sec-color);
    }
    button:active {
        scale: .97;
    }
    button:hover {
        background-color: transparent;
        border: 2px solid var(--sec-color);
        color: var(--sec-color);
    }
    button.inverse:hover {
        background-color: var(--sec-color);
        border: 2px solid transparent;
        color: var(--pri-color);
    }
</style>