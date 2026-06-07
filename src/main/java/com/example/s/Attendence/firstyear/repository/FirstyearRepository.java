package com.example.s.Attendence.firstyear.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.s.Attendence.firstyear.model.Firstyear;
@Repository
public interface FirstyearRepository extends JpaRepository<Firstyear,Long> {

    Optional<Firstyear> findBypinNumber(String pinNumber);

    
}
