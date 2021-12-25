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

$(function () {
  var userName = $("#userName");
  var passName = $("#passName");
  var passNameLabel = $("#passNameLabel");
  var curPassName = $("#curPassName");
  var curPassNameLabel = $("#curPassNameLabel");
  var vCode = $("#vCode");
  var vCodeLabel = $("#vCodeLabel");
  var register = $("#register");
  passName
      .on("focus", function () {
        passNameLabel.text("请输入密码");
        passNameLabel.css({color: "#70A4CC"});
      })
      .on("blur", function () {
        passNameLabel.text("密码");
        passNameLabel.css({color: "#70A4CC"});
        if (curPassName != "" || curPassName != null) {
          if (curPassName.val() === null || curPassName.val() === "") {
            curPassNameLabel.text("再次输入密码");
            curPassNameLabel.css({color: "#70A4CC"});
          } else if (passName.val() === curPassName.val()) {
            console.log(2);
            curPassNameLabel.text("密码一致");
            curPassNameLabel.css({color: "#0f0"});
          } else {
            console.log(3);
            curPassNameLabel.text("两次密码输入不一致，请重新输入");
            curPassNameLabel.css({color: "#f00"});
          }
        }
      });
  
  curPassName
      .on("focus", function () {
        console.log(1);
        curPassNameLabel.text("请输入与上面一致的密码");
        curPassNameLabel.css({color: "#70A4CC"});
      })
      .on("blur", function () {
        if (curPassName.val() === null || curPassName.val() === "") {
          curPassNameLabel.text("再次输入密码");
          curPassNameLabel.css({color: "#70A4CC"});
        } else if (passName.val() === curPassName.val()) {
          console.log(2);
          curPassNameLabel.text("密码一致");
          curPassNameLabel.css({color: "#0f0"});
        } else {
          console.log(3);
          curPassNameLabel.text("两次密码输入不一致，请重新输入");
          curPassNameLabel.css({color: "#f00"});
        }
      });
  
  vCode
      .on("focus", function () {
        vCodeLabel.text("请输入验证码");
        vCodeLabel.css({color: "#70A4CC"});
      })
      .on("blur", function () {
        if (vCode.val() === null || vCode.val() === "") {
          vCodeLabel.text("验证码");
          vCodeLabel.css({color: "#70A4CC"});
        } else if (vCode.val() !== code) {
          vCodeLabel.text("验证码错误");
          vCodeLabel.css({color: "#f00"});
        } else if (vCode.val() === code) {
          vCodeLabel.text("验证码正确");
          vCodeLabel.css({color: "#0f0"});
        }
      });
  
  register.on("click", function () {
    if (passName.val() === curPassName.val() && vCode.val() === code) {
      console.log("re1");
      $.ajax({
        type: "POST",
        url: "/user.do",
        data: {
          method: "register",
          userName: userName.val(),
          passName: passName.val(),
        },
        dataType: "json",
        success: function (response) {
          if (response.result === "success") {
            alert("注册成功，按确定返回登录界面");
            $(location).attr({href: "login.html"});
          } else {
            alert("注册失败，请重新尝试");
          }
        },
      });
    } else if (userName.val() === "" || userName.val() === null) {
      userName.focus();
    } else if (passName.val() === "" || passName.val() === null) {
      passName.focus();
    } else if (passName.val() !== curPassName.val()) {
      curPassName.focus();
    } else if (vCode.val() !== code) {
      vCode.focus();
    }
  });
});
