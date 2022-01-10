class GlobalVariables{
    constructor(){
        //camera set varriable
        this.fov = 35;
        this.aspect = 1920 / 1080;
        this.near = 1.0;
        this.far = 1000.0;
    }
}

let globalVarriables = new GlobalVariables;

export default globalVarriables;