$(document).ready(function()
{
  $.ajax({
    type: "GET",
    url: "sample.xml",
    dataType: "xml",
    success: function(xml){
      $(xml).find('schedule').each(function(){
      var one = $(this).find('roomno').text();
      var two = $(this).find('price').text();
      var three =$(this).find('status').text();
      $("table").append("<tr><td>"+one+"<td>"+two+"<td>"+three+"</tr>");


    });
  },
  error: function() {
    alert("An error occurred while processing XML file.");
  }
  });


  $(".one").click(function(){
  $('img',this).toggle();


});
$(".two").click(function(){
  $('img',this).toggle();
});
$(".three").click(function(){
  $('img',this).toggle();
});

 $(".four").click(function(){
  $('img',this).toggle();


});
$(".five").click(function(){
  $('img',this).toggle();
});

$(".six").click(function(){
  $('img',this).toggle();
});

$(".seven").click(function(){
  $('img',this).toggle();
});
$(".eight").click(function(){
  $('img',this).toggle();
});






});
// $('form').on('submit', function (e) {

//                 e.preventDefault();

//                 $.ajax({
//                     type: 'get',
//                     url: 'submit.html',
//                     data: $('form').serialize(),
//                     success: function (response) {
//                         //$('form')[0].reset();
//                        // $("#feedback").text(response);
//                         if(response=="True") {
//                             $('form')[0].reset();
//                             $("#feedback").text("Your information has been stored.");
//                         }
//                         else
//                             $("#feedback").text(" Some Error has occured Errror !!! ID duplicate");
//                     }
//                 });

//             });

