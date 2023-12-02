# Contacts API

Welcome to the Contacts API! This API provides endpoints to manage contact information, allowing you to retrieve, create, update, and delete contacts. Token validation is implemented for secure access using the `validateToken` middleware.

## Endpoints

### 1. Get All Contacts
   - **Endpoint:** `GET /`
   - **Description:** Retrieve all contacts.

### 2. Create a Contact
   - **Endpoint:** `POST /`
   - **Description:** Create a new contact.

### 3. Get a Contact by ID
   - **Endpoint:** `GET /:id`
   - **Description:** Retrieve a contact by ID.

### 4. Update a Contact
   - **Endpoint:** `PUT /:id`
   - **Description:** Update a contact by ID.

### 5. Delete a Contact
   - **Endpoint:** `DELETE /:id`
   - **Description:** Delete a contact by ID.

## Token Validation

To secure these endpoints, token validation is implemented. Ensure that you include a valid access token in the `Authorization` header of your requests.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/contacts-api.git

2.**Install Dependencies:**

  ```bash
    cd contacts-api
    npm install

