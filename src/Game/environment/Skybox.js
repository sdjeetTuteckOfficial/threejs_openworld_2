import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
class SkyBox {
    constructor(scene) {
        this._init(scene)
    }
    _init(scene) {
        const loader = new THREE.CubeTextureLoader();
        const texture = loader.load([
            './assets/SkyBox/Daylight Box_Front.jpg',
            './assets/SkyBox/Daylight Box_Back.jpg',
            './assets/SkyBox/Daylight Box_Top.jpg',
            './assets/SkyBox/Daylight Box_Bottom.jpg',
            './assets/SkyBox/Daylight Box_Left.jpg',
            './assets/SkyBox/Daylight Box_Right.jpg',
        ]);
        texture.encoding = THREE.sRGBEncoding;
        scene.background = texture;
    }
}
export default SkyBox;