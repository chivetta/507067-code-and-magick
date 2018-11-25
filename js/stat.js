'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_GAP = 20;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_LEVEL = CLOUD_HEIGHT - (TEXT_GAP * 2);
var WHITE_SPACE = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (array) {
  var maxElement = array[0];

  for (var j = 1; j < array.length; j++) {
    if (array[j] > maxElement) {
      maxElement = array[j];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  var maxTime = getMaxElement(times);

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)'); // тень
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff'); // облако

  ctx.fillStyle = '#000000'; // текст
  ctx.textAlign = 'center';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', (CLOUD_WIDTH / 2) + CLOUD_X, CLOUD_Y + TEXT_GAP);
  ctx.fillText('Список результатов:', (CLOUD_WIDTH / 2) + CLOUD_X, CLOUD_Y + (TEXT_GAP * 2));

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var getRandomBlueColor = function () { // случайный синий для столбцов других игроков
        var value = '0123456789ABCDEF';
        var color = '#0000';
        for (var number = 0; number < 2; number++) {
          color += value[Math.floor(Math.random() * 16)];
        }

        return color;
      };

      ctx.fillStyle = getRandomBlueColor();
    }

    ctx.fillText(Math.floor(times[i]), CLOUD_X + (GAP * 2.5) + WHITE_SPACE * (i + 1) + BAR_WIDTH * i, CLOUD_HEIGHT - (TEXT_GAP * 2.5) - (BAR_HEIGHT * times[i]) / maxTime); // расположение результата

    ctx.fillRect(CLOUD_X + (GAP / 2) + WHITE_SPACE * (i + 1) + BAR_WIDTH * i, BAR_LEVEL, BAR_WIDTH, -1 * (BAR_HEIGHT * times[i]) / maxTime); // расположение столбца

    ctx.fillText(names[i], CLOUD_X + (GAP * 2.5) + WHITE_SPACE * (i + 1) + BAR_WIDTH * i, CLOUD_HEIGHT - TEXT_GAP); // расположение имени
  }
};
