export interface UserInterface {
  name: string
  lastname: string
  registration_date: Date
  date_of_birth: Date
  email: string
  password: string
}

export interface getUserI {
  name: string
  lastname: string
  date_of_birth: Date
}

export interface validationUserI {
  email: string
  password: string
}
