<script lang="ts">
    import {
        Mesh
    } from "@threlte/core";

    import {
        SphereGeometry,
        MeshStandardMaterial,
    } from "three";
</script>

<Mesh
    geometry={new SphereGeometry(1, 50, 50)}
    material={new MeshStandardMaterial({ color: "#ff0000" })}/>
