const form = document.querySelector('.contact_form');

function sendMsg(e){
	e.preventDefault()

	const phone = document.querySelector('#phone'),
		  binance = document.querySelector('#binance'),
		  telegram = document.querySelector('#telegram'),
		  deposit = document.querySelector('#deposit');

	Email.send({
		SecureToken : "76f9b796-beb4-4476-b8f5-9af149c45f1e",
		To : 'bulltrendcommunity@gmail.com',
		From : "aliymaltymyshev@gmail.com",
		Subject : `Регистрация на турнир: ${telegram.value}`,
		Body : `Номер: ${phone.value},
		<br> BinanceID: ${binance.value},
		<br> Telegram: ${telegram.value},
		<br> Стартовый депозит: ${deposit.value}$`
	}).then(
		message => alert('Спасибо за регистрацию, с вами свяжутся в ближайшее время.')
	);
}

form.addEventListener('submit', sendMsg);





const formdown = document.querySelector('.contact_form_down');

function sendMsg(e){
	e.preventDefault()

	const phone = document.querySelector('#phone'),
		  binance = document.querySelector('#binance'),
		  telegram = document.querySelector('#telegram'),
		  deposit = document.querySelector('#deposit');

	Email.send({
		SecureToken : "76f9b796-beb4-4476-b8f5-9af149c45f1e",
		To : 'bulltrendcommunity@gmail.com',
		From : "aliymaltymyshev@gmail.com",
		Subject : `Регистрация на турнир: ${telegram.value}`,
		Body : `Номер: ${phone.value},
		<br> BinanceID: ${binance.value},
		<br> Telegram: ${telegram.value},
		<br> Стартовый депозит: ${deposit.value}$`
	}).then(
		message => alert('Спасибо за регистрацию, с вами свяжутся в ближайшее время.')
	);
}

formdown.addEventListener('submit', sendMsg);





// const form = document.querySelector('.contact_form_down');

// function sendMsgDown(e){
// 	e.preventDefault()

// 	const phone = document.querySelector('#phonedown'),
// 		  binance = document.querySelector('#binancedown'),
// 		  telegram = document.querySelector('#telegramdown'),
// 		  deposit = document.querySelector('#depositdown');

// 	Email.send({
// 		SecureToken : "76f9b796-beb4-4476-b8f5-9af149c45f1e",
// 		To : 'mr.miror1@mail.ru',
// 		From : "aliymaltymyshev@gmail.com",
// 		Subject : `Регистрация на турнир: ${telegram.value}`,
// 		Body : `Номер: ${phone.value},
// 		<br> BinanceID: ${binance.value},
// 		<br> Telegram: ${telegram.value},
// 		<br> Стартовый депозит: ${deposit.value}$`
// 	}).then(
// 		message => alert('Спасибо за регистрацию, с вами свяжутся в ближайшее время.')
// 	);
// }

// form.addEventListener('submit', sendMsgDown);
