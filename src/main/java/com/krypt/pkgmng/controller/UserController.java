package com.krypt.pkgmng.controller;

import com.krypt.pkgmng.entity.User;
import com.krypt.pkgmng.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;
import java.util.Optional;


@RestController
@RequestMapping("/user")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@CrossOrigin
public class UserController {
    private final UserService userService;
    //private final UserDTOMapper mapper;

    @PostMapping(value = "/login")
    public ResponseEntity login(@RequestParam("mail") String mail, @RequestParam("password") String password)
    {
        User user = userService.findUser(mail, password);
        if (user != null)
        {
            // setResponseEnum(ResponseEnum.OK, "Kullanıcı bulundu");
            return new ResponseEntity(user, HttpStatus.OK);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.add("NOT_FOUND","User not found");
        return new ResponseEntity(headers, HttpStatus.NOT_FOUND);
    }

    @PostMapping(value = "/register")
    public ResponseEntity register(@RequestParam("mail") String mail,@RequestParam("username") String username, @RequestParam("password") String password)
    {
        User user = userService.findUserByMail(mail);
        if (user == null)
        {
            User createdUser = userService.addUser(mail,username,password);
            return new ResponseEntity(createdUser, HttpStatus.OK);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.add("ALREADY_EXISTS","Account with given credentials already exist");
        return new ResponseEntity(headers, HttpStatus.BAD_REQUEST);
    }

    @PostMapping(value = "/change-password")
    public ResponseEntity changePassword(@RequestParam("mail") String mail, @RequestParam("password") String password,
                                         @RequestParam("new-password") String newPassword)
    {

        if (Objects.equals(password, newPassword)){
            HttpHeaders headers = new HttpHeaders();
            headers.add("ALREADY_EXISTS","Password should be different than the current password");
            return new ResponseEntity(headers, HttpStatus.BAD_REQUEST);
        }
        User user = userService.findUser(mail,password);
        if (user != null)
        {
            user.setPassword(newPassword);
            User updatedUser = userService.saveUser(user);
            return new ResponseEntity(updatedUser, HttpStatus.OK);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.add("ALREADY_EXISTS","Account with given credentials already exist");
        return new ResponseEntity(headers, HttpStatus.BAD_REQUEST);

    }


}
