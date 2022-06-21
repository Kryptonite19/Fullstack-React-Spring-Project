package com.krypt.pkgmng.service.impl;

import com.krypt.pkgmng.entity.Pkg;
import com.krypt.pkgmng.repo.PackageRepository;
import com.krypt.pkgmng.service.PackageService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class PackageServiceImpl implements PackageService {
    private final PackageRepository repo;

    @Override
    public void addPackage(Pkg pac) {
        repo.save(pac);
    }


}
