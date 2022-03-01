import { formatTime } from '../../../src/utilities/format-time';

describe('@thoughtindustries/content/formatTime', () => {
  const dateISO = new Date(2020, 0, 1, 5).toISOString();
  const format = 'ddd, MMM Do YYYY hh:mm a';

  const testData = [
    {
      expected: 'Tue, Dec 31st 2019 11:00 pm',
      date: dateISO,
      timeZone: 'America/Chicago',
      format
    },
    {
      expected: 'Wed, Jan 1st 2020 12:00 am',
      date: dateISO,
      timeZone: undefined,
      format
    }
  ];
  it.each(testData)(
    'should return $expected with date $date, time zone $timeZone and format $format',
    ({ expected, date, timeZone, format }) => {
      expect(formatTime(date, timeZone, format)).toEqual(expected);
    }
  );
});
