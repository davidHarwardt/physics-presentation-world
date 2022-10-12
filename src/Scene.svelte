<script lang="ts">
    import {
        BoxGeometry,
        SphereGeometry,
        CircleGeometry,
        BufferGeometry,
        MeshStandardMaterial,
        LineBasicMaterial,
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

    const { camera, scene } = useThrelte();
    
    const sphereGeo = new SphereGeometry(1, 50, 50);
    const circleGeo = new CircleGeometry(1, 50).toNonIndexed();
    const traceMat = new LineBasicMaterial({ color: "#ffffff" });

    let group: Group;

    useFrame((ctx, dt) => {
        group.group.rotateY(dt);
    });
</script>

<div class="scene">
    <PerspectiveCamera position={{ x: 0, y: 0, z: 5 }}>
        <OrbitControls
            enableZoom
            enableDamping
            target={{ x: 0, y: 0, z: 0 }}/>
    </PerspectiveCamera>

    <Pass pass={new SSAARenderPass(scene, $camera, "#000000", 1.0)}/>
    <Pass pass={new UnrealBloomPass(undefined, 1, 1, 0.5)}/>

    <AmbientLight intensity={0.1}/>
    <PointLight intensity={0.2}/>

    <Mesh
        position={{ x: 0, y: 0, z: 0 }}
        scale={0.5}
        geometry={sphereGeo}
        material={new MeshStandardMaterial({ color: "#ffffff", emissive: "#fce566", emissiveIntensity: 2 })}/>

    <Group bind:this={group}>
        <Mesh
            position={{ x: 5 }}
            scale={0.25}
            geometry={sphereGeo}
            material={new MeshStandardMaterial({ color: "#2222ff" })}/>
        <Line
            rotation={{ x: Math.PI / 2 }}
            scale={5}
            geometry={circleGeo}
            material={traceMat}/>
    </Group>
</div>

<style>
    .scene {
        width: 100vw;
        height: 100vh;
    }
</style>