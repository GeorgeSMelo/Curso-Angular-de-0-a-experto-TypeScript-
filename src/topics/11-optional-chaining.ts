

export interface Passenger{

    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: "George",
}
const passenger2: Passenger = {
    name: "Jorge",
    children:[ "Nata", "Lola"]
}

const printChildren = ( passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, howManyChildren);
}

printChildren( passenger2)