//                              INSTRUCTIONS:
// Write an event listener that listens for the 'keyup' event on the input field
// The event handler function should update the textContent property of both sections
//  (From MDN: Setting the textContent property on a node removes all of its children and replaces 
//   them with a single text node with the given value.)


let input = document.getElementById("message");
let boxOne = document.getElementById("one");    //Added after testing (line 10)
let boxTwo = document.getElementById("two");    //Added after testing (line 10)

//                  ***********     TEST    ****************
// let keyup = () => console.log("input was clicked");
// input.addEventListener("click", keyup);
// Code Works. "input was clicked" logged to console when input field is clicked; multiple clicks = multiple console.logs.

input.addEventListener("keyup", function(event) {
    // console.log("Yay!");      Code works.
    console.log(event.target.value);        //Goal: to console.log whatever is typed 
    boxOne.innerHTML = event.target.value;
    boxTwo.innerHTML = event.target.value;
});
