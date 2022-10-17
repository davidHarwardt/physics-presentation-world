<script lang="ts">
    import InformationPanel from "./InformationPanel.svelte";
    import Scene from "./Scene.svelte";
    import { Canvas } from "@threlte/core";

    let current = 0;
    let fps = 0;
</script>

<div class="app">
    <div class="scene">
        <Canvas>
            <Scene bind:fps={fps} current={current}/>
        </Canvas>
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
</style>
