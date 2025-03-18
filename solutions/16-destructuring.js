const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
export const getTheNearestLocation = (locations, nowCoordinates) => {
 if(locations.length === 0){
  return null;
 }

 let nearLocatoin;
 let distantceToNearLocation = 10**10;
 let coordinatesOfNearLocation;

 for (let location of locations){

  let [nameOfLocation, coordinatesOfLocation] = location;
  let distance = getDistance(coordinatesOfLocation,nowCoordinates);

  if(distance < distantceToNearLocation){
    distantceToNearLocation = distance;
    nearLocatoin = nameOfLocation;
    coordinatesOfNearLocation = coordinatesOfLocation;
  }
 }

 return [nearLocatoin,coordinatesOfNearLocation];
}
// END
