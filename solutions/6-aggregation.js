// BEGIN
export const  calculateSum = (array) => {
    let summa = 0;

    for (let i = 0; i < array.length; i++){
        if (array[i] % 3 === 0){
            summa += array[i];
        }
    }
    return summa;
}
// END