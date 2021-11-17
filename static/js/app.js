// from data.js
var tableData = data;

// Calling function to append table to site.

Insert_Data(data)

// Create variables for adding eventlistener and filter.

const searchInput = document.getElementById("datetime");
const rows = document.querySelectorAll("tbody tr");

// Adding event listener

searchInput.addEventListener("keyup", function (event) {

// Converting to lower case

  const q = event.target.value.toLowerCase();

// Looping through data to filter results based on input in the date field and updates table dynamically while writing.

  rows.forEach((row) => {

    row.querySelectorAll("td")[0].textContent.toLowerCase().startsWith(q)

      ? null
      : (row.style.display = "none");

  });
});


// Looping through data to filter results based on input in the shape field and updates table dynamically while writing.



const searchInput1 = document.getElementById("shape");
const rows1 = document.querySelectorAll("tbody tr");

searchInput1.addEventListener("keyup", function (event) {

  const q = event.target.value.toLowerCase();
  rows1.forEach((row) => {

    row.querySelectorAll("td")[4].textContent.toLowerCase().startsWith(q)

      ? null
      : (row.style.display = "none");

  });
});

// Looping through data to filter results based on input in the city field and updates table dynamically while writing.



const searchInput2 = document.getElementById("city");
const rows2 = document.querySelectorAll("tbody tr");

searchInput2.addEventListener("keyup", function (event) {

  const q = event.target.value.toLowerCase();
  rows2.forEach((row) => {

    row.querySelectorAll("td")[1].textContent.toLowerCase().startsWith(q)

      ? (null)
      : (row.style.display = "none");

  });
});


// Looping through data to filter results based on input in the state field and updates table dynamically while writing.


const searchInput3 = document.getElementById("state");
const rows3 = document.querySelectorAll("tbody tr");

searchInput3.addEventListener("keyup", function (event) {

  const q = event.target.value.toLowerCase();
  rows3.forEach((row) => {

    row.querySelectorAll("td")[2].textContent.toLowerCase().startsWith(q)

      ? (null)
      : (row.style.display = "none");

  });
});


// Looping through data to filter results based on input in the country field and updates table dynamically while writing.


const searchInput4 = document.getElementById("country");
const rows4 = document.querySelectorAll("tbody tr");


searchInput4.addEventListener("keyup", function (event) {

  const q = event.target.value.toLowerCase();
  rows4.forEach((row) => {

    row.querySelectorAll("td")[3].textContent.toLowerCase().startsWith(q)

      ? (null)
      : (row.style.display = "none");

  });
});

//Function to instert data to table

function Insert_Data() {
  var table = document.getElementById("table-contents");
  table.innerHTML=""

  for (var i = 0; i < data.length; i++){

    var row = `<tr>
                    <td>${data[i].datetime}</td>  
                    <td>${data[i].city}</td>   
                    <td>${data[i].state}</td>   
                    <td>${data[i].country}</td>   
                    <td>${data[i].shape}</td>   
                    <td>${data[i].durationMinutes}</td>   
                    <td>${data[i].comments}</td>                 
              </tr>`
              table.innerHTML += row
  }

}

