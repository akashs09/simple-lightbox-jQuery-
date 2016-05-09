//Problem: User when clickin on any of the images goes to a dead end
//Soln: Create overlay with large img - Lightbox
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//An image to overlay
$overlay.append($image);

//caption to overlay
$overlay.append($caption);

//Add Overlay
$("body").append($overlay);
  //An image
  //a caption


//1. Capture click event on a link to an image
$("#imageGallery a").click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //update overlay with the image linked in the link
  $image.attr("src",imageLocation);
  
  //show overlay
  $overlay.show();
  
  

  //1.1 Show the overlay
  //1.2 update overlay with the image linked in the link
  //1.3 Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
  });
  //2 Add overlay
//2.2 An image
//3. When overlay is clicked
  // 3.1 Hide the overlay
  $overlay.click(function(){
    $overlay.hide();
  });