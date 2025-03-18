// BEGIN
export default function calculateAverage (array) {
    let lengthArray = array.length;
    let summa = 0;

    if (lengthArray === 0){
        return null;
    }
    
    for (let i = 0; i < lengthArray; i++){
        summa += array[i];
    }

    let averageValue = summa / lengthArray;
    return averageValue;
}
// END