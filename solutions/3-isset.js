// BEGIN
export const get = (array, index, defaultValue = null) =>{
    if(index >= 0 && index < array.length){
        let element = array[index];
        return element;
    }        

    return defaultValue;
}
// END