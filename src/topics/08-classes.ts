


export class Person {
    // public name: string ;
    // private address: string;
    
    constructor(
        public name: string, 
        private address: string) {}
}

export class Hero extends Person {

}


const ironman = new Hero ('Ironman','New York');

console.log(ironman)