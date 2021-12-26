let PrevSpecialStartTime = Date.now();
let container = document.getElementById("container");
let isPlayingInteract = false;
var width = window.innerWidth;
var dyn = 0;
dyn = 1;

var params = {
  zoomVal: 2,
  left: 40,
  top: 188,
  currentX: 40,
  currentY: 188,
  flag: false,
};
var getCss = function (o, key) {
  return o.currentStyle
      ? o.currentStyle[key]
      : document.defaultView.getComputedStyle(o, false)[key];
};
var startDrag = function (bar, target, callback) {
  if (getCss(target, "left") !== "auto") {
    params.left = getCss(target, "left");
  }
  if (getCss(target, "top") !== "auto") {
    params.top = getCss(target, "top");
  }
  bar.onmousedown = function (event) {
    params.flag = true;
    if (!event) {
      event = window.event;
      bar.onselectstart = function () {
        return false;
      };
    }
    var e = event;
    params.currentX = e.clientX;
    params.currentY = e.clientY;
  };
  document.onmouseup = function () {
    params.flag = false;
    if (getCss(target, "left") !== "auto") {
      params.left = getCss(target, "left");
    }
    if (getCss(target, "top") !== "auto") {
      params.top = getCss(target, "top");
    }
  };
  document.onmousemove = function (event) {
    var e = event ? event : window.event;
    
    if (params.flag) {
      var nowX = e.clientX,
          nowY = e.clientY;
      var disX = nowX - params.currentX,
          disY = nowY - params.currentY;
      target.style.left = parseInt(params.left) + disX + "px";
      target.style.top = parseInt(params.top) + disY + "px";
      
      if (typeof callback == "function") {
        callback(
            (parseInt(params.left) || 0) + disX,
            (parseInt(params.top) || 0) + disY
        );
      }
      
      if (event.preventDefault) {
        event.preventDefault();
      }
      return false;
    }
  };
};

window.onload = function () {
  startDrag(document.getElementById("img"), document.getElementById("img"));
};

function widescreen() {
  var scwidth = document.getElementById("all").style.width;
  if (scwidth != "1200px") {
    document.getElementsByClassName("outpact")[0].style.width = "1200px";
    document.getElementsByClassName("inpact")[0].style.width = "1200px";
    document.getElementsByClassName("all")[0].style.width = "1200px";
    document.getElementsByClassName("all-wrapper")[0].style.width = "1200px";
    document.getElementsByClassName("all-wrap")[0].style.width = "1200px";
    document.getElementsByClassName("bg")[0].style.width = "1200px";
    document.getElementById("skinbg").style.width = "1200px";
    document.getElementsByClassName("charimg-wrapper")[0].style.left = "300px";
    document.getElementById("wideOn").style.display = "none";
    document.getElementById("wideOff").style.display = "block";
  } else {
    document.getElementsByClassName("outpact")[0].style.width = "1024px";
    document.getElementsByClassName("inpact")[0].style.width = "1024px";
    document.getElementsByClassName("all")[0].style.width = "1024px";
    document.getElementsByClassName("all-wrapper")[0].style.width = "1024px";
    document.getElementsByClassName("all-wrap")[0].style.width = "1024px";
    document.getElementsByClassName("bg")[0].style.width = "1024px";
    document.getElementById("skinbg").style.width = "1024px";
    document.getElementsByClassName("charimg-wrapper")[0].style.left = "200px";
    document.getElementById("wideOn").style.display = "block";
    document.getElementById("wideOff").style.display = "none";
  }
}

function clearimg() {
  var dis = document.getElementById("clearui").style.display;
  if (dis == "none") {
    document.getElementById("stage0btn").style.borderRadius = "0px";
    document.getElementById("stage0btn").style.backgroundColor =
        "rgba(0,0,0,.8)";
    document.getElementById("stage0btn").style.width = "110px";
    document.getElementById("stage0btn").style.left = "15px";
    document.getElementById("stage1btn").style.borderRadius = "0px";
    document.getElementById("stage1btn").style.backgroundColor =
        "rgba(0,0,0,.8)";
    document.getElementById("stage1btn").style.width = "120px";
    document.getElementById("stage1btn").style.top = "10px";
    document.getElementById("stage1btn").style.left = "130px";
    document.getElementById("stage2btn").style.borderRadius = "0px";
    document.getElementById("stage2btn").style.backgroundColor =
        "rgba(0,0,0,.8)";
    document.getElementById("stage2btn").style.width = "120px";
    document.getElementById("stage2btn").style.top = "10px";
    document.getElementById("stage2btn").style.left = "255px";
    document.getElementById("charclass").style.transform = "translateY(0px)";
    try {
      document.getElementById("charclasspro").style.transform =
          "translateY(0px)";
    } catch (err) {
    }
    document.getElementById("chartag1").style.transform = "translateY(0px)";
    document.getElementById("chartag2").style.transform = "translateY(0px)";
    document.getElementById("charname").style.transform = "translateX(0px)";
    document.getElementById("charname-en").style.transform = "translateX(0px)";
    document.getElementById("star").style.transform = "translateX(0px)";
    document.getElementById("cv-wrapper").style.transform = "translateX(0px)";
    document.getElementById("painter-wrapper").style.transform =
        "translateX(0px)";
    document.getElementById("explain-wrapper").style.transform =
        "translateX(0px)";
    document.getElementById("features-wrapper").style.transform =
        "translateX(0px)";
    document.getElementById("returnui").style.display = "none";
    document.getElementById("clearui").style.display = "block";
    document.getElementById("clearbtn").style.transform = "translateX(0px)";
    document.getElementById("dynbtn").style.transform = "translateX(0px)";
    document.getElementById("widebtn").style.transform = "translateX(0px)";
    document.getElementById("fullscbtn").style.transform = "translateX(0px)";
    document
        .getElementById("charImgmove")
        .removeEventListener("wheel", ctrlscale);
    
    document.getElementById("charname-en").style.opacity = "1";
    document.getElementById("charname").style.opacity = "1";
    if (document.getElementById("widebtn").style.display == "none") {
    } else {
      $(all).unbind("mousewheel");
    }
  } else {
    document.getElementById("stage0btn").style.borderRadius = "5px";
    document.getElementById("stage0btn").style.backgroundColor =
        "rgba(0,0,0,.47)";
    document.getElementById("stage0btn").style.width = "60px";
    document.getElementById("stage0btn").style.left = "10px";
    document.getElementById("stage1btn").style.borderRadius = "5px";
    document.getElementById("stage1btn").style.backgroundColor =
        "rgba(0,0,0,.47)";
    document.getElementById("stage1btn").style.width = "60px";
    document.getElementById("stage1btn").style.top = "55px";
    document.getElementById("stage1btn").style.left = "10px";
    document.getElementById("stage2btn").style.borderRadius = "5px";
    document.getElementById("stage2btn").style.backgroundColor =
        "rgba(0,0,0,.47)";
    document.getElementById("stage2btn").style.width = "60px";
    document.getElementById("stage2btn").style.top = "100px";
    document.getElementById("stage2btn").style.left = "10px";
    document.getElementById("charclass").style.transform = "translateY(100px)";
    try {
      document.getElementById("charclasspro").style.transform =
          "translateY(100px)";
    } catch (err) {
    }
    document.getElementById("chartag1").style.transform = "translateY(100px)";
    document.getElementById("chartag2").style.transform = "translateY(100px)";
    document.getElementById("charname").style.transform = "translateX(-500px)";
    document.getElementById("charname-en").style.transform =
        "translateX(-200px)";
    document.getElementById("star").style.transform = "translateX(-250px)";
    document.getElementById("cv-wrapper").style.transform =
        "translateX(-350px)";
    document.getElementById("painter-wrapper").style.transform =
        "translateX(-350px)";
    document.getElementById("explain-wrapper").style.transform =
        "translateX(400px)";
    document.getElementById("features-wrapper").style.transform =
        "translateX(400px)";
    document.getElementById("returnui").style.display = "block";
    document.getElementById("clearui").style.display = "none";
    document.getElementById("clearbtn").style.transform = "translateX(305px)";
    document.getElementById("dynbtn").style.transform = "translateX(305px)";
    document.getElementById("widebtn").style.transform = "translateX(305px)";
    document.getElementById("fullscbtn").style.transform = "translateX(305px)";
    document.getElementById("charImgmove").addEventListener("wheel", ctrlscale);
    if (document.getElementById("widebtn").style.display == "none") {
    } else {
      $(all).bind("mousewheel", function (event, delta) {
        return false;
      });
    }
    
    document.getElementById("charname-en").style.opacity = "0";
    document.getElementById("charname").style.opacity = "0";
  }
}

function clearstage() {
  document.getElementById("img-stage0").style.display = "none";
  document.getElementById("img-stage1").style.display = "none";
  document.getElementById("img-stage2").style.display = "none";
}

function resetlocation() {
  document.getElementById("charimg").style.transform = "translateZ(0) scale(1)";
  document.getElementById("img").style.left = "0px";
  document.getElementById("img").style.top = "0px";
  params = {
    zoomVal: 1,
    left: 0,
    top: 0,
    currentX: 0,
    currentY: 0,
    flag: false,
  };
}

function clearfeatures() {
  document.getElementById("features0").style.display = "none";
  document.getElementById("features1").style.display = "none";
  document.getElementById("features2").style.display = "none";
}

function changeStage0() {
  resetlocation();
  clearexplain();
  clearfeatures();
  var dis = document.getElementById("skinbg").style.display;
  if (dis == "none") {
    clearstage();
    document.getElementById("img-stage0").style.display = "block";
    document.getElementById("explain-stage0").style.display = "block";
    document.getElementById("features0").style.display = "block";
  } else {
    clearskin();
    clearlogo();
    document.getElementById("img-stage0").style.display = "block";
    document.getElementById("explain-stage0").style.display = "block";
    document.getElementById("features0").style.display = "block";
    document.getElementById("skinbg").style.display = "none";
    document.getElementById("deflogo").style.display = "block";
    document.getElementById("anime-bg").className = "skinbgcolor-out";
    document.getElementById("skinbg").className = "skinbg-out";
  }
  if (document.getElementById("fullOn").style.display == "none") {
    var sch = document.documentElement.clientHeight;
    document.getElementById("charimg").style.transform =
        "translateZ(0) scale(" + sch / 512 + ")";
    document.getElementById("img").style.left = "0px";
    document.getElementById("img").style.top = "0px";
    params = {
      left: 0,
      top: 0,
      currentX: 0,
      currentY: 0,
      zoomVal: sch / 512,
      flag: false,
    };
  } else {
    document.getElementById("charimg").style =
        "transform:translateZ(0) scale(2)";
    document.getElementById("img").style.left = "40px";
    document.getElementById("img").style.top = "188px";
    params = {
      zoomVal: 2,
      left: 40,
      top: 188,
      currentX: 40,
      currentY: 188,
      flag: false,
    };
  }
}

function changeStage1() {
  resetlocation();
  clearexplain();
  clearfeatures();
  var o = document.getElementById("skinbg").style.display;
  if (o == "none") {
    clearstage();
    document.getElementById("img-stage1").style.display = "block";
    document.getElementById("explain-stage1").style.display = "block";
    document.getElementById("features1").style.display = "block";
  } else {
    clearskin();
    clearlogo();
    document.getElementById("img-stage1").style.display = "block";
    document.getElementById("explain-stage1").style.display = "block";
    document.getElementById("skinbg").style.display = "none";
    document.getElementById("deflogo").style.display = "block";
    document.getElementById("anime-bg").className = "skinbgcolor-out";
    document.getElementById("skinbg").className = "skinbg-out";
    document.getElementById("features1").style.display = "block";
  }
  if (document.getElementById("fullOn").style.display == "none") {
    var sch = document.documentElement.clientHeight;
    document.getElementById("charimg").style.transform =
        "translateZ(0) scale(" + sch / 512 + ")";
    document.getElementById("img").style.left = "0px";
    document.getElementById("img").style.top = "0px";
    params = {
      left: 0,
      top: 0,
      currentX: 0,
      currentY: 0,
      zoomVal: sch / 512,
      flag: false,
    };
  } else {
    document.getElementById("charimg").style =
        "transform:translateZ(0) scale(2)";
    document.getElementById("img").style.left = "40px";
    document.getElementById("img").style.top = "188px";
    
    params = {
      zoomVal: 2,
      left: 40,
      top: 188,
      currentX: 40,
      currentY: 188,
      flag: false,
    };
  }
}

function changeStage2() {
  resetlocation();
  clearexplain();
  clearfeatures();
  var o = document.getElementById("skinbg").style.display;
  if (o == "none") {
    clearstage();
    document.getElementById("img-stage2").style.display = "block";
    document.getElementById("explain-stage2").style.display = "block";
    document.getElementById("features2").style.display = "block";
  } else {
    clearskin();
    clearlogo();
    document.getElementById("img-stage2").style.display = "block";
    document.getElementById("explain-stage2").style.display = "block";
    document.getElementById("skinbg").style.display = "none";
    document.getElementById("deflogo").style.display = "block";
    document.getElementById("anime-bg").className = "skinbgcolor-out";
    document.getElementById("skinbg").className = "skinbg-out";
    document.getElementById("features2").style.display = "block";
  }
  if (document.getElementById("fullOn").style.display == "none") {
    var sch = document.documentElement.clientHeight;
    document.getElementById("charimg").style.transform =
        "translateZ(0) scale(" + sch / 512 + ")";
    document.getElementById("img").style.left = "0px";
    document.getElementById("img").style.top = "0px";
    params = {
      left: 0,
      top: 0,
      currentX: 0,
      currentY: 0,
      zoomVal: sch / 512,
      flag: false,
    };
  } else {
    document.getElementById("charimg").style =
        "transform:translateZ(0) scale(2.5)";
    document.getElementById("img").style.left = "22px";
    document.getElementById("img").style.top = "7px";
    
    params = {
      zoomVal: 2.5,
      left: 22,
      top: 7,
      currentX: 22,
      currentY: 7,
      flag: false,
    };
  }
}

function clearlogo() {
  document.getElementById("deflogo").style.display = "none";
}

function clearexplain() {
  document.getElementById("explain-stage0").style.display = "none";
  document.getElementById("explain-stage1").style.display = "none";
  document.getElementById("explain-stage2").style.display = "none";
}

function fullscreen() {
  if (document.getElementById("widebtn").style.display == "none") {
    document.body.style.overflow = "auto";
    refullscreen();
  } else {
    document.body.style.overflow = "hidden";
    $(all).bind("mousewheel", function (event, delta) {
      return false;
    });
    document.getElementsByTagName("body")[0].style.margin = "0";
    document.getElementById("navigation").style.display = "none";
    document.getElementsByClassName("container")[0].style.margin = "0";
    document.getElementsByClassName("outpact")[0].style.width = "100vw";
    document.getElementsByClassName("outpact")[0].style.height = "100vh";
    document.getElementsByClassName("outpact")[0].style.position = "fixed";
    document.getElementsByClassName("outpact")[0].style.top = "0px";
    document.getElementsByClassName("outpact")[0].style.left = "0px";
    document.getElementsByClassName("inpact")[0].style.width = "100vw";
    document.getElementsByClassName("inpact")[0].style.height = "100vh";
    document.getElementsByClassName("all")[0].style.width = "100vw";
    document.getElementsByClassName("all")[0].style.height = "100vh";
    document.getElementsByClassName("all-wrapper")[0].style.width = "100vw";
    document.getElementsByClassName("all-wrapper")[0].style.height = "100vh";
    document.getElementsByClassName("all-wrap")[0].style.width = "100vw";
    document.getElementsByClassName("all-wrap")[0].style.height = "100vh";
    document.getElementsByClassName("bg")[0].style.width = "100vw";
    document.getElementsByClassName("bg")[0].style.height = "100vh";
    document.getElementById("skinbg").style.width = "100vw";
    document.getElementById("skinbg").style.height = "100vh";
    $("body").addClass("fullscreen");
    if ($("#rightToc").length > 0) {
      document.getElementById("rightToc").style.display = "none";
    }
    document.getElementsByClassName("charimg-wrapper")[0].style.left =
        window.innerWidth / 2 - 256 + "px";
    document.getElementsByClassName("charimg-wrapper")[0].style.top =
        window.innerHeight / 2 - 256 + "px";
    document.getElementById("img").style.left = "0px";
    document.getElementById("img").style.top = "0px";
    document.getElementById("widebtn").style.display = "none";
    document.getElementById("fullOff").style.display = "block";
    document.getElementById("fullOn").style.display = "none";
    var sch = document.documentElement.clientHeight / 512;
    document.getElementById("charimg").style.transform =
        "translateZ(0) scale(" + sch + ")";
    params = {
      zoomVal: sch,
      left: 0,
      top: 0,
      currentX: 0,
      currentY: 0,
      flag: false,
    };
  }
}

function refullscreen() {
  document.getElementsByTagName("body")[0].style.margin = "20px 0";
  document.getElementById("navigation").style.display = "block";
  document.getElementsByClassName("container")[0].style.margin = "200px 0";
  document.getElementsByClassName("outpact")[0].style.width = "1024px";
  document.getElementsByClassName("outpact")[0].style.height = "576px";
  document.getElementsByClassName("outpact")[0].style.position = "inherit";
  document.getElementsByClassName("outpact")[0].style.top = "0px";
  document.getElementsByClassName("outpact")[0].style.left = "0px";
  document.getElementsByClassName("inpact")[0].style.width = "1024px";
  document.getElementsByClassName("inpact")[0].style.height = "576px";
  document.getElementsByClassName("all")[0].style.width = "1024px";
  document.getElementsByClassName("all")[0].style.height = "576px";
  document.getElementsByClassName("all-wrapper")[0].style.width = "1024px";
  document.getElementsByClassName("all-wrapper")[0].style.height = "576px";
  document.getElementsByClassName("all-wrap")[0].style.width = "1024px";
  document.getElementsByClassName("all-wrap")[0].style.height = "576px";
  document.getElementsByClassName("bg")[0].style.width = "1024px";
  document.getElementsByClassName("bg")[0].style.height = "576px";
  document.getElementById("skinbg").style.width = "1024px";
  document.getElementById("skinbg").style.height = "576px";
  $("body").removeClass("fullscreen");
  if ($("#rightToc").length > 0) {
    document.getElementById("rightToc").style.display = "inline";
  }
  document.getElementsByClassName("charimg-wrapper")[0].style.left = "200px";
  document.getElementsByClassName("charimg-wrapper")[0].style.top = "50px";
  document.getElementById("widebtn").style.display = "inline";
  if (document.getElementById("wideOn").style.display == "none") {
    document.getElementById("wideOn").style.display = "block";
    document.getElementById("wideOff").style.display = "none";
  }
  params = {
    zoomVal: 2,
    left: 40,
    top: 188,
    currentX: 40,
    currentY: 188,
    flag: false,
  };
  $(all).unbind("mousewheel");
  document.getElementById("fullOn").style.display = "block";
  document.getElementById("fullOff").style.display = "none";
  changeStage0();
}
