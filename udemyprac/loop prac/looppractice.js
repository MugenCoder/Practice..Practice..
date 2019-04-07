//var num = 1;

//while(num <= 10) {
  //  console.log(num);
    //num += 2;
// //}

// //set var
// var num = 1

// //set conditions;
// //number [1] is less than or equal to the number 20
// while(num <= 20) {
//     //if the number is a modal of 4 and triple equals 0
//     if(num % 4 === 0) {
//         //then console.log that number of the % 4 that === 0
//         console.log(num);
//     }
//     //then add +1 to that console.log number
//     num++;
// // }

// // while(num)
// <script>
// function myFunction() {
//   // Declare variables
//   var input, filter, ul, li, a, i, txtValue;
//   input = document.getElementById('myInput');
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("myUL");
//   li = ul.getElementsByTagName('li');

//   // Loop through all list items, and hide those who don't match the search query
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }
// </script>


$(document).ready(function() { 
  var api_url = 'https://api.linkpreview.net' 
  var key = '5c49bfe0ca4f12aa91733db82d84241f81900e5342971' 

  $(".content a").each(function( index, element ) { 
    $.ajax({ url: api_url + "?key=" + key + " &q=" + $( this ).text(), contentType: "application/json", 
    dataType: 'json', 
    success: function(result){ 
      console.log(result); 
    } 
  }) 
}); 
});

    