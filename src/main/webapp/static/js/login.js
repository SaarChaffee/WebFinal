$(document).ready(function () {
  $("body").particleground({
    dotColor: "rgb(123,160,214)",
    lineColor: "#ffd700",
  });
});

$(function () {
  var userName = $("#userName");
  var userNameLabel = $("#userNameLabel");
  var passName = $("#passName");
  var passNameLabel = $("#passNameLabel");
  var login = $("#login");

  userName
    .on("focus", function () {
      userNameLabel.text("请输入用户名");
      vCodeLabel.css({ color: "#70A4CC" });
    })
    .on("blur", function () {
      userNameLabel.text("用户名");
      vCodeLabel.css({ color: "#70A4CC" });
    });
  passName
    .on("focus", function () {
      passNameLabel.text("请输入密码");
      vCodeLabel.css({ color: "#70A4CC" });
    })
    .on("blur", function () {
      passNameLabel.text("密码");
      vCodeLabel.css({ color: "#70A4CC" });
    });

  login.on("click", function () {
    if (userName.val() === null || userName.val() === "") {
      userName.focus();
    } else if (passName.val() === null || passName.val() === "") {
      passName.focus();
    } else {
      $.$.ajax({
        type: "GET",
        url: "/user.do",
        data: {
          method: "login",
          userName: userName.val(),
          passName: passName.val(),
        },
        dataType: "json",
        success: function (response) {
          if (response.result === "success") {
            alert("登陆成功，按确定进入主页");
            $(location).attr({ href: "template/home.html" });
          } else if (response.result === "wrong user") {
            userNameLabel.text("用户不存在，请重新输入");
            vCodeLabel.css({ color: "#f00" });
          } else if (response.result === "wrong passwd") {
            passNameLabel.text("密码错误，请重新输入");
            vCodeLabel.css({ color: "#f00" });
          }
        },
      });
    }
  });
});
