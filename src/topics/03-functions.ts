


function addNumbres(a: number, b: number) {

    return a + b;

}

const addNumbresArrow = (a: number, b: number ) =>{
    return `${a + b}`;
}

function multiply( firsNumber: number, secondNumber?: number, base: number = 2){
    return firsNumber * base;

}

// const result: number = addNumbres(1,2);
// const result2: string = addNumbresArrow(1, 2);
// const multiplyResult: number = multiply(5);
// console.log({result, result2, multiplyResult})

interface Character{
    name: string;
    hp: number;
    showHp: () => void;
}
const healCharacter = ( character:Character , amount: number ) => {

    character.hp += amount;

}

const strider: Character = {
    name: 'George',
    hp: 50,
    showHp(){
        console.log( `Puntos de vidad ${ this.hp}`);
    }
}

healCharacter( strider, 10);
strider.showHp()



export{};