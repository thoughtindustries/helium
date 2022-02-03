import { courseRuns } from '../../../src/utilities/hydrate-content';
import { GlobalTypes } from '../../../src/graphql';

describe('@thoughtindustries/content/courseRuns', () => {
  const startDate = new Date(2020, 0, 1, 12);
  const endDateInSameDay = new Date(startDate);
  endDateInSameDay.setHours(endDateInSameDay.getHours() + 1);
  const endDateInNextDay = new Date(startDate);
  endDateInNextDay.setDate(endDateInNextDay.getDate() + 1);

  const testData = [
    {
      expected: 'Wed, Jan 1st 2020 05:00 pm – 06:00 pm GMT+0',
      kind: GlobalTypes.ContentKind.Webinar,
      startDate,
      endDate: endDateInSameDay
    },
    {
      expected: 'Wed, Jan 1st 2020 05:00 pm – Thu, Jan 2nd 2020 05:00 pm GMT+0',
      kind: GlobalTypes.ContentKind.WebinarCourse,
      startDate,
      endDate: endDateInNextDay
    },
    {
      expected: 'Wed, Jan 1st 2020 05:00 pm GMT+0',
      kind: GlobalTypes.ContentKind.InPersonEvent,
      startDate,
      endDate: undefined
    },
    {
      expected: 'Jan 1st 2020 – Jan 2nd 2020',
      kind: GlobalTypes.ContentKind.Product,
      startDate,
      endDate: endDateInNextDay
    },
    {
      expected: 'Jan 1st 2020',
      kind: GlobalTypes.ContentKind.LearningPath,
      startDate,
      endDate: undefined
    }
  ];
  it.each(testData)(
    'should return $expected with kind $kind, start date $startDate and end date $endDate',
    ({ expected, kind, startDate, endDate }) => {
      expect(courseRuns(kind, startDate, endDate, '')).toEqual(expected);
    }
  );
});
