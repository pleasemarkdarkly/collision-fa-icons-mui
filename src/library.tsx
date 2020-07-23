import {library} from '@fortawesome/fontawesome-svg-core';
import React from 'react';

// 1. Import an icon. Most if not all should be in free-solid.
import {
  faCarCrash, 
  faCar,
  faRunning,
  faBicycle,
  faTree,
  faTruckMoving,
  faDiceOne,
  faQuestionCircle,
  faMoneyBillAlt,
  faSchool,
  faBus,
  faUserInjured,
  faSkullCrossbones,
  faAmbulance,
  faBandAid,
  faHeartbeat,
  faWind,
  faSnowflake,
  faRainbow,
  faSmog,
  faCloudSun,
  faCloudRain,
  faCloudShowersHeavy,
  faUmbrella,
  faLightbulb,
  faSun,
  faMoon,
  faRoad,
  faCoffee,
  faGlassMartini,
  faCity,
  faTruckMonster,
  faFlagUsa,
  faShieldAlt,
  faBan,
  faMountain,
  faSign,
  faBroadcastTower,
  faTrafficLight,
  faTruckLoading,
  faMonument,
  faCube,
  faUser,
  faIdBadge,
  faIdCard,
  faMale,
  faHouseUser,
  faUserTag,
  faTrashAlt,
  faTrashRestoreAlt,
  faArchive,
  faHistory,
  faGlasses,
  faBalanceScale,
  faGem,
  faHeart,
  faLemon,
  faGrinHearts,
  faMeh,
  faSadTear,
  faRobot,
  faStar,
  faStarHalfAlt,
  faStarHalf,
  faUnlink,
  faLink,
  faLock,
  faUserPlus,
  faUserMinus,
  faTag,
  faPlayCircle,
  faPauseCircle,
  faStopCircle,
  faBookmark,
  faBook,
  faPaperclip,
  faStickyNote,
  faSms,
  faMobileAlt,
  faVoicemail,
  faEnvelope,
  faEnvelopeOpenText,
  faCreditCard,
  faChartLine,
  faBackspace,
  faSearch,
  faInfinity,
  faCouch
  } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// 2. Add the imported icon here
const usedIcons = [
  faCarCrash,
  faCar,
  faRunning,
  faBicycle,
  faTree,
  faTruckMoving,
  faDiceOne,
  faQuestionCircle,
  faMoneyBillAlt,
  faSchool,
  faBus,
  faUserInjured,
  faSkullCrossbones,
  faAmbulance,
  faBandAid,
  faHeartbeat,
  faWind,
  faSnowflake,
  faRainbow,
  faSmog,
  faCloudSun,
  faCloudRain,
  faCloudShowersHeavy,
  faUmbrella,
  faLightbulb,
  faSun,
  faMoon,
  faRoad,
  faCoffee,
  faGlassMartini,
  faCity,
  faTruckMonster,
  faFlagUsa,
  faShieldAlt,
  faBan,
  faMountain,
  faSign,
  faBroadcastTower,
  faTrafficLight,
  faTruckLoading,
  faMonument,
  faCube,
  faUser,
  faIdBadge,
  faIdCard,
  faMale,
  faHouseUser,
  faUserTag,
  faTrashAlt,
  faTrashRestoreAlt,
  faArchive,
  faHistory,
  faGlasses,
  faBalanceScale,
  faGem,
  faHeart,
  faLemon,
  faGrinHearts,
  faMeh,
  faSadTear,
  faRobot,
  faStar,
  faStarHalfAlt,
  faStarHalf,
  faUnlink,
  faLink,
  faLock,
  faUserPlus,
  faUserMinus,
  faTag,
  faPlayCircle,
  faPauseCircle,
  faStopCircle,
  faBookmark,
  faBook,
  faPaperclip,
  faStickyNote,
  faSms,
  faMobileAlt,
  faVoicemail,
  faEnvelope,
  faEnvelopeOpenText,
  faCreditCard,
  faChartLine,
  faBackspace,
  faSearch,
  faInfinity,
  faCouch
];

library.add(usedIcons as any);

// 3. Make an icon component
// Collision Type
export const CollisionTypeVehicleVsVehicle = <><FontAwesomeIcon icon={'car-crash'} size="2x" /><FontAwesomeIcon icon={'car'} size="2x" /></>
export const CollisionTypeVehicleVsPedestrian = <><FontAwesomeIcon icon={'car-crash'} size="2x"/><FontAwesomeIcon icon={'running'} spin size="2x"/></>
export const CollisionTypeVehicleVsCyclists = <><FontAwesomeIcon icon={'car-crash'} size="2x"/><FontAwesomeIcon icon={'bicycle'} spin size="2x"/></>
export const CollisionTypeVehicleVsObject = <><FontAwesomeIcon icon={'car-crash'} size="2x"/><FontAwesomeIcon icon={'tree'} size="2x" color="green"/></>
export const CollisionTypeVehicleVsCommercial = <><FontAwesomeIcon icon={'car-crash'} size="2x"/><FontAwesomeIcon icon={'truck-moving'} size="2x"/></>
export const CollisionTypeVehicleSelf = <><FontAwesomeIcon icon={'car-crash'} size="2x"/><FontAwesomeIcon icon={'dice-one'} size="2x"/></>
export const CollisionTypeVehicleVsUnknown = <><FontAwesomeIcon icon={'car-crash'} size="2x"/><FontAwesomeIcon icon={'question-circle'} size="2x"/></>

// Collision Attributes
export const CollisionDamageThreshold = <><FontAwesomeIcon icon={'money-bill-alt'} size="2x" color="green"/><FontAwesomeIcon icon={'car-crash'} size="2x"/></>
export const CollisionSchoolZone = <><FontAwesomeIcon icon={'school'} size="2x"/><FontAwesomeIcon icon={'car-crash'} size="2x"/></>
export const CollisionSchoolBus = <><FontAwesomeIcon icon={'bus'} size="2x" color="orange"/><FontAwesomeIcon icon={'car-crash'} size="2x"/></>
export const CollisionHitRun = <><FontAwesomeIcon icon={'car-crash'} size="2x"/><FontAwesomeIcon icon={'running'} size="2x"/></>

// Injury Severity
export const CollisionInjurySeverity = <><FontAwesomeIcon icon={'user-injured'} size="2x"/></>
export const CollisionInjuryFatality = <><FontAwesomeIcon icon={'skull-crossbones'} spin size="2x"color="red"/></>
export const CollisionInjurySevere = <><FontAwesomeIcon icon={'ambulance'} size="2x"color="red"/></>
export const CollisionInjuryMinor = <><FontAwesomeIcon icon={'band-aid'} size="2x" color="pink"/></>
export const CollisionInjuryNoInjury = <><FontAwesomeIcon icon={'heartbeat'} size="2x"/></>
export const CollisionInjuryUnknown = <><FontAwesomeIcon icon={'question-circle'} size="2x"/></>

// Weather
export const CollisionWeatherBlowingSandDirtSnow = <><FontAwesomeIcon icon={'wind'} size="2x"/></>
export const CollisionWeatherBlowingSnow = <><FontAwesomeIcon icon={'wind'} size="2x"/><FontAwesomeIcon icon={'snowflake'} size="2x" color="grey"/></>
export const CollisionWeatherClear = <><FontAwesomeIcon icon={'rainbow'} size="2x"/></>
export const CollisionWeatherFogSmoke = <><FontAwesomeIcon icon={'smog'} size="2x"/></>
export const CollisionWeatherOvercast = <><FontAwesomeIcon icon={'cloud-sun'} size="2x"/></>
export const CollisionWeatherRaining = <><FontAwesomeIcon icon={'cloud-rain'} size="2x"/></>
export const CollisionWeatherSevereCrosswinds = <><FontAwesomeIcon icon={'wind'} size="2x"/><FontAwesomeIcon icon={'wind'} rotation={180} size="2x"/></>
export const CollisionWeatherHailFreezingRain = <><FontAwesomeIcon icon={'cloud-showers-heavy'} size="2x" color="grey" /><FontAwesomeIcon icon={'snowflake'} size="2x"color="grey" /></>
export const CollisionWeatherSnowing = <><FontAwesomeIcon icon={'snowflake'} spin size="2x" color="grey"/></>
export const CollisionWeatherUnknown = <><FontAwesomeIcon icon={'umbrella'} size="2x" /><FontAwesomeIcon icon={'question-circle'} size="2x" /></>

// Lighting Conditions
export const CollisionLightingDaylight = <><FontAwesomeIcon icon={'lightbulb'} size="2x" color="grey"/><FontAwesomeIcon icon={'sun'} size="2x" color="grey"/></>
export const CollisionLightingDarkNoStreetLights = <><FontAwesomeIcon icon={'lightbulb'} size="2x" color="grey"/><FontAwesomeIcon icon={'moon'} size="2x"/><FontAwesomeIcon icon={'road'} size="2x"/></>
export const CollisionLightingDawn = <><FontAwesomeIcon icon={'lightbulb'} size="2x" color="grey"/><FontAwesomeIcon icon={'coffee'} size="2x"/></>
export const CollisionLightingDusk = <><FontAwesomeIcon icon={'lightbulb'} size="2x" color="grey"/><FontAwesomeIcon icon={'glass-martini'} size="2x"/></>
export const CollisionLightingStreetsLightsOff = <><FontAwesomeIcon icon={'lightbulb'} size="2x" color="grey"/><FontAwesomeIcon icon={'road'} size="2x"/><FontAwesomeIcon icon={'lightbulb'} size="2x" /></>
export const CollisionLightingStreetsLightsOn = <><FontAwesomeIcon icon={'lightbulb'} size="2x" color="grey"/><FontAwesomeIcon icon={'road'} size="2x"/><FontAwesomeIcon icon={'lightbulb'} size="2x" color="grey"/></>

// Additional Collision Properties
export const CollisionCityStreet = <><FontAwesomeIcon icon={'city'} size="2x"/><FontAwesomeIcon icon={'road'} size="2x"/></>
export const CollisionCountryRoad = <><FontAwesomeIcon icon={'truck-monster'} size="2x"/><FontAwesomeIcon icon={'road'} size="2x"/></>
export const CollisionStateRoad = <><FontAwesomeIcon icon={'flag-usa'} size="2x"/><FontAwesomeIcon icon={'road'} size="2x"/></>
export const CollisionMiscRoad = <><FontAwesomeIcon icon={'road'} size="2x"/></>
export const CollisionStatePatrol = <><FontAwesomeIcon icon={'flag-usa'} size="2x"/><FontAwesomeIcon icon={'shield-alt'} size="2x"/></>
export const CollisionCountySheriff = <><FontAwesomeIcon icon={'truck-monster'} size="2x"/><FontAwesomeIcon icon={'shield-alt'} size="2x"/></>
export const CollisionCityMunicipalPolice = <><FontAwesomeIcon icon={'city'} size="2x"/><FontAwesomeIcon icon={'shield-alt'} size="2x"/></>
export const CollisionOtherLawEnforcement = <><FontAwesomeIcon icon={'question-circle'} size="2x"/><FontAwesomeIcon icon={'shield-alt'} size="2x"/></>
export const CollisionNoLawEnforcement = <><FontAwesomeIcon icon={'ban'} size="2x"/><FontAwesomeIcon icon={'shield-alt'} size="2x"/></>
export const CollisionObjectStruck = <><FontAwesomeIcon icon={'tree'} size="2x" color="green"/><FontAwesomeIcon icon={'car-crash'} size="2x"/></>
export const CollisionObjectStruckRocksDitch = <><FontAwesomeIcon icon={'mountain'} size="2x" color="brown"/></>
export const CollisionObjectStruckSign = <><FontAwesomeIcon icon={'sign'} size="2x"/></>
export const CollisionObjectStruckBroadcastTower = <><FontAwesomeIcon icon={'broadcast-tower'} size="2x"/></>
export const CollisionObjectStruckTrafficLight = <><FontAwesomeIcon icon={'traffic-light'} size="2x"/></>
export const CollisionObjectStruckTruckDebris = <><FontAwesomeIcon icon={'truck-loading'} size="2x"/></>
export const CollisionObjectStruckStructure = <><FontAwesomeIcon icon={'monument'} size="2x"/></>
export const CollisionBlockNumber = <><FontAwesomeIcon icon={'cube'} size="2x"/></>
export const CollisionMilepost = <><FontAwesomeIcon icon={'sign'} size="2x"/></>
export const CollisionPrimaryTrafficway = <><FontAwesomeIcon icon={'road'} size="2x"/></>
export const CollisionSecondaryTrafficway = <><FontAwesomeIcon icon={'road'} size="2x"/></>

// Collision participant properties
export const CollisionParticipantRole = <><FontAwesomeIcon icon={'user'} size="2x"/><FontAwesomeIcon icon={'car-crash'} size="2x"/></>
export const CollisionRegisteredOwner = <><FontAwesomeIcon icon={'id-badge'} size="2x"/><FontAwesomeIcon icon={'car'} size="2x"/></>
export const CollisionDriver = <><FontAwesomeIcon icon={'id-card'} size="2x"/><FontAwesomeIcon icon={'car'} size="2x"/></>
export const CollisionPassenger = <><FontAwesomeIcon icon={'male'} size="2x"/><FontAwesomeIcon icon={'car'} size="2x"/></>
export const CollisionCyclist = <><FontAwesomeIcon icon={'bicycle'} size="2x"/></>
export const CollisionPedestrian = <><FontAwesomeIcon icon={'running'} size="2x"/></>
export const CollisionPropertyOwner = <><FontAwesomeIcon icon={'house-user'} size="2x"/></>
export const CollisionUnknown = <><FontAwesomeIcon icon={'question-circle'} size="2x"/></>
export const CollisionIndividualTag = <><FontAwesomeIcon icon={'user-tag'} size="2x"/></>

// Menu Items
export const CollisionTrash = <><FontAwesomeIcon icon={'trash-alt'} size="2x"color="maroon"/></>
export const CollisionTrashRestoreAlt = <><FontAwesomeIcon icon={'trash-restore-alt'} size="2x" color="green"/></>
export const CollisionArchive = <><FontAwesomeIcon icon={'archive'} size="2x"color="grey"/></>
export const CollisionHistory = <><FontAwesomeIcon icon={'history'} size="2x"/><FontAwesomeIcon icon={'glasses'} size="2x"/></>
export const CollisionBalance = <><FontAwesomeIcon icon={'balance-scale'} size="2x"/></>
export const CollisionGem = <><FontAwesomeIcon icon={'gem'} size="2x"/></>
export const CollisionHeart = <><FontAwesomeIcon icon={'heart'} size="2x"color="red"/></>
export const CollisionLemon = <><FontAwesomeIcon icon={'lemon'} size="2x" color="gold"/></>
export const CollisionIDICoreFetch = <><FontAwesomeIcon icon={'money-bill-alt'} size="2x" color="green"/></>
export const CollisionLoveParticipant = <><FontAwesomeIcon icon={'grin-hearts'} size="2x"/></>
export const CollisionMehParticipant = <><FontAwesomeIcon icon={'meh'} size="2x"/></>
export const CollisionSadParticipant = <><FontAwesomeIcon icon={'sad-tear'} size="2x"/></>
export const CollisionAutomatedCommunications = <><FontAwesomeIcon icon={'robot'} size="2x"color="blue"/></>
export const CollisionUrgentContact = <><FontAwesomeIcon icon={'star'} size="2x"color="gold"/></>
export const CollisionPriorityContact = <><FontAwesomeIcon icon={'star-half-alt'} size="2x"/></>
export const CollisionNormalContact = <><FontAwesomeIcon icon={'star-half'} size="2x"/></>
export const CollisionUnlinkParticipants = <><FontAwesomeIcon icon={'unlink'} size="2x"/></>
export const CollisionLinkParticipant = <><FontAwesomeIcon icon={'link'} size="2x"/></>
export const CollisionLockSettings = <><FontAwesomeIcon icon={'lock'} size="2x"/></>
export const CollisionNextParticipant = <><FontAwesomeIcon icon={'user-plus'} size="2x"/></>
export const CollisionPreviousParticipant = <><FontAwesomeIcon icon={'user-minus'} size="2x"/></>
export const CollisionTag = <><FontAwesomeIcon icon={'tag'} size="2x"color="grey"/></>
export const CollisionStartAllRobotCommunications = <><FontAwesomeIcon icon={'play-circle'} size="2x"/></>
export const CollisionStopAllRobotCommunications = <><FontAwesomeIcon icon={'stop-circle'} size="2x"/></>
export const CollisionPauseAllRobotCommunications = <><FontAwesomeIcon icon={'pause-circle'} size="2x"/></>
export const CollisionBookmark = <><FontAwesomeIcon icon={'bookmark'} size="2x"/></>
export const CollisionViewBookmarks = <><FontAwesomeIcon icon={'book'} size="2x"color="brown"/></>
export const CollisionSaveParticipant = <><FontAwesomeIcon icon={'paperclip'} size="2x"color="grey"/></>
export const CollisionMakeNote = <><FontAwesomeIcon icon={'sticky-note'} size="2x"color="orange"/></>
export const CollisionSMSParticipant = <><FontAwesomeIcon icon={'sms'} size="2x"color="blue"/></>
export const CollisionCallParticipant = <><FontAwesomeIcon icon={'mobile-alt'} size="2x"/></>
export const CollisionVoicemailParticipant = <><FontAwesomeIcon icon={'voicemail'} size="2x"/></>
export const CollisionEmailParticipant = <><FontAwesomeIcon icon={'envelope'} size="2x"color="orange"/></>
export const CollisionEmailOpenedParticipant = <><FontAwesomeIcon icon={'envelope-open-text'} size="2x"/></>
export const CollisionMenuViewExpenses = <><FontAwesomeIcon icon={'credit-card'} size="2x"/></>
export const CollisionMenuStatistics = <><FontAwesomeIcon icon={'chart-line'} size="2x"/></>
export const CollisionMenuBack = <><FontAwesomeIcon icon={'backspace'} size="2x"/></>
export const CollisionMenuSearch = <><FontAwesomeIcon icon={'search'} size="2x"/></>
export const CollisionMenuSetDateNow = <><FontAwesomeIcon icon={'infinity'} size="2x"/></>
export const CollisionParticipantRelationship = <><FontAwesomeIcon icon={'couch'} size="2x"/></>

// 4. Add it in FaCmp.tsx, like icons={CollisionTypeVehicleVsVehicle}