import { FBXLoader } from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';

class Tower {
    constructor(scene){
        this._init(scene)
    }

    _init(scene){
        const loader = new FBXLoader();

        loader.setPath('../../../assets/Models/');

        loader.load('Bell_Tower.fbx', (TowerModel) => {
            //TowerModel.scale.setScalar(0.2);
            TowerModel.scale.set(0.2,0.2,0.2);
            TowerModel.rotation.y = 32;
            TowerModel.traverse(c => {
                c.castShadow = true;
            });

             let tree_1 = TowerModel.clone();
                tree_1.position.set(50, 0, 40); // Tower Position 
                scene.add(tree_1);

            //for (let i = 0; i <= 10; i++) {

                // tree 1 clone
                // let tree_1 = TowerModel.clone();
                // tree_1.position.set(10, 7, i * 10); // Tower Position 
                // scene.add(tree_1);

                //tree 2 clone
                // let tree_2 = TowerModel.clone();
                // tree_2.position.set(-10, 0, i * 50); // Tower Position 
                // scene.add(tree_2);

                // // tree 3 clone
                // let tree_3 = TowerModel.clone();
                // tree_3.position.set(20, 0, i * 40); // Tower Position 
                // scene.add(tree_3);

                // // tree 4 clone
                // let tree_4 = TowerModel.clone();
                // tree_4.position.set(-20, 0, i * 40); // Tower Position 
                // scene.add(tree_4);
           // }
        });
    }
}

export default Tower;