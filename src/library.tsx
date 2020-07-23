import {library} from '@fortawesome/fontawesome-svg-core';
import React from 'react';

// 1. Import an icon. Most if not all should be in free-solid.
import {faCarCrash, faCar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// 2. Add the imported icon here
const usedIcons = [
  faCarCrash,
  faCar
];

library.add(usedIcons as any);

// 3. Make an icon component
export const CollisionTypeVehicleVsVehicle = <><FontAwesomeIcon icon={'car-crash'}/><FontAwesomeIcon icon={'car'}/></>
// Can have a size as well, look up react-fontawesome
// export const CollisionTypeVehicleVsVehicle = <><FontAwesomeIcon icon={'car-crash'} size="lg"/><FontAwesomeIcon icon={'car'}/></>



// 4. Add it in FaCmp.tsx, like icons={CollisionTypeVehicleVsVehicle}