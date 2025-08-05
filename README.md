# CREM‑HRM 🧑‍💼

**CREM: Customer Relationship & Employee Management Backend**  
A TypeScript backend service built with **NestJS**, designed to manage employees, attendance, leave, payroll, and CRM workflows.

---

## 🧠 About

This is a backend API server for **CREM‑HRM**, supporting HR and CRM operations.  
Built using **NestJS** and **TypeScript**, it provides modular, scalable REST endpoints to interact with employee data, attendance logs, payroll, client relations, and more.

---

## 🚀 Core Features

- **Authentication & Authorization**  
  Role-based access control (Admin, HR, Manager, Employee) using JWT

- **Employee & Client CRUD**  
  Manage employee and client records with full lifecycle support

- **Attendance Tracking**  
  Clock-in / clock-out, daily hours, attendance history

- **Leave & Time-Off**  
  Apply, approve or reject, and manage leave balances

- **Payroll Processing**  
  Salary calculations, allowances, deductions, payslip generation

- **CRM Integrations**  
  Manage client interactions, tasks, and service histories

- **Database Support**  
  Easily switchable between PostgreSQL / MySQL / MongoDB via TypeORM or Mongoose

- **Configuration Management**  
  Environment-driven setup with `.env` and validation

- **Automated Testing**  
  Unit and end‑to‑end tests implemented with Jest

---

## 🛠 Tech Stack

- 🧾 **Language**: TypeScript  
- 📦 **Framework**: NestJS  
- 🗄️ **Database**: PostgreSQL / MySQL / MongoDB  
- 🔌 **ORM**: TypeORM or Mongoose  
- 🔒 **Authentication**: JWT  
- 🧪 **Testing**: Jest  
- 📄 **Documentation**: Swagger / OpenAPI

---

## 🔧 Getting Started

### Prerequisites

- Node.js v16+  
- npm v8+ or Yarn  
- Running DB instance: PostgreSQL, MySQL, or MongoDB

### Installation

```bash
git clone https://github.com/ajithpkumar18/CREM-HRM.git
cd CREM-HRM
npm install
npm run dev
