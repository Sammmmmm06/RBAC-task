# Full Stack Authentication & Role-Based Access Control (RBAC)

This project demonstrates **JWT-based authentication and role-based access control** using **Spring Boot** for the backend and **React + TypeScript** for the frontend.

Users can register, log in, and access content depending on their assigned role (**USER / ADMIN**).

---

# Tech Stack

## Backend

* Java 17
* Spring Boot
* Spring Security
* JWT Authentication
* Spring Data JPA
* Hibernate
* Lombok
* MapStruct
* Maven
* Swagger / OpenAPI

## Frontend

* React
* TypeScript
* Vite
* React Router
* React Hook Form
* React Query
* Axios
* TailwindCSS

---

# Project Structure

```id="struct01"
project-root
│
├── backend
│   └── Spring Boot Application
│
├── frontend
│   └── React + Vite Application
│
└── README.md
```

---

# Database Setup

This project uses **MySQL**.

### 1. Install MySQL (if not already installed)

Download and install MySQL from:

```
https://dev.mysql.com/downloads/mysql/
```

### 2. Create Database

Run the following SQL command:

```sql id="sql01"
CREATE DATABASE rbac_auth;
```

### 3. Update `application.properties`

Open:

```
backend/src/main/resources/application.properties
```

Update database configuration:

```properties id="prop01"
spring.datasource.url=jdbc:mysql://localhost:3306/rbac_auth
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
```

Spring Boot will automatically create the required tables when the application runs.

---

# Backend Setup

### 1. Navigate to backend

```id="cmd01"
cd backend
```

### 2. Build the project

```id="cmd02"
mvn clean install
```

### 3. Run the application

```id="cmd03"
mvn spring-boot:run
```

Backend server will start at:

```
http://localhost:8080
```

---

# API Documentation

Swagger UI:

```
http://localhost:8080/swagger-ui.html
```

---

# Frontend Setup

### 1. Navigate to frontend

```id="cmd04"
cd frontend
```

### 2. Install dependencies

```id="cmd05"
npm install
```

### 3. Run development server

```id="cmd06"
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

# Authentication Flow

1. User registers using `/api/auth/register`
2. User logs in using `/api/auth/login`
3. Backend generates a **JWT token**
4. Frontend stores the token in **localStorage**
5. Token is sent with API requests:

```
Authorization: Bearer <JWT_TOKEN>
```

6. Spring Security validates the token and enforces role-based access.

---

# Role-Based Access

| Endpoint      | Access |
| ------------- | ------ |
| `/api/public` | Public |
| `/api/user`   | USER   |
| `/api/admin`  | ADMIN  |

---

# Features

* User registration
* JWT authentication
* Role-based access control
* Protected APIs
* Dashboard with role-specific content
* Logout functionality

---

# Author

This project was developed as part of a **Full Stack Authentication & RBAC assignment**.
