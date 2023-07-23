// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

  // Clicking on a save button will save its corresponding text box into local storage
  // using the id of its parent as a key
  $('.saveBtn').click(function() {
    localStorage.setItem($(this).parent().attr('id'), $(this).parent().children('.description').val())
  })


  // Each hour will change color on load in depending on whether it is in the past,
  // present, or the future of the current hour of the day
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

  // The text box of every hour will load in with text according to what
  // the user has previously saved in their respective slots
  
  $('#text-9').text(localStorage.getItem('hour-9'))
  $('#text-10').text(localStorage.getItem('hour-10'))
  $('#text-11').text(localStorage.getItem('hour-11'))
  $('#text-12').text(localStorage.getItem('hour-12'))
  $('#text-1').text(localStorage.getItem('hour-1'))
  $('#text-2').text(localStorage.getItem('hour-2'))
  $('#text-3').text(localStorage.getItem('hour-3'))
  $('#text-4').text(localStorage.getItem('hour-4'))
  $('#text-5').text(localStorage.getItem('hour-5'))

  // The current date will be displayed at the top of the page
  $('#currentDay').text(dayjs().format("MM-DD-YYYY"))
});
