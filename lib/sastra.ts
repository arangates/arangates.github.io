import { getSunrise } from "sunrise-sunset-js";

const LANGUAGE = "en-US";
const IANA_TZ_NETHERLANDS = "Europe/Amsterdam";
const LATITUDE = 51.419069;
const LONGITUDE = 5.4045572;

const convertTZ = (date, tzString) => new Date((typeof date === "string" ? new Date(date) : date).toLocaleString(LANGUAGE, { timeZone: tzString }));

const sunriseInUTC = getSunrise(LATITUDE, LONGITUDE);
const sunrise = convertTZ(sunriseInUTC, IANA_TZ_NETHERLANDS);

const TOTAL_MS_TO_REDUCE = 48 * 60000;
const brahmaMuhurthaEndTime = new Date(sunrise.getTime() - TOTAL_MS_TO_REDUCE).toLocaleTimeString(LANGUAGE);
const brahmaMuhurthaStartTime = new Date(sunrise.getTime() - 2 * TOTAL_MS_TO_REDUCE).toLocaleTimeString(LANGUAGE);

export { brahmaMuhurthaEndTime, brahmaMuhurthaStartTime };
