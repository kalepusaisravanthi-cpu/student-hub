# student-hub
A full-stack student information and login system with OTP authentication.

## Project Description

Student Hub is a student data management system that handles student records, attendance, marks, and document retrieval.  
`S` is the backend service that supports student and lecturer login, OTP authentication, and delivery of filtered student data for download.

## Features

- Student login using email OTP
- Lecturer and student role lookup
- Retrieve specific student fields
- Download selected student data/report files
- Manage student information, marks, and attendance
- Backend APIs for student and lecturer lookup

## Tech Stack

- Java / Spring Boot
- Spring Data JPA
- MySQL
- React
- Axios
- SweetAlert2

## Overview
Backend (s)
Spring Boot application
MySQL database integration
Email OTP service using Gmail SMTP
Student and lecturer lookup APIs



## How to Run

### Backend (`s`)
1. Open a terminal in `d:\project\src\s\s`
2. Set environment variables:
   ```powershell
   $env:JAVA_HOME='C:\Program Files\Java\jdk-17'
   $env:MAIL_PASSWORD='YOUR_GMAIL_APP_PASSWORD'
3. start the backend
`
powershell.\mvnw spring-boot:run`

#**Frontend (Student Info)**
1. Open a terminal in the React project folder
2. Install dependencies:
   `npm install`
3. start the frontend:
   `npm start`


## Notes
The backend currently uses Gmail SMTP for OTP delivery.
Use a valid Gmail App Password for MAIL_PASSWORD.
Make sure the frontend API requests match the backend port.
Backend role validation uses:
`GET /student/api/getByEmail/{email}
GET /lecturers/email/{email}`


## Project Structure
`s` - Spring Boot backend
`Student Info / Student Hub` - React frontend
application.properties - backend configuration
`loginstu.js / Login.js` - OTP login pages
## Summary
This project is designed to manage student data and provide secure email OTP login. It supports retrieving only required student fields and downloading filtered data files for reporting or record keeping. 
