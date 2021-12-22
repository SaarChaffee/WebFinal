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

public interface UserDao {
  public User getUser( Connection connection, String username ) throws SQLException;
}