import { getUserI } from "./userTypes"

export default interface ResponseServicesI {
  status: boolean | string
  message: string
  tk?: string
  data?: getUserI
}
