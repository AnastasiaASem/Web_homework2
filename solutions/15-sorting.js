// BEGIN
export default function bubbleSort (array) {
    let sizeArray = array.length;
    if (sizeArray === 0){
        return [];
    }
    for (let i = 0; i < sizeArray-1;i++){
        for(let j = 0; j < sizeArray -1 - i; j++){
            if (array[j] > array[j+1]){
                let a = array[j];
                array[j] = array[j+1];
                array[j+1] = a;
            }
        }
    }
    return array;
}
// END