<script lang="ts">
    import {
        Mesh,
    } from "@threlte/core";

    import {
        SphereGeometry,
        CircleGeometry,
        MeshStandardMaterial,
        DoubleSide,
    } from "three";
</script>

<Mesh
    rotation={{ x: -Math.PI / 2 }}
    geometry={new CircleGeometry(1, 50, 50)}
    material={new MeshStandardMaterial({ color: "#00ff00", side: DoubleSide })}/>

<Mesh
    rotation={{ x: -Math.PI / 2 }}
    geometry={new SphereGeometry(1, 50, 50, 0, Math.PI)}
    material={new MeshStandardMaterial({ color: "#ffffff", side: DoubleSide, transparent: true, opacity: 0.5 })}/>
