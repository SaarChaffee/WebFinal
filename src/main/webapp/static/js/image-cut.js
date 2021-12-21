function image(){
// ; (function ($) {
  const width = 96;
  const heigh = 96;
  var image = document.getElementById('source');

  var id = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      if (id === 13) {
        break;
      } else {
        if (id === 7) {
          id++;
        } else {
          var canvas = document.getElementById("can" + id++);
          // var canvas1 = document.getElementById("can1_" + id++);
          console.log(canvas);
          var ctx = canvas.getContext("2d");
          // var ctx1 = canvas1.getContext("2d");
          ctx.drawImage(image, j * width, i * heigh, width, heigh, 0, 0, width, heigh);
          // ctx1.drawImage(image, j * width, i * heigh, width, heigh, 0, 0, width, heigh);
        }
      }
    }
  }
  // return true;
}
// })(this)
window.onload=function () {
  image()
}
