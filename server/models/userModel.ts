import { model, Schema } from "mongoose"

import { UserInterface } from "../types/userTypes"

const useSchema = new Schema<UserInterface>({
  name: String,
  lastname: String,
  date_of_birth: Date,
  registration_date: Date,
  email: String,
  password: String,
})

const userModel = model<UserInterface>("User", useSchema)

export default userModel
