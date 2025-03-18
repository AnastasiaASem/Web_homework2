// BEGIN
export const flatten = (array) =>{
    if (array.length === 0){
        return [];
    }

    let result = [];

    for (let element of array){
        Array.isArray(element) ? result.push(...element) : result.push(element);
    }

    return result;
}
// END

