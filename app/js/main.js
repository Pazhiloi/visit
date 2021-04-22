$(function () {
  	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

   $(".menu__link").on("click", function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
  window.onscroll = function showHeader() {
    var header = document.querySelector('.header__top');
    if(window.pageYOffset > 200) {
      header.classList.add('header__fixed');
    } else{
      header.classList.remove('header__fixed');
    }
   }
  $('.menu__btn').on('click', function () {
  $('.menu__list').toggleClass('menu__list--active')
});
   $('.about__items').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });
  
});
