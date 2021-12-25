var code = 0;
var ramCode = () => {
  // toString(len)        获取\w
  // subString(from, to)  提取字符
  // slice(start,end)     截取字符
  return Math.random().toString(20).substring(6, 14).slice(2, 6);
};

var ramColor = () => {
  return `rgb(${Math.round(Math.random() * 255)},${Math.round(
    Math.random() * 255
  )},${Math.round(Math.random() * 255)})`;
};

function drawCode() {
  code = ramCode();
  const can = document.getElementById("can");
  const ctx = can.getContext("2d");
  can.style.background = "rgb(104, 156, 201)";
  ctx.clearRect(0, 0, can.width, can.height);
  ctx.fillStyle = ramColor();
  ctx.font = "70px Helvetica";
  ctx.fillText(
    code,
    Math.round((Math.random() * can.height) / 2),
    Math.round((Math.random() * can.width) / 2)
  );
  for (let i = 0; i < Math.round(Math.random() * 4); i++) {
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(
      Math.round(Math.random() * can.height),
      Math.round(Math.random() * can.width)
    );
    ctx.lineTo(
      Math.round(Math.random() * can.height),
      Math.round(Math.random() * can.width)
    );
    ctx.strokeStyle = ramColor();
    ctx.stroke();
  }
}

$(document).ready(function () {
  $("body").particleground({
    dotColor: "rgb(123,160,214)",
    lineColor: "#ffd700",
  });
  drawCode();
});
