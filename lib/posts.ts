export type PostSection = {
  h2: string;
  paras: string[];
  bullets?: string[];
};

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  intro: string[];
  sections: PostSection[];
  outro: string;
};

export const POSTS: Post[] = [
  {
    slug: "how-much-does-junk-removal-cost-in-fort-worth",
    title: "How Much Does Junk Removal Cost in Fort Worth? (2026 Pricing Guide)",
    metaTitle: "Junk Removal Cost in Fort Worth: 2026 Pricing Guide",
    metaDescription:
      "What junk removal really costs in Fort Worth — single items, half loads, full truckloads, and what changes the price. Honest numbers from a local hauler.",
    excerpt:
      "Single item? Full truckload? Here's how junk removal pricing actually works in Fort Worth, what moves the price up or down, and how to avoid overpaying.",
    date: "2026-08-24",
    readTime: "6 min read",
    image: "/images/card-residential.png",
    intro: [
      "\"So... how much is this going to cost me?\" It's the first question everyone asks, and most junk removal companies make you sit through a sales pitch to get an answer. Here's the honest version, from a crew that hauls junk in Fort Worth every day.",
      "Junk removal is almost always priced by volume — how much space your stuff takes up in the truck — not by weight or by the hour. That's good news for you, because volume is easy to estimate and hard to fudge.",
    ],
    sections: [
      {
        h2: "Typical Fort Worth Junk Removal Prices",
        paras: [
          "Every company's numbers differ a little, but around Fort Worth and Tarrant County, honest volume-based pricing generally falls into these ranges:",
        ],
        bullets: [
          "Single item (a couch, a fridge, a mattress): roughly $75–$150",
          "A few items / minimum load: roughly $100–$200",
          "Quarter truckload: roughly $150–$250",
          "Half truckload: roughly $250–$400",
          "Full truckload: roughly $450–$650",
        ],
      },
      {
        h2: "What Moves the Price Up or Down",
        paras: [
          "Volume is the main driver, but a few other factors matter. Heavy dense material like concrete, dirt, or shingles is sometimes priced differently because trucks hit their legal weight limit before they look full. Stairs and long carries usually don't change the price with a good company, but extremely difficult access might. And items that require special disposal — tires, refrigerant-bearing appliances in some cases — can carry small handling fees.",
          "The thing that should never change the price: loading the truck. Labor, loading, hauling, disposal fees, and cleanup should all be baked into one flat number. If a company quotes you a price and then starts adding line items at the truck, that's not how it's supposed to work.",
        ],
      },
      {
        h2: "How to Get an Accurate Quote Fast",
        paras: [
          "Text or send photos. Seriously — a photo of the pile is worth ten minutes of describing it on the phone. Any experienced hauler can look at a photo of your garage corner and land within a truck-fraction of the real price.",
          "Then confirm the flat price in person before anything gets loaded. A trustworthy company will look at everything, name one number, and stick to it. You should always know the exact cost before the first item leaves the ground.",
        ],
      },
      {
        h2: "Is Junk Removal Worth It vs. Hauling It Yourself?",
        paras: [
          "Do the math on a DIY dump run: truck rental or borrowing a friend's truck, gas, landfill fees at the drop-off, and most valuable of all, your Saturday and your back. For a single small load it might pencil out. For anything more — furniture, appliances, a garage's worth — a crew that loads everything, hauls it in one trip, donates the good stuff, and sweeps up is usually the better deal even before you count your time.",
        ],
      },
    ],
    outro:
      "Want a real number for your pile? Call or text McGruder Junk Removal at (682) 226-8352 with a photo and we'll give you an honest Fort Worth price in minutes — free, no obligation, no pitch.",
  },
  {
    slug: "where-to-donate-furniture-in-fort-worth",
    title: "Where to Donate Furniture in Fort Worth (And What They'll Actually Take)",
    metaTitle: "Where to Donate Furniture in Fort Worth, TX",
    metaDescription:
      "Fort Worth donation options for furniture and household goods, what condition items need to be in, and what to do with pieces nobody will take.",
    excerpt:
      "That couch is too good to trash but too heavy to deal with. Here's where to donate furniture in Fort Worth, what gets accepted, and what to do with the rest.",
    date: "2026-08-17",
    readTime: "5 min read",
    image: "/images/about.png",
    intro: [
      "Half the furniture that ends up in a landfill didn't need to go there. Somebody just didn't have a truck, a free afternoon, or a second pair of hands. If your old furniture still has life in it, Fort Worth has plenty of places that want it — here's how to actually get it there.",
    ],
    sections: [
      {
        h2: "Well-Known Donation Options Around Fort Worth",
        paras: [
          "The big established organizations all operate in the Fort Worth area, and most accept furniture in good condition:",
        ],
        bullets: [
          "Goodwill — accepts most furniture in clean, sellable condition at donation centers around Tarrant County",
          "The Salvation Army — accepts furniture and household goods; some locations offer scheduled pickup",
          "Habitat for Humanity ReStore — great for furniture, cabinets, and building materials; proceeds fund home builds",
          "Local church ministries and thrift stores — smaller operations often need furniture the most; call ahead",
        ],
      },
      {
        h2: "What Donation Centers Will (and Won't) Take",
        paras: [
          "The general rule: if you'd let a friend take it for their first apartment, it's donatable. Clean upholstery, sturdy frames, drawers that slide, no major stains or pet damage.",
          "What usually gets declined: ripped or stained upholstery, broken frames, heavily worn mattresses (many centers can't take mattresses at all for hygiene rules), particle-board pieces that wobble, and anything with animal damage. Donation centers aren't being picky to be difficult — they can only sell what someone will buy.",
        ],
      },
      {
        h2: "The Catch: Getting It There",
        paras: [
          "Here's where good intentions die: the couch weighs 150 pounds, your car is a sedan, and the donation center's pickup schedule is three weeks out. This is the exact gap a donation-first junk removal service fills.",
          "When McGruder picks up furniture in the Fort Worth area, donatable pieces get routed to local charities before anything else — you get the heavy lifting and the transport handled in one visit, and the furniture still ends up helping someone instead of filling a landfill.",
        ],
      },
      {
        h2: "What About Furniture Nobody Will Take?",
        paras: [
          "Some pieces are genuinely done — the sun-bleached sectional, the mattress after a decade of service. For those, responsible disposal means breaking them down for recycling where possible: wood, steel springs, and aluminum frames can often be diverted even when the piece as a whole can't be saved. That happens automatically when you use a hauler that recycles; it doesn't happen at the curb.",
        ],
      },
    ],
    outro:
      "Got furniture to donate but no way to move it? Call McGruder Junk Removal at (682) 226-8352 — we'll haul it, donate what's usable, and recycle what isn't. One trip, zero lifting on your end.",
  },
  {
    slug: "garage-cleanout-checklist",
    title: "The Garage Cleanout Checklist: Reclaim Your Garage in One Weekend",
    metaTitle: "Garage Cleanout Checklist — One-Weekend Plan",
    metaDescription:
      "A step-by-step garage cleanout checklist: the four-pile sorting system, what to do with hazardous items, and when to call in a hauling crew.",
    excerpt:
      "The four-pile system, the hazardous-waste gotchas, and the one-weekend plan that actually gets your car back in the garage.",
    date: "2026-08-10",
    readTime: "7 min read",
    image: "/images/hero.png",
    intro: [
      "There are two kinds of garages in Texas: the ones with cars in them, and the ones with everything else. If yours is the second kind, this checklist is the plan — the same system our crews use to clear packed garages in a morning, adapted for a DIY weekend.",
    ],
    sections: [
      {
        h2: "Before You Start: Set the Stage",
        paras: [
          "Pick a low-humidity morning and pull everything you can into the driveway — sorting in open space is ten times faster than shuffling piles around inside the garage. Grab contractor bags, a marker, and painter's tape to label zones. Give yourself a hard deadline: everything gets a decision today.",
        ],
      },
      {
        h2: "The Four-Pile System",
        paras: [
          "Every single item goes into exactly one pile. No maybes — a maybe pile is just a keep pile wearing a disguise.",
        ],
        bullets: [
          "KEEP — things you've used in the past year and have a real home for",
          "DONATE — usable items someone else would genuinely want",
          "SELL — only if it's worth real money AND you'll actually list it this week",
          "TOSS — broken, expired, duplicate, or 'someday' items whose someday never came",
        ],
      },
      {
        h2: "The Hazardous Stuff (Don't Bag These)",
        paras: [
          "Garages collect the items that can't go in regular trash: old paint, stains and solvents, pool chemicals, pesticides, motor oil, car batteries, and propane tanks. Set these aside in their own corner — they need household hazardous waste disposal, not a contractor bag. The City of Fort Worth operates an Environmental Collection Center for exactly this, and many surrounding cities host periodic collection events for residents.",
          "A good junk removal crew will haul everything else and point you to the right disposal channel for the hazardous pile — but no legitimate hauler can toss paint and chemicals in with the furniture.",
        ],
      },
      {
        h2: "Put It Back With a System",
        paras: [
          "Before the keep pile goes back in, sweep the slab and think in zones: yard gear together, tools together, holiday bins up high, kid stuff low. Wall hooks and one row of shelving typically double a garage's usable storage. The goal is simple — the car parks inside, and every category has one home.",
        ],
      },
      {
        h2: "When to Skip the DIY and Call a Crew",
        paras: [
          "If the toss-and-donate piles wouldn't fit in a pickup truck, or there's heavy stuff involved — appliances, workbenches, exercise equipment — the math changes. A crew clears in two hours what a homeowner clears in two weekends, hauls it in one trip, donates the good pieces, and sweeps before leaving. You still make the keep/toss decisions; you just skip the lifting and the landfill lines.",
        ],
      },
    ],
    outro:
      "Want the two-hour version instead of the two-weekend version? McGruder Junk Removal does full garage cleanouts across Fort Worth and Tarrant County — you point, we haul, you park inside again. Call (682) 226-8352.",
  },
  {
    slug: "junk-removal-vs-dumpster-rental",
    title: "Junk Removal vs. Dumpster Rental: Which One Do You Actually Need?",
    metaTitle: "Junk Removal vs Dumpster Rental — Which to Choose",
    metaDescription:
      "Full-service junk removal or a rented dumpster? Compare cost, effort, timelines, and which option fits cleanouts, renovations, and one-time hauls.",
    excerpt:
      "One comes with a crew, the other sits in your driveway for a week. Here's an honest comparison of cost, effort, and which jobs each one actually fits.",
    date: "2026-08-03",
    readTime: "6 min read",
    image: "/images/project-construction.png",
    intro: [
      "When there's a big pile of stuff to get rid of, you've got two real options: hire a junk removal crew that loads and hauls everything for you, or rent a dumpster and fill it yourself. People assume the dumpster is automatically cheaper. Sometimes it is — and sometimes it very much isn't. Here's the honest breakdown.",
    ],
    sections: [
      {
        h2: "How Each One Works",
        paras: [
          "Junk removal is full-service: a crew shows up, loads everything from wherever it sits — inside the house, up the stairs, out back — hauls it away the same day, and sweeps up. You never touch the junk.",
          "A dumpster rental is a container dropped in your driveway for a set period, usually a week. You do all the loading yourself, then the company hauls the container away. It's cheaper on paper because you're the labor.",
        ],
      },
      {
        h2: "When a Dumpster Wins",
        paras: ["A dumpster makes sense when the debris is created gradually and you have the labor:"],
        bullets: [
          "Multi-week renovation or construction projects producing debris daily",
          "Roofing tear-offs and demo jobs done by contractors",
          "You have a crew of helpers and genuinely enjoy the work",
          "The debris is already outside, near where the container will sit",
        ],
      },
      {
        h2: "When Junk Removal Wins",
        paras: ["Full-service removal wins when the junk already exists and you want it gone now:"],
        bullets: [
          "Furniture and appliances inside the house — a dumpster in the driveway doesn't carry your couch down the stairs",
          "One-time cleanouts: garages, estates, storage units, rental turnovers",
          "Same-day or next-day timelines — no week of a container sitting out front",
          "HOA neighborhoods where a driveway dumpster draws a violation letter",
          "Anything where your time and back are worth more than the labor savings",
        ],
      },
      {
        h2: "The Real Cost Comparison",
        paras: [
          "Around Fort Worth, a week-long dumpster rental typically runs a few hundred dollars — before overage fees for going past the weight limit, prohibited-item fees, and extra-day charges, which are where dumpster bills quietly grow. A full truckload of junk removal often lands in the same overall range, except the labor, the loading, the hauling, and the donation runs are included in the number.",
          "The honest summary: contractors producing debris for weeks should rent a dumpster. Homeowners with an existing pile of stuff — especially stuff that's inside — almost always come out ahead with full-service removal once effort and time enter the math.",
        ],
      },
    ],
    outro:
      "Still not sure which fits your project? Call McGruder Junk Removal at (682) 226-8352 and describe the job — if a dumpster genuinely suits you better, we'll tell you straight.",
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
