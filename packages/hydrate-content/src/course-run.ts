import { zonedTimeToUtc } from "date-fns-tz";
import { isSameDay, format } from "date-fns";
import { ContentKind } from "./types";

const VILT_KINDS = [ContentKind.Webinar, ContentKind.WebinarCourse];
const ILT_KINDS = [ContentKind.InPersonEvent, ContentKind.InPersonEventCourse];
const DEFAULT_TIMEZONE = "America/New_York";

export default function courseRunsPhrase(
    kind: ContentKind, 
    startDate: Date, 
    endDate: Date | undefined, 
    timeZone: string
): string {
    if (!timeZone) {
        timeZone = DEFAULT_TIMEZONE;
    }

    const parsedStartDate = zonedTimeToUtc(startDate, timeZone);
    const parsedEndDate = endDate ? zonedTimeToUtc(endDate, timeZone) : null;

    if (ILT_KINDS.includes(kind) || VILT_KINDS.includes(kind)) {
        if (parsedEndDate) {
            if (isSameDay(parsedStartDate, parsedEndDate)) {
                return `${format(parsedStartDate, "eee, MMM do yyyy hh:mm aaa")} – ${format(parsedEndDate, "hh:mm aaa z")}`;
            }

            return `${format(parsedStartDate, "eee, MMM do yyyy hh:mm aaa")} – ${format(
                parsedEndDate,
                "eee, MMM do yyyy hh:mm aaa z"
            )}`;
        }

        return `${format(parsedStartDate, "eee, MMM do yyyy hh:mm aaa z")}`;
    }

    if (parsedEndDate) {
        return `${format(parsedStartDate, "MMM do yyyy")} – ${format(parsedEndDate, "MMM do yyyy")}`;
    }
    
    return format(parsedStartDate, "MMM do yyyy");
}
