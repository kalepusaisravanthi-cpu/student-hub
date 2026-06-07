package com.example.s.Attendence.firstyear.controller;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.s.Attendence.firstyear.model.Firstyear;
import com.example.s.Attendence.firstyear.repository.FirstyearRepository;
import com.example.s.Attendence.firstyear.repository.WorkingdaysRepository;

@RestController
@RequestMapping("api/firstyear")
public class FirstyearController {
    @Autowired
    private FirstyearRepository firstyearRepository;
    @Autowired
    private WorkingdaysRepository workingdaysRepository;
            
    @GetMapping("/get")
    public ResponseEntity<List<Firstyear>> getAllAttendance() {
        List<Firstyear> firstyearList = firstyearRepository.findAll();
        return ResponseEntity.ok(firstyearList);
    }

    @PutMapping("/postlist")
    public ResponseEntity<String> addAttendance(@RequestBody List<Firstyear> firstyearList) {
        for (Firstyear firstyear : firstyearList) {
            Optional<Firstyear> studentOpt = firstyearRepository.findBypinNumber(firstyear.getPinNumber());

            if (studentOpt.isPresent()) {
                Firstyear existingStudent = studentOpt.get();

                // Update only non-zero attendance fields

                if (firstyear.getJune() != 0)
                    existingStudent.setJune(firstyear.getJune());
                if (firstyear.getJuly() != 0)
                    existingStudent.setJuly(firstyear.getJuly());
                if (firstyear.getAugust() != 0)
                    existingStudent.setAugust(firstyear.getAugust());
                if (firstyear.getSeptember() != 0)
                    existingStudent.setSeptember(firstyear.getSeptember());
                if (firstyear.getOctober() != 0)
                    existingStudent.setOctober(firstyear.getOctober());
                if (firstyear.getNovember() != 0)
                    existingStudent.setNovember(firstyear.getNovember());
                if (firstyear.getDecember() != 0)
                    existingStudent.setDecember(firstyear.getDecember());
                if (firstyear.getJanuary() != 0)
                    existingStudent.setJanuary(firstyear.getJanuary());
                if (firstyear.getFebruary() != 0)
                    existingStudent.setFebruary(firstyear.getFebruary());
                if (firstyear.getMarch() != 0)
                    existingStudent.setMarch(firstyear.getMarch());
                if (firstyear.getApril() != 0)
                    existingStudent.setApril(firstyear.getApril());
                if (firstyear.getMay() != 0)
                    existingStudent.setMay(firstyear.getMay());

                firstyearRepository.save(existingStudent);
            } else {
                // Save new attendance record
                firstyearRepository.save(firstyear);
            }
        }

        return ResponseEntity.ok("Attendance successfully submitted for the provided list!");
    }


 @PostMapping("/export")
    public ResponseEntity<byte[]> exportAttendanceToExcel(@RequestBody List<String> selectedFields) {
        try {
            // Fetch all students' attendance data
            List<Firstyear> students = firstyearRepository.findAll();

            // Convert attendance data to a list of maps for dynamic export
            List<Map<String, Object>> data = students.stream().map(student -> {
                Map<String, Object> row = new LinkedHashMap<>();
                for (String field : selectedFields) {
                    switch (field.toLowerCase()) {
                        case "name":
                            row.put(field, student.getName());
                            break;
                        case "pin number":
                            row.put(field, student.getPinNumber());
                            break;
                        case "january":
                            row.put(field, student.getJanuary());
                            break;
                        case "february":
                            row.put(field, student.getFebruary());
                            break;
                        case "march":
                            row.put(field, student.getMarch());
                            break;
                        case "april":
                            row.put(field, student.getApril());
                            break;
                        case "may":
                            row.put(field, student.getMay());
                            break;
                        case "december":
                            row.put(field, student.getDecember());
                            break;
                        default:
                            row.put(field, "N/A");
                            break;
                    }
                }
                return row;
            }).toList();

            // Generate Excel file
            byte[] excelFile = generateExcelFile(selectedFields, data);

            // Set HTTP headers for the response
            HttpHeaders responseHeaders = new HttpHeaders();
            responseHeaders.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=attendance.xlsx");
            responseHeaders.setContentType(MediaType.APPLICATION_OCTET_STREAM);

            // Return Excel file as response
            return ResponseEntity.ok()
                    .headers(responseHeaders)
                    .body(excelFile);

        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Helper method to generate the Excel file
    private byte[] generateExcelFile(List<String> headers, List<Map<String, Object>> data) throws IOException {
        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("Attendance");

        // Create header row
        Row headerRow = sheet.createRow(0);
        for (int i = 0; i < headers.size(); i++) {
            headerRow.createCell(i).setCellValue(headers.get(i));
        }

        // Fill data rows
        int rowIndex = 1;
        for (Map<String, Object> rowData : data) {
            Row row = sheet.createRow(rowIndex++);
            int cellIndex = 0;
            for (String header : headers) {
                row.createCell(cellIndex++).setCellValue(rowData.getOrDefault(header, "N/A").toString());
            }
        }

        // Convert the Excel file to a byte array
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        workbook.write(byteArrayOutputStream);
        workbook.close();

        return byteArrayOutputStream.toByteArray();
    }

}