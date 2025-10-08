# Bulb Meter Reading Technical Test

## Solutions

### Question One

- Used TypeScript to get type safety out the box, this ensures
  I am not doing anything silly and to avoid nulls and undefined creeping into the code.
- Even though I have included types for the meter reading data structure, the functions arguments and what the function returns. I have added some extra error handling to capture the following scenarios:
  - MeterReading Array is passed to the function and is empty or undefined
  - Anything other than an Array is passed to the function.

We could put in some logging here to inform us of any issues with Meter Reading data being passed into the
function from internal or external sources.

- I created a utility function to ensure that the MeterReadings were always sorted in date ascending order making it so
  we are always comparing the correct cumulative values. I added a unit test for this function specifically,
  but I made sure to do some integration style tests with some unordered meter readings checking it all hangs together and plays nicely.
- I made a for loop to iterate over the meter readings one by one and compared the current meter readings cumulative value
  with the proceeding meters reading cumulative value. If the output of this comparison was greater than a previous comparison the value was overwritten. Ensuring we always had the greatest difference. Once the loop had completed its iteration it returns the meter reading with the largest difference.

## What I would have done differently in hindsight

- Leave enough time for question two. I wanted to put a bit of polish on question one before I moved on, but as you can see this caused me to run out of time.
- I would like to explore a way in question one to not use mutations and for loops. I originally had a go using a mixture of map and reduce functions, but I could not get it working, so I went back to good ol loops and mutations to get what I wanted.