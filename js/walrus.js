$(function() {
  $("h1").click(function() {
    alert("This is a header!")
  });

  $("p").click(function() {
    alert("This is a paragraph!")
  });

  $("li").dblclick(function() {
    alert("This is a famous Walrus!!!")
  });

  $("img").hover(function() {
    confirm("Would you like to ride a walrus?")
  });
});
