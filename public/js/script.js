//TODO: do this with handlebars
function generateNewCard() {
  var newRow = $("<div class='row'></div>");
  var trigger = $("<div contenteditable class='col-md-2 trigger'>Trigger</div>");
  var response = $("<div contenteditable class='col-md-10 response'>Response</div>");

  newRow.append(trigger).append(response);
  trigger.bind("click", autoclearText);
  response.bind("click", autoclearText);
  return newRow;
}

function responseKeyDown() {
  if (event.keyCode === 13) {
    event.preventDefault();
    addCard();
  }
}
function autoclearText() {
  if ($(this).text() === "Trigger" || $(this).text() === "Response") {
    $(this).text("");
  }
}

function addCard() {
  var newPost = $("<li>");
  newPost.html(generateNewCard());
  debugger
  $("ul.notecards").append(newPost);
  newPost.on("keydown", responseKeyDown);
  newPost.bind("click", autoclearText);
}

$(".add-card").click(function () {
  addCard();
});


$(".trigger, .response").on("keydown", function(event) {
  responseKeyDown();
});

//autoclears the default text
$(".trigger, .response").bind("click", autoclearText()) ;

$("#switch-view-btn").click(function() {
  $(".notecards-wrapper").toggle();
  $(".review-wrapper").toggle();
});

$("ul.reviewcards li").click(function() {
  //TODO: add turning animation here
  $(".review-trigger").toggle();
  $(".review-response").toggle();
});