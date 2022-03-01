import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { DEFAULT_TIMEZONE } from './constants';

dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

/**
 *
 * @param date - string in ISO 8601 format
 * @param timeZone - optional time zone (fallback to default time zone if not set)
 * @param format - date display format
 * @returns formatted string
 */
const formatTime = (date: string, timeZone: string | undefined, format: string): string => {
  const timeZoneOrDefault = timeZone ?? DEFAULT_TIMEZONE;
  return dayjs(date).tz(timeZoneOrDefault).format(format);
};

export default formatTime;
