/**
 * @Name: WebFinal
 * @Author: SaarChaffee
 * @Code: UTF-8
 * @Date: Created in 2021 2021/12/21
 */
package com.chaffee.webfinal.dao;

import org.junit.Test;

import java.io.IOException;
import java.io.InputStream;
import java.sql.*;
import java.util.Properties;

public class BaseDao {
  private static String drive;
  private static String url;
  private static String username;
  private static String password;
  
  static {
    try{
      InputStream is = BaseDao.class.getClassLoader().getResourceAsStream( "config/db.properties" );
      Properties properties = new Properties();
      properties.load( is );
      drive = properties.getProperty( "drive" );
      url = properties.getProperty( "url" );
      username = properties.getProperty( "username" );
      password = properties.getProperty( "password" );
    }catch( IOException e ){
      e.printStackTrace();
    }
  }
  
  public static Connection getConnection() {
    Connection connection = null;
    try{
      Class.forName( drive );
      connection = DriverManager.getConnection( url, username, password );
    }catch( ClassNotFoundException | SQLException e ){
      e.printStackTrace();
    }
    return connection;
    
  }
  
  public static ResultSet execute( Connection connection, PreparedStatement pstm, ResultSet rs, String sql,
                                   Object[] param ) throws SQLException {
    pstm = connection.prepareStatement( sql );
    for( int i = 0; i < param.length; i++ ){
      pstm.setObject( i + 1, param[i] );
    }
    System.err.println( "--------------------------execute--------------------------" );
    System.err.println( pstm.toString() );
    System.err.println( "============================================================" );
    System.err.println();
    rs = pstm.executeQuery();
    return rs;
  }
  
  public static int execute( Connection connection, PreparedStatement pstm, String sql, Object[] param ) throws SQLException {
    pstm = connection.prepareStatement( sql );
    for( int i = 0; i < param.length; i++ ){
      pstm.setObject( i + 1, param[i] );
    }
    System.err.println( "--------------------------execute--------------------------" );
    System.err.println( pstm.toString() );
    System.err.println( "============================================================" );
    System.err.println();
    return pstm.executeUpdate();
  }
  
  public static boolean close( Connection connection, PreparedStatement pstm, ResultSet rs ) {
    boolean flag = true;
    try{
      if( rs != null ){
        rs.close();
        rs = null;
      }
      if( pstm != null ){
        pstm.close();
        pstm = null;
      }
      if( connection != null ){
        connection.close();
        connection = null;
      }
    }catch( SQLException e ){
      flag = false;
      e.printStackTrace();
    }
    return flag;
  }
  
  @Test
  public void test() {
    Connection connection = BaseDao.getConnection();
    System.out.println( connection );
  }
  
}
