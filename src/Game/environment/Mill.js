import { FBXLoader } from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';

class Mill {
    constructor(scene){
        this._init(scene)
    }

    _init(scene){
        const loader = new FBXLoader();

        loader.setPath('../../../assets/Models/');

        loader.load('Mill.fbx', (MillModel) => {
            //MillModel.scale.setScalar(0.2);
            MillModel.scale.set(0.2,0.2,0.2);
            MillModel.traverse(c => {
                c.castShadow = true;
            });

             let tree_1 = MillModel.clone();
                tree_1.position.set(300, 0, 200); // Mill Position 
                tree_1.rotation.y = 30;
                scene.add(tree_1);

            //for (let i = 0; i <= 10; i++) {

                // tree 1 clone
                // let tree_1 = MillModel.clone();
                // tree_1.position.set(10, 7, i * 10); // Mill Position 
                // scene.add(tree_1);

                //tree 2 clone
                // let tree_2 = MillModel.clone();
                // tree_2.position.set(-10, 0, i * 50); // Mill Position 
                // scene.add(tree_2);

                // // tree 3 clone
                // let tree_3 = MillModel.clone();
                // tree_3.position.set(20, 0, i * 40); // Mill Position 
                // scene.add(tree_3);

                // // tree 4 clone
                // let tree_4 = MillModel.clone();
                // tree_4.position.set(-20, 0, i * 40); // Mill Position 
                // scene.add(tree_4);
           // }
        });
    }
}

export default Mill;