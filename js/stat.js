const CLOUD_POSITION = {
  x: 100,
  y: 10
}
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_COLOR = '#ffffff';
const CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
const CLOUD_SHADOW_OFFSET = 10;

const CLOUD_TEXT_FAMILY = 'PT Mono';
const CLOUD_TEXT_COLOR = '#000000';
const CLOUD_TEXT_SIZE = 16;
const CLOUD_TEXT_PADDING = 20;
const CLOUD_TEXT = ['Ура вы победили!', 'Список результатов:'];

const HISTOGRAM_COLUMN_WIDTH = 40;
const HISTOGRAM_COLUMN_HEIGHT = 150;
const HISTOGRAM_COLUMN_MARGIN = 50;
const HISTOGRAM_COLUMN_COLOR = 'rgba(0, 0, 255, ';
const HISTOGRAM_COLUMN_COLOR_SELF = 'rgba(255, 0, 0, 1)';

const SELF_NAME = 'Вы';

var getPlayerColour = function(name){
  return name === SELF_NAME ? HISTOGRAM_COLUMN_COLOR_SELF : HISTOGRAM_COLUMN_COLOR + Math.random() + ')';
}

var getMaxTime = function(times){
  var maxTime = 0;
  for ( var i = 0; i < times.length; i++){
    maxTime = Math.max(maxTime, times[i]);
  }
  return maxTime;
}

window.renderStatistics = function(ctx, names, times) {
  drawCloud(ctx);
  drawText(ctx);
  drawHistogram(ctx, names, times);
}

var drawCloud = function(ctx) {
  ctx.fillStyle = CLOUD_SHADOW_COLOR;
  ctx.fillRect(CLOUD_POSITION.x + CLOUD_SHADOW_OFFSET, CLOUD_POSITION.y + CLOUD_SHADOW_OFFSET, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = CLOUD_COLOR;
  ctx.fillRect(CLOUD_POSITION.x, CLOUD_POSITION.y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

var drawText = function(ctx) {
  ctx.font = CLOUD_TEXT_SIZE + 'px ' + CLOUD_TEXT_FAMILY;
  ctx.fillStyle = CLOUD_TEXT_COLOR;

  for(var i = 0; i < CLOUD_TEXT.length; i++){
    ctx.fillText(CLOUD_TEXT[i], CLOUD_POSITION.x + CLOUD_TEXT_PADDING, CLOUD_POSITION.y + (CLOUD_TEXT_SIZE + CLOUD_TEXT_PADDING) * (i + 1));
  }
}

var drawHistogram = function(ctx, names, times) {
  for(var i = 0; i < times.length; i++){
    ctx.fillStyle = getPlayerColour(names[i]);
    ctx.fillRect(CLOUD_POSITION.x, CLOUD_POSITION.y, HISTOGRAM_COLUMN_WIDTH, HISTOGRAM_COLUMN_HEIGHT);
  }
}
