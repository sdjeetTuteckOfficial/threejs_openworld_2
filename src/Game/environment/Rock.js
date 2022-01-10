import { FBXLoader } from "https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js";

class Rock {
  constructor(scene) {
    this._init(scene);
  }

  _init(scene) {
    const loader = new FBXLoader();
    let randomNumber = Math.random();

    loader.setPath("../../../assets/Models/");

    loader.load("Rock_1.fbx", (Rock) => {
      //Rock.scale.setScalar(0.0000000000000001);
      Rock.scale.set(0.2, 0.2, 0.2);
      //Rock.rotation.y = 0;
    //   const scaleFactor = 0.001;
    //   Rock.scale.multiplyScalar(scaleFactor);
      Rock.traverse((c) => {
        c.castShadow = true;
      });

      //  let tree_1 = Rock.clone();
      //     tree_1.position.set(50, 0, 40); // Rock Position
      //     scene.add(tree_1);

      for (let i = 0; i <= 20; i++) {
        //tree 1 clone
        // let house_1 = Rock.clone();
        // house_1.position.set(40, 0, i * randomNumber); // Rock Position
        // scene.add(house_1);

        //tree 2 clone
        // let house_2 = Rock.clone();
        // house_2.position.set(randomNumber, 0, 5); // Rock Position
        // scene.add(house_2);

        // tree 3 clone
        var a = Math.floor(Math.random() * 100);
        var b = Math.floor(Math.random() * 7);
        var c = Math.floor(Math.random() * 250);

        let house_3 = Rock.clone();
        house_3.position.set(i * a, 0, c); // Rock Position
        scene.add(house_3);

        let house_4 = Rock.clone();
        house_4.position.set(i * -a, 0, -c); // Rock Position
        scene.add(house_4);

        // tree 4 clone
        // let house_4 = Rock.clone();
        // house_4.position.set(-100, 0, i * 40); // Rock Position
        // scene.add(house_4);
      }
    });
  }
}

export default Rock;
