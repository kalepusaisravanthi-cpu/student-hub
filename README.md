# student-hub
A full-stack student information and login system with OTP authentication.

s is the Spring Boot backend for a student management and OTP login system. Student Info is the React frontend that allows students and lecturers to request an OTP, verify their email, and login to role-specific dashboards. The project demonstrates secure login, email integration, and role-based routing.


Overview
Backend (s)
Spring Boot application
MySQL database integration
Email OTP service using Gmail SMTP
Student and lecturer lookup APIs


Frontend (Student Info)
React-based UI for student/lecturer login
OTP request and verification flow
Role-based navigation to student, lecturer, and head dashboards

Key Features
Email OTP login for secure access
Student and lecturer role detection
Email verification and OTP sending
Frontend route-based navigation after successful login
Supports both student and lecturer accounts


Tech Stack
Java / Spring Boot
Spring Data JPA
MySQL
React
Axios
SweetAlert2


Notes
Backend listens on http://localhost:9091 (configured in application.properties)
Frontend must call the backend API on the same port
Gmail App Password required for OTP email sending
Current backend flow uses student/api/getByEmail/{email} and lecturers/email/{email} for role validation
