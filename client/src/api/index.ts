import type { Login, User } from '../models/User'
import Request from "./request";

export const domainName = "localhost:3030"
export const baseURI = `http://${domainName}/api`;

export async function login(
  email: string,
  password: string,
): Promise<Login> {
  const { data } = await Request.post(`${baseURI}/isousers/login`, {
    email: email,
    password: password,
  })

  return data
}

