$(document).ready(function()
{
  $.ajax({
    type: "GET",
    url: "sample.xml",
    dataType: "xml",
    success: function(xml){
      $(xml).find('schedule').each(function(){
      var roomno = $(this).find('roomno').text();
      var price = $(this).find('price').text();
      var status =$(this).find('status').text();
      $("table").append("<tr><td>"+roomno+"<td>"+price+"<td>"+status+"</tr>");


    });
  },
  error: function() {
    alert("An error occurred while processing XML file.");
  }
  });


  $(".one").click(function(){
  $('img',this).toggle();
  $('#form').append('<input class ="roomno" type="hidden" name="roomno[]" value="1"/>  <input  class = "price" type="hidden" name="price[]" value="100"/>  ');
  $('#content > .one').toggleClass("active");
});


$(".two").click(function(){
  $('img',this).toggle();
  $('#form').append('<input class ="roomno" type="hidden" name="roomno[]" value="2"/>  <input class = "price" type="hidden" name="price[]" value="50"/>  ');
  $('#content > .two').toggleClass("active");
});

$(".three").click(function(){
  $('img',this).toggle();
  $('#form').append('<input class ="roomno" type="hidden" name="roomno[]" value="3"/>  <input class = "price" type="hidden" name="price[]" value="180"/> ');
  $('#content > .three').toggleClass("active");
});


$(".five").click(function(){
  $('img',this).toggle();
  $('#form').append('<input class ="roomno" type="hidden" name="roomno[]" value="5"/>  <input class = "price" type="hidden" name="price[]" value="220"/>  ');
  $('#content > .five').toggleClass("active");
});


$(".six").click(function(){
  $('img',this).toggle();
  $('#form').append('<input class ="roomno" type="hidden" name="roomno[]" value="6"/>  <input class = "price" type="hidden" name="price[]" value="150"/>  ')
  $('#content > .six').toggleClass("active");
});


$(".seven").click(function(){
  $('img',this).toggle();
  $('#form').append('<input class ="roomno" type="hidden" name="roomno[]" value="7"/>  <input class = "price" type="hidden" name="price[]" value="250"/>  ');
  $('#content > .seven').toggleClass("active");
});

$(".eight").click(function(){
  $('img',this).toggle();
  $('#form').append('<input class ="roomno" type="hidden" name="roomno[]" value="8"/>  <input class = "price" type="hidden" name="price[]" value="220"/>  ');
  $('#content > .eigth').toggleClass("active");
});

$('#form').submit(function() {
    if ($.trim($(".roomno").val()) === "" || $.trim($(".price").val()) === "") {
        alert('Please Select a Room');
        return false;
    }
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

