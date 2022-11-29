//define actual & ideal sleep hours
const getActualSleepHours = () => 8+7+8+5+8+6+5;
const getIdealSleepHours = idealHours => idealHours * 7;
//calculate sleep debt
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You slept', actualSleepHours - idealSleepHours, 'hours over your goal!');
  } else {
    console.log('You slept', idealSleepHours - actualSleepHours, 'hours under your goal. Get some more rest!');
  }
}

calculateSleepDebt();
