import { questionOne } from './solutions';
import {
  meterReadingsWithSameLargestIncreaseOccurrence,
  orderedMeterReadings,
  singleMeterReading,
  unorderedMeterReadings,
} from './testCases';
import { sortMeterReadingsByDate } from '../utils/sortMeterReadingsByDate';

describe('solutions', () => {
  describe('questionOne', () => {
    test('returns a meter reading when only one reading is found', () => {
      expect(sortMeterReadingsByDate(singleMeterReading)).toEqual([
        {
          cumulative: 1000,
          readingDate: '2019-11-08T00:00:00.000Z',
        },
      ]);
    });
    test('returns the correct meter reading that had the largest increase in energy usage from the reading before when meter readings are not ordered by date ascending', () => {
      expect(questionOne(unorderedMeterReadings)).toEqual({
        cumulative: 1200,
        readingDate: '2019-05-03T00:00:00.000Z',
      });
    });
    test('returns meter reading that had the largest increase in energy usage from the reading before when meter readings are ordered by date ascending', () => {
      expect(questionOne(orderedMeterReadings)).toEqual({
        cumulative: 19667,
        readingDate: '2019-12-31T00:00:00.000Z',
      });
    });
    test('returns a meter reading that happened earliest when the largest increase in energy use is found more than once', () => {
      expect(
        questionOne(meterReadingsWithSameLargestIncreaseOccurrence)
      ).toEqual({
        cumulative: 1500,
        readingDate: '2019-05-05T00:00:00.000Z',
      });
    });
    test('returns a meter reading of undefined when no meter readings are found', () => {
      expect(() => questionOne([])).toThrow('Oops! Something went wrong.');
    });
    test('returns a meter reading of undefined when an object is passed in as a parameter', () => {
      // @ts-ignore
      expect(() => questionOne({ hello: 'world' })).toThrow(
        'Oops! Something went wrong.'
      );
    });
    test('returns a meter reading of undefined when a string is passed in as a parameter', () => {
      // @ts-ignore
      expect(() => questionOne('world')).toThrow('Oops! Something went wrong.');
    });
  });
});
