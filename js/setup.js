'use strict';

// характеристики игроков
var playerName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var playerSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardsCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var NUMBER_OF_PLAYERS = 4;

// случайный элемент массива
var getRandomElement = function (element) {
  var newRandomElement = element[Math.floor(Math.random() * element.length)];
  return newRandomElement;
};

// карточка волшебников
var setupMenu = document.querySelector('.setup');
var otherPlayers = document.querySelector('.setup-similar');
var makeVisible = function (item) {
  item.classList.remove('hidden');
};

// данные случайного игрока
var getRandomWizard = function (randomPlayerName, randomPlayerSurname, randomWizardsCoat, randomWizardEyesColor) {
  var wizardData = {nameOfWizard: getRandomElement(randomPlayerName) + ' ' + getRandomElement(randomPlayerSurname),
    coatColor: getRandomElement(randomWizardsCoat),
    eyesColor: getRandomElement(randomWizardEyesColor)
  };
  return wizardData;
};

// список игроков
var getListOfWizards = function (numberOfWizards) {
  var wizardsList = [];

  for (var i = 0; i < numberOfWizards; i++) {
    wizardsList.push(getRandomWizard(playerName, playerSurname, wizardsCoat, wizardEyesColor));
  }

  return wizardsList;
};

// шаблон
var getWizardTemplate = function (wizard) {
  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var templateElement = template.cloneNode(true);

  templateElement.querySelector('.setup-similar-label').textContent = wizard.nameOfWizard;
  templateElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  templateElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return templateElement;
};

// рендер волшебника

var renderWizards = function (wizardsList) {
  var listOfWizards = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizardsList.length; i++) {
    fragment.appendChild(getWizardTemplate(wizardsList[i]));
  }

  listOfWizards.appendChild(fragment);
};

// показать карточку игроков
makeVisible(setupMenu);
makeVisible(otherPlayers);
renderWizards(getListOfWizards(NUMBER_OF_PLAYERS));
