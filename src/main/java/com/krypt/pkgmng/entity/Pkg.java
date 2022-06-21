package com.krypt.pkgmng.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="package")
@Setter
@Getter
public class Pkg {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "length")
    private float length;
    @Column(name = "height")
    private float  height;
    @Column(name = "width")
    private float width;
    @Column(name = "weight")
    private float weight;
    @Column(name = "date")
    private Date date;
    @Column(name = "dim_unit")
    private float dimUnit;
    @Column(name = "len_unit")
    private float lenUnit;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User userId;

}
