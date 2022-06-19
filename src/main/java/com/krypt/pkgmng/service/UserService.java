package com.krypt.pkgmng.service;

import com.krypt.pkgmng.entity.User;

import java.util.Optional;

public interface UserService {
    User findUser(String mail, String password);

    Optional<User> findUser(Long id);

    User findUserByMail(String mail);

    User addUser(String mail, String username, String password);

    User saveUser(User user);
}
