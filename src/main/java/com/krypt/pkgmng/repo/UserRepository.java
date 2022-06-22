package com.krypt.pkgmng.repo;


import com.krypt.pkgmng.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User,Long> {
    User findByEmailAndPassword(String userName, String password);
    User findByEmail(String email);
}

