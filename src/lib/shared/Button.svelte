<script>
    export const lightBtn = true;
    export const errBtn = false;
</script>

<button class="btn-active" class:light={lightBtn} class:err={errBtn}>
    <slot></slot>
</button>

<style>
    button {
        background-color: var(--sec-color);
        border: 2px solid transparent;
        color: var(--bg-color);
        padding: 5px 15px;
        cursor: pointer;
        transition: 150ms ease-in-out;
        transition: 150ms ease-in-out;
    }

    .btn-active.light:hover, .btn-active.err:hover {
        border: 2px solid var(--sec-color);
        color: var(--sec-color);
    }

    .btn-active:hover {
        background-color: transparent;
        border: 2px solid var(--sec-color);
        color: var(--sec-color);
    }
    
    .btn-active:active {
        scale: .97;
    }
</style>