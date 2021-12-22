/**
 * @Name: WebFinal
 * @Author: SaarChaffee
 * @Code: UTF-8
 * @Date: Created in 2021 2021/12/21
 */
package com.chaffee.webfinal.servlet;

import com.chaffee.webfinal.pojo.User;
import com.chaffee.webfinal.service.User.UserService;
import com.chaffee.webfinal.service.User.UserServiceImpl;
import com.chaffee.webfinal.util.Constans;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public class UserServlet extends HttpServlet {
  @Override
  protected void doGet( HttpServletRequest req, HttpServletResponse resp ) throws ServletException, IOException {
    String method = req.getParameter( "method" );
    switch( method ){
      case "login" ->{
        this.login( req, resp );
      }
    }
  }
  
  @Override
  protected void doPost( HttpServletRequest req, HttpServletResponse resp ) throws ServletException, IOException {
  
  }
  
  protected void login( HttpServletRequest req, HttpServletResponse resp ) throws ServletException, IOException{
    String userName = req.getParameter( "userName" );
    String passName = req.getParameter( "passName" );
    boolean flag = false;
    User user=null;
    UserService userService = new UserServiceImpl();
    
    user=userService.getUser( userName,passName );
  
    if( user != null ){
      req.getSession().setAttribute( Constans.USER_SESSION,user );
      resp.sendRedirect( req.getContextPath()+"/template/home.html" );
    }else{
      req.setAttribute( "error","用户名或密码错误" );
      req.getRequestDispatcher( "/login.html" ).forward( req,resp );
    }
  }
}