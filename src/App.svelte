<script lang="ts">
    import InformationPanel from "./InformationPanel.svelte";
    import Scene from "./Scene.svelte";
    import { Canvas } from "@threlte/core";

</script>

<div class="app">
    <div class="scene">
        <Canvas>
            <Scene/>
        </Canvas>
    </div>
    <InformationPanel/>
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