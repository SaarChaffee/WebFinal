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
        userNameLabel.css({color: "#70A4CC"});
      })
      .on("blur", function () {
        if (userName.val() === "" || userName.val() === null) {
          userNameLabel.text("用户名");
          userNameLabel.css({color: "#70A4CC"});
        } else {
          $.ajax({
            type: "GET",
            url: "/user.do",
            data: {
              method: "isUserExist",
              username: userName.val(),
            },
            dataType: "json",
            success: function (response) {
              if (response.result === "used") {
                userNameLabel.text("用户名");
                userNameLabel.css({color: "#70A4CC"});
              } else if (response.result === "free") {
                userNameLabel.text("用户不存在");
                userNameLabel.css({color: "#f00"});
              }
            },
          });
        }
      });
  passName
      .on("focus", function () {
        passNameLabel.text("请输入密码");
        passNameLabel.css({color: "#70A4CC"});
      })
      .on("blur", function () {
        passNameLabel.text("密码");
        passNameLabel.css({color: "#70A4CC"});
      });
  
  login.on("click", function () {
    if (userName.val() === null || userName.val() === "" || userNameLabel.text() === "用户不存在") {
      console.log("lo1");
      userName.focus();
    } else if (passName.val() === null || passName.val() === "") {
      console.log("lo2");
      passName.focus();
    } else {
      console.log("lo3");
      $.ajax({
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
            $(location).attr({href: "template/home.html"});
          } else if (response.result === "wrong") {
            passNameLabel.text("密码错误");
            passNameLabel.css({color: "#f00"});
            passName.onfocus();
          }
        },
      });
    }
  });
});
