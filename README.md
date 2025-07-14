# Wedding Coordinator API Documentation
**Version:** 1.0  
**Last Updated:** 2025-07-14

---

## 📌 Introduction
This document outlines the available endpoints for the Wedding Coordinator Backend API, covering coordinator management, booking operations, and availability checks.

---

## 🌐 Base URL



---

## 🔍 Endpoints

### 👥 Coordinators

#### 1. Get All Coordinators
| Method | Endpoint       | Parameters              | Response Format |
|--------|----------------|-------------------------|-----------------|
| `GET`  | `/coordinators` | Filters, sort, paginate | ```json
{
"status": "success",
"results": 3,
"data": { "coordinators": [...] }
}
``` |

#### 2. Get Specific Coordinator  
| Method | Endpoint          | Response Format |
|--------|-------------------|-----------------|
| `GET`  | `/coordinators/:id` | ```json
{
  "status": "success",
  "data": { "coordinator": {...} }
}
``` |

#### 3. Check Availability  
| Method | Endpoint                        | Body                          | Response Format |
|--------|---------------------------------|-------------------------------|-----------------|
| `POST` | `/coordinators/:id/check-availability` | ```json
{ "date": "2025-08-15" }
``` | ```json
{
  "status": "success",
  "data": { "isAvailable": true }
}
``` |

---

### 📅 Bookings  

#### 1. Get All Bookings  
| Method | Endpoint    | Parameters              | Response Format |
|--------|-------------|-------------------------|-----------------|
| `GET`  | `/bookings` | Filters, sort, paginate | ```json
{
  "status": "success",
  "results": 2,
  "data": { "bookings": [...] }
}
``` |

#### 2. Create New Booking  
| Method | Endpoint    | Body (Example) | Response Format |
|--------|-------------|----------------|-----------------|
| `POST` | `/bookings` | ```json
{
  "coordinatorId": "123",
  "clientName": "John",
  "clientEmail": "john@example.com",
  "weddingDate": "2025-08-15",
  "guestCount": 150
}
``` | ```json
{
  "status": "success",
  "data": { "booking": {...} }
}
``` |

#### 3. Check Booking Availability  
| Method | Endpoint                                | Query Param | Response Format |
|--------|-----------------------------------------|-------------|-----------------|
| `GET`  | `/bookings/check-availability/:coordinatorId` | `?date=2025-08-15` | ```json
{
  "status": "success",
  "data": { "isAvailable": true }
}
``` |

---

## ❌ Error Responses  
```json
{
  "status": "error",
  "message": "Error description here"
}
