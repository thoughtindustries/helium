import { ContentKind } from '../../graphql/global-types';
import dayjs from 'dayjs';
import { formatTime, DEFAULT_TIMEZONE } from '../format-time';

export const VILT_KINDS = [ContentKind.Webinar, ContentKind.WebinarCourse];
export const ILT_KINDS = [ContentKind.InPersonEvent, ContentKind.InPersonEventCourse];

export default function courseRunsPhrase(
  kind: ContentKind | undefined,
  startDate: string,
  endDate: string | undefined,
  timeZone: string | undefined
): string {
  if (!timeZone) {
    timeZone = DEFAULT_TIMEZONE;
  }

  if (kind && (ILT_KINDS.includes(kind) || VILT_KINDS.includes(kind))) {
    if (endDate) {
      const isSameDay = dayjs(startDate).isSame(dayjs(endDate), 'day');
      if (isSameDay) {
        return `${formatTime(startDate, timeZone, 'ddd, MMM Do YYYY hh:mm a')} – ${formatTime(
          endDate,
          timeZone,
          'hh:mm a z'
        )}`;
      }

      return `${formatTime(startDate, timeZone, 'ddd, MMM Do YYYY hh:mm a')} – ${formatTime(
        endDate,
        timeZone,
        'ddd, MMM Do YYYY hh:mm a z'
      )}`;
    }

    return `${formatTime(startDate, timeZone, 'ddd, MMM Do YYYY hh:mm a z')}`;
  }

  if (endDate) {
    return `${formatTime(startDate, timeZone, 'MMM Do YYYY')} – ${formatTime(
      endDate,
      timeZone,
      'MMM Do YYYY'
    )}`;
  }

  return formatTime(startDate, timeZone, 'MMM Do YYYY');
}
