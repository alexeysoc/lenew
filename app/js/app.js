//////Определяем тип устройства-моб или пк

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');


	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		// console.log(111);
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});

		}
	}
} else {
	document.body.classList.add('_pc');
}

//Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}


//Формы логина,регистрации, восстановление пароля
const ForgotPassword = document.querySelector('.forgot_password');
const ForgotLogin = document.querySelector('.forgot__login');
const Registred = document.querySelector('.registred');
const RegistredLogin = document.querySelector('.registred__login');
const WrapperLogin = document.querySelector('.wrapper__login');
const FormWrapperForgot = document.querySelector('.form__wrapper-forgot');
const FormWrapperRegistred = document.querySelector('.form__wrapper-registred');

if (ForgotPassword) {
	ForgotPassword.addEventListener("click", function (e) {
		
		classActiveRemowe();
		FormWrapperForgot.classList.add('_active');
	});
}
if (Registred) {
	Registred.addEventListener("click", function (e) {
		classActiveRemowe();
		FormWrapperRegistred.classList.add('_active');
	});
}

if (ForgotLogin) {
	console.log(4);
	ForgotLogin.addEventListener("click", function (e) {
		classActiveRemowe();
		WrapperLogin.classList.add('_active');
	});
}

if (RegistredLogin) {
	console.log(5);
	RegistredLogin.addEventListener("click", function (e) {
		classActiveRemowe();
		WrapperLogin.classList.add('_active');
	});
}

function classActiveRemowe() {
	if (WrapperLogin.classList.contains('_active')) {
		WrapperLogin.classList.remove('_active');
	}
	if (FormWrapperForgot.classList.contains('_active')) {
		FormWrapperForgot.classList.remove('_active');
	}
	if (FormWrapperRegistred.classList.contains('_active')) {
		FormWrapperRegistred.classList.remove('_active');
	}
}



//Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		//console.log(222);
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}


			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});

			e.preventDefault();
		}
	}
}