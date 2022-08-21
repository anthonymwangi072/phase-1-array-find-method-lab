// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
function superbowlWin(record){
   for(const array of record){
    if(array.result === "W"){
        return array.year
    }
   }
}
const sadReality = [{result: "N/A"}];