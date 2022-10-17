<script lang="ts">
    import {
        Mesh,
        DirectionalLight,
        useFrame,
        PointLight,
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
        PlaneGeometry,
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

    import mesopotamiaTexture from "../assets/mesopotamia.jpg";
    const mesopotamia = new TextureLoader().load(mesopotamiaTexture);

    import stoneTexture from "../assets/stone.jpg";
    const stone = new TextureLoader().load(stoneTexture);

    useFrame((_, dt) => {
        water.material.uniforms["time"].value += dt;
    });
    
</script>

<PointLight
    position={{ y: 10, x: 10, z: 20 }}
    intensity={0.2}/>

<Mesh
    geometry={new PlaneGeometry(50, 50)}
    material={new MeshStandardMaterial({ map: mesopotamia })}/>


<Mesh
    rotation={{ x: -Math.PI / 2 }}
    geometry={new SphereGeometry(1000)}
    material={new MeshStandardMaterial({ color: "#fca103", side: DoubleSide, transparent: true, opacity: 20.0, alphaMap: stars })}/>

