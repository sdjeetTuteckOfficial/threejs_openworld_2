import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
class Light {
    constructor(scene) {
        this._init(scene)
    }
    _init(scene) {
        let light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
        light.position.set(100, 100, -100);
        light.target.position.set(0, 0, 0);
        light.castShadow = true;
        light.shadow.bias = -0.001;
        light.shadow.mapSize.width = 4096;
        light.shadow.mapSize.height = 4096;
        light.shadow.camera.near = 0.1;
        light.shadow.camera.far = 500.0;
        light.shadow.camera.near = 0.5;
        light.shadow.camera.far = 500.0;
        light.shadow.camera.left = 50;
        light.shadow.camera.right = -50;
        light.shadow.camera.top = 50;
        light.shadow.camera.bottom = -50;
        scene.add(light);

        light = new THREE.AmbientLight(0xFFFFFF, 0.50);
        scene.add(light);
    }
}
export default Light;