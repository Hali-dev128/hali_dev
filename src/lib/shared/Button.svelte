<script>
    export let inverse = false;
    export let layered = false;
    export let paginate = false;
    export let disable = false;
    export let type = 'button'
</script>

<button 
    class:inverse={inverse}
    type={type === 'button' ? 'button' : 'submit'}
    class:layered={layered}
    class:paginate={paginate}
    class:disable={disable}
    on:click
>
    <slot></slot>
</button>

<style>
    button {
        background-color: var(--sec-color);
        border: 2px solid transparent;
        color: var(--pri-color);
        padding: 5px 12px;
        cursor: pointer;
        transition: 150ms ease-in-out;
    }
    button.inverse {
        background-color: transparent;
        border: 2px solid var(--sec-color);
        color: var(--sec-color);
    }
    button.disable {
        pointer-events: none;
        opacity: .8;
    }
    button:active {
        scale: .97;
    }
    button:hover {
        background-color: transparent;
        border: 2px solid var(--sec-color);
        color: var(--sec-color);
    }
    button.layered {
        padding: 8px 15px;
    }
    button.inverse.paginate, button.paginate:hover {
        background-color: var(--pri-color);
    }
    button.layered:hover {
        background-color: transparent;
        border: 2px solid var(--bg-color);
        color: var(--bg-color);
    }
    button.inverse:hover {
        background-color: var(--sec-color);
        border: 2px solid transparent;
        color: var(--pri-color);
    }
</style>