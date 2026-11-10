/* HubStarr training list.
   on: true  = on the floor
   on: false = hidden. Leave the block here so you can turn it back on.
   Push this file after you change it.
*/
window.HS_TRAINING = [
  {
    id: "back-safety",
    on: false,
    code: "BST",
    title: "Back safety",
    blurb: "Training. Read it, then sign off.",
    lead: "Most back injuries here come from lifting wrong, not from one huge load. Size it up, use your legs, and do not twist.",
    sections: [
      {
        title: "Before you lift",
        items: [
          "Test the weight at a corner. Too heavy or awkward — get help or use a pallet jack / forklift.",
          "Split the load. Long pipe or lumber is a two-person carry.",
          "Clear the path. No pallets, wrap, or wet spots."
        ]
      },
      {
        title: "How to lift",
        items: [
          "Feet close to the load. Center yourself.",
          "Bend the knees. Back stays as straight as you can keep it.",
          "Good grip. Lift straight up with the legs.",
          "Keep it close. Do not twist — turn your feet.",
          "Set it down the same way. Legs do the work. Do not drop it.",
          "Push, do not pull, when you can."
        ]
      },
      {
        title: "On the job",
        items: [
          "Store what you will lift again at waist height, not on the floor.",
          "Standing a long time: shift your feet, one foot up on a ledge.",
          "Sitting a long time: stand and stretch.",
          "Pain that does not ease, or numbness in a leg — tell a lead and get medical. Do not work through it."
        ]
      }
    ],
    pdf: "",
    form: "https://forms.office.com/Pages/ResponsePage.aspx?id=FGodbWz940CbypuISeMujdWm4OFLalVDp494lfOXUHZURjFKQTVSQjM1UzdRN0RCTDZQM1lLSFpBQy4u&embed=true"
  },
  {
    id: "haccp",
    on: false,
    code: "HAC",
    title: "HACCP",
    blurb: "Food-grade receiving, storage, and distribution. Read it, then sign off.",
    lead: "This is the HACCP overview for food-grade product at HubStarr. It covers the process steps, hazards, and what to do. There is no Critical Control Point on these three steps. The checks still have to happen.",
    sections: [
      {
        title: "Who this is for",
        items: [
          "Anyone who receives, stores, or ships food-grade product.",
          "Compliance Manager, account managers, and warehouse personnel."
        ]
      },
      {
        title: "Receiving",
        items: [
          "Hazard: foreign material or physical damage. Likelihood low. Severity high.",
          "Inspect each incoming pallet for damage, dirt, or debris.",
          "If a pallet is compromised, advise the customer immediately.",
          "Not a CCP. Catch it here so it does not move into storage."
        ]
      },
      {
        title: "Storage",
        items: [
          "Hazard: physical damage, dents, or leaks. Likelihood medium. Severity medium.",
          "Stack and handle pallets so product is not crushed or punctured.",
          "Not a CCP. Still required good practice."
        ]
      },
      {
        title: "Distribution",
        items: [
          "Hazard: cross-contamination during loading. Likelihood low. Severity high.",
          "Do not place food-grade pallets next to anything that can contaminate finished goods.",
          "Not a CCP. Placement still has to be right before the trailer closes."
        ]
      },
      {
        title: "Who does what",
        items: [
          "Compliance Manager: monitor, review logs weekly, and keep this training current.",
          "Account managers: daily checks and inventory logs.",
          "Warehouse: inspect, stack, and load. Report damage or contamination to a lead."
        ]
      }
    ],
    pdf: "",
    form: "https://forms.office.com/Pages/ResponsePage.aspx?id=FGodbWz940CbypuISeMujdWm4OFLalVDp494lfOXUHZUMTRZN01WV0JER1kwUVREWEgxMVZKTkNCTC4u&embed=true"
  },
  {
    id: "forklift-pedestrians",
    on: true,
    code: "FLT",
    title: "Forklift and pedestrians",
    blurb: "Working safely around forklifts. Read it, then sign off.",
    lead: "Forklifts are common enough that people stop seeing them. More than 1 in 10 will be in an accident this year. Operators have to be trained. Everyone on foot has to stay alert.",
    sections: [
      {
        title: "On foot",
        items: [
          "Stay in the marked pedestrian walkway. Pay attention in forklift areas.",
          "Keep a safe distance. Yield to the forklift unless the operator has clearly yielded to you.",
          "Make eye contact with the driver. Do not assume they saw you.",
          "Stop at doorways and corners. Listen for the horn. Look for lights. Use the mirrors.",
          "Never walk under raised forks. Stay out of the fall zone, the circle around the truck where a shifting load can land.",
          "Do not walk up to talk until the forks are down and the truck is off.",
          "On a scooter: use the horn and slow down in high traffic, at blind corners, and at intersections.",
          "Report unsafe operation to a supervisor."
        ]
      },
      {
        title: "Why the rear swings",
        items: [
          "Forklifts steer from the rear wheels. The back end swings in a wider arc than the front.",
          "In a noisy building you may not hear the horn or the backup alarm. Watch the truck, not just the sound."
        ]
      },
      {
        title: "Operators",
        items: [
          "Daily check before you drive: tires, fluids, leaks, forks straight and not cracked, brakes, lights, horn, steering.",
          "If the truck has a seatbelt, wear it. Every time. Do not start until it is on.",
          "Look for obstructions, uneven floors, and overhead hazards.",
          "Load balanced and fully on both forks. Drive with the load as low as you can.",
          "If the load blocks your view, travel in reverse. Look the way you are going.",
          "Horn at intersections and anywhere people are on foot. Follow the posted speed.",
          "OSHA 1910.178: formal and practical training, certified before you drive, evaluated at least every 3 years."
        ]
      },
      {
        title: "What kills people",
        items: [
          "Tip-overs are the leading forklift death. About 22 percent.",
          "People on foot struck by a truck are about 20 percent.",
          "Crushed by the truck is about 16 percent. Falls from the truck are about 9 percent.",
          "Do not stand on the forks. Do not ride unless you are the trained operator."
        ]
      }
    ],
    pdf: "",
    form: "https://forms.office.com/Pages/ResponsePage.aspx?id=FGodbWz940CbypuISeMujdWm4OFLalVDp494lfOXUHZUOVlSTjlEUkgxTFdUTjhYR1gxV1dRRDk0Sy4u&embed=true"
  }
];
