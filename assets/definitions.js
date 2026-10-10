/* Source-linked paraphrases; examples are illustrative, not design recommendations. */
window.ATLAS_TERMS=[
 {
  "id": "accessibility",
  "title": "Accessibility",
  "aliases": "access access to opportunities",
  "definition": "The ability to reach useful destinations, influenced by both transport and where activities are located.",
  "example": "A nearby clinic can be easier to reach even where travel speeds are lower.",
  "domain": "planning",
  "diagram": "access",
  "related": [
   "accessibility-shift"
  ],
  "refs": [
   {
    "doc": "ff4e849599b0",
    "page": 19,
    "label": "Accessibility framework"
   }
  ]
 },
 {
  "id": "annual-average-daily-traffic",
  "title": "Annual average daily traffic",
  "aliases": "AADT",
  "definition": "Total traffic over a year divided by the number of days in that year.",
  "example": "A corridor with 7,300,000 annual vehicles has AADT 20,000 veh/day in a 365-day year.",
  "domain": "traffic",
  "diagram": "daily",
  "related": [
   "design-hour"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 48,
    "label": "Chapter 5 glossary · Annual average daily traffic"
   }
  ]
 },
 {
  "id": "arrival-type",
  "title": "Arrival type",
  "aliases": "signal progression platoon",
  "definition": "A category describing the quality of vehicle arrivals relative to a signal phase in the HCM method.",
  "example": "A platoon arriving mainly during green differs from one arriving during red.",
  "domain": "signals",
  "diagram": "green",
  "related": [
   "signal-capacity"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 48,
    "label": "Chapter 5 glossary · Arrival type"
   }
  ]
 },
 {
  "id": "average-running-speed",
  "title": "Average running speed",
  "aliases": "running speed",
  "definition": "Segment length divided by average time spent in motion; stopped time is excluded.",
  "example": "A 5 km trip with 6 minutes moving time has running speed 50 km/h.",
  "domain": "traffic",
  "diagram": "speed",
  "related": [
   "speed-definitions"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 86,
    "label": "Speed measures"
   }
  ]
 },
 {
  "id": "average-travel-speed",
  "title": "Average travel speed",
  "aliases": "journey speed",
  "definition": "Segment length divided by average total travel time, including stops.",
  "example": "The same 5 km trip with 7.5 minutes total time has travel speed 40 km/h.",
  "domain": "traffic",
  "diagram": "speed",
  "related": [
   "travel-time"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 86,
    "label": "Speed measures"
   }
  ]
 },
 {
  "id": "back-of-queue",
  "title": "Back of queue",
  "aliases": "queue tail",
  "definition": "The distance from an intersection stop line to the rear of the farthest queued vehicle under the source definition.",
  "example": "A queue tail approaching the upstream junction signals a storage problem.",
  "domain": "traffic",
  "diagram": "queue",
  "related": [
   "queue-measures"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 49,
    "label": "Chapter 5 glossary · Back of queue"
   }
  ]
 },
 {
  "id": "bottleneck",
  "title": "Bottleneck",
  "aliases": "constraint",
  "definition": "A roadway element where arrival demand exceeds the available capacity.",
  "example": "A lane drop may limit discharge and produce an upstream queue.",
  "domain": "traffic",
  "diagram": "queue",
  "related": [
   "demand-throughput"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 49,
    "label": "Chapter 5 glossary · Bottleneck"
   }
  ]
 },
 {
  "id": "calibration",
  "title": "Calibration",
  "aliases": "model fitting",
  "definition": "Adjustment of model parameters so the model better reproduces observed local conditions.",
  "example": "Compare observed and simulated bottleneck discharge before choosing alternative scenarios.",
  "domain": "simulation",
  "diagram": "calibration",
  "related": [
   "calibration-envelopes"
  ],
  "refs": [
   {
    "doc": "267688928e70",
    "page": 133,
    "label": "Calibration definition"
   }
  ]
 },
 {
  "id": "capacity",
  "title": "Capacity",
  "aliases": "maximum sustainable flow",
  "definition": "The maximum sustainable flow under specified roadway, traffic, control and environmental conditions.",
  "example": "Capacity stated as veh/h/lane needs the same basis when compared with demand.",
  "domain": "traffic",
  "diagram": "capacity",
  "related": [
   "vc"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 49,
    "label": "Chapter 5 glossary · Capacity"
   }
  ]
 },
 {
  "id": "clear-zone",
  "title": "Clear zone",
  "aliases": "roadside recovery area",
  "definition": "Roadside space considered for an errant vehicle to recover, with selection influenced by speed, traffic and terrain.",
  "example": "A traversable slope and a steep nonrecoverable slope need different recovery treatment.",
  "domain": "safety",
  "diagram": "slope",
  "related": [
   "clear-zone-context"
  ],
  "refs": [
   {
    "doc": "00fcf87f608e",
    "page": 31,
    "label": "Clear-zone selection"
   }
  ]
 },
 {
  "id": "confidence-interval",
  "title": "Confidence interval",
  "aliases": "CI uncertainty interval",
  "definition": "An interval estimating a population parameter using a procedure with a specified repeated-sampling coverage.",
  "example": "An interval for mean travel time is not an interval containing 95% of individual trips.",
  "domain": "research",
  "diagram": "interval",
  "related": [
   "confidence-meaning"
  ],
  "refs": [
   {
    "doc": "2cf05167fd2d",
    "page": 360,
    "label": "Confidence interval assumptions and interpretation"
   }
  ]
 },
 {
  "id": "control-delay",
  "title": "Control delay",
  "aliases": "intersection delay",
  "definition": "Delay caused by a control device, including the relevant deceleration, queue movement, stopping and acceleration components.",
  "example": "A total corridor travel-time difference need not equal intersection control delay.",
  "domain": "traffic",
  "diagram": "speed",
  "related": [
   "signal-los"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 50,
    "label": "Chapter 5 glossary · Control delay"
   }
  ]
 },
 {
  "id": "critical-gap",
  "title": "Critical gap",
  "aliases": "gap acceptance",
  "definition": "The minimum acceptable gap used in a gap-acceptance model for a particular minor movement.",
  "example": "A driver turning from a minor road waits for an acceptable gap in conflicting traffic.",
  "domain": "traffic",
  "diagram": "gap",
  "related": [
   "twsc-base-gaps"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 51,
    "label": "Chapter 5 glossary · Critical gap"
   }
  ]
 },
 {
  "id": "cross-slope",
  "title": "Cross slope",
  "aliases": "crossfall camber",
  "definition": "The transverse slope across a roadway surface, relevant to drainage and roadway geometry.",
  "example": "A 2% slope changes elevation by 0.02 m per metre across the surface.",
  "domain": "geometry",
  "diagram": "crossfall",
  "related": [
   "radius"
  ],
  "refs": [
   {
    "doc": "8c010d405f74",
    "page": 230,
    "label": "Cross slope and superelevation context"
   }
  ]
 },
 {
  "id": "demand",
  "title": "Demand",
  "aliases": "arrival demand",
  "definition": "Traffic seeking to use a facility, including demand that may be hidden by upstream queues or restricted entry.",
  "example": "Observed discharge of 900 veh/h does not imply demand is only 900 veh/h if a queue is growing.",
  "domain": "traffic",
  "diagram": "capacity",
  "related": [
   "demand-throughput"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 51,
    "label": "Chapter 5 glossary · Demand"
   }
  ]
 },
 {
  "id": "density",
  "title": "Density",
  "aliases": "k traffic concentration",
  "definition": "Vehicles or equivalent units occupying a defined roadway length, commonly per lane.",
  "example": "20 veh/km/lane uses a distance denominator, unlike flow in veh/h/lane.",
  "domain": "traffic",
  "diagram": "density",
  "related": [
   "density"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 51,
    "label": "Chapter 5 glossary · Density"
   }
  ]
 },
 {
  "id": "design-speed",
  "title": "Design speed",
  "aliases": "geometric design control",
  "definition": "A selected speed used to determine geometric design features under the relevant design method.",
  "example": "A selected design speed controls sight-distance choices; it is not a measured operating speed.",
  "domain": "geometry",
  "diagram": "sight",
  "related": [
   "ssd"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 51,
    "label": "Chapter 5 glossary · Design speed"
   }
  ]
 },
 {
  "id": "design-hour-volume",
  "title": "Design-hour volume",
  "aliases": "DHV DDHV",
  "definition": "Traffic volume for the selected design hour; directional volume also uses the directional share.",
  "example": "AADT 20,000, K=10% and D=60% give directional volume 1,200 veh/h.",
  "domain": "planning",
  "diagram": "daily",
  "related": [
   "design-hour"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 107,
    "label": "K and directional design volume"
   }
  ]
 },
 {
  "id": "effective-green",
  "title": "Effective green",
  "aliases": "g usable green",
  "definition": "The equivalent time available for discharge at saturation flow after accounting for startup and clearance effects.",
  "example": "Effective green 40 s in a 90 s cycle gives g/C≈0.444.",
  "domain": "signals",
  "diagram": "green",
  "related": [
   "signal-capacity"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 52,
    "label": "Chapter 5 glossary · Effective green"
   }
  ]
 },
 {
  "id": "effective-walkway-width",
  "title": "Effective walkway width",
  "aliases": "WE usable width",
  "definition": "The walkway width available for pedestrian movement after relevant obstacles and shy distances are accounted for.",
  "example": "A 3 m sidewalk with 0.8 m preempted width has 2.2 m effective width.",
  "domain": "signals",
  "diagram": "walkway",
  "related": [
   "walkway-flow"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 648,
    "label": "Eq. 18-1"
   }
  ]
 },
 {
  "id": "flow-rate",
  "title": "Flow rate",
  "aliases": "q",
  "definition": "The equivalent hourly rate at which vehicles or people pass a point during a stated interval.",
  "example": "300 vehicles in 15 minutes correspond to a flow rate of 1,200 veh/h.",
  "domain": "traffic",
  "diagram": "headway",
  "related": [
   "phf"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 53,
    "label": "Chapter 5 glossary · Flow rate"
   }
  ]
 },
 {
  "id": "follow-up-time",
  "title": "Follow-up time",
  "aliases": "tf minor movement",
  "definition": "The time between successive vehicles from a queued minor movement using the same available gap.",
  "example": "One accepted major-road gap can serve more than one waiting minor-road vehicle.",
  "domain": "traffic",
  "diagram": "gap",
  "related": [
   "twsc-base-gaps"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 53,
    "label": "Chapter 5 glossary · Follow-up time"
   }
  ]
 },
 {
  "id": "free-flow-speed",
  "title": "Free-flow speed",
  "aliases": "FFS",
  "definition": "The average speed under low-volume conditions where traffic and control delay do not materially constrain drivers.",
  "example": "A free-flow reference must be supported by appropriate low-volume observations.",
  "domain": "traffic",
  "diagram": "speed",
  "related": [
   "reliability"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 86,
    "label": "Free-flow speed definition"
   }
  ]
 },
 {
  "id": "geh-statistic",
  "title": "GEH statistic",
  "aliases": "GEH calibration statistic",
  "definition": "A nonlinear measure used to compare two hourly traffic-flow values.",
  "example": "Modeled 950 and observed 1,000 veh/h produce GEH≈1.60; project criteria determine interpretation.",
  "domain": "simulation",
  "diagram": "comparison",
  "related": [
   "geh"
  ],
  "refs": [
   {
    "doc": "267688928e70",
    "page": 139,
    "label": "Flow comparison example"
   }
  ]
 },
 {
  "id": "grade",
  "title": "Grade",
  "aliases": "longitudinal slope",
  "definition": "The longitudinal roadway slope, commonly expressed as percentage change in elevation over horizontal distance.",
  "example": "A +4% grade rises about 4 m over 100 m horizontally.",
  "domain": "geometry",
  "diagram": "grade",
  "related": [
   "grade-factor"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 48,
    "label": "Chapter 5 glossary · Approach grade"
   }
  ]
 },
 {
  "id": "headway",
  "title": "Headway",
  "aliases": "h time separation",
  "definition": "Time separating successive vehicles at a reference point, or regular service departures when discussing transit.",
  "example": "A 10-minute transit headway gives six scheduled departures per hour.",
  "domain": "transit",
  "diagram": "headway",
  "related": [
   "headway"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 54,
    "label": "Chapter 5 glossary · Headway"
   }
  ]
 },
 {
  "id": "k-value",
  "title": "K value",
  "aliases": "vertical curvature",
  "definition": "Vertical curve length per percentage point of algebraic grade change in the stated unit system.",
  "example": "K=26 m/% and a 4-percentage-point grade change give L=104 m.",
  "domain": "geometry",
  "diagram": "vertical",
  "related": [
   "vertical-k"
  ],
  "refs": [
   {
    "doc": "8c010d405f74",
    "page": 366,
    "label": "L=KA"
   }
  ]
 },
 {
  "id": "lane-group",
  "title": "Lane group",
  "aliases": "intersection lane grouping",
  "definition": "Lanes treated together for the analysis of one or more movements in a signalized-intersection method.",
  "example": "A shared through/right lane group needs demand and saturation flow on the same group basis.",
  "domain": "signals",
  "diagram": "lanes",
  "related": [
   "signal-capacity"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 55,
    "label": "Chapter 5 glossary · Lane group"
   }
  ]
 },
 {
  "id": "level-of-service",
  "title": "Level of service",
  "aliases": "LOS",
  "definition": "A qualitative operating category based on a specified service measure and facility-specific criteria.",
  "example": "LOS from freeway density and LOS from signalized control delay use different measures.",
  "domain": "traffic",
  "diagram": "los",
  "related": [
   "signal-los"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 55,
    "label": "Chapter 5 glossary · Level of service"
   }
  ]
 },
 {
  "id": "lost-time",
  "title": "Lost time",
  "aliases": "startup clearance lost time",
  "definition": "Signal time not effectively available for saturation discharge, including startup and clearance components.",
  "example": "Displayed green can differ from the effective green used in capacity calculations.",
  "domain": "signals",
  "diagram": "green",
  "related": [
   "lost-time"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 56,
    "label": "Chapter 5 glossary · Lost time"
   }
  ]
 },
 {
  "id": "paired-observations",
  "title": "Paired observations",
  "aliases": "matched samples paired data",
  "definition": "Observations linked by a defensible match, analyzed through within-pair differences.",
  "example": "Measure the same matched unit under A and B, then calculate A−B for each pair.",
  "domain": "research",
  "diagram": "paired",
  "related": [
   "paired-comparison"
  ],
  "refs": [
   {
    "doc": "2cf05167fd2d",
    "page": 487,
    "label": "Paired inference"
   }
  ]
 },
 {
  "id": "passenger-miles-traveled",
  "title": "Passenger miles traveled",
  "aliases": "PMT",
  "definition": "Passenger distance accumulated by multiplying passengers carried by the distance each travels, under the reporting rules.",
  "example": "Ten passengers each riding 3 miles contribute 30 passenger miles.",
  "domain": "transit",
  "diagram": "occupancy",
  "related": [
   "pmt-measurement"
  ],
  "refs": [
   {
    "doc": "94f09433a8f5",
    "page": 161,
    "label": "Passenger miles traveled"
   }
  ]
 },
 {
  "id": "passenger-car-equivalent",
  "title": "Passenger-car equivalent",
  "aliases": "PCE pc",
  "definition": "A factor representing another vehicle type’s operating effect in terms of passenger cars within a specified method.",
  "example": "The HCM 2000 signalized heavy-vehicle factor uses Eₜ=2; other facilities may use different equivalents.",
  "domain": "traffic",
  "diagram": "lanes",
  "related": [
   "heavy-vehicles"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 58,
    "label": "Chapter 5 glossary · Passenger-car equivalent"
   }
  ]
 },
 {
  "id": "peak-hour-factor",
  "title": "Peak-hour factor",
  "aliases": "PHF",
  "definition": "The ratio of hourly volume to the equivalent peak subhourly flow rate; the 15-minute form is V/(4V15).",
  "example": "Hourly volume 1,000 and peak-quarter count 300 give PHF≈0.833.",
  "domain": "traffic",
  "diagram": "phf",
  "related": [
   "phf"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 58,
    "label": "Chapter 5 glossary · Peak-hour factor"
   }
  ]
 },
 {
  "id": "percentile",
  "title": "Percentile",
  "aliases": "p95 quantile",
  "definition": "A distribution cut point associated with a specified cumulative share of observations.",
  "example": "The 95th-percentile travel time is a tail measure, distinct from the mean and its confidence interval.",
  "domain": "research",
  "diagram": "percentile",
  "related": [
   "reliability"
  ],
  "refs": [
   {
    "doc": "536d201da63c",
    "page": 121,
    "label": "Reliability measures"
   }
  ]
 },
 {
  "id": "planning-time-index",
  "title": "Planning time index",
  "aliases": "PTI",
  "definition": "A reliability ratio comparing the selected high-percentile travel time with a free-flow reference.",
  "example": "A 95th-percentile time of 30 min and free-flow time of 15 min give PTI=2.",
  "domain": "simulation",
  "diagram": "reliability",
  "related": [
   "reliability"
  ],
  "refs": [
   {
    "doc": "a0fa03969a6f",
    "page": 93,
    "label": "Planning time index context"
   }
  ]
 },
 {
  "id": "population",
  "title": "Population",
  "aliases": "target population",
  "definition": "The full set of units about which a study seeks information or inference.",
  "example": "A survey of weekday commuters does not automatically represent all weekend travelers.",
  "domain": "research",
  "diagram": "sample",
  "related": [
   "sampling-frame"
  ],
  "refs": [
   {
    "doc": "2cf05167fd2d",
    "page": 49,
    "label": "Population and study units"
   }
  ]
 },
 {
  "id": "queue",
  "title": "Queue",
  "aliases": "waiting vehicles",
  "definition": "Vehicles or people delayed while waiting for service or movement, measured using a stated boundary and threshold.",
  "example": "Queue counts, physical length and a percentile queue are different outputs.",
  "domain": "traffic",
  "diagram": "queue",
  "related": [
   "queue-balance"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 59,
    "label": "Chapter 5 glossary · Queue"
   }
  ]
 },
 {
  "id": "reaction-time",
  "title": "Reaction time",
  "aliases": "perception reaction time",
  "definition": "Time used to perceive a situation and initiate a response in a specified design calculation.",
  "example": "At 80 km/h, the source SSD reaction component for 2.5 s is about 55.6 m.",
  "domain": "geometry",
  "diagram": "sight",
  "related": [
   "ssd"
  ],
  "refs": [
   {
    "doc": "8c010d405f74",
    "page": 201,
    "label": "SSD reaction-time assumption"
   }
  ]
 },
 {
  "id": "recoverable-foreslope",
  "title": "Recoverable foreslope",
  "aliases": "recoverable slope",
  "definition": "A roadside foreslope that a vehicle can generally traverse and recover from under the source’s surface and slope assumptions.",
  "example": "The roadside guide identifies smooth traversable slopes 1V:4H or flatter as recoverable.",
  "domain": "safety",
  "diagram": "slope",
  "related": [
   "roadside-slopes"
  ],
  "refs": [
   {
    "doc": "00fcf87f608e",
    "page": 33,
    "label": "Recoverable foreslopes"
   }
  ]
 },
 {
  "id": "revenue-service",
  "title": "Revenue service",
  "aliases": "fare-free public transport",
  "definition": "Service available to carry public-transport passengers, including fare and fare-free operations under mode-specific rules.",
  "example": "Closed-door positioning is deadhead and is kept separate from revenue service.",
  "domain": "transit",
  "diagram": "transit",
  "related": [
   "revenue-service"
  ],
  "refs": [
   {
    "doc": "94f09433a8f5",
    "page": 144,
    "label": "Revenue service definition"
   }
  ]
 },
 {
  "id": "sample",
  "title": "Sample",
  "aliases": "observed sample",
  "definition": "A subset of population units selected for observation.",
  "example": "A sample of 400 people is only useful for wider inference if selection and coverage are appropriate.",
  "domain": "research",
  "diagram": "sample",
  "related": [
   "sampling-frame"
  ],
  "refs": [
   {
    "doc": "2cf05167fd2d",
    "page": 49,
    "label": "Samples and inference"
   }
  ]
 },
 {
  "id": "saturation-flow-rate",
  "title": "Saturation flow rate",
  "aliases": "s",
  "definition": "The equivalent hourly discharge rate of a continuously queued movement with effective green available.",
  "example": "A 2 s saturation headway corresponds to 1,800 veh/h/lane before time allocation.",
  "domain": "signals",
  "diagram": "saturation",
  "related": [
   "saturation-headway"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 61,
    "label": "Chapter 5 glossary · Saturation flow rate"
   }
  ]
 },
 {
  "id": "saturation-headway",
  "title": "Saturation headway",
  "aliases": "discharge headway",
  "definition": "The stable mean headway during queued discharge after the source’s startup vehicles are excluded.",
  "example": "Observe discharge after the fourth queued vehicle rather than using the first startup headways.",
  "domain": "signals",
  "diagram": "saturation",
  "related": [
   "field-saturation"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 61,
    "label": "Chapter 5 glossary · Saturation headway"
   }
  ]
 },
 {
  "id": "space-mean-speed",
  "title": "Space-mean speed",
  "aliases": "SMS",
  "definition": "A speed based on average travel time over a segment; under consistent sampling it corresponds to the harmonic rather than arithmetic speed average.",
  "example": "Speeds of 40, 60 and 80 km/h give space-mean speed about 55.4 km/h in the source example.",
  "domain": "traffic",
  "diagram": "speed",
  "related": [
   "speed-definitions"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 86,
    "label": "Space/time speed example"
   }
  ]
 },
 {
  "id": "standard-deviation",
  "title": "Standard deviation",
  "aliases": "SD s",
  "definition": "A measure of the spread of individual observations around their mean.",
  "example": "Trip-to-trip SD is not the standard error of an estimated average.",
  "domain": "research",
  "diagram": "interval",
  "related": [
   "confidence"
  ],
  "refs": [
   {
    "doc": "2cf05167fd2d",
    "page": 360,
    "label": "Sample SD in mean inference"
   }
  ]
 },
 {
  "id": "standard-error",
  "title": "Standard error",
  "aliases": "SE",
  "definition": "A measure of the sampling variability of an estimator under its assumptions.",
  "example": "For independent observations, the mean’s estimated SE is s/√n.",
  "domain": "research",
  "diagram": "interval",
  "related": [
   "confidence"
  ],
  "refs": [
   {
    "doc": "2cf05167fd2d",
    "page": 360,
    "label": "Standard error in t interval"
   }
  ]
 },
 {
  "id": "stopping-sight-distance",
  "title": "Stopping sight distance",
  "aliases": "SSD",
  "definition": "Distance needed to perceive a hazard, react and brake to a stop under stated design assumptions.",
  "example": "The level-road example at 80 km/h, 2.5 s and 3.4 m/s² gives about 129 m.",
  "domain": "geometry",
  "diagram": "sight",
  "related": [
   "ssd"
  ],
  "refs": [
   {
    "doc": "8c010d405f74",
    "page": 203,
    "label": "SSD equation"
   }
  ]
 },
 {
  "id": "superelevation",
  "title": "Superelevation",
  "aliases": "e banking",
  "definition": "Transverse banking on a horizontal curve used together with side friction to balance lateral acceleration.",
  "example": "A curve-radius calculation must specify both e and the applicable friction factor.",
  "domain": "geometry",
  "diagram": "crossfall",
  "related": [
   "radius"
  ],
  "refs": [
   {
    "doc": "8c010d405f74",
    "page": 239,
    "label": "Superelevation design context"
   }
  ]
 },
 {
  "id": "throughput",
  "title": "Throughput",
  "aliases": "processed flow",
  "definition": "Vehicles or people entering or exiting a study system during the chosen period, with the counted boundary event stated.",
  "example": "Report incomplete and unable-to-enter trips alongside completed-trip performance.",
  "domain": "traffic",
  "diagram": "queue",
  "related": [
   "throughput-accounting"
  ],
  "refs": [
   {
    "doc": "536d201da63c",
    "page": 114,
    "label": "Throughput components"
   }
  ]
 },
 {
  "id": "time-mean-speed",
  "title": "Time-mean speed",
  "aliases": "TMS spot speed",
  "definition": "The arithmetic mean of vehicle speeds observed passing a point.",
  "example": "The arithmetic mean of 40, 60 and 80 km/h is 60 km/h.",
  "domain": "traffic",
  "diagram": "speed",
  "related": [
   "speed-definitions"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 86,
    "label": "Time-mean speed"
   }
  ]
 },
 {
  "id": "type-i-error",
  "title": "Type I error",
  "aliases": "alpha false rejection",
  "definition": "Rejecting a true null hypothesis under a specified test procedure.",
  "example": "A study concludes that an effect exists when the tested null is actually true.",
  "domain": "research",
  "diagram": "errors",
  "related": [
   "hypothesis-errors"
  ],
  "refs": [
   {
    "doc": "2cf05167fd2d",
    "page": 401,
    "label": "Type I error"
   }
  ]
 },
 {
  "id": "type-ii-error",
  "title": "Type II error",
  "aliases": "beta missed rejection",
  "definition": "Failing to reject a false null hypothesis under the selected procedure and alternative.",
  "example": "A nonsignificant result can arise when the study lacks adequate information.",
  "domain": "research",
  "diagram": "errors",
  "related": [
   "hypothesis-errors"
  ],
  "refs": [
   {
    "doc": "2cf05167fd2d",
    "page": 402,
    "label": "Type II error"
   }
  ]
 },
 {
  "id": "unlinked-passenger-trips",
  "title": "Unlinked passenger trips",
  "aliases": "UPT boardings",
  "definition": "Passenger boardings counted separately; transfers can create additional unlinked trips.",
  "example": "A rider who boards two vehicles on one journey can contribute two UPT.",
  "domain": "transit",
  "diagram": "transit",
  "related": [
   "transit-productivity"
  ],
  "refs": [
   {
    "doc": "94f09433a8f5",
    "page": 159,
    "label": "Unlinked passenger trips"
   }
  ]
 },
 {
  "id": "validation",
  "title": "Validation",
  "aliases": "model suitability",
  "definition": "Assessment of whether a selected model is suitable for its intended application and representation of observed behavior.",
  "example": "A calibrated fit alone does not establish that every alternative forecast is valid.",
  "domain": "simulation",
  "diagram": "calibration",
  "related": [
   "model-input-qa"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 65,
    "label": "Chapter 5 glossary · Validation"
   }
  ]
 },
 {
  "id": "vehicle-revenue-hours",
  "title": "Vehicle revenue hours",
  "aliases": "VRH",
  "definition": "Hours a transit vehicle operates in revenue service under mode-specific reporting rules.",
  "example": "Conventional scheduled-service VRH includes running and layover/recovery time, but excludes deadhead.",
  "domain": "transit",
  "diagram": "transit",
  "related": [
   "transit-productivity"
  ],
  "refs": [
   {
    "doc": "94f09433a8f5",
    "page": 144,
    "label": "Vehicle revenue hours"
   }
  ]
 },
 {
  "id": "vehicle-revenue-miles",
  "title": "Vehicle revenue miles",
  "aliases": "VRM",
  "definition": "Miles a transit vehicle operates in revenue service under the applicable reporting definition.",
  "example": "Passenger miles and vehicle revenue miles have different occupancy and distance bases.",
  "domain": "transit",
  "diagram": "occupancy",
  "related": [
   "revenue-service"
  ],
  "refs": [
   {
    "doc": "94f09433a8f5",
    "page": 144,
    "label": "Vehicle revenue miles"
   }
  ]
 },
 {
  "id": "vertical-curve",
  "title": "Vertical curve",
  "aliases": "crest sag curve",
  "definition": "A transition joining longitudinal grades, with crest and sag types requiring different design controls.",
  "example": "A crest may be controlled by visibility over the high point; a sag can be controlled by headlight visibility.",
  "domain": "geometry",
  "diagram": "vertical",
  "related": [
   "vertical-k"
  ],
  "refs": [
   {
    "doc": "8c010d405f74",
    "page": 363,
    "label": "Vertical curves"
   }
  ]
 },
 {
  "id": "volume-to-capacity-ratio",
  "title": "Volume-to-capacity ratio",
  "aliases": "v/c X",
  "definition": "The ratio of demand flow rate to capacity when both use a consistent basis.",
  "example": "Demand 1,500 veh/h divided by capacity 1,000 veh/h gives X=1.5.",
  "domain": "traffic",
  "diagram": "capacity",
  "related": [
   "vc"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 65,
    "label": "Chapter 5 glossary · Volume to capacity ratio"
   }
  ]
 },
 {
  "id": "work-zone",
  "title": "Work zone",
  "aliases": "TTC construction zone",
  "definition": "A highway segment affected by maintenance or construction and its associated traffic management.",
  "example": "Work space and buffer space perform different functions in a temporary traffic control arrangement.",
  "domain": "workzones",
  "diagram": "workzone",
  "related": [
   "ttc-buffer"
  ],
  "refs": [
   {
    "doc": "73559e3ac0c6",
    "page": 65,
    "label": "Chapter 5 glossary · Work zone"
   }
  ]
 }
];
