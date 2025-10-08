import { sortMeterReadingsByDate } from './sortMeterReadingsByDate';

describe('sortMeterReadingsByDate', () => {
  test('returns meter readings in ascending date order ', () => {
    expect(
      sortMeterReadingsByDate([
        {
          cumulative: 1000,
          readingDate: '2019-11-08T00:00:00.000Z',
        },
        {
          cumulative: 1200,
          readingDate: '2019-05-08T00:00:00.000Z',
        },
        {
          cumulative: 1500,
          readingDate: '2019-05-02T00:00:00.000Z',
        },
        {
          cumulative: 1600,
          readingDate: '2019-05-01T00:00:00.000Z',
        },
        {
          cumulative: 2000,
          readingDate: '2019-12-01T00:00:00.000Z',
        },
      ])
    ).toEqual([
      {
        cumulative: 1600,
        readingDate: '2019-05-01T00:00:00.000Z',
      },
      {
        cumulative: 1500,
        readingDate: '2019-05-02T00:00:00.000Z',
      },
      {
        cumulative: 1200,
        readingDate: '2019-05-08T00:00:00.000Z',
      },
      {
        cumulative: 1000,
        readingDate: '2019-11-08T00:00:00.000Z',
      },
      {
        cumulative: 2000,
        readingDate: '2019-12-01T00:00:00.000Z',
      },
    ]);
  });
});
