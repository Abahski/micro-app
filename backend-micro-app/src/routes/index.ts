import express from "express"
import UsersController from "../controllers/UsersController"
const Route = express.Router()

Route.post("/register", UsersController.create)
Route.get("/users", UsersController.find)
Route.get("/user/:id", UsersController.catch)
Route.delete("/user/:id", UsersController.delete)
Route.put("/user/:id", UsersController.update)

// AUTH => Login & Register => /api/v1/auth/register => post => post a new user


export default Route