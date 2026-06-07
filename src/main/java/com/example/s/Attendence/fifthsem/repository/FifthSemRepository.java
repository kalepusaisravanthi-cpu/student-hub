package com.example.s.Attendence.fifthsem.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.s.Attendence.fifthsem.model.FifthSem;

public interface FifthSemRepository extends JpaRepository<FifthSem, Long> {
    Optional<FifthSem> findByPinNumber(String pinNumber);
}
