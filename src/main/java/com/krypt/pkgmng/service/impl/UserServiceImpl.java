package com.krypt.pkgmng.service.impl;

import com.krypt.pkgmng.entity.User;
import com.krypt.pkgmng.repo.UserRepository;
import com.krypt.pkgmng.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class UserServiceImpl implements UserService {
    private final UserRepository repo;

    @Override
    public Optional<User> findUser(Long id)
    {
        return repo.findById(id);
    }

    @Override
    public User findUserByMail(String mail) {
        return repo.findByEmail(mail);
    }

    @Override
    public User findUser(String mail, String password) {
        return repo.findByEmailAndPassword(mail, password);
    }

    @Override
    public User addUser(String mail, String username, String password) {
        User user = new User();
        user.setEmail(mail);
        user.setUsername(username);
        user.setPassword(password);
        return repo.save(user);
    }

    @Override
    public User saveUser(User user) {
        return repo.save(user);
    }
}
