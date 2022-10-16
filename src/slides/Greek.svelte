<script lang="ts">
    import {
        Group,
        Mesh, PointLight, useFrame
    } from "@threlte/core";

    import * as planets from "./textures";

    import {
        SphereGeometry,
        MeshStandardMaterial,
        DoubleSide,
    } from "three";
    import PlanetShell from "../lib/PlanetShell.svelte";

    let sunGroup: Group;
    let outerMesh: Mesh;

    useFrame((_, dt) => {
        sunGroup.group.rotateY(dt * 1.0);
        // outerMesh.mesh.rotateY(0.001);
        outerMesh.mesh.rotateY(dt * 0.01);
    });
</script>

<Mesh
    geometry={new SphereGeometry(1, 50, 50)}
    material={new MeshStandardMaterial({ map: planets.earth })}/>

<PlanetShell
    orbitRadius={5}
    planetRadius={0.3}
    texture={planets.moon}
    orbitSpeed={1.6}/>

<PlanetShell
    orbitRadius={10}
    planetRadius={0.8}
    texture={planets.mercury}
    orbitSpeed={1.3}/>

<PlanetShell
    orbitRadius={15}
    planetRadius={0.9}
    texture={planets.venus}
    orbitSpeed={1.2}/>

<!-- sun -->
<Mesh
    material={new MeshStandardMaterial({ transparent: true, opacity: 0.05, color: "#dddddd" })}
    geometry={new SphereGeometry(20)}/>

<Group bind:this={sunGroup}>
    <Mesh
        position={{ x: 20 }}
        material={new MeshStandardMaterial({ map: planets.sun, lightMap: planets.sun, emissiveMap: planets.sun })}
        geometry={new SphereGeometry(2.5)}/>

    <PointLight
        position={{ x: 20 }}
        intensity={2}/>
</Group>

<PlanetShell
    orbitRadius={25}
    planetRadius={0.85}
    texture={planets.mars}
    orbitSpeed={0.5}/>

<PlanetShell
    orbitRadius={30}
    planetRadius={2.0}
    texture={planets.jupiter}
    orbitSpeed={0.3}/>
    
<PlanetShell
    orbitRadius={35}
    planetRadius={1.8}
    texture={planets.saturn}
    orbitSpeed={0.2}/>

<Mesh
    bind:this={outerMesh}
    material={new MeshStandardMaterial({ map: planets.stars, color: "#dddddd", side: DoubleSide })}
    geometry={new SphereGeometry(200)}/>
