window.addEventListener('load', function() {
	var userScore = 0;
	var botScore = 0;
	var gameItems = document.querySelectorAll('.choice-item__item');
	var userSide = document.querySelector('.user-side .item');
	var botSide = document.querySelector('.bot-side .item');
	var info = document.querySelector('.info');
	var scoreOut = document.querySelector('.score');// блок для вывода счёта
	var images = ['stone.png', 'scissors.png', 'papper.png'];// путь к фото
	// генерируем выбор бота
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	//вешаем обработчик на блок с камнем, ножницами, бумагой
	for(var i = 0; i < gameItems.length; i++) {
		gameItems[i].addEventListener('click', function(event) {
			var userId = this.dataset.id;
			var userImage = `<img src="${images[userId]}">`;
			userSide.innerHTML = userImage;

			// ходит бот
			var botId = getRandomInt(0, 2);
			var botImage = `<img src="${images[botId]}">`;
			botSide.innerHTML = botImage;
			// ходит бот

			// проверка победителя
			if(userId == 0 && botId == 0) {
				info.innerHTML = 'Ничья!';	
			}
			if(userId == 1 && botId == 1) {
				info.innerHTML = 'Ничья!';	
			}
			if(userId == 2 && botId == 2) {
				info.innerHTML = 'Ничья!';	
			}
			if(userId == 0 && botId == 1) {
				info.innerHTML = 'Победил игрок!';
				userScore++;
				scoreOut.innerHTML = `Игрок - ${userScore} : Бот - ${botScore}`;
			}
			if(userId == 0 && botId == 2) {
				info.innerHTML = 'Победил бот!';
				botScore++;
				scoreOut.innerHTML = `Игрок - ${userScore} : Бот - ${botScore}`;
			}
			if(userId == 1 && botId == 2) {
				info.innerHTML = 'Победил игрок!';
				userScore++;
				scoreOut.innerHTML = `Игрок - ${userScore} : Бот - ${botScore}`;
			}
			if(userId == 1 && botId == 0) {
				info.innerHTML = 'Победил бот!';
				botScore++;
				scoreOut.innerHTML = `Игрок - ${userScore} : Бот - ${botScore}`;
			}
			if(userId == 2 && botId == 0) {
				info.innerHTML = 'Победил игрок!';
				userScore++;
				scoreOut.innerHTML = `Игрок - ${userScore} : Бот - ${botScore}`;
			}
			if(userId == 2 && botId == 1) {
				info.innerHTML = 'Победил бот!';
				botScore++;
				scoreOut.innerHTML = `Игрок - ${userScore} : Бот - ${botScore}`;
			}
			// проверка победителя
		});
	}
});