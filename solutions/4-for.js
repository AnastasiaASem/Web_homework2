// BEGIN
export default function addPrefix (array, prefix='null') {
    let arrayLength = array.length;
    let result = [];

    if (prefix !== "null"){
        for (let i = 0 ; i< arrayLength; i++){
            result.push(prefix + ' ' + array[i]);
        }
        return result;
    }
    
    return array;
}
// END