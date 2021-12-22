function image() {
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
}

function carousel() {
  let oLeft = document.querySelector(".left");
  let oRight = document.querySelector(".right");
  let oImgList = document.querySelector(".img-list");
  const oCircle = document.querySelector(".circle-list");
  let cloneFirstImg = oImgList.firstElementChild.cloneNode(true);
  const oWarp = document.getElementById("warp");
  oImgList.appendChild(cloneFirstImg);
  
  // 函数节流锁
  let lock = true;
  let imgIndex = 0;
  let maxIndex = 2;
  
  function rightBtn() {
    if (!lock) return;
    oImgList.style.left = ++imgIndex * -936 + "px";
    oImgList.style.transition = "0.5s ease";
    if (imgIndex === maxIndex + 1) {
      imgIndex = 0;
      setTimeout(() => {
        oImgList.style.transition = "none";
        oImgList.style.left = 0;
      }, 500);
    }
    setCircle();
    lock = false;
    setTimeout(() => {
      lock = true;
    }, 500);
  }
  
  function leftBtn() {
    if (!lock) return;
    if (imgIndex === 0) {
      oImgList.style.left = (maxIndex + 1) * -936 + "px";
      oImgList.style.transition = "none";
      imgIndex = maxIndex;
      setTimeout(() => {
        oImgList.style.left = imgIndex * -936 + "px";
        oImgList.style.transition = "0.5s ease";
      });
    } else {
      oImgList.style.left = --imgIndex * -936 + "px";
    }
    setCircle();
    lock = false;
    setTimeout(() => {
      lock = true;
    }, 500);
  }
  
  oRight.addEventListener("click", () => {
    rightBtn();
  });
  
  oLeft.addEventListener("click", () => {
    leftBtn();
  });
  
  const circles = document.querySelectorAll(".circle");
  
  function setCircle() {
    for (let i = 0; i < circles.length; i++) {
      if (i === imgIndex) {
        circles[i].classList.add("active");
      } else {
        circles[i].classList.remove("active");
      }
    }
  }
  
  function cricleClick(e) {
    if (e.target.nodeName.toLowerCase() === "li") {
      imgIndex = Number(e.target.getAttribute("data-n"));
      oImgList.style.left = imgIndex * -936 + "px";
      setCircle();
    }
  }
  
  oCircle.addEventListener("click", (e) => {
    cricleClick(e);
  });
  
  let autoplay = setInterval(() => {
    rightBtn();
  }, 2000);
  
  oWarp.addEventListener("mouseenter", () => {
    clearInterval(autoplay);
  });
  oWarp.addEventListener("mouseleave", () => {
    // 设表先关
    clearInterval(autoplay);
    autoplay = setInterval(() => {
      rightBtn();
    }, 2000);
  });
}

window.onload = function () {
  image();
  carousel();
}
