/**
 * @Name: WebFinal
 * @Author: SaarChaffee
 * @Code: UTF-8
 * @Date: Created in 2021 2021/12/21
 */
package com.chaffee.webfinal.service.User;

import com.chaffee.webfinal.pojo.User;

public interface UserService {
  public User getUser(String userName,String Password);
}
