import { getSunrise } from "sunrise-sunset-js"

const LANGUAGE = "en-US";
const IANA_TZ_NETHERLANDS = "Europe/Amsterdam";
const LATITUDE = 51.419069;
const LONGITUDE = 5.4045572;

const convertTZ = (date, tzString) =>new Date((typeof date === "string" ? new Date(date) : date).toLocaleString(LANGUAGE, {timeZone: tzString}));

const sunriseInUTC = getSunrise(LATITUDE, LONGITUDE);
const sunrise = convertTZ(sunriseInUTC, IANA_TZ_NETHERLANDS);

/**
 * Muhurta is a time period of 48 minutes.
 * Brahmamuhurta starts 2 muhurtas before sunrise and lasts for 1 muhurta period.
 * For example, if sunrise is at 6 A.M., then it starts 48+48 = 96 minutes before 6 A.M.
 * That is, it starts at 4.24 A.M. and lasts till 5:12 A.M.
 * Time of sunrise keeps changing within the range of 5.40–7 A.M., so brahmamuhurta starting time ranges from 4.04–5.24 A.M.
 */

const TOTAL_MS_TO_REDUCE = 48 * 60000;
export const brahmaMuhurthaEndTime = new Date(sunrise - TOTAL_MS_TO_REDUCE).toLocaleTimeString();
export const brahmaMuhurthaStartTime = new Date(sunrise - 2 * TOTAL_MS_TO_REDUCE).toLocaleTimeString();
