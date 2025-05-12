$(document).ready(function () {

  $('.menu-toggle').click(function () {
    $('.menu-toggle').toggleClass('active');
    $('nav').toggleClass('active');
    $('nav ul').toggleClass('showing');
  });



  ClassicEditor.create(document.querySelector('#body'))
    .then(editor => {
      console.log(editor);
    })
    .catch(error => {
      console.error(error);
    });
});
