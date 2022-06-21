package com.krypt.pkgmng.controller;

import com.krypt.pkgmng.service.PackageService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/package")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@CrossOrigin
public class PackageController {
    @Autowired
    private final PackageService service;
    // @Autowired
   // public PackageController(PackageService service) {
   //     super();
   //     this.service = service;
   // }


    @GetMapping("/getPackage")
    public ResponseEntity  getPackage(){
        return new ResponseEntity("works mk", HttpStatus.OK);
    }
}
