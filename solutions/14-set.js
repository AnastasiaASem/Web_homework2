// BEGIN
export default function countUniqChars(sentence){
    if (sentence.length === 0){
        return 0;
    }
    
    let array = sentence.split('');
    let uniqArray = [];

    for (let i=0; i < array.length; i++){
        if(! uniqArray.includes(array[i])){
            uniqArray.push(array[i]);
        }
    }
    return uniqArray.length;
}
// END