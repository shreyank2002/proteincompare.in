export interface Product {
  id: string
  brand: string
  name: string
  type: "Whey Concentrate" | "Whey Isolate" | "Plant Protein" | "Mass Gainer" | "Creatine"
  packSizeG: number
  priceINR: number
  servingG: number
  proteinPerServingG: number
  sugarPerServingG: number
  flavor: string
  diet: "Veg" | "Non-Veg friendly"
  thirdPartyTested: boolean
  affiliateUrl: string
  notes: string
}

// pricePerGramProtein = priceINR / (packSizeG / servingG) / proteinPerServingG
export function pricePerGramProtein(p: Product): number {
  const servingsPerPack = p.packSizeG / p.servingG
  const proteinPerPack = servingsPerPack * p.proteinPerServingG
  return p.priceINR / proteinPerPack
}

export const products: Product[] = [
  {
    id: "on-gold-standard",
    brand: "Optimum Nutrition",
    name: "Gold Standard 100% Whey",
    type: "Whey Isolate",
    packSizeG: 2270,
    priceINR: 6999,
    servingG: 30.4,
    proteinPerServingG: 24,
    sugarPerServingG: 1,
    flavor: "Double Rich Chocolate",
    diet: "Non-Veg friendly",
    thirdPartyTested: true,
    affiliateUrl: "#",
    notes: "Blend of isolate/concentrate/peptides, not a pure isolate despite branding.",
  },
  {
    id: "muscleblaze-biozyme",
    brand: "MuscleBlaze",
    name: "Biozyme Performance Whey",
    type: "Whey Concentrate",
    packSizeG: 2000,
    priceINR: 4499,
    servingG: 34,
    proteinPerServingG: 25,
    sugarPerServingG: 2,
    flavor: "Rich Milk Chocolate",
    diet: "Non-Veg friendly",
    thirdPartyTested: true,
    affiliateUrl: "#",
    notes: "Added digestive enzyme blend; strong price-per-gram-protein for the Indian market.",
  },
  {
    id: "avvatar-whey-gold",
    brand: "Avvatar",
    name: "Whey Gold",
    type: "Whey Concentrate",
    packSizeG: 1000,
    priceINR: 2099,
    servingG: 32,
    proteinPerServingG: 24,
    sugarPerServingG: 1.5,
    flavor: "Cafe Mocha",
    diet: "Non-Veg friendly",
    thirdPartyTested: false,
    affiliateUrl: "#",
    notes: "Newer D2C brand, aggressive pricing, no third-party lab certificate published.",
  },
  {
    id: "isopure-zero-carb",
    brand: "Isopure",
    name: "Zero Carb Whey Protein Isolate",
    type: "Whey Isolate",
    packSizeG: 1362,
    priceINR: 8299,
    servingG: 31,
    proteinPerServingG: 25,
    sugarPerServingG: 0,
    flavor: "Dutch Chocolate",
    diet: "Non-Veg friendly",
    thirdPartyTested: true,
    affiliateUrl: "#",
    notes: "True isolate, zero sugar/carb/fat per serving; premium pricing.",
  },
  {
    id: "myprotein-impact-plant",
    brand: "MyProtein",
    name: "Impact Plant Protein",
    type: "Plant Protein",
    packSizeG: 1000,
    priceINR: 3199,
    servingG: 30,
    proteinPerServingG: 21,
    sugarPerServingG: 0.5,
    flavor: "Chocolate Smooth",
    diet: "Veg",
    thirdPartyTested: true,
    affiliateUrl: "#",
    notes: "Pea/hemp/rice blend; lower protein-per-scoop than whey so cost-per-gram runs higher.",
  },
  {
    id: "yogabar-plant-protein",
    brand: "Yogabar",
    name: "100% Plant Protein",
    type: "Plant Protein",
    packSizeG: 1000,
    priceINR: 1899,
    servingG: 34,
    proteinPerServingG: 24,
    sugarPerServingG: 1,
    flavor: "Chocolate",
    diet: "Veg",
    thirdPartyTested: false,
    affiliateUrl: "#",
    notes: "Pea + brown rice blend, one of the cheaper veg options with decent protein per scoop.",
  },
]
