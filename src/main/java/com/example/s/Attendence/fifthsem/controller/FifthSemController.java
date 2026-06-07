package com.example.s.Attendence.fifthsem.controller;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.example.s.Attendence.fifthsem.model.FifthSem;
import com.example.s.Attendence.fifthsem.repository.FifthSemRepository;

@Controller
@RequestMapping("api/fifthsem")
public class FifthSemController {

    private final FifthSemRepository fifthSemRepository;

    public FifthSemController(FifthSemRepository fifthSemRepository) {
        this.fifthSemRepository = fifthSemRepository;
    }

    @PutMapping("/postlist")
    public ResponseEntity<String> addAttendance(@RequestBody List<FifthSem> fifthSemList) {
        for (FifthSem student : fifthSemList) {
            Optional<FifthSem> studentOpt = fifthSemRepository.findByPinNumber(student.getPinNumber());

            if (studentOpt.isPresent()) {
                FifthSem existingStudent = studentOpt.get();

                // Update only non-zero attendance fields
                if (student.getJanuary() != 0) existingStudent.setJanuary(student.getJanuary());
                if (student.getFebruary() != 0) existingStudent.setFebruary(student.getFebruary());
                if (student.getMarch() != 0) existingStudent.setMarch(student.getMarch());
                if (student.getApril() != 0) existingStudent.setApril(student.getApril());
                if (student.getMay() != 0) existingStudent.setMay(student.getMay());
                if (student.getJune() != 0) existingStudent.setJune(student.getJune());
                if (student.getJuly() != 0) existingStudent.setJuly(student.getJuly());
                if (student.getAugust() != 0) existingStudent.setAugust(student.getAugust());
                if (student.getSeptember() != 0) existingStudent.setSeptember(student.getSeptember());
                if (student.getOctober() != 0) existingStudent.setOctober(student.getOctober());
                if (student.getNovember() != 0) existingStudent.setNovember(student.getNovember());
                if (student.getDecember() != 0) existingStudent.setDecember(student.getDecember());

                fifthSemRepository.save(existingStudent);
            } else {
                // Save new attendance record
                fifthSemRepository.save(student);
            }
        }

        return ResponseEntity.ok("Attendance successfully submitted for the provided list!");
    }

 @PostMapping("/export")
    public ResponseEntity<byte[]> exportAttendanceToExcel(@RequestBody List<String> selectedFields) {
        try {
            // Fetch all students' attendance data
            List<FifthSem> students = fifthSemRepository.findAll();

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
                        case "june":
                            row.put(field, student.getJune());
                            break;
                        case "july":
                            row.put(field, student.getJuly());
                            break;
                        case "august":
                            row.put(field, student.getAugust());
                            break;
                        case "september":
                            row.put(field, student.getSeptember());
                            break;
                        case "october":
                            row.put(field, student.getOctober());
                            break;
                        case "november":
                            row.put(field, student.getNovember());
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
