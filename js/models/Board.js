export default class Board{ //Tablero

    constructor(width,height){
        this.width = width;
        this.height = height;
        this.playing = false;
        this.game_over = false;
        this.bars = [];
        this.ball = null;
    }

    get getWidth(){
        return this.width;
    }

    get getHeight(){
        return this.height;
    }

    get elements(){

        let elements = this.bars.map((element)=>element); //Paso una copia y no la referencia
        //elements.push(this.ball)
        return elements;

    }

}