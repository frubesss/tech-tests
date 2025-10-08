import { sortMeterReadingsByDate } from '../utils/sortMeterReadingsByDate';

type MeterReading = {
  cumulative: number;
  readingDate: string;
};

export type MeterReadings = Array<MeterReading>;

export const questionOne = (meterReadings: MeterReadings): MeterReading => {
  if (
    meterReadings === undefined ||
    meterReadings.length === 0 ||
    !Array.isArray(meterReadings)
  ) {
    throw new Error('Oops! Something went wrong.');
  } else {
    const meterReadingsSortedByDate = sortMeterReadingsByDate(meterReadings);

    let runningDifference = 0;
    const energyMeterReading = {
      cumulative: meterReadingsSortedByDate[0].cumulative,
      readingDate: meterReadingsSortedByDate[0].readingDate,
    };

    for (let index = 1; index < meterReadingsSortedByDate.length; index++) {
      const previousMeterReading =
        meterReadingsSortedByDate[index - 1].cumulative;
      const currentMeterReading = meterReadingsSortedByDate[index].cumulative;

      if (currentMeterReading - previousMeterReading > runningDifference) {
        runningDifference = currentMeterReading - previousMeterReading;
        energyMeterReading.cumulative =
          meterReadingsSortedByDate[index].cumulative;
        energyMeterReading.readingDate =
          meterReadingsSortedByDate[index].readingDate;
      }
    }

    return energyMeterReading;
  }
};
