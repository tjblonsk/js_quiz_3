//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];

// Find the largest number and second largest number
// Then subtract the difference.
// bigDiff(array)
//  [3, 6, 9, 12] => 3
//  [9, 20, 11, 12] => 8

bigDiff = function(array){
  var a = array.sort(function(a,b){
    return a-b;
  });
    return a[a.length - 1] - a[a.length - 2];
};

// return the average of the 2 or 3 numbers in the middle of the array
// (2 if the array has an even number of elements)
// (3 if the array has an odd number of elements).
// averageMedian(array)
//  [2, 6, 9, 11] => 7.5
//  [9, 8, 2, 4, 7] => 4.67
averageMedian = function(array){
 var a = array.sort(function(a,b){
    return a-b;
  });
 if(a.length % 2 === 0){
  return (a[(a.length / 2)] + a[(a.length / 2 - 1)])/2;
 }else{
  var x = a[((a.length - 1) / 2)];
  var y = a[a.indexOf(x) - 1];
  var z = a[a.indexOf(x) + 1];
  return (parseFloat(x) + parseFloat(y) + parseFloat(z))/ 3.0;
 }
};

// return true if you can split the array into parts
// where the sum of one portion equals the sum of the other portion.
// canBalance(array)
//  [1, 2, 1, 1, 1] => true
//  [2, 1, 1, 2, 1] => false
//  [3, 4, 1, 2, 3, 1] => true

// Returns the number of times 2 or more of the same number appear sequentially.
// countClumps(array)
//  [2, 1, 1, 1, 1, 3, 3, 3, 1] => 2
//  [9, 3, 3, 4, 4, 4, 6, 7, 7, 7] => 3

countClumps = function(array){
  counts = {};
  multiples = [];
  for(var i = 0; i< array.length; i++) {
    var num = arr[i];
    counts[num] = counts[num] ? counts[num]+1 : 1;
      for(var x = 0; x < counts.length; x++){
    if(counts[x] > 1){
      // console.log(counts[x]);
      multiples.push(counts[x]);
    }
  }
}
  return multiples.length;
};





