<script lang="ts">
    import InformationPanel from "./InformationPanel.svelte";
    import Scene from "./Scene.svelte";
    import { Canvas } from "@threlte/core";

    let current = 0;
    let fps = 0;

    let contrast = 100;
    let settingsEle: HTMLDivElement;
    let brightness = 1.0;
    function toggleSettings() {
        settingsEle.classList.toggle("hidden");
    }
</script>

<div class="app" style={`filter: contrast(${contrast}%) brightness(${brightness})`}>
    <div class="scene">
        <Canvas>
            <Scene bind:fps={fps} current={current}/>
        </Canvas>
    </div>
    <div class="settings-overlay hidden" bind:this={settingsEle}>
        <div class="input-show" on:click={toggleSettings}></div>
        <div class="container">
            <div>
                <label for="brightness">brightness</label>
                <input type="range" id="brightness" min="0" max="3" step="0.001" bind:value={brightness}/>
            </div>
            <div>
                <label for="contrast">contrast</label>
                <input type="range" id="contrast" min="0" max="300" bind:value={contrast}/>
            </div>
        </div>
    </div>
    <InformationPanel
        fps={fps}
        bind:current = {current}
        onNext={() => { current++; current %= 9; }}
        onPrev={() => { current--; if(current < 0) current = 8; }}
        onHome={() => { current = 0; }}/>
</div>

<style>
    .app {
        height: 100vh;
        width: 100vw;
    }

    .scene {
        width: 100vw;
        height: 100vh;
    }

    .settings-overlay {
        font-size: 0.75rem;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: darkslategray;
        padding-bottom: 0.25rem;
    }
    
    .settings-overlay .container {
        margin-left: 0.5rem;
    }

    .input-show {
        cursor: pointer;
        height: 0.2rem;
        min-width: 5rem;
        background-color: gray;
    }

    .settings-overlay.hidden .container {
        display: none;
    }
</style>
