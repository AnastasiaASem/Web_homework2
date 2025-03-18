// BEGIN
export const swap =(array) =>{

    if (array.length < 2) {
        return array;
    }

    let firstEllement = array[0];
    array[0] = array[array.length -1];
    array[array.length - 1] = firstEllement;
    
    return array;
}
// END