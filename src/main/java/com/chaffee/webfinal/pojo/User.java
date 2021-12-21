/**
 * @Name: WebFinal
 * @Author: SaarChaffee
 * @Code: UTF-8
 * @Date: Created in 2021 2021/12/21
 */
package com.chaffee.webfinal.pojo;

public class User {
  private String userName;
  private String passWord;
  
  public String getUserName() {
    return userName;
  }
  
  public void setUserName( String userName ) {
    this.userName = userName;
  }
  
  public String getPassWord() {
    return passWord;
  }
  
  public void setPassWord( String passWord ) {
    this.passWord = passWord;
  }
  
  @Override
  public String toString() {
    return "User{" +
        "userName='" + userName + '\'' +
        ", passWord='" + passWord + '\'' +
        '}';
  }
}
