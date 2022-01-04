import { zonedTimeToUtc } from 'date-fns-tz';
import { isSameDay, format } from 'date-fns';
import { ContentKind } from './types';
import { DEFAULT_TIMEZONE } from './constants';

export const VILT_KINDS = [ContentKind.Webinar, ContentKind.WebinarCourse];
export const ILT_KINDS = [ContentKind.InPersonEvent, ContentKind.InPersonEventCourse];

export default function courseRunsPhrase(
  kind: ContentKind | undefined,
  startDate: Date,
  endDate: Date | undefined,
  timeZone: string | undefined
): string {
  if (!timeZone) {
    timeZone = DEFAULT_TIMEZONE;
  }

  const parsedStartDate = zonedTimeToUtc(startDate, timeZone);
  const parsedEndDate = endDate ? zonedTimeToUtc(endDate, timeZone) : null;

  if (kind && (ILT_KINDS.includes(kind) || VILT_KINDS.includes(kind))) {
    if (parsedEndDate) {
      if (isSameDay(parsedStartDate, parsedEndDate)) {
        return `${format(parsedStartDate, 'eee, MMM do yyyy hh:mm aaa')} – ${format(
          parsedEndDate,
          'hh:mm aaa z'
        )}`;
      }

      return `${format(parsedStartDate, 'eee, MMM do yyyy hh:mm aaa')} – ${format(
        parsedEndDate,
        'eee, MMM do yyyy hh:mm aaa z'
      )}`;
    }

    return `${format(parsedStartDate, 'eee, MMM do yyyy hh:mm aaa z')}`;
  }

  if (parsedEndDate) {
    return `${format(parsedStartDate, 'MMM do yyyy')} – ${format(parsedEndDate, 'MMM do yyyy')}`;
  }

  return format(parsedStartDate, 'MMM do yyyy');
}
