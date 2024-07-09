import { getUserI } from "./userTypes"

export default interface ResponseServicesI {
  status: string
  message: string
  tk?: string
  data?: getUserI
}
