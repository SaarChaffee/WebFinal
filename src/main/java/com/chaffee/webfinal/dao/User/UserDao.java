/**
 * @Name: WebFinal
 * @Author: SaarChaffee
 * @Code: UTF-8
 * @Date: Created in 2021 2021/12/21
 */
package com.chaffee.webfinal.dao.User;

import com.chaffee.webfinal.pojo.User;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

public interface UserDao {
  public User getUser( Connection connection, String username ) throws SQLException;
  
  public int addUser( Connection connection, String username, String password ) throws SQLException;
  
  public List<String> getUsersName( Connection connection ) throws SQLException;
}
