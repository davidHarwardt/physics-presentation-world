<script lang="ts">
    export let onNext: () => void;
    export let onPrev: () => void;
    export let onHome: () => void;
    export let fps: number = 0;
</script>

<div class="information-panel">
    <div class="panel-inner glass">
        <div>{fps}</div>
        <h1>[title]</h1>
        <p>
            content
        </p>
    </div>
    <div class="nav-buttons">
        <div class="button glass" on:click={onPrev}>&lt;</div>
        <div class="button glass" on:click={onHome}>&bull;</div>
        <div class="button glass" on:click={onNext}>&gt;</div>
    </div>
</div>

<style>
    .information-panel {
        padding: 1rem;
        display: grid;
        gap: 0.5rem;
        grid-template-rows: 1fr auto;

        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 35%;
    }

    .panel-inner {
        position: relative;
    }

    .glass {
        background-color: #222222dd;
        padding: 1rem;
        border-radius: 0.5rem;

        border: #222222cc solid 2px;
        backdrop-filter: blur(4px);
    }

    .nav-buttons {
        display: grid;
        grid-template-columns: 1fr 3.5rem 1fr;
        gap: 0.5rem;
    }

    .button {
        font-weight: bold;
        text-align: center;
        user-select: none;
        cursor: pointer;
        transition: 0.25s ease-out;
    }

    .button:hover {
        filter: brightness(1.2);
        border-color: #2c2c2c;
    }
</style>