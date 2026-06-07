package com.example.s.Attendence.firstyear.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.s.Attendence.firstyear.model.Workingdays;
import com.example.s.Attendence.firstyear.repository.WorkingdaysRepository;

@RestController
@RequestMapping("/api")
public class WorkingdaysController {
    @Autowired
    private WorkingdaysRepository workingdaysRepository;

    @PutMapping("/workingdays")
    public ResponseEntity<String> addWorkingDays(@RequestBody Workingdays workingdays) {

        Optional<Workingdays> studentOpt = workingdaysRepository.findBySem(workingdays.getSem()); // Corrected repository call

        if (studentOpt.isPresent()) {
            Workingdays existingdays = studentOpt.get();

            // Update only non-zero attendance fields
            if (workingdays.getJuly() != 0)
                existingdays.setJuly(workingdays.getJuly());
            if (workingdays.getAugust() != 0)
                existingdays.setAugust(workingdays.getAugust());
            if (workingdays.getSeptember() != 0)
                existingdays.setSeptember(workingdays.getSeptember());
            if (workingdays.getOctober() != 0)
                existingdays.setOctober(workingdays.getOctober());
            if (workingdays.getNovember() != 0)
                existingdays.setNovember(workingdays.getNovember());
            if (workingdays.getDecember() != 0)
                existingdays.setDecember(workingdays.getDecember());
            if (workingdays.getJanuary() != 0)
                existingdays.setJanuary(workingdays.getJanuary());
            if (workingdays.getFebruary() != 0)
                existingdays.setFebruary(workingdays.getFebruary());
            if (workingdays.getMarch() != 0)
                existingdays.setMarch(workingdays.getMarch());
            if (workingdays.getApril() != 0)
                existingdays.setApril(workingdays.getApril());
            if (workingdays.getMay() != 0)
                existingdays.setMay(workingdays.getMay());

            // Save the updated entity
            workingdaysRepository.save(existingdays);

            return ResponseEntity.ok("Working days updated successfully!");
        } else {
            workingdaysRepository.save(workingdays);
            return ResponseEntity.ok("Working days updated successfully!");
        }
    }

}
