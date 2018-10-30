$(document).ready(function()
{
  $.ajax({
    type: "GET",
    url: "sample.xml",
    dataType: "xml",
    success: parseXml
  });
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

function parseXml(xml)
{
  $("#main").html("<ul id='content' data-role='listview' data-inset='true'></ul>");
  $(xml).find("item").each(function()
  {
    $("#content").append("<li><a href='"+$(this).find("link").text()+"'><img src='"+$(this).find("image").text()+"'/><h2>"+$(this).find("title").text()+"</h2><p>"+$(this).find("title").text()+"</p></a></li>");
  });  
}