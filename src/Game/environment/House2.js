import { FBXLoader } from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';

class House2 {
    constructor(scene){
        this._init(scene)
    }

    _init(scene){
        const loader = new FBXLoader();
        let randomNumber = Math.random();

        loader.setPath('../../../assets/Models/');

        loader.load('House_3.fbx', (House) => {
            //House.scale.setScalar(0.2);
            House.scale.set(0.2,0.2,0.2);
            House.rotation.y = 0;
            House.traverse(c => {
                c.castShadow = true;
            });

            //  let tree_1 = House.clone();
            //     tree_1.position.set(50, 0, 40); // House Position 
            //     scene.add(tree_1);

            for (let i = 0; i <= 20; i++) {

                //tree 1 clone
                // let house_1 = House.clone();
                // house_1.position.set(40, 0, i * randomNumber); // House Position 
                // scene.add(house_1);

                //tree 2 clone
                // let house_2 = House.clone();
                // house_2.position.set(randomNumber, 0, 5); // House Position 
                // scene.add(house_2);

                // tree 3 clone
                var a = Math.floor(Math.random()*800);
                var b = Math.floor(Math.random()*7);
                var c = Math.floor(Math.random()*850);
                
                let house_3 = House.clone();
                house_3.position.set(i*a, 0, c); // House Position 
                scene.add(house_3);

                let house_4 = House.clone();
                house_4.position.set(i*-a, 0, -c); // House Position 
                scene.add(house_4);

                // tree 4 clone
                // let house_4 = House.clone();
                // house_4.position.set(-100, 0, i * 40); // House Position 
                // scene.add(house_4);
           }
        });
    }
}

export default House2;