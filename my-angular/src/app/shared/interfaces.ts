export interface User {
  email: string
  password: string
}

export interface RegisterUser {
  email: string
  password: string
  firstName: string
  lastName: string
  patronymic: string
  birthday: any
}
