import React from "react";
import { Section, TextIcon } from "./FaCmp";
import {CollisionTypeVehicleVsVehicle} from "./library";

export function FaList() {
  return (
    <>
        <Section
        title={"Collision types"}
        description={"The following are types of collisions."}
        >

        <TextIcon
          tooltipDescription={
            "Collision type: vehicle vs vehicle"
          }
          /* This is to highlight a collision where commercial, city bus, school, vehicles are not involved. This category will not be perfect as the     identification of businesses in the collision will require further first and last name processing. */
          icons={CollisionTypeVehicleVsVehicle} // EXAMPLE OF PROPER ICON USAGE
        />
        <TextIcon
          tooltipDescription={
            "Collision type of pedestrian vs vehicle"
          }
          icons={["running", "car-crash"]}
        />
        <TextIcon
          tooltipDescription={
            "Collision type: pedal/cyclist vs vehicle"
          }
          icons={["bicycle","car-crash"]}
        />
        <TextIcon
          tooltipDescription={
            "Collision type: vehicle vs object."
          }
          /* For one vehicle and object collision field populated. */
          icons={["tree","car-crash"]}
        />

        <TextIcon
          tooltipDescription={
            "Collision type: vehicle vs commercial vehicle"
          }
          icons={["truck-moving","car-crash"]}
        />

        <TextIcon
          tooltipDescription={
            "Collision type: one driver/individual collision"
          }
          /* Not to be overlapped with object collision. Common scenarios are collisions with one driver unknown, suspect, none where the true count was computed to be one actual driver for our purpose. */
          icons={["dice-one","car-crash"]}
        />

        <TextIcon
          tooltipDescription={
            "Collision type: vehicle vs unknown."
          }
          /* To include any collision with an unknown, missing, none party in the individual section. */
          icons={["question-circle","car-crash"]}
        />

        <TextIcon
          tooltipDescription={
            "Collision property damage threshold exceeded $700"
          }
          icons={["money-bill-alt","car-crash"]}
        />

        <TextIcon
          tooltipDescription={
            "Collision occurred within a school zone"
          }
          icons={["school","car-crash"]}
        />

        <TextIcon
          tooltipDescription={
            "Collision involved a school bus"
          }
          icons={["bus","car-crash"]}
        />

        <TextIcon
          tooltipDescription={
            "Collision involved a hit & run"
          }
          /* The runner is on the right side of the car crash icon. */
          icons={["car-crash", "running"]}
        />

        </Section>

        <Section
        title={"Injury severity of the collision."}
        description={"Collision's injury severity is one of the most important features of a collision."}
        >

        <TextIcon
          tooltipDescription={
            "Collision injury severity"
          }
          icons={"user-injured"}
        />

        <TextIcon
          tooltipDescription={
            "A fatality were reported"
          }
          icons={"skull-crossbones"}
        />

        <TextIcon
          tooltipDescription={
            "Severe injury were reported"
          }
          icons={"ambulance"}
        />

        <TextIcon
          tooltipDescription={
            "Minor injuries were reported"
          }
          icons={"band-aid"}
        />

        <TextIcon
          tooltipDescription={
            "No injuries were reported"
          }
          icons={"heartbeat"}
        />

        <TextIcon
          tooltipDescription={
            "Injuries are unknown"
          }
          icons={"question-circle"}
        />

        </Section>

        <Section
        title={"Weather (addition collision properties)"}
        description={"Additional collision properties of less importance but can provide invaluable context."}
        >

        <TextIcon
          tooltipDescription={
            "Blowing sand, dirt, snow"
          }
          icons={"wind"}
        />
        <TextIcon
          tooltipDescription={
            "Blowing snow"
          }
          icons={["wind","snowflake"]}
        />

        <TextIcon
          tooltipDescription={
            "Clear"
          }
          icons={"rainbow"}
        />

        <TextIcon
          tooltipDescription={
            "Fog or smog or smoke"
          }
          icons={"smog"}
        />

        <TextIcon
          tooltipDescription={"Overcast, partly cloudy"}
          icons={"cloud-sun"}
        />

        <TextIcon
          tooltipDescription={"Raining"}
          icons={"cloud-rain"}
        />

        <TextIcon
          tooltipDescription={"Severe crosswinds"
        } /* Two winds with one mirrored the other */
          icons={["wind","wind"]}
        />

        <TextIcon
          tooltipDescription={"Sleet or hail or freezing rain"}
          icons={["cloud-showers-heavy","snowflake"]}
        />

        <TextIcon
          tooltipDescription={"Snowing"}
          icons={"snowflake"}
        />

      <TextIcon
          tooltipDescription={"Unknown weather"}
          icons={["umbrella","question-circle"]}
        />

      </Section>

        <Section
          title={"Lighting condition (additional collision properties)"}
          description={"First icon is the normal version of the lightbulb."}
        >

        <TextIcon
          tooltipDescription={
            "Daylight"
          }
          icons={["lightbulb", "sun"]}
        />

        <TextIcon
          tooltipDescription={
            "Daylight"
          }
          icons={["lightbulb", "sun"]}
        />

        <TextIcon
          tooltipDescription={
            "Dark - no street lights"
          }
          icons={["lightbulb", "moon", "road"]}
        />

        <TextIcon
          tooltipDescription={
            "Dawn"
          }
          icons={["lightbulb", "coffee"]}
        />

        <TextIcon
          tooltipDescription={
            "Dusk"
          }
          icons={["lightbulb", "glass-martini"]}
        />

        <TextIcon
          tooltipDescription={
            "Dark streets light off"
          }
          icons={["lightbulb", "road", "lightbulb"]}
        />

      <TextIcon
          tooltipDescription={
            "Dark street light on"
          }
          /* alternating solid and regular lightbulb */
          icons={["lightbulb", "road", "lightbulb"]}
        />

        <TextIcon
          tooltipDescription={
            "Dark unknown lighting"
          }
          icons={["lightbulb", "question-circle"]}
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
          icons={["city","road"]}
        />
        <TextIcon
          tooltipDescription={
            "Country road"
          }
          icons={["truck-monster","road"]}
        />
        <TextIcon
          tooltipDescription={"State road"}
          icons={["flag-usa","road"]}
        />

        <TextIcon
          tooltipDescription={"Misc trafficway"}
          icons={"road"}
        />

        <TextIcon
          tooltipDescription={"State patrol"}
          icons={["flag-usa","shield-alt"]}
        />

        <TextIcon
          tooltipDescription={"County sheriff"}
          icons={["truck-monster","shield-alt"]}
        />

        <TextIcon
          tooltipDescription={"City/municipal police"}
          icons={["city","shield-alt"]}
        />

        <TextIcon
          tooltipDescription={"Other law enforcement"}
          icons={["question-circle","shield-alt"]}
        />

        <TextIcon
          tooltipDescription={"No law enforcement"}
          icons={["ban","shield-alt"]}
        />

        <TextIcon
          tooltipDescription={"Object struck"}
          icons={["car-crash","tree"]}
        />

        <TextIcon
          tooltipDescription={"Object struck rocks/ditch"}
          icons={"mountain"}
        />

        <TextIcon
          tooltipDescription={"Objects struck sign"}
          icons={"sign"}
        />

        <TextIcon
          tooltipDescription={"Objects struck tower"}
          icons={"broadcast-tower"}
        />

        <TextIcon
          tooltipDescription={"Other objects struck: tree, light, truck debris, structure"}
          icons={["broadcast-tower", "traffic-light", "truck-loading", "monument"]}
        />

        <TextIcon
          tooltipDescription={"Block number"}
          icons={"cube"}
        />
        <TextIcon
          tooltipDescription={"Milepost"}
          icons={"sign"}
        />

        <TextIcon
          tooltipDescription={"Primary trafficway"}
          icons={["1","road"]}
        />

        <TextIcon
          tooltipDescription={"Secondary trafficway"}
          icons={["2","road"]}
        />

      </Section>

      <Section
        title={"Individual (collision participant) properties"}
        description={"Individual roles, individual tags, individual contact information"}
      >

        <TextIcon
          tooltipDescription={
            "Collision participant role"
          }
          icons={["user","car-crash"]}
        />

        <TextIcon
          tooltipDescription={
            '"Registered owner"'
          }
          icons={["id-badge","car"]}
        />

        <TextIcon
          tooltipDescription={
            "Driver"
          }
          /* Highlight driver icon */
          icons={["id-card","car"]}
        />

        <TextIcon
          tooltipDescription={
            "Passenger"
          }
          icons={"male"}
        />

      <TextIcon
          tooltipDescription={
            "Cyclist"
          }
          icons={"bicycle"}
        />

      <TextIcon
          tooltipDescription={
            "Pedestrian"
          }
          icons={"running"}
        />

      <TextIcon
          tooltipDescription={
            "Property owner"
          }
          icons={"house-user"}
        />

      <TextIcon
          tooltipDescription={
            "Unknown"
          }
          icons={"question-circle"}
        />

      <TextIcon
          tooltipDescription={
            "Individual tag"
          }
          icons={"user-tag"}
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
          icons={"trash-alt"}
        />
        <TextIcon
          tooltipDescription={
            "Restore collision to search"
          }
          icons={"trash-restore-alt"}
        />
        <TextIcon
          tooltipDescription={
            "Archive collision"
          }
          icons={"archive"}
        />
        <TextIcon
          tooltipDescription={
            "History collisions"
          }
          icons={["history","glasses"]}
        />
        <TextIcon
          tooltipDescription={
            "Legal case rating"
          }
          icons={"balance-scale"}
        />
        <TextIcon
          tooltipDescription={
            "Valuable legal case"
          }
          icons={"gem"}
        />
        <TextIcon
          tooltipDescription={
            "Interesting legal case"
          }
          icons={"heart"}
        />

        <TextIcon
          tooltipDescription={
            "Uninteresting legal case"
          }
          icons={"lemon"}
        />

        <TextIcon
          tooltipDescription={
            "IDI Core fetch"
          }
          icons={"money-bill-alt"}
        />

        <TextIcon
          tooltipDescription={
            "Love collision participant"
          }
          icons={"grin-hearts"}
        />

        <TextIcon
          tooltipDescription={
            "Meh collision participant"
          }
          icons={"meh"}
        />

        <TextIcon
          tooltipDescription={
            "Uninteresting collision participant"
          }
          icons={"sad-tear"}
        />

        <TextIcon
          tooltipDescription={
            "Robot (automated communications)"
          }
          icons={"robot"}
        />

        <TextIcon
          tooltipDescription={
            "Urgent contact"
          }
          icons={"star"}
        />

        <TextIcon
          tooltipDescription={
            "Priority contact"
          }
          icons={"star-half-alt"}
        />

        <TextIcon
          tooltipDescription={
            "Contact normal time=frame"
          }
          icons={"star-half"}
        />

        <TextIcon
          tooltipDescription={
            "Unlink individual from collision"
          }
          icons={"unlink"}
        />

        <TextIcon
          tooltipDescription={
            "Link individual to collision"
          }
          icons={"link"}
        />

        <TextIcon
          tooltipDescription={
            "Lock settings"
          }
          icons={"lock"}
        />

        <TextIcon
          tooltipDescription={
            "Next individual"
          }
          icons={"user-plus"}
        />

        <TextIcon
          tooltipDescription={
            "Previous individual"
          }
          icons={"user-minus"}
        />

        <TextIcon
          tooltipDescription={
            "Tag collision"
          }
          icons={"tag"}
        />

        <TextIcon
          tooltipDescription={
            "Stop all robot communications"
          }
          icons={"stop-circle"}
        />

        <TextIcon
          tooltipDescription={
            "Start all robot communications"
          }
          icons={"play-circle"}
        />

        <TextIcon
          tooltipDescription={
            "Bookmark collision"
          }
          icons={"bookmark"}
        />

        <TextIcon
        tooltipDescription={
          "View all bookmarks"
        }
        icons={"book"}
        />

        <TextIcon
        tooltipDescription={
          "Save individual"
        }
        icons={"paperclip"}
        />

      <TextIcon
        tooltipDescription={
          "Make note"
        }
        icons={"sticky-note"}
        />

        <TextIcon
        tooltipDescription={
          "SMS individual"
        }
        icons={"sms"}
        />

        <TextIcon
        tooltipDescription={
          "Call individual"
        }
        icons={"mobile"}
        />

        <TextIcon
        tooltipDescription={
          "Voicemail"
        }
        icons={"voicemail"}
        />

        <TextIcon
        tooltipDescription={
          "Email individual"
        }
        icons={"envelope"}
        />

        <TextIcon
        tooltipDescription={
          "Email opened"
        }
        icons={"envelope-open-text"}
        />

        <TextIcon
        tooltipDescription={
          "View IDI core / Twilio expenses"
        }
        icons={"credit-card"}
        />

        <TextIcon
        tooltipDescription={
          "View collision / participants statistics"
        }
        icons={"chart-line"}
        />

        <TextIcon
        tooltipDescription={
          "Back"
        }
        icons={"backspace"}
        />

        <TextIcon
        tooltipDescription={
          "Search"
        }
        icons={"search"}
        />

      <TextIcon
        tooltipDescription={
          "Set ending date to now"
        }
        icons={"infinity"}
        />

      <TextIcon
        tooltipDescription={
          "Possible individual relationship"
        }
        icons={"couch"}
        /> 

      </Section>

      
    </>
  );
}