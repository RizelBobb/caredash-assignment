//timed array /carousel
var imgs = ['imgs/groupdoctor.png', 'imgs/aidoctor.jpg', 'imgs/vrdoctor.jpg', 'imgs/blackdoctors.jpg' ]
var count = imgs.length;
$(function() {
      setInterval(Slider, 4000);
  });

  function Slider() {
  $("#carousel").show("medium", function() {
     $(this).attr("src", imgs[(imgs.length++) % count]).show();
  });
  }

//when you click one link, it should bring you down to another
$('li:nth-of-type(3),li:nth-of-type(4), li:nth-of-type(5)').click(() => {
   $('html, body').animate({
       scrollTop: $('.mid').offset().top
   }, 1000);
});

$('li:nth-of-type(6)').click(() => {
   $('html, body').animate({
       scrollTop: $('footer').offset().top
   }, 1000);
});
