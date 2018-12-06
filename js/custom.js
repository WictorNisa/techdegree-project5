//
// function myFunction() {
//     // Declare variables
//     var input, filter, i, txtValue;
//     input = document.getElementById('search');
//     filter = input.value.toUpperCase();
//     img = document.getElementById("imga");
//
//
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }
$(document).ready(function() {
$('#search').hideseek({
highlight: true
});
});
