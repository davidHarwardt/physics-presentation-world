<script lang="ts">
    import {
        BoxGeometry,
        SphereGeometry,
        CircleGeometry,
        EdgesGeometry,
        BufferGeometry,
        MeshStandardMaterial,
        LineBasicMaterial,
        ACESFilmicToneMapping,
    } from "three";

    import {
        Canvas,
        PerspectiveCamera,
        OrbitControls,
        Mesh,
        Line,
        AmbientLight,
        DirectionalLight,
        PointLight,
        Group,
        Pass,
        useThrelte,
        useFrame,
    } from "@threlte/core";

    import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
    import { SSAARenderPass } from "three/examples/jsm/postprocessing/SSAARenderPass";

    import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
    import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";

    import Mesopotamia from "./slides/Mesopotamia.svelte";
    import Egypt from "./slides/Egypt.svelte";
    import Greek from "./slides/Greek.svelte";
    import China from "./slides/China.svelte";
    import America from "./slides/America.svelte";
    import Europe from "./slides/Europe.svelte";
    import Renaissance from "./slides/Renaissance.svelte";
    import { onMount } from "svelte";

    export let current: number;
    export let fps: number = 0;

    const { camera, scene, renderer } = useThrelte();

    renderer.toneMapping = ACESFilmicToneMapping;
    
    const sphereGeo = new SphereGeometry(1, 50, 50);
    const circleGeo = new EdgesGeometry(new CircleGeometry(1, 75));

    let group: Group;

    useFrame((ctx, dt) => {
        // group.group.rotateY(dt);
        fps = 1 / dt;
    });
</script>

<div class="scene">
    <PerspectiveCamera position={{ x: 0, y: 100, z: 200 }}>
        <OrbitControls
            enableZoom
            target={{ x: 0, y: 0, z: 0 }}/>
    </PerspectiveCamera>

    <!-- <Pass pass={new SSAARenderPass(scene, $camera, "#000000", 1.0)}/> -->
    <!-- <Pass pass={new ShaderPass(FXAAShader)}/> -->
    <Pass pass={new UnrealBloomPass(undefined, 1, 1, 0.5)}/>

    <AmbientLight intensity={0.1}/>
    <!-- <PointLight intensity={0.2}/> -->

    <!-- <Mesh
        position={{ x: 0, y: 0, z: 0 }}
        scale={0.5}
        geometry={sphereGeo}
        material={new MeshStandardMaterial({ color: "#ffffff", emissive: "#fce566", emissiveIntensity: 2 })}/> -->

    <Group position={{ x: -60 }} bind:this={group}>
        {#if current == 0}
            <Mesopotamia/>
        {:else if current == 1}
            <Egypt/>
        {:else if current == 2}
            <Greek/>
        {:else if current == 3}
            <China/>
        {:else if current == 4}
            <America/>
        {:else if current == 5}
            <Europe/>
        {:else if current == 6}
            <Renaissance/>
        {:else if current == 7}
            <Renaissance/>
        {/if}
    </Group>
</div>

<style>
    .scene {
        width: 100vw;
        height: 100vh;
    }
</style>