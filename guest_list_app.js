//End Array button
var guestList = [];

document.getElementById("end_array_button").addEventListener("click", function(){
  var output = document.getElementById("output");
  var guestName = document.getElementById("guests_name").value;
  guestList.push(guestName);
  displayList();


//Start Array button
document.getElementById("start_array_button").addEventListener("click", function(){
  var guestName = document.getElementById("guests_name").value;
  guestList.unshift(guestName);
  displayList();
});

//remove_first_button
document.getElementById("remove_first_button").addEventListener("click", function(){
  guestList.shift();
  displayList();
});

//remove_last_button
document.getElementById("remove_last_button").addEventListener("click", function(){
  guestList.pop();
  displayList();
});
//reverse_list_button
document.getElementById("reverse_list_button").addEventListener("click", function(){
  guestList.reverse();
  displayList();
});

function displayList(){
  document.getElementById("output").innerHTML = null;   //value tik tam ka ivedi pats
  guestList.forEach(function(guest) {
    let guestItem = document.createElement("li");
    guestItem.textContent = guest;
    document.getElementById("output").appendChild(guestItem);
  });
};
