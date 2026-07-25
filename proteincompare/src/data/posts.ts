export interface Post {
  slug: string
  title: string
  dek: string
  date: string
  tag: string
  body: string[] // paragraphs, simple for MVP
}

export const posts: Post[] = [
  {
    slug: "muscleblaze-biozyme-vs-on-gold-standard",
    title: "MuscleBlaze Biozyme vs ON Gold Standard: which is worth it in 2026",
    dek: "Two of the most-searched wheys in India, compared on the number that actually matters — price per gram of protein.",
    date: "2026-07-20",
    tag: "Comparison",
    body: [
      "Optimum Nutrition's Gold Standard has been the default recommendation in Indian gym forums for a decade, largely on brand trust. MuscleBlaze's Biozyme line has closed the formulation gap while undercutting on price.",
      "On sticker price, ON looks more expensive per kilogram. But protein-per-serving and pack size change the real number: what you pay per gram of protein actually absorbed. Biozyme currently comes out meaningfully cheaper per gram of protein, while ON edges ahead very slightly on independent lab-verified protein content in past batch tests.",
      "If budget is the constraint, Biozyme is the more defensible pick. If you want a brand with a longer independent-testing track record and don't mind paying for it, ON remains reasonable — just not the automatic best-value choice it's often treated as.",
    ],
  },
  {
    slug: "whey-vs-plant-protein-india",
    title: "Whey vs plant protein: what changes when you switch in an Indian diet",
    dek: "Most plant proteins cost more per gram of protein than whey — here's when the swap is still worth it.",
    date: "2026-07-12",
    tag: "Guide",
    body: [
      "Plant protein blends (pea + rice + hemp) typically deliver 21-24g of protein per scoop versus 24-25g for whey, at a similar or higher price point. Gram for gram, whey usually wins on pure cost efficiency.",
      "The case for plant protein isn't cost — it's dietary fit (strict vegetarian/vegan without whey's dairy-derivative status for some), digestion (some people react better to pea/rice blends), and amino acid diversity when combined with whole-food protein sources.",
      "If cost per gram of protein is the only variable you care about, whey concentrate wins. If diet constraints or digestion are the driver, the modest premium on plant protein is usually worth it.",
    ],
  },
]
