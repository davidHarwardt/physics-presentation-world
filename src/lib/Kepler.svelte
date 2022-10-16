<script lang="ts">
    import { Mesh, Group, useFrame, Line } from "@threlte/core";
    import { CircleGeometry, EdgesGeometry, LineBasicMaterial, MeshStandardMaterial, SphereGeometry, Texture } from "three";

    export let texture: Texture;
    export let orbitRadius: number;
    export let planetRadius: number;
    export let orbitDuration: number;

    let displayOrbit = orbitRadius;
    let orbitSpeed = 1 / orbitDuration;

    let group: Group;

    useFrame((_, dt) => {
        group.group.rotateY(dt * orbitSpeed * 100);
    });
</script>

<Line
    rotation={{ x: -Math.PI / 2 }}
    material={new LineBasicMaterial({ color: "#ffffff",  })}
    geometry={new EdgesGeometry(new CircleGeometry(displayOrbit, 50))}/>

<Group bind:this={group}>
    <slot name="extension"></slot>

    <Mesh
        position={{ x: displayOrbit }}
        material={new MeshStandardMaterial({ map: texture })}
        geometry={new SphereGeometry(planetRadius)}/>

    <slot name="inner"></slot>
</Group>
