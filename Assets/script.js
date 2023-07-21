// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// var currentDate = dayjs(undefined, 'MM-DD-YYYY')
// console.log(currentDate)
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $(".saveBtn").click(function() {
    var divID = $(this).parent().attr('id')
    console.log(parent)
  })
  

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  if (dayjs().hour(7).isBefore(dayjs())){
    $('#hour-7').addClass('past')
  } else if (dayjs().hour(7).isSame(dayjs())) {
    $('#hour-7').addClass('present')
  } else if (dayjs().hour(7).isAfter(dayjs())) {
    $('#hour-7').addClass('future')
  }


  if (dayjs().hour(8).isBefore(dayjs())){
    $('#hour-8').addClass('past')
  } else if (dayjs().hour(8).isSame(dayjs())) {
    $('#hour-8').addClass('present')
  } else if (dayjs().hour(8).isAfter(dayjs())) {
    $('#hour-8').addClass('future')
  }

  if (dayjs().hour(9).isBefore(dayjs())){
    $('#hour-9').addClass('past')
  } else if (dayjs().hour(9).isSame(dayjs())) {
    $('#hour-9').addClass('present')
  } else if (dayjs().hour(9).isAfter(dayjs())) {
    $('#hour-9').addClass('future')
  }

  if (dayjs().hour(10).isBefore(dayjs())){
    $('#hour-10').addClass('past')
  } else if (dayjs().hour(10).isSame(dayjs())) {
    $('#hour-10').addClass('present')
  } else if (dayjs().hour(10).isAfter(dayjs())) {
    $('#hour-10').addClass('future')
  }

  if (dayjs().hour(11).isBefore(dayjs())){
    $('#hour-11').addClass('past')
  } else if (dayjs().hour(11).isSame(dayjs())) {
    $('#hour-11').addClass('present')
  } else if (dayjs().hour(11).isAfter(dayjs())) {
    $('#hour-11').addClass('future')
  }

  if (dayjs().hour(12).isBefore(dayjs())){
    $('#hour-12').addClass('past')
  } else if (dayjs().hour(12).isSame(dayjs())) {
    $('#hour-12').addClass('present')
  } else if (dayjs().hour(12).isAfter(dayjs())) {
    $('#hour-12').addClass('future')
  }

  if (dayjs().hour(13).isBefore(dayjs())){
    $('#hour-1').addClass('past')
  } else if (dayjs().hour(13).isSame(dayjs())) {
    $('#hour-1').addClass('present')
  } else if (dayjs().hour(13).isAfter(dayjs())) {
    $('#hour-1').addClass('future')
  }

  if (dayjs().hour(14).isBefore(dayjs())){
    $('#hour-2').addClass('past')
  } else if (dayjs().hour(14).isSame(dayjs())) {
    $('#hour-2').addClass('present')
  } else if (dayjs().hour(14).isAfter(dayjs())) {
    $('#hour-2').addClass('future')
  }

  if (dayjs().hour(15).isBefore(dayjs())){
    $('#hour-3').addClass('past')
  } else if (dayjs().hour(15).isSame(dayjs())) {
    $('#hour-3').addClass('present')
  } else if (dayjs().hour(15).isAfter(dayjs())) {
    $('#hour-3').addClass('future')
  }

  if (dayjs().hour(16).isBefore(dayjs())){
    $('#hour-4').addClass('past')
  } else if (dayjs().hour(16).isSame(dayjs())) {
    $('#hour-4').addClass('present')
  } else if (dayjs().hour(16).isAfter(dayjs())) {
    $('#hour-4').addClass('future')
  }

  if (dayjs().hour(17).isBefore(dayjs())){
    $('#hour-5').addClass('past')
  } else if (dayjs().hour(17).isSame(dayjs())) {
    $('#hour-5').addClass('present')
  } else if (dayjs().hour(17).isAfter(dayjs())) {
    $('#hour-5').addClass('future')
  }

  if (dayjs().hour(18).isBefore(dayjs())){
    $('#hour-6').addClass('past')
  } else if (dayjs().hour(18).isSame(dayjs())) {
    $('#hour-6').addClass('present')
  } else if (dayjs().hour(18).isAfter(dayjs(), 'hour')) {
    $('#hour-6').addClass('future')
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format("MM-DD-YYYY"))
});