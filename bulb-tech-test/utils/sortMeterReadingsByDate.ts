import { MeterReadings } from '../src/solutions';

export const sortMeterReadingsByDate = (
  meterReadings: MeterReadings
): MeterReadings => {
  return meterReadings.sort(
    (d1, d2) =>
      new Date(d1.readingDate).getTime() - new Date(d2.readingDate).getTime()
  );
};
