
import { EXPIRATION_TIME_API } from './../configs/properties.config'

export const checkExpiration = (dateStart: number, dateNow: number) => {
  console.log(`Date From : ${dateStart} - DateNow ${dateNow} - DateVigence: ${dateNow - dateStart} - EXPIRATION: ${EXPIRATION_TIME_API}`);
  return (dateNow - dateStart) > EXPIRATION_TIME_API;
}
