import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js";
import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";
import SkyBox from "./environment/Skybox.js";
import Ground from "./environment/Ground.js";
import Light from "./environment/Light.js";
import globalVarriables from "./GlobalVarriable.js";
import Tower from "./environment/Tower.js";
import Mill from "./environment/Mill.js";
import House from "./environment/House.js";
import House2 from "./environment/House2.js";
import Tree from "./environment/Tree.js";
import Cow from "./environment/Cow.js";
import Rock from "./environment/Rock.js";
import Bench from "./environment/Bench.js";

class Village {
  constructor() {
    this._initialize();
  }

  _initialize() {
    this.threejs_webgl_set = new THREE.WebGLRenderer({ antialias: true });
    //this.threejs_webgl_set.setClearColor(0xf3f2da);
    this.threejs_webgl_set.outputEncoding = THREE.sRGBEncoding;
    this.threejs_webgl_set.shadowMap.enabled = true;
    this.threejs_webgl_set.shadowMap.type = THREE.PCFSoftShadowMap;
    this.threejs_webgl_set.setPixelRatio(window.devicePixelRatio);
    this.threejs_webgl_set.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.threejs_webgl_set.domElement);

    //set scene
    this._scene = new THREE.Scene();
    // //lets set camera
    this._camera = new THREE.PerspectiveCamera(
      globalVarriables.fov,
      globalVarriables.aspect,
      globalVarriables.near,
      globalVarriables.far
    );
    //this._camera.position.set(-1000, 1, 1,2000);
    this._camera.position.set(25, 5, 0);
    //this._camera.position.set(1000, 1, 1, 100);

    // this.keyboard = document.querySelector('.keyboard');
    // this.keyboard.addEventListener('keydown', (e) => {console.log(e)});
    document.addEventListener("keydown", (e) => {
      console.log(e);
      if (e.key === "w" || e.key === "W") {
        //console.log("😱", true);
        this._camera.position.z = this._camera.position.z - 1;
      } else if (e.key === "a" || e.key === "A") {
        //console.log("😘", true);
        this._camera.position.x = this._camera.position.x - 1;
      } else if (e.key === "s" || e.key === "S") {
        //console.log("🤩", true);
        this._camera.position.z = this._camera.position.z + 1;
      } else if (e.key === "d" || e.key === "D") {
        //console.log("😪", true);
        // var angle = 0;
        // var radius = 500;
        for (let i = 1; i < 90; i++) {
          // this._camera.position.x =
        }
        //this._camera.position.x = radius * Math.cos(angle);
        // this._camera.position.z = radius * Math.sin(angle);
        // angle += 0.01;
        //this._camera.position.x = this._camera.position.x + 1;
        // for (let i = 0; i < 630; i++) {
        //   this._camera.position.x = Math.cos(i/10) * 100;
        // }
        const quaternion = new THREE.Quaternion();
        quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);

        const vector = new THREE.Vector3(1, 0, 0);
        vector.applyQuaternion(quaternion);
        //this._camera.rotate.z = (90 * Math.PI) / 180;
      } else if (e.key === "x" || e.key === "X") {
        this._camera.position.y = this._camera.position.y + 1;
      } else if (e.key === "c" || e.key === "C") {
        this._camera.position.y = this._camera.position.y - 1;
      }
    });

    //window resize code
    window.addEventListener(
      "resize",
      () => {
        this._OnWindowResize();
      },
      false
    );

    // this.controls = new OrbitControls(
    //   this._camera,
    //   this.threejs_webgl_set.domElement
    // );
    // this.controls.minDistance = 200;
    // this.controls.maxDistance = 800;

    // this.controls.keys = {
    //   LEFT: "ArrowLeft", //left arrow
    //   UP: "", // up arrow
    //   RIGHT: "ArrowRight", // right arrow
    //   BOTTOM: "ArrowDown", // down arrow
    // };

    // this.controls.minPolarAngle = 0;
    new Tower(this._scene);
    new SkyBox(this._scene);
    new Light(this._scene);
    new Ground(this._scene);
    new Mill(this._scene);
    new House(this._scene);
    new House2(this._scene);
    new Tree(this._scene);
    new Rock(this._scene);
    new Bench(this._scene);
    //new Cow(this._scene);

    //light
    //const light = new THREE.AmbientLight(0xffffff, 0.6, 100);
    //const light = new THREE.PointLight(0xffffff, 2, 1000);
    // light.position.set(50, 50, 50);
    // this._scene.add(light);

    // const geometry = new THREE.BoxGeometry();
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // this._scene.add(cube);

    //this._camera.position.z = 5;
    //this.threejs_webgl_set.render(this._scene, this._camera);
    // console.log(globalVarriables);
    this._mixers = [];
    this._previousRAF = null;

    this._RAF();

    //animate();
  }

  // animate() {
  //   requestAnimationFrame(this.animate);
  //   this.controls.update();
  //   this.threejs_webgl_set.render(this._scene, this._camera);
  // };

  //sets window resize
  _OnWindowResize() {
    this._camera.aspect = window.innerWidth / window.innerHeight;
    this._camera.updateProjectionMatrix();
    this.threejs_webgl_set.setSize(window.innerWidth, window.innerHeight);
  }

  _RAF() {
    requestAnimationFrame((t) => {
      if (this._previousRAF === null) {
        this._previousRAF = t;
      }
      this._RAF();
      //this.controls.update();
      this.threejs_webgl_set.render(this._scene, this._camera);
      //this._Step(t - this._previousRAF);
      this._previousRAF = t;
    });
  }
}

export default Village;
