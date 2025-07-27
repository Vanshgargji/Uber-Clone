# User Registration Endpoint Documentation

## Endpoint

`POST /users/register`

## Description

Registers a new user in the system. The endpoint validates the input, hashes the password, creates the user, and returns an authentication token along with the user data.

## Request Body

The request body must be in JSON format and include the following fields:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Field Requirements

- `fullname.firstname`: **string**, required, minimum 3 characters
- `fullname.lastname`: **string**, optional, minimum 3 characters if provided
- `email`: **string**, required, must be a valid email address
- `password`: **string**, required, minimum 6 characters

## Status Codes

- **201 Created**: User registered successfully
- **400 Bad Request**: Validation failed (missing or invalid fields)

## Example Response

**Success (201):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "665c2e2f8e4b2c0012a12345",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

**Error (400):**
```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

## User Login Endpoint Documentation

### Endpoint

`POST /users/login`

### Description

Authenticates an existing user. The endpoint checks the provided credentials, and if valid, returns an authentication token along with the user data.

### Request Body

The request body must be in JSON format and include the following fields:

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `email`: **string**, required, must be a valid email address
- `password`: **string**, required, minimum 6 characters

### Status Codes

- **200 OK**: Login successful
- **400 Bad Request**: Validation failed (missing or invalid fields)
- **401 Unauthorized**: Invalid credentials or user not found

### Example Response

**Success (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "665c2e2f8e4b2c0012a12345",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

**Error (401):**
```json
{
  "message": "Invalid credentials"
}
```

## User Profile Endpoint Documentation

### Endpoint

`GET /users/profile`

### Description

Returns the authenticated user's profile information. Requires a valid authentication token (JWT) in the request cookies or `Authorization` header.

### Authentication

- Requires JWT token (cookie or `Authorization: Bearer <token>` header)

### Status Codes

- **200 OK**: Profile fetched successfully
- **401 Unauthorized**: Missing, invalid, or blacklisted token

### Example Response

**Success (200):**
```json
{
  "user": {
    "_id": "665c2e2f8e4b2c0012a12345",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

**Error (401):**
```json
{
  "message": "Access denied. No token provided."
}
```

---

## User Logout Endpoint Documentation

### Endpoint

`POST /users/logout`

### Description

Logs out the authenticated user by invalidating the token. The user will no longer be able to access protected resources until they log in again.

### Authentication

- Requires JWT token (cookie or `Authorization: Bearer <token>` header)

### Status Codes

- **200 OK**: Logout successful
- **401 Unauthorized**: Missing, invalid, or blacklisted token

### Example Response

**Success (200):**
```json
{
  "message": "Logout successful"
}
```

**Error (401):**
```json
{
  "message": "Access denied. No token provided."
}
```

## Captain Registration Endpoint Documentation

### Endpoint

`POST /captains/register`

### Description

Registers a new captain (driver) in the system. The endpoint validates the input, hashes the password, creates the captain, and returns an authentication token along with the captain's data.

### Request Body

The request body must be in JSON format and include the following fields:

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane.smith@example.com",
  "password": "yourpassword",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Field Requirements

- `fullname.firstname`: **string**, required, minimum 3 characters
- `fullname.lastname`: **string**, optional, minimum 3 characters if provided
- `email`: **string**, required, must be a valid email address, unique
- `password`: **string**, required, minimum 6 characters
- `vehicle.color`: **string**, required, minimum 3 characters
- `vehicle.plate`: **string**, required, minimum 3 characters, unique
- `vehicle.capacity`: **integer**, required, minimum 1
- `vehicle.vehicleType`: **string**, required, must be one of `car`, `bike`, or `auto`

### Status Codes

- **201 Created**: Captain registered successfully
- **400 Bad Request**: Validation failed (missing or invalid fields)

### Example Response

**Success (201):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "665c2e2f8e4b2c0012a12345",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane.smith@example.com",
    "socketId": null,
    "status": "inactive",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "location": {
      "lat": null,
      "lng": null
    }
  }
}
```

**Error (400):**
```json
{
  "errors": [
    {
      "msg": "Color must be at least 3 characters long",
      "param": "vehicle.color",
      "location": "body"
    }
  ]
}
```

