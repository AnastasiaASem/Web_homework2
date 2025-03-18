// BEGIN
export const reverse = (array) =>{

    for (let i = 0; i < array.length / 2; i++){
        let suportElem = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = suportElem;
    }

}
// END