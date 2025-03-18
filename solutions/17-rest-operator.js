// BEGIN
export const getMax = (array) =>{
    if(array.length === 0){
        return null;
    }

    let [first, ...rest] = array;
    let maximal = first;

    for (let element of rest){
        if(element > maximal){s
            maximal = element;
        }
    }

    return maximal;
}
// END