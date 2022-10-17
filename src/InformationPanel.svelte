<script lang="ts">
    export let onNext: () => void;
    export let onPrev: () => void;
    export let onHome: () => void;
    export let fps: number = 0;
    export let current: number;

    import Markdown from "./lib/Markdown.svelte";
    import { html as mesopotamia } from "./slides/mesopotamia.md";
    import { html as egypt } from "./slides/egypt.md";
    import { html as greek } from "./slides/greek.md";
    import { html as china } from "./slides/china.md";
    import { html as america } from "./slides/america.md";
    import { html as europe } from "./slides/europe.md";
    import { html as kopernikus } from "./slides/kopernikus.md";
    import { html as renaissance } from "./slides/renaissance.md";
    import { html as kepler } from "./slides/kepler.md";

    import keplerDiagram from "./assets/Kepler_laws_diagram.svg";
    
</script>

<div class="information-panel">
    <div class="panel-inner glass">
        <div>{fps}</div>
        {#if current == 0}      <Markdown src={mesopotamia}/>
        {:else if current == 1} <Markdown src={egypt}/>
        {:else if current == 2} <Markdown src={greek}/>
        {:else if current == 3} <Markdown src={china}/>
        {:else if current == 4} <Markdown src={america}/>
        {:else if current == 5} <Markdown src={europe}/>
        {:else if current == 6} <Markdown src={kopernikus}/>
        {:else if current == 7} <Markdown src={renaissance}/>
        {:else if current == 8}
            <Markdown src={kepler}/>
            <div style="display: flex; align-items: center;">
                <img src={keplerDiagram} style="width: 10rem; margin: auto;" alt="kepler laws">
            </div>
        {/if}
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