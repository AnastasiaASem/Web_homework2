// BEGIN
export default function getSuperSeriesWinner (array) {
    let canada = 0;
    let ussr = 0;

    for( let play of array){
        if (play[0] > play[1]){
            canada +=1;
        }
        if (play[0] < play[1]){
            ussr +=1;
        }
    }

    if( ussr > canada){
        return 'ussr';
    }

    if( ussr < canada){
        return 'canada';
    }

    if( ussr === canada){
        return null;
    }
}
// END