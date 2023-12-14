import { useState } from 'react';
import { initialStateOfStatistics } from '../constants/trackerConstants.js';
import {
  UXSEARCHING,
  UIDESIGN,
  TOOLS,
  COMMUNICATION,
  AUTOMONY,
  PRODUCT,
  PROACTION,
  PEOPLEMANAGEMENT,
} from '../constants/directionConstants.js';
import {
  BLUE,
  GRAY,
  GREEN,
  LIGHTBLUE,
  PINK,
  PURPLE,
  RED,
  YELLOW,
} from '../constants/colorConstants';
export default function useStatistics() {
  const [statistics, setStatistics] = useState(initialStateOfStatistics);

  function setNewStatistics(newStatistics) {
    console.log(newStatistics);
    const newState = newStatistics.reduce(
      (acc, { name, skill_percent }, index) => {
        if (name === UXSEARCHING) {
          acc[YELLOW] = { name, percent: skill_percent };
          return acc;
        }
        if (name === UIDESIGN) {
          acc[GREEN] = { name, percent: skill_percent };
          return acc;
        }
        if (name === TOOLS) {
          acc[BLUE] = { name, percent: skill_percent };
          return acc;
        }
        if (name === AUTOMONY) {
          acc[LIGHTBLUE] = { name, percent: skill_percent };
          return acc;
        }
        if (name === PRODUCT) {
          acc[RED] = { name, percent: skill_percent };
          return acc;
        }
        if (name === COMMUNICATION) {
          acc[GRAY] = { name, percent: skill_percent };
          return acc;
        }
        if (name === PEOPLEMANAGEMENT) {
          acc[PINK] = { name, percent: skill_percent };
          return acc;
        }
        if (name === PROACTION) {
          acc[PURPLE] = { name, percent: skill_percent };
          return acc;
        }
      },
      {},
    );

    setStatistics(newState);
  }

  return { setNewStatistics, statistics };
}
