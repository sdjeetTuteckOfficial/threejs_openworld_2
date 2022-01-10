import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
class Ground {
    constructor(scene) {
        this._init(scene)
    }
    _init(scene) {
        //ground
        const g_loader = new THREE.TextureLoader();
        const groundTexture = g_loader.load('../src/Game/environment/grasslight.jpg');
        groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
        groundTexture.repeat.set(250, 250);
        groundTexture.anisotropy = 16;
        groundTexture.encoding = THREE.sRGBEncoding;

        const groundMaterial = new THREE.MeshLambertMaterial({ map: groundTexture });

        let mesh = new THREE.Mesh(new THREE.PlaneGeometry(5000, 5000), groundMaterial);
        // mesh.position.y = - 250;
        mesh.rotation.x = - Math.PI / 2;
        mesh.receiveShadow = true;
        scene.add(mesh);
    }
}
export default Ground;