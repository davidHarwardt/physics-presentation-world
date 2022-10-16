<script lang="ts">
    import {
        Mesh, PointLight
    } from "@threlte/core";

    import {
        SphereGeometry,
        MeshStandardMaterial,
        PlaneGeometry,
        TextureLoader,
    } from "three";

    import treeTexture from "../assets/tree.png";
    const tree = new TextureLoader().load(treeTexture);

    import calendarTexture from "../assets/maya-calendar.jpg";
    const calendar = new TextureLoader().load(calendarTexture);

    import calendarNormal from "../assets/maya-calendar-normal.png";
    const calendarNorm = new TextureLoader().load(calendarNormal);
</script>

<PointLight
    position={{ y: 10, x: 10, z: 20 }}
    intensity={0.2}/>

<Mesh
    geometry={new PlaneGeometry(20, 20)}
    material={new MeshStandardMaterial({ map: tree })}/>

<Mesh
    position={{ x: 20, y: 10 }}
    geometry={new PlaneGeometry(20, 20)}
    material={new MeshStandardMaterial({ map: calendar, alphaMap: calendar, transparent: true, normalMap: calendarNorm })}/>

