// BEGIN
export default function getTotalAmount (wallet, currency){
    if (wallet.length === 0){
        return null;
    }
    let resultSumma = 0;
    for (let element of wallet){
        let [currentСurrency, currentSumma ] = element.split(' ');

        if (currentСurrency  === currency){
            resultSumma += currentSumma;
        }
    }

    return resultSumma;
}
// END