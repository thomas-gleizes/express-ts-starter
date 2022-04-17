export default class ApiError {
  constructor(public message: string, public status: number = 400, public data?: any) {
  }

}
