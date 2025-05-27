# WorkIndiaRailwayAPI 

## WorkingAPI Endpoints

### Auth
- POST `/api/v1auth/register`
- POST `/api/v1/auth/login`

### Trains (Admin)
- POST `/api/v1/trains` (Requires x-api-key)
- GET `/api/v1/trains/availability`

### Users
- POST `/api/v1/bookings` (Requires JWT)
- GET `/api/v1/bookings/:id` (Requires JWT)
