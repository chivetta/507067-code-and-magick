var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_GAP = 20;
var BAR_WIDTH = 40;
var BAR_HEIGHT = -150;
var BAR_LEVEL = CLOUD_HEIGHT - (TEXT_GAP * 2);
var WHITE_SPACE = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
//  var names = ['Вы', 'Иван', 'Юлия', 'Маша'];
// var times = [];

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
        var getRandomBlueColor = function () {
          var value = '0123456789ABCDEF';
          var color = '#0000';
          for (var i = 0; i < 2; i++) {
            color += value[Math.floor(Math.random() * 16)];
          }
          return color;
        }

      ctx.fillStyle = getRandomBlueColor();
    }
    ctx.fillText(names[i], CLOUD_X + (GAP * 2.5) + WHITE_SPACE * (i + 1) + BAR_WIDTH * i, CLOUD_HEIGHT - TEXT_GAP);
    ctx.fillRect(CLOUD_X + (GAP / 2) + WHITE_SPACE * (i + 1) + BAR_WIDTH * i, BAR_LEVEL, BAR_WIDTH, BAR_HEIGHT);
  };

  /*ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillText('Вы', CLOUD_X + (GAP * 2.5) + WHITE_SPACE * 1 + BAR_WIDTH * 0, CLOUD_HEIGHT - TEXT_GAP);
  ctx.fillRect(CLOUD_X + (GAP / 2) + WHITE_SPACE * 1 + BAR_WIDTH * 0, BAR_LEVEL, BAR_WIDTH, BAR_HEIGHT);

  ctx.fillStyle = '#004DFF';
  ctx.fillText('Иван', CLOUD_X + (GAP * 2.5) + WHITE_SPACE * 2 + BAR_WIDTH * 1, CLOUD_HEIGHT - TEXT_GAP);
  ctx.fillRect(CLOUD_X + (GAP / 2) + WHITE_SPACE * 2 + BAR_WIDTH * 1, BAR_LEVEL, BAR_WIDTH, BAR_HEIGHT);

  ctx.fillText('Юлия', CLOUD_X + (GAP * 2.5) + WHITE_SPACE * 3 + BAR_WIDTH * 2, CLOUD_HEIGHT - TEXT_GAP);
  ctx.fillRect(CLOUD_X + (GAP / 2) + WHITE_SPACE * 3 + BAR_WIDTH * 2, BAR_LEVEL, BAR_WIDTH, BAR_HEIGHT);

  ctx.fillText('Маша', CLOUD_X + (GAP * 2.5) + WHITE_SPACE * 4 + BAR_WIDTH * 3, CLOUD_HEIGHT - TEXT_GAP);
  ctx.fillRect(CLOUD_X + (GAP / 2) + WHITE_SPACE * 4 + BAR_WIDTH * 3, BAR_LEVEL, BAR_WIDTH, BAR_HEIGHT);*/
};
