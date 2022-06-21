package com.krypt.pkgmng.repo;

import com.krypt.pkgmng.entity.Pkg;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PackageRepository extends CrudRepository<Pkg,Long> {
//    void insertPkg(Pkg pack);
}

