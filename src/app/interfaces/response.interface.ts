import { IAgencie } from "./agencies.interface";

export interface IResponse {
  isSuccess: boolean;
  errorCode: string;
  errorMessage: string;
  data?: IAgencie[] | IAgencie
}
