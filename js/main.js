
var todo = function () {

	// variables
	var $body = $('body'),
		bodyBg = '#2c3e50',
		bodyBgDefault = 'white',
		$ul = $('ul'),
		$todoText = null,
		$input = $('input[type="text"]');

	// todo
	$('.header__btn').on('click', function () {
		$body.addClass('open');
		$body.css('background', bodyBg);
	});

	// if list of todo clicked
	$ul.on('click', 'li', function () {
		if ($(this).hasClass('todo__item--done')) {
			$(this).removeClass('todo__item--done');
			$(this).find('.todo__item--checked').removeClass('todo__item--checked-done');
		} else {
			$(this).addClass('todo__item--done');
			$(this).find('.todo__item--checked').addClass('todo__item--checked-done');
		}
	});

	// if todo btn clicked
	$('.todoInput__form button').on('click', function () {
		$todoText = $('body').find('input[type="text"]').val();
		if ($todoText !== '') {
			$ul.append('<li class="todo__item"><span class="todo__item--checked"></span>' + $todoText + '</li>');
			$body.removeClass('open');
			$body.css('background', bodyBgDefault);
			$input.val('');
		}
	});

	// if enter clicked
	$input.keypress(function (e) {
		$todoText = $(this).val();
		if (e.which === 13 && $todoText !== '') {
			$ul.append('<li class="todo__item"><span class="todo__item--checked"></span>' + $todoText + '</li>');
			$body.removeClass('open');
			$body.css('background', bodyBgDefault);
			$input.val('');
		}
	});

	// if escape clicked
	$(document).keyup(function (e) {
		if (e.keyCode == 27) {
			$body.removeClass('open');
			$body.css('background', bodyBgDefault);
			$input.val('');
		}
	});

	// if body clicked
	$('.overlay').on('click', function () {
		if ($body.hasClass('open')) {
			$body.removeClass('open');
			$body.css('background', bodyBgDefault);
		}
	});

};

todo();
