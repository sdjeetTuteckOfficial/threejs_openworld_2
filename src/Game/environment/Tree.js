import { FBXLoader } from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';

class Tree {
    constructor(scene){
        this._init(scene)
    }

    _init(scene){
        const loader = new FBXLoader();
        //let randomNumber = Math.random();

        loader.setPath('../../../assets/Models/');

        loader.load('Tree.fbx', (Tree) => {
            Tree.scale.setScalar(10);
            //Tree.scale.set(0.2,0.2,0.2);
            //Tree.rotation.y = 0;
            Tree.traverse(c => {
                c.castShadow = true;
            });

            //  let tree_1 = Tree.clone();
            //     tree_1.position.set(50, 0, 40); // Tree Position 
            //     scene.add(tree_1);

            for (let i = 0; i <= 500; i++) {

                //tree 1 clone
                // let house_1 = Tree.clone();
                // house_1.position.set(40, 0, i * randomNumber); // Tree Position 
                // scene.add(house_1);

                //tree 2 clone
                // let house_2 = Tree.clone();
                // house_2.position.set(randomNumber, 0, 5); // Tree Position 
                // scene.add(house_2);

                // tree 3 clone
                var a = Math.floor(Math.random()*100);
                var b = Math.floor(Math.random()*7);
                var c = Math.floor(Math.random()*600);
                
                let tree_3 = Tree.clone();
                tree_3.position.set(i*a, 0, c); // Tree Position 
                scene.add(tree_3);

                // tree 4 clone
                let tree_4 = Tree.clone();
                tree_4.position.set(i*-a*25, 0, -c); // Tree Position 
                scene.add(tree_4);
           }
        });
    }
}

export default Tree;