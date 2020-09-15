import { createRunBoth } from './utils.mjs';

// Before:
function printMiddleNameOld(data) {
  if (
    data &&
    data.user &&
    data.user.personalInformation &&
    data.user.personalInformation.name &&
    data.user.personalInformation.name.middle
  ) {
    const { middle } = data.user.personalInformation.name;
    console.log(`${middle} is my middle name!`);
  } else {
    console.log('No middle name provided.');
  }
}

// 2020, using optional chaining:
function printMiddleNameNew(data) {
  const middle = data?.user?.personalInformation?.name?.middle;
  console.log(
    middle ? `${middle} is my middle name!` : 'No middle name provided.'
  );
}

const correctData = {
  user: {
    personalInformation: {
      name: {
        first: 'Austin',
        middle: 'Danger',
        last: 'Powers',
      },
    },
  },
};

const runBothPrintMiddleName = createRunBoth(
  printMiddleNameOld,
  printMiddleNameNew
);
runBothPrintMiddleName(correctData);
runBothPrintMiddleName(null);

/* ------------------------------------------ */

// Before:
function introduceOld(data) {
  if (
    data &&
    data.user &&
    data.user.personalInformation &&
    data.user.personalInformation.name
  ) {
    const { first, last } = data.user.personalInformation.name;
    if (first && last) {
      console.log(`${last}. ${first} ${last}.`);
      return;
    }
  }
  console.log('I prefer to remain anonymous.');
}

// 2020, using optional chaining:
function introduceNew(data) {
  const { first, last } = data?.user?.personalInformation?.name;
  if (first && last) {
    console.log(`${last}. ${first} ${last}.`);
  } else {
    console.log('I prefer to remain anonymous.');
  }
}

const missingData = {
  user: {
    personalInformation: {},
  },
};

const introduceBoth = createRunBoth(introduceOld, introduceNew);
// introduceBoth(correctData);
// introduceBoth(missingData);
