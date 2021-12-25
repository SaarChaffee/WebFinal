/**
 * @Name: WebFinal
 * @Author: SaarChaffee
 * @Code: UTF-8
 * @Date: Created in 2021 2021/12/21
 */
package com.chaffee.webfinal.dao.User;

import com.chaffee.webfinal.dao.BaseDao;
import com.chaffee.webfinal.pojo.User;
import org.junit.Test;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

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
  
  @Override
  public List<String> getUsersName( Connection connection ) throws SQLException {
    PreparedStatement pstm = null;
    ResultSet rs = null;
    String sql = "select username usernames from user";
    Object[] param = {};
    List<String> usernames = new ArrayList<>();
    
    if( connection != null ){
      rs = BaseDao.execute( connection, pstm, rs, sql, param );
      while( rs.next() ){
        usernames.add( rs.getString( "usernames" ) );
      }
    }
    BaseDao.close( null, pstm, rs );
    return usernames;
  }
  
  @Test
  public void test() throws SQLException {
    Connection connection = BaseDao.getConnection();
    UserDao userDao = new UserDaoImpl();
    List<String> usersName = userDao.getUsersName( connection );
    for( String username : usersName ){
      System.out.println( username );
    }
  }
}
