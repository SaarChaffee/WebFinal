/**
 * @Name: WebFinal
 * @Author: SaarChaffee
 * @Code: UTF-8
 * @Date: Created in 2021 2021/12/21
 */
package com.chaffee.webfinal.dao.User;

import com.chaffee.webfinal.dao.BaseDao;
import com.chaffee.webfinal.pojo.User;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDaoImpl implements UserDao {
  @Override
  public User getUser( Connection connection, String username ) throws SQLException {
    PreparedStatement pstm = null;
    ResultSet rs = null;
    User user = null;
    String sql = "select * from user where username = ?";
    Object[] param = { username };
    if( connection != null ){
      rs = BaseDao.execute( connection, pstm, rs, sql, param );
      if( rs.next() ){
        user = new User();
        user.setUserName( rs.getString( "username" ) );
        user.setPassWord( rs.getString( "userpassword" ) );
      }
    }
    BaseDao.close( null, pstm, rs );
    return user;
  }
  
  @Override
  public int addUser( Connection connection, String username, String password ) throws SQLException {
    PreparedStatement pstm = null;
    String sql = "insert into user values (?,?)";
    Object[] param = { username, password };
    int result = 0;
    if( connection != null ){
      result = BaseDao.execute( connection, pstm, sql, param );
    }
    BaseDao.close( null, pstm, null );
    return result;
  }
  
  
}
