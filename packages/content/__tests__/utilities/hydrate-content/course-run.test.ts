import { courseRuns } from '../../../src/utilities/hydrate-content';
import { GlobalTypes } from '../../../src/graphql';

describe('@thoughtindustries/content/courseRuns', () => {
  const startDate = new Date(2020, 0, 1, 12);
  const endDateInSameDay = new Date(startDate);
  endDateInSameDay.setHours(endDateInSameDay.getHours() + 1);
  const endDateInNextDay = new Date(startDate);
  endDateInNextDay.setDate(endDateInNextDay.getDate() + 1);

  const startDateISO = startDate.toISOString();
  const endDateInSameDayISO = endDateInSameDay.toISOString();
  const endDateInNextDayISO = endDateInNextDay.toISOString();

  const timeZone = 'America/Chicago';

  const testData = [
    {
      expected: 'Wed, Jan 1st 2020 07:00 am – 08:00 am EST',
      kind: GlobalTypes.ContentKind.Webinar,
      startDate: startDateISO,
      endDate: endDateInSameDayISO,
      timeZone: undefined
    },
    {
      expected: 'Wed, Jan 1st 2020 07:00 am – Thu, Jan 2nd 2020 07:00 am EST',
      kind: GlobalTypes.ContentKind.WebinarCourse,
      startDate: startDateISO,
      endDate: endDateInNextDayISO,
      timeZone: undefined
    },
    {
      expected: 'Wed, Jan 1st 2020 07:00 am EST',
      kind: GlobalTypes.ContentKind.InPersonEvent,
      startDate: startDateISO,
      endDate: undefined,
      timeZone: undefined
    },
    {
      expected: 'Wed, Jan 1st 2020 06:00 am – 07:00 am CST',
      kind: GlobalTypes.ContentKind.Webinar,
      startDate: startDateISO,
      endDate: endDateInSameDayISO,
      timeZone
    },
    {
      expected: 'Wed, Jan 1st 2020 06:00 am – Thu, Jan 2nd 2020 06:00 am CST',
      kind: GlobalTypes.ContentKind.WebinarCourse,
      startDate: startDateISO,
      endDate: endDateInNextDayISO,
      timeZone
    },
    {
      expected: 'Wed, Jan 1st 2020 06:00 am CST',
      kind: GlobalTypes.ContentKind.InPersonEvent,
      startDate: startDateISO,
      endDate: undefined,
      timeZone
    },
    {
      expected: 'Jan 1st 2020 – Jan 2nd 2020',
      kind: GlobalTypes.ContentKind.Product,
      startDate: startDateISO,
      endDate: endDateInNextDayISO
    },
    {
      expected: 'Jan 1st 2020',
      kind: GlobalTypes.ContentKind.LearningPath,
      startDate: startDateISO,
      endDate: undefined
    }
  ];
  it.each(testData)(
    'should return $expected with kind $kind, start date $startDate, end date $endDate and timezone $timeZone',
    ({ expected, kind, startDate, endDate, timeZone }) => {
      expect(courseRuns(kind, startDate, endDate, timeZone)).toEqual(expected);
    }
  );
});
