export default class ApiError {
  // eslint-disable-next-line no-unused-vars
  constructor(public message: string, public status: number = 400, public data?: any) {}
}
