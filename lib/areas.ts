export type Area = {
  slug: string;
  name: string;
  metaDescription: string;
  intro: string[];
  localNote: string;
  nearby: string[];
};

export const AREAS: Area[] = [
  {
    slug: "fort-worth",
    name: "Fort Worth",
    metaDescription:
      "Same-day junk removal in Fort Worth, TX. Furniture, appliances, cleanouts, and hauling with upfront pricing. Call McGruder at (682) 226-8352.",
    intro: [
      "Fort Worth is home base for McGruder Junk Removal. From historic bungalows in Fairmount to new builds out past Alliance, from TCU-area rentals to warehouses on the south side, our trucks cover every corner of the city — usually the same day you call.",
      "Whether it's a single couch on a Westside curb, a garage cleanout near the Stockyards, or a full estate cleanout in Wedgwood, you get the same deal everywhere in the city: an upfront flat price, a crew that does all the lifting, and donation-first disposal that keeps usable items out of the landfill.",
    ],
    localNote:
      "Being based in Fort Worth means no travel surcharges and honest arrival windows — when we say morning, we mean morning. We know the alleys, the one-way streets downtown, and which apartment complexes need a heads-up for truck access.",
    nearby: ["benbrook", "haltom-city", "white-settlement", "forest-hill"],
  },
  {
    slug: "arlington",
    name: "Arlington",
    metaDescription:
      "Junk removal in Arlington, TX — furniture, appliance, and full-property cleanouts with same-day service. Call McGruder Junk Removal at (682) 226-8352.",
    intro: [
      "Arlington sits right in our wheelhouse — a quick run down I-30 or I-20 puts our trucks anywhere from the entertainment district to south Arlington neighborhoods. Between the constant turnover of rentals near UT Arlington and busy family neighborhoods, Arlington keeps our crews moving every week.",
      "We handle everything here: student move-out hauls, garage cleanouts, downsizing jobs, and commercial cleanouts for businesses along the Highway 360 corridor. One call, one flat price, and your junk rides off in a green truck.",
    ],
    localNote:
      "Arlington's rental market means a lot of our work here is move-out and turnover cleanouts — landlords and property managers get priority scheduling and photo confirmation when the unit is clear.",
    nearby: ["mansfield", "kennedale", "hurst", "fort-worth"],
  },
  {
    slug: "mansfield",
    name: "Mansfield",
    metaDescription:
      "Mansfield, TX junk removal — same-day hauling for homes and businesses, flat pricing, eco-friendly disposal. Call McGruder at (682) 226-8352.",
    intro: [
      "Mansfield has grown fast, and fast-growing suburbs generate junk: renovation debris from updated kitchens, old furniture displaced by new, garages that filled up two moves ago. McGruder Junk Removal runs regular routes through Mansfield's neighborhoods, from historic downtown out to the newer developments.",
      "We're the easy button for Mansfield homeowners — text us a photo of the pile, get a straight answer on price, and it's usually gone within a day or two, often the same day.",
    ],
    localNote:
      "A lot of Mansfield calls are renovation-related — cabinet pulls, flooring tear-outs, backyard projects. We haul construction debris alongside regular junk, so one pickup clears the whole project.",
    nearby: ["arlington", "kennedale", "burleson", "everman"],
  },
  {
    slug: "burleson",
    name: "Burleson",
    metaDescription:
      "Junk removal in Burleson, TX — furniture, appliances, garage and property cleanouts hauled same-day. Call McGruder Junk Removal at (682) 226-8352.",
    intro: [
      "Burleson folks like things done straight — a fair price, a firm handshake, and no runaround. That's exactly how McGruder Junk Removal operates. From Old Town Burleson to the neighborhoods off Wilshire Boulevard, we haul furniture, appliances, and whole-garage cleanouts with one flat quoted price.",
      "Bigger properties on the edges of Burleson often come with bigger cleanups — sheds, barns, fence lines, and acreage piles. We handle those too, and we'll tell you honestly whether it's a truckload or three before we start.",
    ],
    localNote:
      "South Tarrant and north Johnson County properties often have outbuildings and acreage debris that city crews won't touch — that's normal work for us. If it's on your land and needs gone, ask.",
    nearby: ["crowley", "mansfield", "everman", "forest-hill"],
  },
  {
    slug: "crowley",
    name: "Crowley",
    metaDescription:
      "Crowley, TX junk removal with same-day service — furniture, appliances, cleanouts, and more. Flat pricing from McGruder: (682) 226-8352.",
    intro: [
      "Crowley is a quick run down the Chisholm Trail Parkway for our crews, which means same-day service is the norm here, not the exception. Old furniture, dead appliances, garage clutter, storage-shed overflow — we pull up, load up, and leave your place cleaner than we found it.",
      "We serve every Crowley neighborhood as well as the surrounding stretch of south Tarrant County, and we're happy to combine items from the house, garage, and yard into one flat-priced pickup.",
    ],
    localNote:
      "Crowley customers often bundle a whole property's worth of odds and ends into one visit — house, garage, and backyard in a single flat price. It's the most cost-effective way to use our truck.",
    nearby: ["burleson", "everman", "forest-hill", "benbrook"],
  },
  {
    slug: "benbrook",
    name: "Benbrook",
    metaDescription:
      "Junk removal in Benbrook, TX — same-day hauling, upfront pricing, donation-first disposal. Call McGruder Junk Removal at (682) 226-8352.",
    intro: [
      "Tucked against Benbrook Lake on Fort Worth's southwest side, Benbrook is minutes from our home turf. We handle everything from single-item pickups — that couch that never sold online — to full garage and estate cleanouts across Benbrook's established neighborhoods.",
      "Downsizing is a common call here: decades in the same house means decades of accumulation, and our crew clears it respectfully, donates what's usable, and hauls the rest without you touching a thing.",
    ],
    localNote:
      "For longtime Benbrook homeowners downsizing or clearing a family property, we set aside anything personal we find and donate usable furniture locally before anything heads to disposal.",
    nearby: ["white-settlement", "fort-worth", "crowley", "lake-worth"],
  },
  {
    slug: "keller",
    name: "Keller",
    metaDescription:
      "Keller, TX junk removal — furniture, appliance, and garage cleanout service with flat pricing. Call McGruder Junk Removal at (682) 226-8352.",
    intro: [
      "Keller homes are kept sharp, and a pile of junk in the garage or side yard sticks out fast. McGruder Junk Removal keeps it simple for Keller homeowners: point at what goes, approve a flat price, and watch it disappear — usually the same day or the next.",
      "From neighborhoods around Keller Town Center to properties out toward Bear Creek, we haul furniture, appliances, playsets, hot tubs, and renovation debris with a uniformed, insured crew that treats your home like it costs what Keller homes cost.",
    ],
    localNote:
      "HOA notice about a junk pile? Send us a photo — we can usually clear it before the follow-up letter goes out.",
    nearby: ["watauga", "saginaw", "north-richland-hills", "haltom-city"],
  },
  {
    slug: "saginaw",
    name: "Saginaw",
    metaDescription:
      "Junk removal in Saginaw, TX — same-day pickups for furniture, appliances, and cleanouts. Flat pricing from McGruder: (682) 226-8352.",
    intro: [
      "Saginaw sits just north of Fort Worth, which puts it minutes from our trucks. Homeowners here call us for the classic lineup: worn-out furniture, dead washers and dryers, garages that need a reset, and backyard debris after a project or a storm.",
      "You'll get a flat price before we load, a crew that does all the lifting, and a clean-swept space when we pull away. Most Saginaw pickups fit into a same-day or next-day window.",
    ],
    localNote:
      "Storm cleanup is a real thing on this side of the county — after high winds roll through, we haul fence sections, limbs, and damaged patio gear so your yard recovers fast.",
    nearby: ["lake-worth", "keller", "watauga", "fort-worth"],
  },
  {
    slug: "haltom-city",
    name: "Haltom City",
    metaDescription:
      "Haltom City, TX junk removal — furniture, appliances, and property cleanouts hauled fast. Call McGruder Junk Removal at (682) 226-8352.",
    intro: [
      "Haltom City is one of the closest communities to our Fort Worth base, so our trucks are practically neighbors. We serve homeowners, renters, and the many family businesses along Denton Highway with the same straightforward deal: upfront flat pricing and same-day hauling when you need it.",
      "Older neighborhoods mean older garages, sheds, and accumulated decades of stuff — exactly the kind of cleanouts our crew does daily. We donate what's usable and recycle what we can.",
    ],
    localNote:
      "We do a steady business with Haltom City landlords turning over units — if you manage property here, save our number for fast turnover cleanouts with photo confirmation.",
    nearby: ["north-richland-hills", "watauga", "fort-worth", "hurst"],
  },
  {
    slug: "north-richland-hills",
    name: "North Richland Hills",
    metaDescription:
      "Junk removal in North Richland Hills, TX — same-day furniture, appliance, and cleanout service. Call McGruder at (682) 226-8352.",
    intro: [
      "North Richland Hills is one of the biggest cities in northeast Tarrant County, and it keeps our crews busy — furniture upgrades, appliance swaps, garage cleanouts, and estate jobs across every neighborhood from Iron Horse to home developments near NRH2O.",
      "NRH homeowners get our full playbook: flat pricing approved before we lift, donation-first sorting, and crews that sweep up behind themselves. Most jobs are done within a day of your call.",
    ],
    localNote:
      "Remodels are big in NRH's established neighborhoods — we regularly haul cabinet tear-outs, old flooring, and fixture debris so your contractor can keep moving.",
    nearby: ["watauga", "hurst", "haltom-city", "keller"],
  },
  {
    slug: "white-settlement",
    name: "White Settlement",
    metaDescription:
      "White Settlement, TX junk removal — fast, flat-priced hauling for homes and businesses. Call McGruder Junk Removal at (682) 226-8352.",
    intro: [
      "On Fort Worth's west side, White Settlement is minutes from our routes, and we treat it like the neighbor it is. Furniture, appliances, garage clutter, shed cleanouts — one call and it's handled with a flat price you approve before anything moves.",
      "We work with homeowners, renters, and landlords across White Settlement, and we're used to tight driveways and alley access — our crew figures out the logistics so you don't have to.",
    ],
    localNote:
      "Plenty of White Settlement homes have back-alley access — our crews load from the alley all the time, which keeps the mess off your street entirely.",
    nearby: ["benbrook", "lake-worth", "fort-worth", "azle"],
  },
  {
    slug: "forest-hill",
    name: "Forest Hill",
    metaDescription:
      "Junk removal in Forest Hill, TX — same-day pickups, flat pricing, respectful crews. Call McGruder Junk Removal at (682) 226-8352.",
    intro: [
      "Forest Hill sits just southeast of Fort Worth, which means our trucks pass through constantly — and same-day pickups are usually easy to schedule. We haul furniture, mattresses, appliances, and whole-property cleanouts for homeowners and landlords alike.",
      "No job is too small here: a single armchair on the curb gets the same on-time crew and honest price as a full estate cleanout.",
    ],
    localNote:
      "Single-item pickups are welcome in Forest Hill — if it's just one couch or one fridge, tell us and we'll fold you into a nearby route for the best price.",
    nearby: ["everman", "kennedale", "fort-worth", "crowley"],
  },
  {
    slug: "kennedale",
    name: "Kennedale",
    metaDescription:
      "Kennedale, TX junk removal — furniture, appliances, and cleanouts hauled with upfront pricing. Call McGruder at (682) 226-8352.",
    intro: [
      "Kennedale keeps it small-town, and so do we — a straight price, a firm arrival window, and a crew that works hard and says yes ma'am. From neighborhoods off Kennedale Parkway to properties with a little acreage, we haul whatever needs gone.",
      "Furniture, appliances, shop cleanouts, trailer loads of accumulated stuff — Kennedale jobs get the same donation-first handling as everywhere else we work.",
    ],
    localNote:
      "Got a shop or barn that's become a catch-all? Kennedale has plenty — clearing them out is some of our favorite work, and we'll quote the whole building flat.",
    nearby: ["arlington", "mansfield", "forest-hill", "everman"],
  },
  {
    slug: "everman",
    name: "Everman",
    metaDescription:
      "Junk removal in Everman, TX — fast flat-priced hauling for furniture, appliances, and cleanouts. Call McGruder Junk Removal at (682) 226-8352.",
    intro: [
      "Everman is a small city with quick access from our south Fort Worth routes, so pickups here schedule fast. We handle household junk, furniture, appliances, and yard debris for homeowners across Everman's neighborhoods.",
      "The process is the same simple deal everywhere: show us the junk, approve the flat price, and consider it gone — donated or recycled first whenever possible.",
    ],
    localNote:
      "Everman pickups often ride along with our Forest Hill and south Fort Worth routes, which keeps arrival windows tight and prices low for smaller loads.",
    nearby: ["forest-hill", "crowley", "burleson", "kennedale"],
  },
  {
    slug: "watauga",
    name: "Watauga",
    metaDescription:
      "Watauga, TX junk removal — same-day furniture and appliance hauling with flat pricing. Call McGruder Junk Removal at (682) 226-8352.",
    intro: [
      "Compact and busy, Watauga generates the everyday junk calls we're built for: a fridge that died, a sectional that didn't fit, a garage that finally hit capacity. Our crews cover Watauga on regular northeast Tarrant routes, so scheduling is fast.",
      "Every Watauga job gets a flat price before we lift a finger, careful crews who respect tight garage-and-driveway setups, and eco-friendly disposal on the back end.",
    ],
    localNote:
      "Watauga's compact lots mean junk piles show up fast in a driveway — we can usually fold a small pickup into a same-day route through the area.",
    nearby: ["north-richland-hills", "haltom-city", "keller", "saginaw"],
  },
  {
    slug: "hurst",
    name: "Hurst",
    metaDescription:
      "Junk removal in Hurst, TX — furniture, appliance, and cleanout service for the HEB area. Call McGruder Junk Removal at (682) 226-8352.",
    intro: [
      "Right in the heart of the HEB area, Hurst is steady territory for our crews. Homeowners call us for furniture and appliance hauls; businesses near North East Mall and along the Highway 26 corridor call for office and retail cleanouts.",
      "Whatever the job, Hurst customers get one flat quoted price, an on-time uniformed crew, and a broom-swept space when we're done.",
    ],
    localNote:
      "For HEB-area businesses, we schedule before-open and after-close pickups so a cleanout never costs you customers.",
    nearby: ["euless", "bedford", "north-richland-hills", "haltom-city"],
  },
  {
    slug: "euless",
    name: "Euless",
    metaDescription:
      "Euless, TX junk removal — same-day hauling for homes, apartments, and businesses. Flat pricing from McGruder: (682) 226-8352.",
    intro: [
      "Euless sits in the middle of the HEB corridor with a healthy mix of family neighborhoods and apartment communities — which means move-out season keeps us busy here. We haul furniture, mattresses, and whole-apartment cleanouts, stairs included, no extra drama.",
      "Homeowners get the same service for garages, backyard debris, and appliance swaps. Flat prices, real arrival windows, donation-first disposal.",
    ],
    localNote:
      "Apartment move-outs are an Euless specialty — we carry from third-floor units all the time, and property managers get photo confirmation when a unit is cleared.",
    nearby: ["bedford", "hurst", "arlington", "north-richland-hills"],
  },
  {
    slug: "bedford",
    name: "Bedford",
    metaDescription:
      "Junk removal in Bedford, TX — furniture, appliances, and property cleanouts with upfront pricing. Call McGruder at (682) 226-8352.",
    intro: [
      "Bedford rounds out the HEB trio and rounds out our northeast Tarrant routes. Established neighborhoods here mean established garages, attics, and sheds — and when it's time to clear them, our crew does it in a morning.",
      "We also help Bedford families with downsizing and estate cleanouts, handled room by room with the care those jobs deserve, and everything usable donated locally first.",
    ],
    localNote:
      "Downsizing from a longtime Bedford home? We work at your pace, set aside anything personal we find, and donate usable items to local charities before disposal.",
    nearby: ["euless", "hurst", "north-richland-hills", "arlington"],
  },
  {
    slug: "azle",
    name: "Azle",
    metaDescription:
      "Azle, TX junk removal — hauling for homes and lake properties, flat pricing, same-day options. Call McGruder Junk Removal at (682) 226-8352.",
    intro: [
      "Out on the northwest edge of Tarrant County by Eagle Mountain Lake, Azle mixes in-town homes with lake properties and acreage — and both kinds generate junk. We haul household furniture and appliances in town, and tackle bigger property cleanups, sheds, and dock-adjacent debris out by the water.",
      "Azle jobs get planned right: we confirm access, bring the right trailer or truck for the load, and quote the whole thing flat before we start.",
    ],
    localNote:
      "Lake properties collect stuff — old dock boxes, patio furniture, shed overflow. We're happy to quote a whole-property cleanup in one visit so your weekend place stays a weekend place.",
    nearby: ["lake-worth", "saginaw", "white-settlement", "fort-worth"],
  },
  {
    slug: "lake-worth",
    name: "Lake Worth",
    metaDescription:
      "Junk removal in Lake Worth, TX — same-day hauling, flat pricing, eco-friendly disposal. Call McGruder Junk Removal at (682) 226-8352.",
    intro: [
      "Lake Worth sits minutes northwest of Fort Worth, which keeps it well inside our same-day zone. Furniture, appliances, garage cleanouts, storm debris — our crews handle the full menu for Lake Worth homeowners with one flat price per job.",
      "Being this close to home base means quick scheduling and honest arrival windows. Call in the morning and there's a good chance your junk is gone by dinner.",
    ],
    localNote:
      "Lake Worth is often our first or last stop of the day thanks to its location — grab an early or late window and your pickup can be extra fast.",
    nearby: ["saginaw", "azle", "white-settlement", "fort-worth"],
  },
];

export function getArea(slug: string): Area | undefined {
  return AREAS.find((a) => a.slug === slug);
}
