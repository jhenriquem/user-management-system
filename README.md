# 👨‍💻  User management system 

The user management system is a project of mine, which is focused on studies and practice

## 🌐 API
All the API code will be in the server folder

### 📋 Features

- I used REST architecture
- The entire API was created in the node.js environment with typescript
- I use mongoDB to store the data
- The authentication system uses JWT to validate users

### 🔑 Key
The API key is a security system between client and server. You create it and make it available so that the client can make requests.

It is advisable to store it in an environment variable.

### 🚩 Endpoints

All endpoints require an authorization header with the api key, as such: `Authorization: Basic <apikey>`

#### GET `/api/user/`
Gets the authenticated user's data

Example Response:
```json
{
    statusMessage : "Successful",
    data : {
        name : "",
        lastname : "",
        registration_date : "",
    }
}
```

#### POST `/api/user/`
Add a new user

Requires a JSON body with the following fields: 
- `name`: username
- `lastname` : user last name
- `date_of_birth` : user's date of birth
- `registration_date` : user registration date 
- `email` : user email
- `password` : user password

Example Response:
```json
{
    statusMessage : "Success registering new user",
}
```

#### POST `/api/user/auth`
Authenticate the user


Requires a JSON body with the following fields: 
- `email` : user email
- `password` : user password

Example Response:
```json
{
    statusMessage : "Authenticated",
    token : "jwt token"
}
```

