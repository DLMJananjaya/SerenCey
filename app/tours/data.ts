export interface TourDay {
  day: number;
  title: string;
  description: string;
  location: string;
}

export interface Hotel {
  name: string;
  location: string;
  stars: number;
  nights: number;
}

export interface Tour {
  id: number;
  slug: string;
  title: string;
  price: string;
  priceNote: string;
  duration: string;
  groupSize: string;
  description: string;
  longDescription: string;
  image: string;
  tag: string;
  sale: string;
  highlights: string[];
  hotels: Hotel[];
  itinerary: TourDay[];
  includes: string[];
  excludes: string[];
}

export const tours: Tour[] = [
  // ═══════════════════════════════════════════
  //  CLASSIC TOURS (1–4)
  // ═══════════════════════════════════════════
  {
    id: 1,
    slug: "serenity-8-days",
    title: "Serenity in Sri Lanka – 8 Days of Bliss",
    price: "550 Us $",
    priceNote: "Per person (twin sharing)",
    duration: "8 Days / 7 Nights",
    groupSize: "2–12 Travelers",
    description:
      "From ancient wonders to coastal beauty, this journey blends culture, nature, and adventure into one perfect escape.",
    longDescription:
      "Embark on an 8-day journey through the heart of Sri Lanka. From the ancient rock fortress of Sigiriya to the golden shores of the southern coast, this tour weaves together the island's most iconic experiences. Wake up to misty tea plantations, walk through sacred temples, and end your days watching fiery sunsets over the Indian Ocean.",
    image: "/tours/tour1.jpg",
    tag: "CLASSIC",
    sale: "20% OFF",
    highlights: [
      "Climb the legendary Sigiriya Rock Fortress",
      "Explore the sacred Temple of the Tooth in Kandy",
      "Scenic train ride through Ella's tea country",
      "Golden beaches of Mirissa & Unawatuna",
      "Traditional Sri Lankan cooking class",
      "Visit the Dambulla Cave Temple",
    ],
    hotels: [
      { name: "Jetwing Beach", location: "Negombo", stars: 4, nights: 1 },
      { name: "Aliya Resort & Spa", location: "Sigiriya", stars: 4, nights: 2 },
      { name: "Earl's Regency", location: "Kandy", stars: 4, nights: 1 },
      { name: "Araliya Green Hills", location: "Nuwara Eliya", stars: 4, nights: 1 },
      { name: "98 Acres Resort", location: "Ella", stars: 3, nights: 1 },
      { name: "Mirissa Hills", location: "Mirissa", stars: 3, nights: 1 },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Colombo",
        description:
          "Welcome to Sri Lanka! Airport pickup and transfer to your hotel in Negombo. Evening free to explore the coastal town, visit the fish market, and enjoy a welcome dinner by the sea.",
        location: "Negombo",
      },
      {
        day: 2,
        title: "Negombo → Sigiriya",
        description:
          "Drive north to the Cultural Triangle. Visit the Dambulla Cave Temple, a UNESCO World Heritage Site with 150 stunning Buddha statues. Continue to Sigiriya and check in to your eco-lodge.",
        location: "Sigiriya",
      },
      {
        day: 3,
        title: "Sigiriya & Polonnaruwa",
        description:
          "Early morning climb of the Sigiriya Rock Fortress — the 'Eighth Wonder of the World.' Afternoon visit to the ancient ruins of Polonnaruwa, a medieval capital with remarkably preserved structures.",
        location: "Sigiriya",
      },
      {
        day: 4,
        title: "Sigiriya → Kandy",
        description:
          "Travel to the hill capital of Kandy through a spice garden in Matale. Evening visit to the Temple of the Tooth Relic, followed by a traditional Kandyan dance performance.",
        location: "Kandy",
      },
      {
        day: 5,
        title: "Kandy → Nuwara Eliya",
        description:
          "Morning visit to the Royal Botanical Gardens. Drive to Nuwara Eliya through lush tea estates. Tour a working tea factory and learn the art of Ceylon tea. Enjoy the cool mountain air of 'Little England.'",
        location: "Nuwara Eliya",
      },
      {
        day: 6,
        title: "Nuwara Eliya → Ella",
        description:
          "Board the famous blue train for one of the world's most scenic railway journeys. Arrive in Ella and hike to Little Adam's Peak for breathtaking panoramic views. Visit the iconic Nine Arches Bridge.",
        location: "Ella",
      },
      {
        day: 7,
        title: "Ella → Mirissa",
        description:
          "Descend to the southern coast through winding mountain roads. Arrive in Mirissa, a laid-back beach town. Spend the afternoon swimming, surfing, or simply relaxing on the golden sand. Sunset cocktails on the beach.",
        location: "Mirissa",
      },
      {
        day: 8,
        title: "Departure",
        description:
          "Free morning to enjoy the beach or visit the Galle Fort (optional). Transfer to Colombo Airport for your departure. Farewell, and until next time!",
        location: "Mirissa / Colombo",
      },
    ],
    includes: [
      "Airport pickup & drop-off",
      "7 nights accommodation (3-4 star)",
      "Daily breakfast & 3 dinners",
      "Air-conditioned private vehicle",
      "English-speaking guide",
      "All entrance fees",
      "Scenic train tickets (Ella)",
      "Cooking class experience",
    ],
    excludes: [
      "International flights",
      "Travel insurance",
      "Lunches & personal expenses",
      "Tips & gratuities",
      "Visa fees",
      "Optional activities",
    ],
  },
  {
    id: 2,
    slug: "enchanting-10-days",
    title: "Enchanting Sri Lanka: 10-Day Adventures",
    price: "690 Us $",
    priceNote: "Per person (twin sharing)",
    duration: "10 Days / 9 Nights",
    groupSize: "2–10 Travelers",
    description:
      "From misty mountains to sun-kissed shores, experience the best of Sri Lanka in one epic adventure.",
    longDescription:
      "This 10-day immersive tour takes you on a grand loop around Sri Lanka's most captivating landscapes and cultural landmarks. You'll traverse ancient kingdoms, ride through emerald tea hills, spot leopards on safari, and unwind on pristine beaches. This is the definitive Sri Lankan experience.",
    image: "/tours/tour2.jpg",
    tag: "CLASSIC",
    sale: "20% OFF",
    highlights: [
      "Sunrise at Pidurangala Rock",
      "Yala National Park leopard safari",
      "Whale watching in Mirissa",
      "UNESCO Heritage sites of Galle Fort",
      "Rafting on the Kelani River",
      "Stilt fishermen of Koggala",
      "Traditional village experience in Hiriwadunna",
    ],
    hotels: [
      { name: "Jetwing Beach", location: "Negombo", stars: 4, nights: 1 },
      { name: "Ulagalla by Uga Escapes", location: "Anuradhapura", stars: 4, nights: 1 },
      { name: "Aliya Resort & Spa", location: "Sigiriya", stars: 4, nights: 2 },
      { name: "Mahaweli Reach Hotel", location: "Kandy", stars: 4, nights: 1 },
      { name: "Araliya Green Hills", location: "Nuwara Eliya", stars: 4, nights: 1 },
      { name: "98 Acres Resort", location: "Ella", stars: 3, nights: 1 },
      { name: "Cinnamon Wild Yala", location: "Yala", stars: 4, nights: 1 },
      { name: "Mirissa Hills", location: "Mirissa", stars: 3, nights: 1 },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Negombo",
        description:
          "Airport welcome and transfer to a beachfront hotel in Negombo. Take a boat ride through the Dutch Canal and explore the vibrant fish market. Welcome dinner with authentic Sri Lankan seafood.",
        location: "Negombo",
      },
      {
        day: 2,
        title: "Negombo → Anuradhapura",
        description:
          "Journey to the ancient city of Anuradhapura, the first capital of Sri Lanka. Explore sacred Bodhi Tree, massive dagobas, and the ruins of a civilization that flourished over 2,000 years ago.",
        location: "Anuradhapura",
      },
      {
        day: 3,
        title: "Anuradhapura → Sigiriya",
        description:
          "Morning visit to Mihintale, the cradle of Buddhism in Sri Lanka. Afternoon transfer to Sigiriya. Traditional village experience in Hiriwadunna — ride a bullock cart, take a catamaran across the lake, and enjoy a village lunch.",
        location: "Sigiriya",
      },
      {
        day: 4,
        title: "Sigiriya & Pidurangala",
        description:
          "Pre-dawn hike up Pidurangala Rock for a magical sunrise overlooking Sigiriya. After breakfast, climb Sigiriya Lion Rock. Afternoon visit Minneriya or Kaudulla for an elephant gathering safari.",
        location: "Sigiriya",
      },
      {
        day: 5,
        title: "Sigiriya → Kandy",
        description:
          "Drive through spice country to the royal city of Kandy. Visit a spice garden, then the Temple of the Tooth. Evening: front-row seats to a Kandyan cultural dance show. Night walk around Kandy Lake.",
        location: "Kandy",
      },
      {
        day: 6,
        title: "Kandy → Nuwara Eliya",
        description:
          "Morning white-water rafting on the Kelani River (optional). Scenic drive to Nuwara Eliya through Ramboda Falls. Tea factory tour and tasting. Evening stroll through the colonial hill town.",
        location: "Nuwara Eliya",
      },
      {
        day: 7,
        title: "Nuwara Eliya → Ella",
        description:
          "The legendary blue train to Ella — voted one of the most scenic train rides in the world. Afternoon trek to Ella Rock or Little Adam's Peak. Visit Nine Arches Bridge at sunset.",
        location: "Ella",
      },
      {
        day: 8,
        title: "Ella → Yala",
        description:
          "Morning visit to Ravana Falls and Ravana Cave. Drive south to Yala National Park. Afternoon jeep safari to spot leopards, elephants, sloth bears, crocodiles, and exotic birds.",
        location: "Yala",
      },
      {
        day: 9,
        title: "Yala → Mirissa",
        description:
          "Early morning whale watching boat tour (seasonal). Drive west along the coast, passing stilt fishermen at Koggala. Arrive in Mirissa for a relaxing beach afternoon. Sunset dinner on the sand.",
        location: "Mirissa",
      },
      {
        day: 10,
        title: "Galle & Departure",
        description:
          "Morning exploration of the UNESCO-listed Galle Fort — cobblestone streets, colonial architecture, and artisan boutiques. Transfer to Colombo Airport for your flight home.",
        location: "Galle / Colombo",
      },
    ],
    includes: [
      "Airport pickup & drop-off",
      "9 nights accommodation (3-4 star)",
      "Daily breakfast & 4 dinners",
      "Air-conditioned private vehicle",
      "English-speaking guide",
      "All entrance fees",
      "Yala safari jeep",
      "Scenic train tickets (Ella)",
      "Whale watching tour",
      "Village experience excursion",
    ],
    excludes: [
      "International flights",
      "Travel insurance",
      "Lunches & personal expenses",
      "Tips & gratuities",
      "Visa fees",
      "White-water rafting (optional add-on)",
    ],
  },
  {
    id: 3,
    slug: "enchanting-12-days",
    title: "Enchanting Sri Lanka: 12-Day Adventures",
    price: "850 Us $",
    priceNote: "Per person (twin sharing)",
    duration: "12 Days / 11 Nights",
    groupSize: "2–8 Travelers",
    description:
      "Dive into the diverse Sri Lankan Culture, set off on a Safari, Climb Sigiriya Rock & checkout the breathtaking Sceneries.",
    longDescription:
      "Our most comprehensive tour covers every corner of Sri Lanka. In 12 unforgettable days, you'll witness ancient civilizations, trek through cloud forests, ride elephants ethically at a sanctuary, go on two safaris, and discover hidden beaches far from the tourist trail. This is Sri Lanka — fully unfiltered.",
    image: "/tours/tour3.jpg",
    tag: "CLASSIC",
    sale: "20% OFF",
    highlights: [
      "Two national park safaris (Yala & Udawalawe)",
      "Elephant Transit Home visit",
      "Knuckles Mountain Range trekking",
      "Jaffna cultural immersion",
      "Trincomalee snorkeling & Pigeon Island",
      "Arugam Bay surfing",
      "Adam's Peak sunrise pilgrimage (seasonal)",
      "Galle Fort walking tour",
    ],
    hotels: [
      { name: "Shangri-La Colombo", location: "Colombo", stars: 4, nights: 1 },
      { name: "Tilko Jaffna City Hotel", location: "Jaffna", stars: 3, nights: 1 },
      { name: "Trinco Blu by Cinnamon", location: "Trincomalee", stars: 4, nights: 1 },
      { name: "Aliya Resort & Spa", location: "Sigiriya", stars: 4, nights: 2 },
      { name: "Earl's Regency", location: "Kandy", stars: 4, nights: 2 },
      { name: "Araliya Green Hills", location: "Nuwara Eliya", stars: 4, nights: 1 },
      { name: "98 Acres Resort", location: "Ella", stars: 3, nights: 1 },
      { name: "Cinnamon Wild Yala", location: "Yala", stars: 4, nights: 1 },
      { name: "Mirissa Hills", location: "Mirissa", stars: 3, nights: 1 },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Colombo",
        description:
          "Welcome to the Pearl of the Indian Ocean! Airport transfer and city tour of Colombo — visit the Gangaramaya Temple, Pettah Market, and the vibrant Independence Square. Welcome dinner at a rooftop restaurant.",
        location: "Colombo",
      },
      {
        day: 2,
        title: "Colombo → Jaffna",
        description:
          "Fly or drive north to Jaffna, the cultural capital of the Tamil north. Explore Nallur Kandaswamy Temple, Jaffna Fort, and the vibrant local food scene. Try authentic Jaffna crab curry.",
        location: "Jaffna",
      },
      {
        day: 3,
        title: "Jaffna → Trincomalee",
        description:
          "Coastal drive to Trincomalee. Visit the Koneswaram Temple perched on Swami Rock. Afternoon snorkeling trip to Pigeon Island, one of Sri Lanka's best coral reefs.",
        location: "Trincomalee",
      },
      {
        day: 4,
        title: "Trincomalee → Sigiriya",
        description:
          "Drive inland to the Cultural Triangle. Afternoon climb of Sigiriya Lion Rock. Watch the sunset paint the ancient fortress in gold. Evening at a lakeside eco-lodge.",
        location: "Sigiriya",
      },
      {
        day: 5,
        title: "Polonnaruwa & Minneriya",
        description:
          "Full day exploring the medieval ruins of Polonnaruwa by bicycle. Afternoon elephant gathering safari at Minneriya National Park — witness hundreds of elephants at the ancient reservoir.",
        location: "Sigiriya",
      },
      {
        day: 6,
        title: "Sigiriya → Kandy",
        description:
          "Scenic drive to Kandy via Dambulla Cave Temple. Visit the Temple of the Tooth and explore the bustling Kandy central market. Evening cultural dance performance.",
        location: "Kandy",
      },
      {
        day: 7,
        title: "Knuckles Mountain Range",
        description:
          "Full day trekking in the Knuckles Mountain Range — a UNESCO World Heritage site with cloud forests, waterfalls, and endemic species. Picnic lunch by a mountain stream. Return to Kandy.",
        location: "Kandy",
      },
      {
        day: 8,
        title: "Kandy → Nuwara Eliya",
        description:
          "Scenic drive through tea plantations. Visit a working tea factory and learn the 5 grades of Ceylon tea. Explore Horton Plains National Park and World's End cliff (optional early start).",
        location: "Nuwara Eliya",
      },
      {
        day: 9,
        title: "Nuwara Eliya → Ella",
        description:
          "Famous scenic train ride to Ella. Hike to Ella Rock for panoramic views of the southern plains. Visit the Nine Arches Bridge. Evening cooking class with a local family.",
        location: "Ella",
      },
      {
        day: 10,
        title: "Ella → Udawalawe → Yala",
        description:
          "Visit the Elephant Transit Home at Udawalawe, where orphaned elephants are rehabilitated. Afternoon safari at Udawalawe National Park. Continue to Yala region.",
        location: "Yala",
      },
      {
        day: 11,
        title: "Yala → South Coast",
        description:
          "Early morning leopard safari at Yala National Park. Drive along the palm-fringed southern coast to Mirissa. Afternoon free on the beach. Farewell dinner with ocean views.",
        location: "Mirissa",
      },
      {
        day: 12,
        title: "Galle & Departure",
        description:
          "Morning walking tour of Galle Fort — colonial architecture, art galleries, and seaside ramparts. Transfer to Colombo Airport. Until we meet again in paradise!",
        location: "Galle / Colombo",
      },
    ],
    includes: [
      "Airport pickup & drop-off",
      "11 nights accommodation (3-4 star)",
      "Daily breakfast & 5 dinners",
      "Air-conditioned private vehicle",
      "English-speaking guide",
      "All entrance fees",
      "Two safari jeep excursions",
      "Scenic train tickets (Ella)",
      "Pigeon Island snorkeling trip",
      "Knuckles Range guided trek",
      "Cooking class experience",
    ],
    excludes: [
      "International flights",
      "Travel insurance",
      "Lunches & personal expenses",
      "Tips & gratuities",
      "Visa fees",
      "Horton Plains early morning tour (optional)",
    ],
  },
  {
    id: 4,
    slug: "essence-8-days",
    title: "Essence of Sri Lanka – 8-Day Discovery",
    price: "550 Us $",
    priceNote: "Per person (twin sharing)",
    duration: "8 Days / 7 Nights",
    groupSize: "2–12 Travelers",
    description:
      "Explore ancient cities, scenic hills, and stunning beaches on this unforgettable island journey.",
    longDescription:
      "A perfectly paced 8-day tour designed for travelers who want the essential Sri Lankan experience without the rush. This route takes you from the cultural heartland to the hill country and down to the idyllic southern coast, with plenty of time to soak in the atmosphere at each stop.",
    image: "/tours/tour4.jpg",
    tag: "CLASSIC",
    sale: "20% OFF",
    highlights: [
      "Dambulla Cave Temple & Sigiriya",
      "Kandy's Temple of the Tooth",
      "Pedro Tea Estate tour",
      "Scenic train through tea country",
      "Galle Fort heritage walk",
      "Beach time at Bentota",
    ],
    hotels: [
      { name: "Cinnamon Grand Colombo", location: "Colombo", stars: 4, nights: 1 },
      { name: "Aliya Resort & Spa", location: "Sigiriya", stars: 4, nights: 2 },
      { name: "Earl's Regency", location: "Kandy", stars: 4, nights: 1 },
      { name: "Araliya Green Hills", location: "Nuwara Eliya", stars: 4, nights: 1 },
      { name: "Centara Ceysands", location: "Bentota", stars: 4, nights: 2 },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Colombo",
        description:
          "Airport pickup and a guided tour of Colombo's highlights — the historic Fort area, Gangaramaya Temple, and the scenic Galle Face Green promenade. Check in and relax.",
        location: "Colombo",
      },
      {
        day: 2,
        title: "Colombo → Sigiriya",
        description:
          "Drive to the Cultural Triangle. En route, visit the Dambulla Cave Temple with its ancient Buddhist murals. Arrive at your Sigiriya hotel and enjoy the sunset from the pool.",
        location: "Sigiriya",
      },
      {
        day: 3,
        title: "Sigiriya & Polonnaruwa",
        description:
          "Climb the Sigiriya Rock Fortress at sunrise for cooler temperatures and fewer crowds. Afternoon exploration of Polonnaruwa's ancient ruins — the Gal Vihara Buddha statues are a highlight.",
        location: "Sigiriya",
      },
      {
        day: 4,
        title: "Sigiriya → Kandy",
        description:
          "Scenic drive to Kandy through spice country. Stop at a spice garden in Matale. Visit the Temple of the Tooth Relic and stroll around Kandy Lake as the sun sets.",
        location: "Kandy",
      },
      {
        day: 5,
        title: "Kandy → Nuwara Eliya",
        description:
          "Visit the Royal Botanical Gardens of Peradeniya. Drive up to the cool hills of Nuwara Eliya, stopping at Pedro Tea Estate for a tour and tasting. Evening free to explore the charming hill town.",
        location: "Nuwara Eliya",
      },
      {
        day: 6,
        title: "Nuwara Eliya → South Coast",
        description:
          "Scenic train ride through the hill country (the most beautiful stretch). Descend to the southern coast and arrive at Bentota or Hikkaduwa. Relax on the beach and enjoy fresh seafood.",
        location: "Bentota",
      },
      {
        day: 7,
        title: "Galle Fort & Beach Day",
        description:
          "Morning visit to the UNESCO-listed Galle Fort — walk the ramparts, browse boutique shops, and sip coffee at a colonial cafe. Afternoon free for swimming, snorkeling, or a river safari.",
        location: "Galle / Bentota",
      },
      {
        day: 8,
        title: "Departure",
        description:
          "Leisurely morning at the beach. Transfer to Colombo Airport with a stop at a local craft shop if time permits. Farewell, Sri Lanka!",
        location: "Bentota / Colombo",
      },
    ],
    includes: [
      "Airport pickup & drop-off",
      "7 nights accommodation (3-4 star)",
      "Daily breakfast & 3 dinners",
      "Air-conditioned private vehicle",
      "English-speaking guide",
      "All entrance fees",
      "Scenic train tickets",
      "Tea estate tour & tasting",
    ],
    excludes: [
      "International flights",
      "Travel insurance",
      "Lunches & personal expenses",
      "Tips & gratuities",
      "Visa fees",
      "River safari (optional add-on)",
    ],
  },

  // ═══════════════════════════════════════════
  //  ADVENTURE TOURS (5–6)
  // ═══════════════════════════════════════════
  {
    id: 5,
    slug: "adrenaline-rush-7-days",
    title: "Adrenaline Rush – 7 Days of Thrills",
    price: "620 Us $",
    priceNote: "Per person (twin sharing)",
    duration: "7 Days / 6 Nights",
    groupSize: "2–8 Travelers",
    description:
      "White-water rafting, jungle trekking, surfing, and safaris — this is Sri Lanka at full speed for thrill-seekers.",
    longDescription:
      "Designed for adventurers who crave adrenaline. This 7-day action-packed tour throws you into the wild heart of Sri Lanka — raft the roaring Kelani River, trek through the Knuckles wilderness, surf the legendary waves of Arugam Bay, and track leopards on a dawn safari in Yala. Every day is a new rush.",
    image: "/hero/54.jpg",
    tag: "ADVENTURE",
    sale: "15% OFF",
    highlights: [
      "White-water rafting on Kelani River (Grade 3–4)",
      "Knuckles Mountain Range jungle trek",
      "Surfing at Arugam Bay",
      "Yala National Park leopard safari",
      "Ella Rock sunrise hike",
      "Zip-lining over Ella valley",
      "Camping under the stars",
    ],
    hotels: [
      { name: "Cinnamon Grand Colombo", location: "Colombo", stars: 4, nights: 1 },
      { name: "Rangala House", location: "Knuckles Range", stars: 3, nights: 1 },
      { name: "98 Acres Resort", location: "Ella", stars: 3, nights: 1 },
      { name: "Stardust Arugam Bay", location: "Arugam Bay", stars: 3, nights: 1 },
      { name: "Cinnamon Wild Yala", location: "Yala", stars: 4, nights: 1 },
      { name: "Mirissa Hills", location: "Mirissa", stars: 3, nights: 1 },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Kitulgala Rapids",
        description:
          "Airport pickup and direct transfer to Kitulgala. Afternoon white-water rafting on the Kelani River — Grade 3–4 rapids through jungle gorges. Evening campfire dinner by the river.",
        location: "Kitulgala",
      },
      {
        day: 2,
        title: "Knuckles Mountain Trek",
        description:
          "Drive to the Knuckles Mountain Range. Full-day guided trek through cloud forests, crossing streams and passing cascading waterfalls. Spot endemic birds and wildlife. Overnight in a mountain lodge.",
        location: "Knuckles Range",
      },
      {
        day: 3,
        title: "Knuckles → Ella",
        description:
          "Morning descent and drive to Ella. Afternoon zip-lining across the Ella valley at Flying Ravana. Evening free to explore Ella's laid-back cafe scene. Night hike preparation for tomorrow.",
        location: "Ella",
      },
      {
        day: 4,
        title: "Ella Rock & Arugam Bay",
        description:
          "Pre-dawn hike to Ella Rock for a spectacular sunrise over the southern plains. After breakfast, drive to Arugam Bay on the east coast. Afternoon beginner or advanced surf session.",
        location: "Arugam Bay",
      },
      {
        day: 5,
        title: "Arugam Bay → Yala",
        description:
          "Morning free for surfing or lagoon kayaking. Afternoon drive to Yala National Park. Evening game drive to spot elephants, crocodiles, and exotic birds at golden hour.",
        location: "Yala",
      },
      {
        day: 6,
        title: "Yala Safari & South Coast",
        description:
          "Dawn leopard-tracking safari through Yala — Sri Lanka's premier wildlife park. Drive to Mirissa along the coastal road. Afternoon cliff jumping at Coconut Tree Hill. Farewell bonfire dinner on the beach.",
        location: "Mirissa",
      },
      {
        day: 7,
        title: "Departure",
        description:
          "Optional early morning whale-watching boat trip (seasonal). Transfer to Colombo Airport. Take home stories that will last a lifetime!",
        location: "Mirissa / Colombo",
      },
    ],
    includes: [
      "Airport pickup & drop-off",
      "6 nights accommodation (3-4 star)",
      "Daily breakfast & 3 dinners",
      "Air-conditioned private vehicle",
      "English-speaking adventure guide",
      "White-water rafting session",
      "Knuckles guided trek",
      "Surf lesson & board rental",
      "Yala safari jeep (2 sessions)",
      "Zip-line experience",
      "All entrance fees",
    ],
    excludes: [
      "International flights",
      "Travel insurance (mandatory for adventure activities)",
      "Lunches & personal expenses",
      "Tips & gratuities",
      "Visa fees",
      "Whale watching (optional add-on)",
    ],
  },
  {
    id: 6,
    slug: "wild-sri-lanka-10-days",
    title: "Wild Sri Lanka – 10-Day Safari & Trek",
    price: "780 Us $",
    priceNote: "Per person (twin sharing)",
    duration: "10 Days / 9 Nights",
    groupSize: "2–6 Travelers",
    description:
      "Three national parks, mountain treks, whale watching, and wild camping — the ultimate wildlife and nature adventure.",
    longDescription:
      "For those who want to go deeper into Sri Lanka's untamed wilderness. Over 10 extraordinary days, you'll explore three national parks, trek through two mountain ranges, camp under star-filled skies, dive into coral reefs, and witness the majestic blue whales off the southern coast. This is nature in its rawest form.",
    image: "/hero/58.jpg",
    tag: "ADVENTURE",
    sale: "10% OFF",
    highlights: [
      "Three national park safaris (Yala, Udawalawe, Minneriya)",
      "Horton Plains & World's End trek",
      "Sinharaja Rainforest guided walk",
      "Blue whale watching in Mirissa",
      "Knuckles Range overnight trek",
      "Pigeon Island snorkeling",
      "Wild camping experience",
      "Adam's Peak pilgrimage (seasonal)",
    ],
    hotels: [
      { name: "Jetwing Beach", location: "Negombo", stars: 4, nights: 1 },
      { name: "Trinco Blu by Cinnamon", location: "Trincomalee", stars: 4, nights: 1 },
      { name: "Habarana Village by Cinnamon", location: "Habarana", stars: 4, nights: 2 },
      { name: "Rangala House", location: "Knuckles Range", stars: 3, nights: 1 },
      { name: "Heritance Tea Factory", location: "Nuwara Eliya", stars: 4, nights: 1 },
      { name: "Rainforest Edge", location: "Sinharaja", stars: 3, nights: 1 },
      { name: "Cinnamon Wild Yala", location: "Yala", stars: 4, nights: 1 },
      { name: "Anantara Peace Haven", location: "Tangalle", stars: 4, nights: 1 },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Negombo",
        description:
          "Airport welcome and transfer to Negombo. Evening visit to the Muthurajawela Wetlands for a sunset boat safari — spot monitor lizards, kingfishers, and crocodiles. Welcome dinner.",
        location: "Negombo",
      },
      {
        day: 2,
        title: "Negombo → Trincomalee",
        description:
          "Drive to the east coast. Afternoon snorkeling expedition at Pigeon Island — swim with blacktip reef sharks and sea turtles over pristine coral reefs. Sunset at Nilaveli Beach.",
        location: "Trincomalee",
      },
      {
        day: 3,
        title: "Trincomalee → Habarana",
        description:
          "Drive inland to Habarana. Afternoon jeep safari at Minneriya National Park — witness 'The Gathering,' one of Asia's greatest elephant migrations (seasonal, Jun–Oct). Evening lakeside BBQ.",
        location: "Habarana",
      },
      {
        day: 4,
        title: "Sigiriya & Village Trek",
        description:
          "Morning climb of Sigiriya Rock Fortress. Afternoon guided nature trek through the village wetlands and paddy fields. Traditional cooking demonstration and lunch with a farmer's family.",
        location: "Habarana",
      },
      {
        day: 5,
        title: "Habarana → Knuckles Range",
        description:
          "Transfer to the Knuckles Mountain Range. Full-day wilderness trek through montane cloud forests — spot purple-faced langurs, giant squirrels, and rare orchids. Overnight at a mountain eco-lodge.",
        location: "Knuckles Range",
      },
      {
        day: 6,
        title: "Knuckles → Nuwara Eliya",
        description:
          "Morning descent through tea country. Drive to Nuwara Eliya. Afternoon trek to Horton Plains National Park — walk to World's End, a 4,000-foot cliff with staggering views of the southern plains.",
        location: "Nuwara Eliya",
      },
      {
        day: 7,
        title: "Nuwara Eliya → Sinharaja",
        description:
          "Drive south to Sinharaja Rainforest, a UNESCO World Heritage Site and biodiversity hotspot. Afternoon guided rainforest walk — spot endemic birds, tree frogs, and rare insects. Night sounds walk.",
        location: "Sinharaja",
      },
      {
        day: 8,
        title: "Sinharaja → Udawalawe → Yala",
        description:
          "Morning birdwatching in Sinharaja. Drive to Udawalawe National Park for an elephant-focused safari — see herds of 50+ wild elephants. Continue to Yala region for the night.",
        location: "Yala",
      },
      {
        day: 9,
        title: "Yala Safari & Tangalle",
        description:
          "Dawn leopard safari at Yala National Park — Sri Lanka has the highest density of leopards in the world. Drive to Tangalle. Afternoon free at a secluded beach. Farewell seafood dinner.",
        location: "Tangalle",
      },
      {
        day: 10,
        title: "Whale Watching & Departure",
        description:
          "Early morning boat trip to spot blue whales and spinner dolphins off the southern coast (seasonal). Transfer to Colombo Airport. Until your next wild adventure!",
        location: "Tangalle / Colombo",
      },
    ],
    includes: [
      "Airport pickup & drop-off",
      "9 nights accommodation (3-4 star + eco-lodge)",
      "Daily breakfast & 5 dinners",
      "4WD private vehicle",
      "Specialist naturalist guide",
      "Three safari jeep excursions",
      "Pigeon Island snorkeling trip",
      "Knuckles Range guided trek",
      "Sinharaja Rainforest walk",
      "Whale watching tour",
      "All entrance fees & park permits",
    ],
    excludes: [
      "International flights",
      "Travel insurance (mandatory)",
      "Lunches & personal expenses",
      "Tips & gratuities",
      "Visa fees",
      "Photography permits at national parks",
    ],
  },

  // ═══════════════════════════════════════════
  //  LUXURY TOURS (7–8)
  // ═══════════════════════════════════════════
  {
    id: 7,
    slug: "royal-ceylon-8-days",
    title: "Royal Ceylon – 8 Days of Pure Luxury",
    price: "1,850 Us $",
    priceNote: "Per person (twin sharing)",
    duration: "8 Days / 7 Nights",
    groupSize: "2–4 Travelers",
    description:
      "Five-star resorts, private chauffeur, spa treatments, and exclusive dining — Sri Lanka's finest, curated for you.",
    longDescription:
      "Indulge in the very best Sri Lanka has to offer. Stay at the island's most prestigious 5-star properties, travel in a luxury sedan with your personal chauffeur, enjoy private guided tours with no crowds, and dine at award-winning restaurants. This is a journey designed for discerning travelers who demand nothing but excellence.",
    image: "/hero/55.jpg",
    tag: "LUXURY",
    sale: "VIP",
    highlights: [
      "5-star resort accommodation throughout",
      "Private chauffeur-driven luxury vehicle",
      "Exclusive sunrise Sigiriya experience",
      "Private tea estate tasting with master blender",
      "Couples spa at a 5-star resort",
      "Helicopter transfer option available",
      "Private candlelit beach dinner",
      "Personal photographer for half-day",
    ],
    hotels: [
      { name: "Shangri-La Colombo", location: "Colombo", stars: 5, nights: 1 },
      { name: "Water Garden Sigiriya", location: "Sigiriya", stars: 5, nights: 2 },
      { name: "Kings Pavilion Kandy", location: "Kandy", stars: 5, nights: 1 },
      { name: "Heritance Tea Factory", location: "Nuwara Eliya", stars: 5, nights: 1 },
      { name: "Cape Weligama", location: "Weligama", stars: 5, nights: 2 },
    ],
    itinerary: [
      {
        day: 1,
        title: "VIP Arrival in Colombo",
        description:
          "Fast-track airport arrival and private transfer in a luxury sedan. Check in to Shangri-La Colombo with panoramic ocean views. Evening welcome dinner at the award-winning Table One restaurant. Personal trip concierge briefing.",
        location: "Colombo",
      },
      {
        day: 2,
        title: "Colombo → Sigiriya",
        description:
          "Private chauffeur drive to Sigiriya. En route, VIP visit to Dambulla Cave Temple with a private guide (no queues). Check in to Water Garden Sigiriya — a stunning 5-star eco-resort. Afternoon at leisure by the infinity pool overlooking the rock fortress.",
        location: "Sigiriya",
      },
      {
        day: 3,
        title: "Private Sigiriya & Hot Air Balloon",
        description:
          "Optional sunrise hot air balloon ride over the Cultural Triangle (weather permitting). Private guided climb of Sigiriya Rock Fortress. Afternoon traditional Ayurvedic spa treatment at the resort. Private dinner under the stars.",
        location: "Sigiriya",
      },
      {
        day: 4,
        title: "Sigiriya → Kandy",
        description:
          "Scenic drive to Kandy via a luxury spice plantation experience with gourmet tasting. Private viewing of the Temple of the Tooth Relic. Evening private Kandyan dance performance arranged exclusively for your group.",
        location: "Kandy",
      },
      {
        day: 5,
        title: "Kandy → Tea Country",
        description:
          "Morning visit to the Royal Botanical Gardens with a botanist guide. Scenic drive to Nuwara Eliya. Stay at the Heritance Tea Factory — a converted tea factory turned luxury hotel. Private tea blending session with the estate's master blender.",
        location: "Nuwara Eliya",
      },
      {
        day: 6,
        title: "Tea Country → Weligama",
        description:
          "First-class train journey through the hill country (or helicopter transfer — ask us). Drive to the southern coast and check in to Cape Weligama — an ultra-luxury clifftop resort. Afternoon couples spa session.",
        location: "Weligama",
      },
      {
        day: 7,
        title: "Coastal Luxury Day",
        description:
          "Morning private whale watching on a chartered boat (seasonal). Afternoon private tour of Galle Fort with a historian guide, followed by cocktails at a boutique rooftop bar. Evening: private candlelit dinner on the beach with personal chef.",
        location: "Weligama / Galle",
      },
      {
        day: 8,
        title: "VIP Departure",
        description:
          "Leisurely morning by the infinity pool. Personal photographer captures your final Sri Lankan moments. Luxury transfer to Colombo Airport with fast-track departure assistance. Farewell gift package.",
        location: "Weligama / Colombo",
      },
    ],
    includes: [
      "VIP airport fast-track arrival & departure",
      "7 nights 5-star luxury accommodation",
      "Daily breakfast, 4 gourmet dinners",
      "Luxury sedan with personal chauffeur",
      "Private English-speaking guide",
      "All entrance fees (priority access)",
      "Couples spa treatment",
      "Private tea blending session",
      "Private beach dinner experience",
      "Half-day personal photographer",
      "First-class train tickets",
      "Welcome & farewell gift packages",
    ],
    excludes: [
      "International flights",
      "Travel insurance",
      "Helicopter transfers (optional upgrade)",
      "Hot air balloon ride (optional)",
      "Tips & gratuities",
      "Visa fees",
      "Personal shopping expenses",
    ],
  },
  {
    id: 8,
    slug: "honeymoon-paradise-10-days",
    title: "Honeymoon Paradise – 10 Days of Romance",
    price: "2,200 Us $",
    priceNote: "Per couple",
    duration: "10 Days / 9 Nights",
    groupSize: "2 Travelers (Private)",
    description:
      "A romantic escape through Sri Lanka's most enchanting settings — from misty mountains to private beach villas.",
    longDescription:
      "Designed exclusively for couples, this 10-day romantic getaway is the ultimate honeymoon experience. Stay in the finest boutique villas and luxury resorts, enjoy private dining under the stars, couples spa rituals, sunrise adventures, and intimate moments in the most beautiful corners of Sri Lanka. Every detail is curated to celebrate your love story.",
    image: "/hero/59.jpg",
    tag: "LUXURY",
    sale: "HONEYMOON",
    highlights: [
      "Private pool villa stays",
      "Couples Ayurvedic spa rituals",
      "Private sunset catamaran cruise",
      "Candlelit dinner in a tea plantation",
      "Sunrise hot air balloon ride",
      "Romantic Galle Fort walking tour",
      "Private cooking class for two",
      "Champagne beach picnic",
      "Personalized honeymoon photography session",
    ],
    hotels: [
      { name: "Shangri-La Colombo", location: "Colombo", stars: 5, nights: 1 },
      { name: "Water Garden Sigiriya", location: "Sigiriya", stars: 5, nights: 2 },
      { name: "Kings Pavilion Kandy", location: "Kandy", stars: 5, nights: 1 },
      { name: "Heritance Tea Factory", location: "Nuwara Eliya", stars: 5, nights: 1 },
      { name: "Ella Jungle Resort", location: "Ella", stars: 4, nights: 1 },
      { name: "Anantara Peace Haven", location: "Tangalle", stars: 5, nights: 2 },
      { name: "The Fort Bazaar", location: "Galle", stars: 5, nights: 1 },
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Paradise",
        description:
          "VIP airport arrival with flower garlands. Private transfer to Shangri-La Colombo. Room decorated with rose petals and champagne. Rooftop sunset dinner with panoramic city and ocean views.",
        location: "Colombo",
      },
      {
        day: 2,
        title: "Colombo → Sigiriya",
        description:
          "Scenic drive to the Cultural Triangle. Check in to Water Garden Sigiriya — private villa with plunge pool. Afternoon couples Ayurvedic spa treatment. Private dinner by the lotus pond.",
        location: "Sigiriya",
      },
      {
        day: 3,
        title: "Sigiriya Romance",
        description:
          "Optional sunrise hot air balloon ride over the Cultural Triangle (weather permitting). Late morning private climb of Sigiriya Rock. Afternoon at leisure — pool, spa, or nature walk. Evening private BBQ dinner under the stars.",
        location: "Sigiriya",
      },
      {
        day: 4,
        title: "Sigiriya → Kandy",
        description:
          "Drive to the royal city of Kandy. Private visit to the Temple of the Tooth. Afternoon couple's traditional Sri Lankan cooking class with a local chef. Evening walk around the illuminated Kandy Lake.",
        location: "Kandy",
      },
      {
        day: 5,
        title: "Kandy → Tea Country",
        description:
          "Morning at the Royal Botanical Gardens. Scenic drive through emerald tea estates to the Heritance Tea Factory. Private tea tasting with master blender. Candlelit dinner in the tea factory's vintage dining hall.",
        location: "Nuwara Eliya",
      },
      {
        day: 6,
        title: "Tea Country → Ella",
        description:
          "Board the first-class compartment of the scenic train to Ella. Check in to a boutique jungle retreat. Afternoon hike to Nine Arches Bridge at golden hour. Romantic dinner with valley views.",
        location: "Ella",
      },
      {
        day: 7,
        title: "Ella → Tangalle",
        description:
          "Leisurely morning at the retreat. Drive to the pristine southern coast. Check in to Anantara Peace Haven — a luxury resort on a secluded beach. Afternoon couples beach spa treatment. Sunset champagne on the clifftop.",
        location: "Tangalle",
      },
      {
        day: 8,
        title: "Beach & Ocean Day",
        description:
          "Morning private catamaran cruise along the coast with champagne brunch on board. Optional whale watching (seasonal). Afternoon champagne beach picnic on a private stretch of sand. Evening free at the resort.",
        location: "Tangalle",
      },
      {
        day: 9,
        title: "Tangalle → Galle",
        description:
          "Drive to the historic Galle Fort. Check in to The Fort Bazaar — a luxury boutique hotel inside the fort walls. Private walking tour with a historian. Afternoon browsing art galleries and jewelers. Farewell dinner at a rooftop restaurant overlooking the Indian Ocean.",
        location: "Galle",
      },
      {
        day: 10,
        title: "Farewell",
        description:
          "Morning honeymoon photography session along the Galle Fort ramparts. Leisurely brunch at the hotel. Private transfer to Colombo Airport with a personalized photo album delivered digitally within 7 days.",
        location: "Galle / Colombo",
      },
    ],
    includes: [
      "VIP airport fast-track arrival & departure",
      "9 nights luxury accommodation (4-5 star)",
      "Daily breakfast, 5 romantic dinners",
      "Luxury sedan with personal chauffeur",
      "Private English-speaking guide",
      "All entrance fees (priority access)",
      "Couples Ayurvedic spa (2 sessions)",
      "Private cooking class for two",
      "Private catamaran cruise with brunch",
      "Champagne beach picnic",
      "Honeymoon photography session",
      "First-class train tickets",
      "Rose petal room decoration & champagne on arrival",
      "Farewell gift package",
    ],
    excludes: [
      "International flights",
      "Travel insurance",
      "Hot air balloon ride (optional upgrade)",
      "Whale watching (seasonal, optional)",
      "Tips & gratuities",
      "Visa fees",
      "Personal shopping expenses",
    ],
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}

export function getTourById(id: number): Tour | undefined {
  return tours.find((t) => t.id === id);
}
