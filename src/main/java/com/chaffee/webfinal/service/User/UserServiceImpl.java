/**
 * @Name: WebFinal
 * @Author: SaarChaffee
 * @Code: UTF-8
 * @Date: Created in 2021 2021/12/21
 */
package com.chaffee.webfinal.service.User;

import com.chaffee.webfinal.dao.BaseDao;
import com.chaffee.webfinal.dao.User.UserDao;
import com.chaffee.webfinal.dao.User.UserDaoImpl;
import com.chaffee.webfinal.pojo.User;
import com.mysql.cj.util.StringUtils;

import java.sql.Connection;
import java.sql.SQLException;

public class UserServiceImpl implements UserService{
  private UserDao userDao;
  
  public UserServiceImpl(){
    userDao=new UserDaoImpl();
  }
  
  @Override
  public User getUser( String userName, String Password ) {
    User user=null;
    Connection connection=null;
    
    try{
      if( userName != null ){
        connection= BaseDao.getConnection();
        user = userDao.getUser( connection, userName );
      }
    }catch( SQLException e ){
      e.printStackTrace();
    }finally{
      BaseDao.close( connection,null,null );
    }
    if( user != null && !StringUtils.isNullOrEmpty( Password ) && Password.equals( user.getPassWord() ) ){
      return user;
    }else{
      return null;
    }
  }
}
