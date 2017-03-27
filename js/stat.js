'use strict';
window.renderStatistics = (function () {
  var cloudX = 100;
  var cloudY = 10;
  var widthCloud = 420;
  var heightCloud = 270;
  var roundoffCloud = 30;
  var offsetCloud = 10;
  var defaultFont = 'PT Mono';
  var defaultFontSize = 18;
  var headerFontSize = 24;
  var defaultColor = '#000000';


  var getMaxOfArray = function (numArray) {
    return Math.max.apply(null, numArray);
  };


  var drawCloud = function (ctx, x, y, width, height, roundoff, projection, status) {
    var offset = projection || 0;
    var action = status || false;
    ctx.beginPath();
    ctx.moveTo(x + roundoff + offset, y + offset);
    ctx.lineTo(x + width - roundoff + offset, y + offset);
    ctx.quadraticCurveTo(x + width + offset, y + offset, x + width + offset, y + roundoff + offset);
    ctx.lineTo(x + width + offset, y + height - roundoff + offset);
    ctx.quadraticCurveTo(x + width + offset, y + height + offset, x + width - roundoff + offset, y + height + offset);
    ctx.lineTo(x + roundoff + offset, y + height + offset);
    ctx.quadraticCurveTo(x + offset, y + height + offset, x + offset, y + height - roundoff + offset);
    ctx.lineTo(x + offset, y + roundoff + offset);
    ctx.quadraticCurveTo(x + offset, y + offset, x + roundoff + offset, y + offset);
    ctx.closePath();

    if (action) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.fill();
    } else {
      ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
      ctx.fill();
      ctx.strokeStyle = 'blue';
      ctx.lineWidth = 5;
      ctx.stroke();
    }
  };


  var drawMessage = function (ctx, message, fontSize, font, x, y, color) {
    ctx.fillStyle = color || defaultColor;
    ctx.font = [fontSize, 'px ', font].join('');
    ctx.fillText(message, x, y);
  };


  var drawRect = function (ctx, x1, y1, x2, y2, color) {
    ctx.fillStyle = color || defaultColor;
    ctx.fillRect(x1, y1, x2, y2);
  };


  var randomColor = function () {
    return ['rgba(0, 0, ', (Math.random() * 255).toFixed(0), ', ', (0.5 + Math.random() * (1 - 0.5)).toFixed(1), ')'].join('');
  };


  var drawHisto = function (ctx, arrNames, arrTimes) {
    var histoHeight = 150;
    var histoX = 140;
    var startColumn = 250;
    var widthColumn = 40;
    var stepBetweenColumn = 50;
    var columnIndent = widthColumn + stepBetweenColumn;
    var step = histoHeight / getMaxOfArray(arrTimes);
    var currentColor;

    for (var i = 0; i < arrTimes.length; i++) {
      var name = arrNames[i];
      var time = (arrTimes[i]).toFixed(0);
      var height = -(step * time);
      var indent = histoX + columnIndent * i;
      var nameY = startColumn + 20;
      var timeY = startColumn + height - 5;

      if (name === 'Вы') {
        currentColor = 'rgba(255, 0, 0, 1)';
      } else {
        currentColor = randomColor();
      }
      drawRect(ctx, indent, startColumn, widthColumn, height, currentColor);
      drawMessage(ctx, name, defaultFontSize, defaultFont, indent, nameY, currentColor);
      drawMessage(ctx, time, defaultFontSize, defaultFont, indent, timeY, currentColor);
    }
  };


  return function (ctx, names, times) {
    drawCloud(ctx, cloudX, cloudY, widthCloud, heightCloud, roundoffCloud, offsetCloud, true);
    drawCloud(ctx, cloudX, cloudY, widthCloud, heightCloud, roundoffCloud);
    drawMessage(ctx, 'Ура вы победили!', headerFontSize, defaultFont, 210, 40);
    drawMessage(ctx, 'Список результатов:', defaultFontSize, defaultFont, 130, 65);
    drawHisto(ctx, names, times);
  };
})();
