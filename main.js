let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const runnersAge = 21;

if (registeredEarly && runnersAge > 18) {
  raceNumber += 1000;
}

if (registeredEarly && runnersAge > 18) {
  console.log(
    `Your race will begin at 9:30 am, your race number is: ${raceNumber}.`
  );
} else if (runnersAge > 18 && !registeredEarly) {
  console.log(
    `Your race will begin at 11:00am, your race number is: ${raceNumber}.`
  );
} else if (runnersAge < 18) {
  console.log(
    `Your race will begin at 12:30 pm, your race number is: ${raceNumber} `
  );
} else {
  console.log(`Please see the registration desk.`);
}
