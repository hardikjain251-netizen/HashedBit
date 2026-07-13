// A single source of truth for all movie data. In a real app this
// would come from an API, but for this assignment a static array
// keeps things simple and predictable.
//
// Images are pulled from picsum.photos using a fixed "seed" per
// movie, so each poster is a different (but consistent) image.

const movies = [
  { id: 1, title: "Dhurandhar : The Revenge", genre: "Sci-Fi", duration: "128 min", description: "A crew of explorers ventures beyond the known edge of the galaxy in search of a new home for humanity." },
  { id: 2, title: "Avengers", genre: "Thriller", duration: "110 min", description: "A detective races against time to catch a killer who only strikes when the city goes quiet." },
  { id: 3, title: "Spider Man", genre: "Drama", duration: "132 min", description: "Two estranged siblings reunite on a road trip that forces them to confront their past." },
  { id: 4, title: "Toxic", genre: "Action", duration: "140 min", description: "A retired soldier is pulled back into action to protect his family from an old enemy." },
  { id: 5, title: "Evil Dead Burn", genre: "Horror", duration: "102 min", description: "A family moves into a secluded cabin, unaware of what waits for them in the woods." },
  { id: 6, title: "Dhamaal 4", genre: "Comedy", duration: "98 min", description: "A struggling comedian gets one last shot at fame on the night everything goes wrong." },
  { id: 7, title: "Welcome to the Jungle", genre: "Adventure", duration: "121 min", description: "A young sailor discovers a hidden world beneath the waves on her first solo voyage." },
  { id: 8, title: "Alpha", genre: "Action", duration: "115 min", description: "An underground street racer is recruited for one final, high-stakes heist." },
  { id: 9, title: "Rahun Mai Tere Rubaru", genre: "Romance", duration: "108 min", description: "Two rival botanists fall in love while competing for the same research grant." },
  { id: 10, title: "Satluj", genre: "Mystery", duration: "125 min", description: "A journalist investigates a decades-old disappearance in a remote mountain town." },
  { id: 11, title: "IKKA", genre: "Sci-Fi", duration: "134 min", description: "In a city run by AI, one hacker uncovers a truth that could unravel everything." },
  { id: 12, title: "Tera Yaar Hoon Main", genre: "Drama", duration: "118 min", description: "A father waits outside a hospital room, replaying the choices that led him here." },
  { id: 13, title: "Cocktail 2", genre: "Romance", duration: "112 min", description: "Two firefighters from rival stations find themselves falling for each other." },
  { id: 14, title: "Baby Do Die Do", genre: "Thriller", duration: "116 min", description: "A woman has exactly one hour to prove her innocence before the police arrive." },
  { id: 15, title: "Daadi ki Shaadi", genre: "Comedy", duration: "95 min", description: "A quirky roadside diner becomes the unlikely meeting point for four strangers' destinies." },
  { id: 16, title: "Peddi", genre: "Drama", duration: "130 min", description: "An aging film director attempts to complete his masterpiece before it's too late." },
];

export default movies;
