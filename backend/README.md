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