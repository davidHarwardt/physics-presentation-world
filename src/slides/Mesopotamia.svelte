<script lang="ts">
    import {
        Mesh,
        DirectionalLight,
        useFrame,
    } from "@threlte/core";

    import {
        SphereGeometry,
        CircleGeometry,
        CylinderGeometry,
        MeshStandardMaterial,
        DoubleSide,
        TextureLoader,
        RepeatWrapping,
        Vector3,
        ShaderMaterial,
        IcosahedronGeometry,
        Vector2,
        ConeGeometry,
    } from "three";

    import { Water } from "three/examples/jsm/objects/Water";
    import waterTexture from "../assets/waternormals.jpg";
    import { stars } from "./textures";
    import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

    const water = new Water(new CircleGeometry(100, 50, 50), {
        textureHeight: 512,
        textureWidth: 512,
        eye: new Vector3(0, 10, 10),
        waterNormals: new TextureLoader().load(waterTexture, (t) => { t.wrapS = t.wrapT = RepeatWrapping }),
        sunDirection: new Vector3(),
        sunColor: "#ffffff",
        waterColor: "#001e0f",
        distortionScale: 3.7,
    });
    water.material.side = DoubleSide;


    useFrame((_, dt) => {
        water.material.uniforms["time"].value += dt;
    });
    
</script>

<DirectionalLight
    position={{ x: 10, y: 100, z: 10 }}
    intensity={0.5}/>

<Mesh
    rotation={{ x: -Math.PI / 2 }}
    geometry={water.geometry}
    material={water.material}/>

<Mesh
    scale={0.5}
    position={{ y: 2.6 }}
    geometry={new CylinderGeometry(90, 100, 10, 50, 2)}
    material={new MeshStandardMaterial({ color: "#00ff00", side: DoubleSide })}/>


<Mesh
    rotation={{ x: -Math.PI / 2 }}
    geometry={new SphereGeometry(100, 50, 50, 0, Math.PI, 0, Math.PI / 4 * 3)}
    material={new MeshStandardMaterial({ color: "#fca103", side: DoubleSide, transparent: true, opacity: 20.0, alphaMap: stars })}/>

