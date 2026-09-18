export type Service = {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  card: string;
  intro: string[];
  takeTitle: string;
  takeItems: string[];
  bodyTitle: string;
  body: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "residential-junk-removal",
    name: "Residential Junk Removal",
    shortName: "Residential",
    metaTitle: "Residential Junk Removal in Fort Worth, TX",
    metaDescription:
      "Home junk removal in Fort Worth — furniture, mattresses, garage clutter, and more hauled away same-day with upfront pricing. Call McGruder at (682) 226-8352.",
    image: "/images/card-residential.png",
    card: "Furniture, mattresses, garage clutter, yard debris — we clear it out of your home fast and sweep up before we leave.",
    intro: [
      "Clutter has a way of taking over a home one corner at a time — a spare room that became storage, a garage you can't park in anymore, a mattress leaning against the wall since the last upgrade. McGruder Junk Removal clears it all out in a single visit, so you get your space back without lifting a finger.",
      "We serve homeowners, renters, and landlords across Fort Worth and Tarrant County. You point at what goes, we quote a flat price on the spot, and our crew does the lifting, loading, and sweeping. Most residential pickups are done in under an hour.",
    ],
    takeTitle: "What We Take From Homes",
    takeItems: [
      "Couches, recliners & sectionals",
      "Mattresses & box springs",
      "Dressers, tables & bed frames",
      "TVs & electronics",
      "Boxes of household clutter",
      "Yard debris & fencing",
      "Carpet & flooring scraps",
      "Exercise equipment",
      "Hot tubs & sheds (ask us!)",
    ],
    bodyTitle: "How Residential Pickups Work",
    body: [
      "Call or book online and tell us roughly what you need gone — a photo text works great. We'll give you an honest estimate up front, then confirm the exact flat price when we see everything in person. No hourly games, no surprise fees at the truck.",
      "On pickup day, our uniformed crew arrives in the window we promised, loads everything from wherever it sits — attic, backyard, third-floor apartment, it doesn't matter — and sweeps the area clean before we pull away. Anything usable gets donated to Fort Worth area charities first, and the rest is recycled or disposed of responsibly.",
    ],
    faqs: [
      {
        q: "Do I need to move everything to the curb first?",
        a: "No — that's our job. Our crew removes items from wherever they are in your home: upstairs bedrooms, basements, attics, garages, or the backyard. You don't need to lift a thing.",
      },
      {
        q: "How much does residential junk removal cost?",
        a: "Pricing is based on how much space your items take up in our truck. Single items start cheap, and a full truckload is still a flat, quoted price. You approve the exact price before we load anything.",
      },
      {
        q: "Can you come today?",
        a: "Usually, yes. We run same-day and next-day routes across Fort Worth and Tarrant County — call (682) 226-8352 and we'll tell you honestly when the next truck is available.",
      },
    ],
    related: ["furniture-removal", "garage-cleanouts", "appliance-removal"],
  },
  {
    slug: "commercial-junk-removal",
    name: "Commercial Junk Removal",
    shortName: "Commercial",
    metaTitle: "Commercial Junk Removal in Fort Worth, TX",
    metaDescription:
      "Office cleanouts, retail junk removal, and rental turnovers for Fort Worth businesses. Flexible scheduling, fast crews, flat pricing. Call (682) 226-8352.",
    image: "/images/card-commercial.png",
    card: "Office cleanouts, retail spaces, and rental turnovers. We work around your schedule so business never slows down.",
    intro: [
      "When a business needs junk gone, it usually needs it gone yesterday — a lease ending, a remodel starting, a tenant leaving a unit full of furniture. McGruder Junk Removal gives Fort Worth businesses a crew that shows up on schedule, works fast, and doesn't disrupt your customers or your staff.",
      "We handle offices, retail spaces, restaurants, warehouses, and rental properties across Tarrant County. Property managers and realtors call us on repeat because we make their turnover timelines, every time.",
    ],
    takeTitle: "Commercial Jobs We Handle",
    takeItems: [
      "Office furniture & cubicles",
      "Desks, chairs & filing cabinets",
      "Retail fixtures & shelving",
      "Warehouse cleanouts",
      "Tenant move-out debris",
      "Restaurant equipment",
      "E-waste & old electronics",
      "Storage unit cleanouts",
      "Cardboard & packaging hauls",
    ],
    bodyTitle: "Built Around Your Business Hours",
    body: [
      "We schedule around your operation — before open, after close, or weekends. Tell us the deadline and we'll build the pickup around it. For bigger cleanouts, we'll walk the space first and hand you one flat written price so there's nothing to explain to ownership later.",
      "Our crews are uniformed, insured, and respectful of the spaces they work in — we protect floors and doorways, take direction from whoever's on site, and leave every area broom-clean. Need documentation for a property manager? We'll confirm completion with photos.",
    ],
    faqs: [
      {
        q: "Can you work outside business hours?",
        a: "Yes. Early mornings, evenings, and weekends are all on the table. Most of our commercial clients schedule us when their space is empty so operations aren't interrupted.",
      },
      {
        q: "Do you offer recurring service for property managers?",
        a: "We do. If you manage multiple properties or units, we can set up an ongoing arrangement with priority scheduling and consistent pricing. Call us and we'll set it up.",
      },
      {
        q: "Are you insured?",
        a: "Fully. We're happy to provide proof of insurance to your property manager or building owner before the job.",
      },
    ],
    related: ["property-cleanouts", "furniture-removal", "residential-junk-removal"],
  },
  {
    slug: "furniture-removal",
    name: "Furniture Removal",
    shortName: "Furniture",
    metaTitle: "Furniture Removal & Haul-Away in Fort Worth, TX",
    metaDescription:
      "Old couch, mattress, or dresser? McGruder hauls furniture out of Fort Worth homes same-day — donation-first disposal and flat pricing. Call (682) 226-8352.",
    image: "/images/card-residential.png",
    card: "Couches, sectionals, mattresses, and dressers carried out of any room and hauled away — donated first whenever possible.",
    intro: [
      "Furniture is the junk people put off the longest — it's heavy, it's awkward, and it doesn't fit in a trash bin. That sagging couch or old mattress ends up living in the garage for a year because there's no easy way to get rid of it. That's the exact problem McGruder Junk Removal exists to solve.",
      "Our crew carries furniture out of any room in the house — around corners, down stairs, through tight Fort Worth bungalow doorways — loads it, and it's gone. One piece or a whole houseful, same careful crew.",
    ],
    takeTitle: "Furniture We Haul Away",
    takeItems: [
      "Sofas, loveseats & sectionals",
      "Mattresses & box springs",
      "Bed frames & headboards",
      "Dressers & wardrobes",
      "Dining tables & chairs",
      "Desks & office furniture",
      "Entertainment centers",
      "Patio furniture",
      "Recliners & armchairs",
    ],
    bodyTitle: "Donation-First Furniture Disposal",
    body: [
      "A lot of the furniture we pick up still has life in it — and sending a usable couch to the landfill is a waste everyone loses on. Whenever a piece is in donatable condition, we deliver it to Fort Worth area charities and donation centers before anything else. It keeps your old furniture useful and keeps our landfills lighter.",
      "Pieces that can't be donated get broken down for recycling where possible — wood, metal frames, and mattress components can often be diverted. Whatever's left is disposed of properly. You get the space back; the furniture gets handled the right way.",
    ],
    faqs: [
      {
        q: "Will you take furniture from inside the house?",
        a: "Yes — from any room, any floor. We bring the crew and equipment to carry pieces out safely without dinging your walls or door frames.",
      },
      {
        q: "Can my old furniture be donated?",
        a: "If it's clean and structurally sound, we'll try to donate it first. Tell us when you book that you'd like a piece donated and we'll do our best to route it to a local charity.",
      },
      {
        q: "Do you take mattresses?",
        a: "We do — mattresses and box springs of any size. There's no extra hassle on your end; we just haul them out like everything else.",
      },
    ],
    related: ["residential-junk-removal", "appliance-removal", "property-cleanouts"],
  },
  {
    slug: "appliance-removal",
    name: "Appliance Removal",
    shortName: "Appliances",
    metaTitle: "Appliance Removal & Recycling in Fort Worth, TX",
    metaDescription:
      "Washer, dryer, fridge, or freezer removal in Fort Worth. Safe disconnect-ready hauling and responsible appliance recycling. Call McGruder at (682) 226-8352.",
    image: "/images/card-appliance.png",
    card: "Washers, fridges, couches, and anything too heavy to move alone. We do the lifting and the eco-friendly disposal.",
    intro: [
      "Old appliances are the worst kind of junk — a dead refrigerator or washing machine is a couple hundred pounds of metal you can't carry, can't trash, and in many cases can't legally dump. McGruder Junk Removal picks up appliances from anywhere in your Fort Worth home and makes sure they're recycled the right way.",
      "We haul refrigerators, freezers, washers, dryers, dishwashers, stoves, water heaters, and window units. If it plugs in or hooks up and it's dead weight, we'll take it.",
    ],
    takeTitle: "Appliances We Remove",
    takeItems: [
      "Refrigerators & freezers",
      "Washers & dryers",
      "Dishwashers",
      "Stoves, ovens & ranges",
      "Microwaves",
      "Water heaters",
      "Window AC units",
      "Small kitchen appliances",
      "Garbage disposals",
    ],
    bodyTitle: "Responsible Appliance Recycling",
    body: [
      "Appliances are one of the most recyclable things we haul — the steel, copper, and aluminum inside them all have a second life. We route appliances to metal recyclers rather than the landfill, and units with refrigerant (fridges, freezers, AC units) are handled through proper channels so nothing harmful vents into the air.",
      "Have the appliance disconnected from water, gas, or power before we arrive and we'll handle everything from there — including the dolly work down the stairs, through the kitchen, and onto the truck without scratching your floors.",
    ],
    faqs: [
      {
        q: "Do appliances need to be disconnected before pickup?",
        a: "Yes — please have units disconnected from power, water, and gas before we arrive. We're haulers rather than plumbers or electricians, so we don't perform disconnections, but once it's unhooked we handle all the heavy work.",
      },
      {
        q: "Can you take a fridge with freon in it?",
        a: "Yes. Refrigerant-bearing units like fridges, freezers, and AC units are hauled to facilities that reclaim the refrigerant properly — that's part of the service.",
      },
      {
        q: "Do you take appliances from upstairs or tight spaces?",
        a: "We do. Our crew brings dollies and straps and moves heavy units down stairs and through tight hallways safely — that's the part most people call us for.",
      },
    ],
    related: ["residential-junk-removal", "furniture-removal", "garage-cleanouts"],
  },
  {
    slug: "garage-cleanouts",
    name: "Garage Cleanouts",
    shortName: "Garages",
    metaTitle: "Garage Cleanout Service in Fort Worth, TX",
    metaDescription:
      "Full garage cleanouts in Fort Worth — you point, we haul, and you park inside again. Same-day service and flat pricing from McGruder: (682) 226-8352.",
    image: "/images/card-residential.png",
    card: "From floor-to-ceiling clutter to a garage you can park in again — we sort, haul, and sweep it clean in one visit.",
    intro: [
      "Every garage in Texas eventually becomes a storage unit — boxes from two moves ago, a broken mower, paint cans, that treadmill. Then one August you realize your truck bakes in the driveway while your junk enjoys the shade. A McGruder garage cleanout fixes that in a single morning.",
      "You stand in the driveway and point: keep, toss, donate. Our crew does every bit of the sorting, hauling, and loading — then sweeps the slab so the space is genuinely done, not just emptier.",
    ],
    takeTitle: "What Comes Out of Garages",
    takeItems: [
      "Boxes of stored clutter",
      "Broken tools & equipment",
      "Old bikes & sports gear",
      "Lawn mowers & yard tools",
      "Scrap wood & leftover materials",
      "Shelving & workbenches",
      "Tires (ask us first)",
      "Holiday decorations",
      "General bagged junk",
    ],
    bodyTitle: "One Morning, Whole Garage",
    body: [
      "Most single-car garage cleanouts take our crew one to two hours; even a packed two-car garage is usually done the same morning we start. We bring the truck, the muscle, and the brooms — you bring decisions. Anything you want donated gets set aside and delivered to local charities.",
      "Garage cleanouts are also where we find the stuff that needs special handling — old paint, batteries, chemicals. We'll tell you honestly what we can haul and point you to the right Fort Worth-area disposal option for anything hazardous we can't take.",
    ],
    faqs: [
      {
        q: "How long does a garage cleanout take?",
        a: "Most garages take one to two hours. A heavily packed two-car garage might run longer, but nearly all of them are finished the same day we start.",
      },
      {
        q: "Do I have to sort everything before you come?",
        a: "No. The fastest method is you standing with us and pointing — keep, toss, donate. We do all the physical sorting and hauling as we go.",
      },
      {
        q: "Can you take paint, chemicals, or propane tanks?",
        a: "Household hazardous waste like paint, chemicals, and propane needs special disposal that hauling trucks can't legally provide. We'll set those aside and point you to the proper Fort Worth drop-off, and haul everything else.",
      },
    ],
    related: ["residential-junk-removal", "property-cleanouts", "appliance-removal"],
  },
  {
    slug: "property-cleanouts",
    name: "Property Cleanouts",
    shortName: "Cleanouts",
    metaTitle: "Property & Estate Cleanouts in Fort Worth, TX",
    metaDescription:
      "Whole-property, estate, and rental cleanouts in Fort Worth. Respectful crews, donation-first sorting, and firm timelines. Call McGruder at (682) 226-8352.",
    image: "/images/card-commercial.png",
    card: "Estates, rentals, and hoarding situations cleared respectfully — full houses emptied on a firm timeline.",
    intro: [
      "Some jobs are bigger than a truckload — an inherited house that needs to be emptied before it sells, a rental left full by a tenant, a storage situation that got away from someone. Property cleanouts are the deep end of junk removal, and they're where McGruder does its best work.",
      "We clear entire houses, apartments, rentals, and estates across Fort Worth and Tarrant County — room by room, on a schedule you can plan around, with a crew that understands these situations are often stressful and personal.",
    ],
    takeTitle: "Cleanouts We Handle",
    takeItems: [
      "Estate & inherited home cleanouts",
      "Rental & eviction cleanouts",
      "Move-out cleanouts",
      "Hoarding cleanup support",
      "Foreclosure cleanouts",
      "Storage unit cleanouts",
      "Shed & outbuilding clearing",
      "Basement & attic cleanouts",
      "Whole-house downsizing",
    ],
    bodyTitle: "Respectful, Methodical, On Schedule",
    body: [
      "Estate cleanouts in particular deserve care — we work room by room, set aside anything that looks personal or valuable (photos, documents, jewelry) for the family to review, and donate usable furniture and household goods to local charities before anything is disposed of. You get an emptied, broom-swept property and the peace of mind that it was handled decently.",
      "For realtors, landlords, and property managers: we quote the whole job flat after a walkthrough, commit to a completion date, and send photos when it's done. If a listing or a turnover is waiting on us, it won't be waiting long.",
    ],
    faqs: [
      {
        q: "How much does a full house cleanout cost?",
        a: "It depends on volume — a lightly furnished house is very different from a packed one. We do a free walkthrough, give you one flat written price for the entire job, and stick to it.",
      },
      {
        q: "What happens to items that are still usable?",
        a: "Usable furniture, appliances, and household goods are donated to Fort Worth-area charities first. We can also set aside anything the family wants to keep — just walk us through it before we start.",
      },
      {
        q: "How fast can a cleanout be finished?",
        a: "Most single homes are cleared in one to two days. Tell us your deadline — closing date, lease turnover, listing date — and we'll build the schedule to beat it.",
      },
    ],
    related: ["commercial-junk-removal", "furniture-removal", "garage-cleanouts"],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
