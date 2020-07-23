import React from "react";
import { Section, TextIcon } from "./FaCmp";
import {
  CollisionTypeVehicleVsVehicle,
  CollisionTypeVehicleVsPedestrian,
  CollisionTypeVehicleVsCyclists,
  CollisionTypeVehicleVsObject,
  CollisionTypeVehicleVsCommercial,
  CollisionTypeVehicleSelf,
  CollisionTypeVehicleVsUnknown,
  CollisionDamageThreshold,
  CollisionSchoolZone,
  CollisionSchoolBus,
  CollisionHitRun,
  CollisionInjurySeverity,
  CollisionInjuryFatality,
  CollisionInjurySevere,
  CollisionInjuryMinor,
  CollisionInjuryNoInjury,
  CollisionInjuryUnknown,
  CollisionWeatherBlowingSandDirtSnow,
  CollisionWeatherBlowingSnow,
  CollisionWeatherClear,
  CollisionWeatherFogSmoke,
  CollisionWeatherOvercast,
  CollisionWeatherRaining,
  CollisionWeatherSevereCrosswinds,
  CollisionWeatherHailFreezingRain,
  CollisionWeatherSnowing,
  CollisionWeatherUnknown,
  CollisionLightingDaylight,
  CollisionLightingDarkNoStreetLights,
  CollisionLightingDawn,
  CollisionLightingDusk,
  CollisionLightingStreetsLightsOff,
  CollisionLightingStreetsLightsOn,
  CollisionCityStreet,
  CollisionCountryRoad,
  CollisionStateRoad,
  CollisionMiscRoad,
  CollisionStatePatrol,
  CollisionCountySheriff,
  CollisionCityMunicipalPolice,
  CollisionOtherLawEnforcement,
  CollisionNoLawEnforcement,
  CollisionObjectStruck,
  CollisionObjectStruckRocksDitch,
  CollisionObjectStruckSign,
  CollisionObjectStruckBroadcastTower,
  CollisionObjectStruckTrafficLight,
  CollisionObjectStruckTruckDebris,
  CollisionObjectStruckStructure,
  CollisionBlockNumber,
  CollisionMilepost,
  CollisionPrimaryTrafficway,
  CollisionSecondaryTrafficway,
  CollisionParticipantRole,
  CollisionRegisteredOwner,
  CollisionDriver,
  CollisionPassenger,
  CollisionCyclist,
  CollisionPedestrian,
  CollisionPropertyOwner,
  CollisionUnknown,
  CollisionIndividualTag,
  CollisionTrash, 
  CollisionTrashRestoreAlt,
  CollisionArchive,
  CollisionHistory,
  CollisionBalance,
  CollisionGem,
  CollisionHeart,
  CollisionLemon,
  CollisionIDICoreFetch,
  CollisionLoveParticipant,
  CollisionMehParticipant,
  CollisionSadParticipant,
  CollisionAutomatedCommunications,
  CollisionUrgentContact,
  CollisionPriorityContact,
  CollisionNormalContact,
  CollisionUnlinkParticipants,
  CollisionLinkParticipant,
  CollisionLockSettings,
  CollisionNextParticipant,
  CollisionPreviousParticipant,
  CollisionTag,
  CollisionStopAllRobotCommunications,
  CollisionStartAllRobotCommunications,
  CollisionPauseAllRobotCommunications,
  CollisionBookmark,
  CollisionViewBookmarks,
  CollisionSaveParticipant,
  CollisionMakeNote,
  CollisionSMSParticipant,
  CollisionCallParticipant,
  CollisionVoicemailParticipant,
  CollisionEmailParticipant,
  CollisionEmailOpenedParticipant,
  CollisionMenuViewExpenses,
  CollisionMenuStatistics,
  CollisionMenuBack,
  CollisionMenuSearch,
  CollisionMenuSetDateNow,
  CollisionParticipantRelationship
  } from "./library";

export function FaList() {
  return (
    <>
        <Section
        title={"Collision Types"}
        description={"The following are types of collisions."}
        >

        <TextIcon
          tooltipDescription={
            "Vehicle vs vehicle"
          }
          /* This is to highlight a collision where commercial, city bus, school, vehicles are not involved. This category will not be perfect as the identification of businesses in the collision will require further first and last name processing. */
          icons={CollisionTypeVehicleVsVehicle} 
        />
        <TextIcon
          tooltipDescription={
            "Vehicle vs pedestrian"
          }
          icons={CollisionTypeVehicleVsPedestrian}
        />
        <TextIcon
          tooltipDescription={
            "Vehicle vs cyclist"
          }
          icons={CollisionTypeVehicleVsCyclists}
        />
        <TextIcon
          tooltipDescription={
            "Vehicle vs object"
          }
          /* For one vehicle and object collision field populated. */
          icons={CollisionTypeVehicleVsObject}
        />

        <TextIcon
          tooltipDescription={
            "Vehicle vs commercial vehicle"
          }
          icons={CollisionTypeVehicleVsCommercial}
        />

        <TextIcon
          tooltipDescription={
            "Single vehicle collision"
          }
          /* Not to be overlapped with object collision. Common scenarios are collisions with one driver unknown, suspect, none where the true count was computed to be one actual driver for our purpose. */
          icons={CollisionTypeVehicleSelf}
        />

        <TextIcon
          tooltipDescription={
            "Vehicle vs unknown"
          }
          /* To include any collision with an unknown, missing, none party in the individual section. */
          icons={CollisionTypeVehicleVsUnknown}
        />

        <TextIcon
          tooltipDescription={
            "Collision damage threshold exceeded $700"
          }
          icons={CollisionDamageThreshold}
        />

        <TextIcon
          tooltipDescription={
            "Collision occurred within a school zone"
          }
          icons={CollisionSchoolZone}
        />

        <TextIcon
          tooltipDescription={
            "Collision involved a school bus"
          }
          icons={CollisionSchoolBus}
        />

        <TextIcon
          tooltipDescription={
            "Collision involved a hit & run"
          }
          /* The runner is on the right side of the car crash icon. */
          icons={CollisionHitRun}
        />

        </Section>

        <Section
        title={"Injury severity of the collision."}
        description={"The categorization of injury severity of the collision."}
        >

        <TextIcon
          tooltipDescription={
            "Injury Severity"
          }
          icons={CollisionInjurySeverity}
        />

        <TextIcon
          tooltipDescription={
            "Injury Fatality"
          }
          icons={CollisionInjuryFatality}
        />

        <TextIcon
          tooltipDescription={
            "Injury Severe"
          }
          icons={CollisionInjurySevere}
        />

        <TextIcon
          tooltipDescription={
            "Injury Minor"
          }
          icons={CollisionInjuryMinor}
        />

        <TextIcon
          tooltipDescription={
            "No injuries were reported"
          }
          icons={CollisionInjuryNoInjury}
        />

        <TextIcon
          tooltipDescription={
            "Injuries are unknown"
          }
          icons={CollisionInjuryUnknown}
        />

        </Section>

        <Section
        title={"Weather"}
        description={"Weather conditions at the time of the collision."}
        >

        <TextIcon
          tooltipDescription={
            "Weather Blowing sand, dirt, snow."
          }
          icons={CollisionWeatherBlowingSandDirtSnow}
        />
        <TextIcon
          tooltipDescription={
            "Weather Blowing snow"
          }
          icons={CollisionWeatherBlowingSnow}
        />

        <TextIcon
          tooltipDescription={
            "Weather Clear"
          }
          icons={CollisionWeatherClear}
        />

        <TextIcon
          tooltipDescription={
            "Fog or smog or smoke"
          }
          icons={CollisionWeatherFogSmoke}
        />

        <TextIcon
          tooltipDescription={"Overcast, partly cloudy"}
          icons={CollisionWeatherOvercast}
        />

        <TextIcon
          tooltipDescription={"Raining"}
          icons={CollisionWeatherRaining}
        />

        <TextIcon
          tooltipDescription={"Severe crosswinds"
        } /* Two winds with one mirrored the other */
          icons={CollisionWeatherSevereCrosswinds}
        />

        <TextIcon
          tooltipDescription={"Sleet or hail or freezing rain"}
          icons={CollisionWeatherHailFreezingRain}
        />

        <TextIcon
          tooltipDescription={"Snowing"}
          icons={CollisionWeatherSnowing}
        />

      <TextIcon
          tooltipDescription={"Unknown weather"}
          icons={CollisionWeatherUnknown}
        />

      </Section>

        <Section
          title={"Lighting Condition"}
          description={"Lighting conditions at the time of the accident."}
        >

        <TextIcon
          tooltipDescription={
            "Daylight"
          }
          icons={CollisionLightingDaylight}
        />

        <TextIcon
          tooltipDescription={
            "Dark - no street lights"
          }
          icons={CollisionLightingDarkNoStreetLights}
        />

        <TextIcon
          tooltipDescription={
            "Dawn"
          }
          icons={CollisionLightingDawn}
        />

        <TextIcon
          tooltipDescription={
            "Dusk"
          }
          icons={CollisionLightingDusk}
        />

        <TextIcon
          tooltipDescription={
            "Dark streets light off"
          }
          icons={CollisionLightingStreetsLightsOff}
        />

      <TextIcon
          tooltipDescription={
            "Dark street light on"
          }
          /* alternating solid and regular lightbulb */
          icons={CollisionLightingStreetsLightsOn}
        />

      </Section>

      <Section
        title={"Additional collision properties"}
        description={"Jurisdiction, agency, object struck, location"}
      >

        <TextIcon
          tooltipDescription={
            "City street"
          }
          icons={CollisionCityStreet}
        />
        <TextIcon
          tooltipDescription={
            "Country road"
          }
          icons={CollisionCountryRoad}
        />
        <TextIcon
          tooltipDescription={"State road"}
          icons={CollisionStateRoad}
        />

        <TextIcon
          tooltipDescription={"Misc trafficway"}
          icons={CollisionMiscRoad}
        />

        <TextIcon
          tooltipDescription={"State patrol"}
          icons={CollisionStatePatrol}
        />

        <TextIcon
          tooltipDescription={"County sheriff"}
          icons={CollisionCountySheriff}
        />

        <TextIcon
          tooltipDescription={"City/municipal police"}
          icons={CollisionCityMunicipalPolice}
        />

        <TextIcon
          tooltipDescription={"Other law enforcement"}
          icons={CollisionOtherLawEnforcement}
        />

        <TextIcon
          tooltipDescription={"No law enforcement"}
          icons={CollisionNoLawEnforcement}
        />

        <TextIcon
          tooltipDescription={"Object struck"}
          icons={CollisionObjectStruck}
        />

        <TextIcon
          tooltipDescription={"Object struck rocks/ditch"}
          icons={CollisionObjectStruckRocksDitch}
        />

        <TextIcon
          tooltipDescription={"Objects struck sign"}
          icons={CollisionObjectStruckSign}
        />

        <TextIcon
          tooltipDescription={"Objects struck tower"}
          icons={CollisionObjectStruckBroadcastTower}
        />

        <TextIcon
          tooltipDescription={"Objects struck traffic light"}
          icons={CollisionObjectStruckTrafficLight}
        />

        <TextIcon
          tooltipDescription={"Objects struck truck debris"}
          icons={CollisionObjectStruckTruckDebris}
        />

        <TextIcon
          tooltipDescription={"Objects struck structure"}
          icons={CollisionObjectStruckStructure}
        />



        <TextIcon
          tooltipDescription={"Block number"}
          icons={CollisionBlockNumber}
        />
        <TextIcon
          tooltipDescription={"Milepost"}
          icons={CollisionMilepost}
        />

        <TextIcon
          /* use a number one and number 2 before the road for primary and secondary */
          tooltipDescription={"Primary trafficway"}
          icons={CollisionPrimaryTrafficway}
        />

        <TextIcon
          tooltipDescription={"Secondary trafficway"}
          icons={CollisionSecondaryTrafficway}
        />

      </Section>

      <Section
        title={"Collision participant properties"}
        description={"Individual roles, individual tags, individual contact information"}
      >

        <TextIcon
          tooltipDescription={
            "Collision participant role"
          }
          icons={CollisionParticipantRole}
        />

        <TextIcon
          tooltipDescription={
            '"Registered owner"'
          }
          icons={CollisionRegisteredOwner}
        />
  
        <TextIcon
          tooltipDescription={
            "Driver"
          }
          /* Highlight driver icon */
          icons={CollisionDriver}
        />

        <TextIcon
          tooltipDescription={
            "Passenger"
          }
          icons={CollisionPassenger}
        />

      <TextIcon
          tooltipDescription={
            "Cyclist"
          }
          icons={CollisionCyclist}
        />

      <TextIcon
          tooltipDescription={
            "Pedestrian"
          }
          icons={CollisionPedestrian}
        />

      <TextIcon
          tooltipDescription={
            "Property owner"
          }
          icons={CollisionPropertyOwner}
        />

      <TextIcon
          tooltipDescription={
            "Unknown"
          }
          icons={CollisionUnknown}
        />

      <TextIcon
          tooltipDescription={
            "Individual tag"
          }
          icons={CollisionIndividualTag}
        />
      </Section>

      <Section
        title={"Menu items"}
        description={"Various selections in the collision rating, individual rating, and robot rating context menus"}
      >

        <TextIcon
          tooltipDescription={
            "Remove collisions from search"
          }
          icons={CollisionTrash}
        />
        <TextIcon
          tooltipDescription={
            "Restore collision to search"
          }
          icons={CollisionTrashRestoreAlt}
        />
        <TextIcon
          tooltipDescription={
            "Archive collision"
          }
          icons={CollisionArchive}
        />
        <TextIcon
          tooltipDescription={
            "History collisions"
          }
          icons={CollisionHistory}
        />
        <TextIcon
          tooltipDescription={
            "Legal case rating"
          }
          icons={CollisionBalance}
        />
        <TextIcon
          tooltipDescription={
            "Valuable legal case"
          }
          icons={CollisionGem}
        />
        <TextIcon
          tooltipDescription={
            "Interesting legal case"
          }
          icons={CollisionHeart}
        />

        <TextIcon
          tooltipDescription={
            "Uninteresting legal case"
          }
          icons={CollisionLemon}
        />

        <TextIcon
          tooltipDescription={
            "IDI Core fetch"
          }
          icons={CollisionIDICoreFetch}
        />

        <TextIcon
          tooltipDescription={
            "Love collision participant"
          }
          icons={CollisionLoveParticipant}
        />

        <TextIcon
          tooltipDescription={
            "Meh collision participant"
          }
          icons={CollisionMehParticipant}
        />

        <TextIcon
          tooltipDescription={
            "Uninteresting collision participant"
          }
          icons={CollisionSadParticipant}
        />

        <TextIcon
          tooltipDescription={
            "Robot (automated communications)"
          }
          icons={CollisionAutomatedCommunications}
        />

        <TextIcon
          tooltipDescription={
            "Urgent contact"
          }
          icons={CollisionUrgentContact}
        />

        <TextIcon
          tooltipDescription={
            "Priority contact"
          }
          icons={CollisionPriorityContact}
        />

        <TextIcon
          tooltipDescription={
            "Contact normal time=frame"
          }
          icons={CollisionNormalContact}
        />

        <TextIcon
          tooltipDescription={
            "Unlink individual from collision"
          }
          icons={CollisionUnlinkParticipants}
        />

        <TextIcon
          tooltipDescription={
            "Link individual to collision"
          }
          icons={CollisionLinkParticipant}
        />

        <TextIcon
          tooltipDescription={
            "Lock settings"
          }
          icons={CollisionLockSettings}
        />

        <TextIcon
          tooltipDescription={
            "Next individual"
          }
          icons={CollisionNextParticipant}
        />

        <TextIcon
          tooltipDescription={
            "Previous individual"
          }
          icons={CollisionPreviousParticipant}
        />

        <TextIcon
          tooltipDescription={
            "Tag collision"
          }
          icons={CollisionTag}
        />

        <TextIcon
          tooltipDescription={
            "Start all robot communications"
          }
          icons={CollisionStartAllRobotCommunications}
        />

        <TextIcon
          tooltipDescription={
            "Pause all robot communications"
          }
          icons={CollisionPauseAllRobotCommunications}
        />

        <TextIcon
          tooltipDescription={
            "Stop all robot communications"
          }
          icons={CollisionStopAllRobotCommunications}
        />

        <TextIcon
          tooltipDescription={
            "Bookmark collision"
          }
          icons={CollisionBookmark}
        />

        <TextIcon
        tooltipDescription={
          "View all bookmarks"
        }
        icons={CollisionViewBookmarks}
        />

        <TextIcon
        tooltipDescription={
          "Save individual"
        }
        icons={CollisionSaveParticipant}
        />

      <TextIcon
        tooltipDescription={
          "Make note"
        }
        icons={CollisionMakeNote}
        />

        <TextIcon
        tooltipDescription={
          "SMS individual"
        }
        icons={CollisionSMSParticipant}
        />

        <TextIcon
        tooltipDescription={
          "Call individual"
        }
        icons={CollisionCallParticipant}
        />

        <TextIcon
        tooltipDescription={
          "Voicemail"
        }
        icons={CollisionVoicemailParticipant}
        />

        <TextIcon
        tooltipDescription={
          "Email individual"
        }
        icons={CollisionEmailParticipant}
        />

        <TextIcon
        tooltipDescription={
          "Email opened"
        }
        icons={CollisionEmailOpenedParticipant}
        />

        <TextIcon
        tooltipDescription={
          "View IDI core / Twilio expenses"
        }
        icons={CollisionMenuViewExpenses}
        />

        <TextIcon
        tooltipDescription={
          "View collision / participants statistics"
        }
        icons={CollisionMenuStatistics}
        />

        <TextIcon
        tooltipDescription={
          "Back"
        }
        icons={CollisionMenuBack}
        />

        <TextIcon
        tooltipDescription={
          "Search"
        }
        icons={CollisionMenuSearch}
        />

      <TextIcon
        tooltipDescription={
          "Set ending date to now"
        }
        icons={CollisionMenuSetDateNow}
        />

      <TextIcon
        tooltipDescription={
          "Possible individual relationship"
        }
        icons={CollisionParticipantRelationship}
        /> 

      </Section>

      
    </>
  );
}
