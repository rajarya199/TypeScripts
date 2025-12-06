enum Directions {
  North,
  East,
  South,
  West
}  //bydefault it set value 0 to north ,1 to east and so on

let currentDirection: Directions = Directions.North
console.log(currentDirection) // log 0
// currentDirection = 'North'; // Error: "North" is not assignable to type 'Directions'.


enum CardinalDirections {
  North = 1,
  East,
  South,
  West
} // now north is 1 , east is 2 and so on
console.log(CardinalDirections.West);  //logs 4

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
console.log(StatusCodes.Accepted); //logs 202

enum CardinalDirection {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
// logs "North"
console.log(CardinalDirection.North);