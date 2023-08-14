
function popFunc() {
    let arr = ["shift", "splice", "filter", "pop"];
 
    // Popping the last element from the array
    let x = arr.pop();
    console.log("Removed element: " + x);
    console.log("Remaining elements: " + arr);
}
// popFunc()


function shiftFunc() {
  let arr =[1,2,3,4,5]
  let y = arr.shift();
  console.log('first element remove' + y)
   console.log('first element remove' , y)
}
// shiftFunc()
function unShiftFunc(){
  let arr =[1,2,3,4,5]
  let r =arr.unshift(0)
  console.log('adding the element at first index',r)
  console.log('adding the element at first index',arr)
}
// unShiftFunc()

function pushFunc(){
  let arr =[1,2,3,4,5]
  let e =arr.push(6)
  console.log('adding the element at last index',e)
  console.log('adding the element at last index',arr)
}
// pushFunc()




function spliceFunc(){
  let arr =[1,2,3,4,5,6,7,8]
  let remove =arr.splice(4,2)
  console.log('remove  the element at particular index',remove)
  console.log('remove the element at particular index',arr)
}
// spliceFunc()


function spliceAddFunc(){
  let arr =[1,2,3,4,5,6,7,8,9]
  let add =arr.splice(4,0,30,50)
  console.log('adding the element specific  index',add)
  console.log('new adding elment array',arr)
  
}
 spliceAddFunc()
