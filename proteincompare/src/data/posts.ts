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
    slug: "whey-concentrate-vs-isolate-vs-clear-whey-vs-plant-protein",
    title: "Whey concentrate vs isolate vs clear whey vs plant protein: what's actually different",
    dek: "Four labels, one underlying question — how much filtering you're paying for, and whether your gut or your diet actually needs it.",
    date: "2026-07-25",
    tag: "Guide",
    body: [
      "Concentrate and isolate are the same protein at different stages of filtration. Whey concentrate stops at roughly 70-80% protein by weight, which leaves a few grams of lactose and fat per serving — that residue is what makes it taste creamier and cost less. Isolate is filtered further to 90%+ protein, stripping most of the lactose (usually under 1g per serving), fat, and carbs. You are paying for removal, not for a better protein.",
      "Clear whey isolate is isolate processed to stay soluble in acidic liquid, so instead of a milkshake you get something closer to a fruit squash — translucent, thin, no dairy heaviness. That makes it genuinely useful if you gag on thick shakes, if you train in Chennai in May and cannot face 300ml of chocolate milk afterwards, or if you mix with water and juice rather than milk. The trade-offs are real though: doses tend to be smaller (20g per scoop is typical against 24-25g for standard whey), and it is the most expensive protein on this site per gram — north of ₹5 per gram against roughly ₹3 for a decent concentrate.",
      "Plant protein raises a completeness question that gets overstated. Pea protein is low in methionine and rice protein is low in lysine, which is why almost every plant product sold in India is a pea-rice blend — the blend covers the gap. Leucine still runs slightly lower than whey per scoop, so some people size plant servings a little larger. If you're vegetarian or vegan, or dairy genuinely doesn't work for you, this category exists for you. If you eat dairy fine and bought plant protein because it sounded cleaner, you're paying a premium for positioning.",
      "The practical version: if budget is the binding constraint and your digestion is fine, buy concentrate — it wins on cost per gram and nothing else about it is worse. If lactose is a problem, or you're cutting and want the carbs and fat minimal, isolate earns its premium. If you skip shakes because you hate drinking them, clear whey is worth the markup purely because you'll actually take it. If dairy is off the table, a pea-rice blend is the answer, and the premium is the cost of the constraint rather than an upgrade.",
      "None of this touches the risk that actually matters in the Indian market. Adulteration — protein spiking, overstated label claims, plain underfilling — is not specific to any category, and a ₹5,000 isolate is not automatically cleaner than a ₹2,000 concentrate. Check the specific product against Trustified's public pass/fail database or an equivalent third-party test before you buy, and check the batch date, because a certification from three years ago says nothing about the tub currently on the shelf.",
      "Pick the category that matches your constraint, then pick the cheapest product per gram of protein within that category that has current lab data behind it. That order — constraint, then testing, then price — gets you a better outcome than any amount of comparing marketing copy across brands.",
    ],
  },
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
