<script lang="ts">
    import { Texture, MeshStandardMaterial, SphereGeometry } from "three";
    import { Mesh, Group, useFrame } from "@threlte/core";

    export let texture: Texture;
    export let orbitRadius: number;
    export let planetRadius: number;
    export let orbitSpeed: number = 1;

    let group: Group;

    useFrame((_, dt) => {
        group.group.rotateY(dt * orbitSpeed);
    });
</script>

<Mesh
    material={new MeshStandardMaterial({ transparent: true, opacity: 0.05, color: "#dddddd" })}
    geometry={new SphereGeometry(orbitRadius)}/>

<Group bind:this={group}>
    <Mesh
        position={{ x: orbitRadius }}
        material={new MeshStandardMaterial({ map: texture })}
        geometry={new SphereGeometry(planetRadius)}/>
</Group>
