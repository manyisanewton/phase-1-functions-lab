// Function to calculate distance in blocks from headquarters (assumed at 42nd Street)
function distanceFromHqInBlocks(street) {
    const hq = 42;
    return Math.abs(street - hq);
  }
  
  // Function to convert block distance to feet (1 block = 264 feet)
  function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
  }
  
  // Function to calculate distance travelled in feet between two points
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
  }
  console.log(distanceTravelledInFeet())
  
  // Function to calculate fare price
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // Free for the first 400 feet
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // $0.02 per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat rate of $25 for distances over 2000 feet
    } else {
      return 'cannot travel that far'; // Beyond 2500 feet is not allowed
    }
  }
  
  
  
  // Call the distanceFromHqInBlocks function
console.log(distanceFromHqInBlocks(43)); 
console.log(distanceFromHqInBlocks(50)); 
console.log(distanceFromHqInBlocks(34)); 

// Call the distanceFromHqInFeet function
console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50)); 
console.log(distanceFromHqInFeet(34)); 

// Call the distanceTravelledInFeet function
console.log(distanceTravelledInFeet(43, 48)); 
console.log(distanceTravelledInFeet(50, 60));
console.log(distanceTravelledInFeet(34, 28)); 

// Call the calculatesFarePrice function
console.log(calculatesFarePrice(43, 44)); 
console.log(calculatesFarePrice(34, 32)); 
console.log(calculatesFarePrice(50, 58)); 
console.log(calculatesFarePrice(34, 24)); 

 
  