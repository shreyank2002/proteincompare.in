// Mirror of Trustified's public pass/fail database (https://www.trustified.in/passandfail).
// Entries are kept in the order published at the source, newest test first — a handful of rows
// sit slightly out of strict date order there too, and that ordering is preserved verbatim.
// Note that several products share a report URL where the lab re-tested a later batch under the
// same certificate slug.

export interface TrustifiedEntry {
  brand: string
  productName: string
  status: "Pass" | "Fail" | "Expired"
  testedBy: string
  testedDate: string // ISO format YYYY-MM-DD
  reportUrl: string
}

export const trustifiedDatabase: TrustifiedEntry[] = [
  { brand: "Cutler Nutrition", productName: "Total Iso Whey Isolate", status: "Fail", testedBy: "Eurofins", testedDate: "2026-06-20", reportUrl: "https://www.trustified.in/passandfail/cutlernutritionwhey" },
  { brand: "Nutrabay", productName: "Pea Protein Isolate", status: "Pass", testedBy: "Eurofins", testedDate: "2026-06-16", reportUrl: "https://www.trustified.in/passandfail/nutrabaypeaprotein" },
  { brand: "Alpino", productName: "Supernatural Peanut Protein", status: "Pass", testedBy: "Eurofins", testedDate: "2026-06-13", reportUrl: "https://www.trustified.in/passandfail/alpinopeanutprotein" },
  { brand: "Asitis", productName: "Soy Protein Isolate", status: "Pass", testedBy: "Eurofins", testedDate: "2026-05-27", reportUrl: "https://www.trustified.in/passandfail/asitissoyisolate" },
  { brand: "Gritzo", productName: "Supermilk 2-6 years", status: "Pass", testedBy: "Eurofins", testedDate: "2026-06-08", reportUrl: "https://www.trustified.in/passandfail/supermilk2to6years" },
  { brand: "Osoaa", productName: "Ultimate ISO Whey", status: "Pass", testedBy: "Eurofins", testedDate: "2026-05-06", reportUrl: "https://www.trustified.in/passandfail/osoaaultimatewhey" },
  { brand: "Only What's Needed", productName: "Whey Protein Concentrate", status: "Pass", testedBy: "Eurofins", testedDate: "2026-04-26", reportUrl: "https://www.trustified.in/passandfail/ownwheyprotein" },
  { brand: "Nutrabay", productName: "Yeast Protein", status: "Pass", testedBy: "Eurofins", testedDate: "2026-04-22", reportUrl: "https://www.trustified.in/passandfail/nutrabayyeastprotein" },
  { brand: "Ronnie Coleman", productName: "Pro Antium", status: "Pass", testedBy: "Eurofins", testedDate: "2026-03-21", reportUrl: "https://www.trustified.in/passandfail/ronniecoleman" },
  { brand: "Foodstrong", productName: "Grass Fed Whey", status: "Expired", testedBy: "Eurofins", testedDate: "2026-02-27", reportUrl: "https://www.trustified.in/passandfail/foodstrongwheyexpired" },
  { brand: "Gritzo", productName: "SuperMilk for Boys 13 years", status: "Pass", testedBy: "Eurofins", testedDate: "2026-02-25", reportUrl: "https://www.trustified.in/passandfail/gritzoforboys13years" },
  { brand: "Gritzo", productName: "SuperMilk for Girls 13 years", status: "Pass", testedBy: "Eurofins", testedDate: "2026-02-25", reportUrl: "https://www.trustified.in/passandfail/gritzoforgirls13years" },
  { brand: "Avvatar", productName: "Fuel Whey", status: "Pass", testedBy: "Eurofins", testedDate: "2026-02-22", reportUrl: "https://www.trustified.in/passandfail/avvatarfuelwhey" },
  { brand: "Mille", productName: "Plant Protein 25g", status: "Pass", testedBy: "Eurofins", testedDate: "2026-02-20", reportUrl: "https://www.trustified.in/passandfail/milleplantprotein25g" },
  { brand: "Mille", productName: "Plant Protein 31g", status: "Pass", testedBy: "Eurofins", testedDate: "2026-02-20", reportUrl: "https://www.trustified.in/passandfail/milleplantprotein31g" },
  { brand: "Nutrabay", productName: "Gold Hydrolyzed Pea Protein", status: "Pass", testedBy: "Eurofins", testedDate: "2026-02-11", reportUrl: "https://www.trustified.in/passandfail/nutrabaypeaprotein" },
  { brand: "Gritzo", productName: "SuperMilk for Boys", status: "Pass", testedBy: "Eurofins", testedDate: "2026-01-01", reportUrl: "https://www.trustified.in/passandfail/gritzoforboys" },
  { brand: "Gritzo", productName: "SuperMilk for Girls", status: "Pass", testedBy: "Eurofins", testedDate: "2026-01-01", reportUrl: "https://www.trustified.in/passandfail/gritzoforgirls" },
  { brand: "Nutrabox", productName: "Vegan Protein", status: "Pass", testedBy: "Eurofins", testedDate: "2025-12-17", reportUrl: "https://www.trustified.in/passandfail/nutraboxveganprotein" },
  { brand: "Muscle Dominator", productName: "Ripped Whey", status: "Fail", testedBy: "Eurofins", testedDate: "2025-12-01", reportUrl: "https://www.trustified.in/passandfail/muscledominator" },
  { brand: "Muscle Club", productName: "Whey Protein Isolate", status: "Fail", testedBy: "Eurofins", testedDate: "2025-11-20", reportUrl: "https://www.trustified.in/passandfail/muscleclubwhey" },
  { brand: "Total Nutrition", productName: "Whey Protein", status: "Fail", testedBy: "Eurofins", testedDate: "2025-11-17", reportUrl: "https://www.trustified.in/passandfail/totalnutrition" },
  { brand: "Naturaltein", productName: "Whey Protein Isoboost", status: "Pass", testedBy: "Eurofins", testedDate: "2025-11-08", reportUrl: "https://www.trustified.in/passandfail/naturalteinisoboost" },
  { brand: "Superyou", productName: "Fermented Yeast Protein", status: "Pass", testedBy: "Eurofins", testedDate: "2025-10-13", reportUrl: "https://www.trustified.in/passandfail/superyouyeastprotein" },
  { brand: "Tata 1mg", productName: "Ultra Clean Whey Protein", status: "Pass", testedBy: "Eurofins", testedDate: "2025-09-23", reportUrl: "https://www.trustified.in/passandfail/tata1mgcleanwhey" },
  { brand: "Truebasics", productName: "Clean Whey Protein", status: "Pass", testedBy: "Eurofins", testedDate: "2025-09-13", reportUrl: "https://www.trustified.in/passandfail/truebasiccleanisolate" },
  { brand: "Nutrova", productName: "Whey Protein Isolate Blend", status: "Pass", testedBy: "Eurofins", testedDate: "2025-09-06", reportUrl: "https://www.trustified.in/passandfail/nutrovaisolateblend" },
  { brand: "Explosive Whey", productName: "Elite Series Whey Protein", status: "Pass", testedBy: "Eurofins", testedDate: "2025-08-22", reportUrl: "https://www.trustified.in/passandfail/explosivewhey" },
  { brand: "ESN", productName: "Lean Whey", status: "Fail", testedBy: "Eurofins", testedDate: "2025-08-17", reportUrl: "https://www.trustified.in/passandfail/esnleanwhey" },
  { brand: "Fuelled", productName: "Whey Protein Powder", status: "Pass", testedBy: "Eurofins", testedDate: "2025-08-13", reportUrl: "https://www.trustified.in/passandfail/fuelledwheyprotein" },
  { brand: "Jan Aushadhi", productName: "100% Whey Protein", status: "Pass", testedBy: "Eurofins", testedDate: "2025-07-06", reportUrl: "https://www.trustified.in/passandfail/janaushadhiwhey" },
  { brand: "Alpino", productName: "Supernatural Peanut Protein (earlier batch)", status: "Pass", testedBy: "Eurofins", testedDate: "2025-06-22", reportUrl: "https://www.trustified.in/passandfail/alpinopeanutprotein" },
  { brand: "Nutrabox", productName: "100% Soy Isolate", status: "Pass", testedBy: "Eurofins", testedDate: "2025-06-19", reportUrl: "https://www.trustified.in/passandfail/nutraboxsoyprotein" },
  { brand: "Trubasics", productName: "Clean Whey Protein", status: "Pass", testedBy: "Eurofins", testedDate: "2025-06-15", reportUrl: "https://www.trustified.in/passandfail/cleanwheyprotein" },
  { brand: "Osoaa", productName: "Impact Whey", status: "Expired", testedBy: "Eurofins", testedDate: "2025-06-13", reportUrl: "https://www.trustified.in/passandfail/osoaaimpactwhey" },
  { brand: "Naturaltein", productName: "Max Whey Protein", status: "Pass", testedBy: "Eurofins", testedDate: "2025-06-10", reportUrl: "https://www.trustified.in/passandfail/maxwheyprotein" },
  { brand: "Muscle Gears", productName: "Advanced Whey Protein", status: "Fail", testedBy: "Eurofins", testedDate: "2025-06-04", reportUrl: "https://www.trustified.in/passandfail/musclegearswhey" },
  { brand: "XLR8", productName: "Performance Whey", status: "Pass", testedBy: "Eurofins", testedDate: "2025-05-30", reportUrl: "https://www.trustified.in/passandfail/xlr8performancewhey" },
  { brand: "XLR8", productName: "Whey Protein Isolate", status: "Pass", testedBy: "Eurofins", testedDate: "2025-05-07", reportUrl: "https://www.trustified.in/passandfail/xlr8wheyproteintest" },
  { brand: "YogaBar", productName: "ProClean Whey Protein Isolate", status: "Expired", testedBy: "Eurofins", testedDate: "2025-04-23", reportUrl: "https://www.trustified.in/passandfail/yogabarcleanwhey" },
  { brand: "Trunativ", productName: "Whey Protein Pro Blend", status: "Pass", testedBy: "Eurofins", testedDate: "2025-03-17", reportUrl: "https://www.trustified.in/passandfail/trunativwheyblendpro" },
  { brand: "Trikut", productName: "Premium Whey Protein", status: "Fail", testedBy: "Eurofins", testedDate: "2025-03-12", reportUrl: "https://www.trustified.in/passandfail/trikutwheyprotein" },
  { brand: "Muscleblaze", productName: "Biozyme Gold 100% Whey", status: "Pass", testedBy: "Eurofins", testedDate: "2025-02-24", reportUrl: "https://www.trustified.in/passandfail/biozymegoldwhey100" },
  { brand: "Avvatar", productName: "100% Performance Whey", status: "Pass", testedBy: "Eurofins", testedDate: "2025-02-21", reportUrl: "https://www.trustified.in/passandfail/avvatarperformance100" },
  { brand: "Blackbeast", productName: "Pure Gold Whey Protein", status: "Pass", testedBy: "Eurofins", testedDate: "2025-01-30", reportUrl: "https://www.trustified.in/passandfail/blackbeastwheyprotein" },
  { brand: "One Science Nutrition", productName: "Iso Gold", status: "Fail", testedBy: "TUV NORD", testedDate: "2024-12-11", reportUrl: "https://www.trustified.in/passandfail/onesciencenutrition" },
  { brand: "Gentle Beast", productName: "Multi Flavoured Whey Protein Isolate", status: "Pass", testedBy: "Eurofins", testedDate: "2024-12-04", reportUrl: "https://www.trustified.in/passandfail/gentlebeastwheyprotein" },
  { brand: "Nutrabay Gold", productName: "100% Whey Protein Isolate", status: "Pass", testedBy: "Eurofins", testedDate: "2024-11-17", reportUrl: "https://www.trustified.in/passandfail/nutrabaygoldwheyprotein" },
  { brand: "Nakpro", productName: "Impact Whey Protein", status: "Pass", testedBy: "Eurofins", testedDate: "2024-10-31", reportUrl: "https://www.trustified.in/passandfail/nakproimpactwheyprotein" },
  { brand: "Bgreen", productName: "Plant Protein", status: "Pass", testedBy: "Eurofins", testedDate: "2024-10-12", reportUrl: "https://www.trustified.in/passandfail/bgreenplantprotein" },
  { brand: "MuscleBlaze", productName: "Raw Whey Protein 80%", status: "Pass", testedBy: "Eurofins", testedDate: "2024-09-26", reportUrl: "https://www.trustified.in/passandfail/muscleblaze-raw-whey-protein-80%25" },
  { brand: "MuscleBlaze", productName: "Whey Gold 100% Whey", status: "Pass", testedBy: "Eurofins", testedDate: "2024-07-17", reportUrl: "https://www.trustified.in/passandfail/muscleblaze-whey-gold" },
  { brand: "Maxener Wellness", productName: "Whey Iso X", status: "Pass", testedBy: "Eurofins", testedDate: "2024-07-11", reportUrl: "https://www.trustified.in/passandfail/maxener-wellness-whey-iso-x" },
  { brand: "The Whole Truth", productName: "Cleanest Protein", status: "Pass", testedBy: "Eurofins", testedDate: "2023-12-17", reportUrl: "https://www.trustified.in/passandfail/the-whole-truth" },
  { brand: "Nutrabay Gold", productName: "100% Whey Protein Concentrate", status: "Pass", testedBy: "Eurofins", testedDate: "2024-07-05", reportUrl: "https://www.trustified.in/passandfail/nutrabay-gold" },
  { brand: "HealthFarm", productName: "Isopro Zero 100% Pure Whey Protein Isolate", status: "Expired", testedBy: "Eurofins", testedDate: "2024-06-23", reportUrl: "https://www.trustified.in/passandfail/healthfarm-isopro" },
  { brand: "The Whole Truth", productName: "Raw Whey Protein Isolate", status: "Pass", testedBy: "Eurofins", testedDate: "2024-06-17", reportUrl: "https://www.trustified.in/passandfail/the-whole-truth-raw-isolate" },
  { brand: "Muscleblaze", productName: "Biozyme Whey PR", status: "Pass", testedBy: "Eurofins", testedDate: "2024-05-31", reportUrl: "https://www.trustified.in/passandfail/muscleblaze-biozyme%C2%A0pr" },
  { brand: "The Whole Truth", productName: "Raw Whey Protein Concentrate", status: "Pass", testedBy: "Eurofins", testedDate: "2024-05-26", reportUrl: "https://www.trustified.in/passandfail/the-whole-truth-concentrate" },
  { brand: "Nakpro", productName: "WheyZyme", status: "Pass", testedBy: "Eurofins", testedDate: "2024-05-23", reportUrl: "https://www.trustified.in/passandfail/nakpro-wheyzyme" },
  { brand: "RUN", productName: "Muscle Whey", status: "Pass", testedBy: "Eurofins", testedDate: "2024-05-16", reportUrl: "https://www.trustified.in/passandfail/run--muscle-whey" },
  { brand: "Nakpro", productName: "Plant Protein", status: "Pass", testedBy: "Eurofins", testedDate: "2024-05-05", reportUrl: "https://www.trustified.in/passandfail/nakproplantprotein" },
  { brand: "Naturaltein", productName: "Plant Protein", status: "Pass", testedBy: "Eurofins", testedDate: "2024-05-02", reportUrl: "https://www.trustified.in/passandfail/naturaltein-plant-protein" },
  { brand: "Fuelone", productName: "Whey Iso-Max", status: "Pass", testedBy: "Eurofins", testedDate: "2024-04-25", reportUrl: "https://www.trustified.in/passandfail/fuelone" },
  { brand: "Trueforma", productName: "Prebiotic Whey", status: "Pass", testedBy: "Eurofins", testedDate: "2024-04-22", reportUrl: "https://www.trustified.in/passandfail/trueforma" },
  { brand: "Coreblaze Nutrition", productName: "Iso Core Whey", status: "Fail", testedBy: "Eurofins", testedDate: "2024-03-10", reportUrl: "https://www.trustified.in/passandfail/coreblaze-nutrition" },
  { brand: "HealthFarm", productName: "Muscle Whey", status: "Pass", testedBy: "Eurofins", testedDate: "2024-02-22", reportUrl: "https://www.trustified.in/passandfail/healthfarm-" },
  { brand: "Ripped Up Nutrition", productName: "Whey Pro", status: "Pass", testedBy: "Eurofins", testedDate: "2024-02-07", reportUrl: "https://www.trustified.in/passandfail/ripped-up-nutrition-" },
  { brand: "Wheymill", productName: "100% Whey Protein", status: "Fail", testedBy: "Eurofins", testedDate: "2024-01-04", reportUrl: "https://www.trustified.in/passandfail/wheymill" },
  { brand: "Maxener Wellness", productName: "Nitro Whey +", status: "Pass", testedBy: "Eurofins", testedDate: "2023-10-16", reportUrl: "https://www.trustified.in/passandfail/maxener-wellness-nitro-whey-%2B" },
  { brand: "XLR8", productName: "Skysolate", status: "Expired", testedBy: "Eurofins", testedDate: "2024-01-01", reportUrl: "https://www.trustified.in/passandfail/xlr8-isolate" },
  { brand: "MyPro", productName: "100% Plant Protein", status: "Fail", testedBy: "Eurofins", testedDate: "2023-12-29", reportUrl: "https://www.trustified.in/passandfail/mypro" },
  { brand: "Fuel One", productName: "Whey Max", status: "Pass", testedBy: "Eurofins", testedDate: "2023-12-08", reportUrl: "https://www.trustified.in/passandfail/fuel-one-whey-max" },
  { brand: "Amul", productName: "Whey Protein", status: "Expired", testedBy: "Eurofins", testedDate: "2023-12-07", reportUrl: "https://www.trustified.in/passandfail/amul" },
  { brand: "Musclenectar", productName: "100% Isolate Whey Protein", status: "Pass", testedBy: "Eurofins", testedDate: "2023-10-23", reportUrl: "https://www.trustified.in/passandfail/musclenectar" },
  { brand: "Maxener Wellness", productName: "Pro Whey X", status: "Pass", testedBy: "Eurofins", testedDate: "2023-11-17", reportUrl: "https://www.trustified.in/passandfail/maxener-wellness" },
  { brand: "Asitis", productName: "ATOM Whey Protein Isolate", status: "Pass", testedBy: "Eurofins", testedDate: "2023-11-11", reportUrl: "https://www.trustified.in/passandfail/asitis--whey-isolate" },
  { brand: "Naturaltein", productName: "Whey Protein Concentrate", status: "Pass", testedBy: "Eurofins", testedDate: "2023-10-06", reportUrl: "https://www.trustified.in/passandfail/naturaltein-concentrate" },
  { brand: "Getmymettle", productName: "Alpha Whey Protein", status: "Fail", testedBy: "Eurofins", testedDate: "2023-08-17", reportUrl: "https://www.trustified.in/passandfail/getmymettle" },
  { brand: "XLR8", productName: "Whey Protein Concentrate", status: "Expired", testedBy: "Eurofins", testedDate: "2023-05-30", reportUrl: "https://www.trustified.in/passandfail/xlr8" },
  { brand: "Nakpro", productName: "Whey Gold", status: "Pass", testedBy: "Eurofins", testedDate: "2023-07-23", reportUrl: "https://www.trustified.in/passandfail/nakpro-gold" },
  { brand: "Muscleblaze", productName: "Biozyme Whey Protein", status: "Pass", testedBy: "Eurofins", testedDate: "2023-07-21", reportUrl: "https://www.trustified.in/passandfail/muscleblaze" },
  { brand: "Nakpro", productName: "Nakpro Perform Whey", status: "Pass", testedBy: "Eurofins", testedDate: "2023-07-14", reportUrl: "https://www.trustified.in/passandfail/nakpro-perform-" },
  { brand: "Nutrabox", productName: "100% Whey Protein", status: "Pass", testedBy: "Eurofins", testedDate: "2023-07-10", reportUrl: "https://www.trustified.in/passandfail/nutrabox-100%25" },
  { brand: "Nutrabay", productName: "Raw Whey Concentrate", status: "Pass", testedBy: "Eurofins", testedDate: "2023-06-29", reportUrl: "https://www.trustified.in/passandfail/nutrabay" },
  { brand: "Nutrabox", productName: "100% Raw Whey Protein", status: "Pass", testedBy: "Eurofins", testedDate: "2023-06-12", reportUrl: "https://www.trustified.in/passandfail/nutrabox-raw" },
  { brand: "Naturaltein", productName: "Whey Protein Isolate", status: "Pass", testedBy: "Eurofins", testedDate: "2023-05-13", reportUrl: "https://www.trustified.in/passandfail/naturaltein-isolate" },
  { brand: "Asitis", productName: "Raw Whey Concentrate 80%", status: "Pass", testedBy: "Eurofins", testedDate: "2023-05-05", reportUrl: "https://www.trustified.in/passandfail/asitis-concentrate" },
  { brand: "Trunativ", productName: "Raw Whey Protein Isolate", status: "Expired", testedBy: "Eurofins", testedDate: "2023-04-30", reportUrl: "https://www.trustified.in/passandfail/trunativ-raw-whey-isolate" },
  { brand: "Nakpro", productName: "Whey Platinum Isolate", status: "Pass", testedBy: "Eurofins", testedDate: "2023-04-19", reportUrl: "https://www.trustified.in/passandfail/nakpro--isolate" },
  { brand: "Musclenectar", productName: "100% Whey Protein Powder", status: "Pass", testedBy: "Eurofins", testedDate: "2023-04-15", reportUrl: "https://www.trustified.in/passandfail/musclenectar-whey-blend" },
  { brand: "Asitis", productName: "Atom Whey Protein Enzyme Blend", status: "Pass", testedBy: "Eurofins", testedDate: "2023-04-12", reportUrl: "https://www.trustified.in/passandfail/asitis-atom-blend" },
  { brand: "Avvatar", productName: "Isorich", status: "Pass", testedBy: "Eurofins", testedDate: "2023-04-09", reportUrl: "https://www.trustified.in/passandfail/avvatar-isorich" },
  { brand: "Avvatar", productName: "Whey Blend", status: "Pass", testedBy: "Eurofins", testedDate: "2023-04-09", reportUrl: "https://www.trustified.in/passandfail/avvatar-blend" },
  { brand: "MuscleBlaze", productName: "Biozyme Performance Whey", status: "Pass", testedBy: "Eurofins", testedDate: "2023-03-27", reportUrl: "https://www.trustified.in/passandfail/biozyme-performance-whey" },
  { brand: "Adreno Nutraceuticals", productName: "Performance Whey Protein", status: "Fail", testedBy: "Eurofins", testedDate: "2023-02-25", reportUrl: "https://www.trustified.in/passandfail/adreno-nutraceuticals" },
  { brand: "MuscleBlaze", productName: "Biozyme Iso Zero", status: "Pass", testedBy: "Eurofins", testedDate: "2023-03-15", reportUrl: "https://www.trustified.in/passandfail/muscleblaze-iso-zero" },
  { brand: "Nutrabox", productName: "Ripped 100% Whey Isolate", status: "Pass", testedBy: "Eurofins", testedDate: "2023-03-12", reportUrl: "https://www.trustified.in/passandfail/nutrabox-ripped" },
  { brand: "Bigmuscles", productName: "Premium Gold Whey", status: "Fail", testedBy: "Eurofins", testedDate: "2023-03-03", reportUrl: "https://www.trustified.in/passandfail/bigmuscles-gold-whey" },
  { brand: "Muscle Asylum", productName: "Muscle Whey", status: "Fail", testedBy: "Eurofins", testedDate: "2023-02-25", reportUrl: "https://www.trustified.in/passandfail/muscle-asylum" },
]

// Strip everything but letters and digits — "MuscleBlaze", "Muscleblaze" and "Muscle Blaze"
// all collapse to the same key.
function compact(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "")
}

function words(s: string): string[] {
  return s.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean)
}

// Near-universal in this dataset, so they carry no signal for telling two products apart.
// "100%" survives punctuation stripping as "100".
const FILLER_WORDS = new Set(["100", "protein", "whey"])

// Comparing individual words by substring gets false positives on short ones — "iso" is inside
// "isolate". Below this length, words must match exactly.
const MIN_LOOSE_LENGTH = 4

// At least half of the shorter word-set must be present in the other before a match is credible.
const MIN_COVERAGE = 0.5

// A candidate whose overlap is proportionally small still matches if the words it shares are
// distinctive within the brand — see the ambiguity note in findTrustifiedMatch.
const MIN_DENSITY = 0.5

function meaningfulWords(s: string): string[] {
  const all = words(s)
  const kept = all.filter((w) => !FILLER_WORDS.has(w))
  // Some entries are nothing but filler ("Whey Protein"); keep their real words rather than
  // reduce them to an empty set that would match everything.
  return kept.length > 0 ? kept : all
}

function wordMatches(a: string, b: string): boolean {
  if (a === b) return true
  if (Math.min(a.length, b.length) < MIN_LOOSE_LENGTH) return false
  return a.includes(b) || b.includes(a)
}

function matchedAgainst(source: string[], target: string[]): string[] {
  return source.filter((w) => target.some((t) => wordMatches(w, t)))
}

// Brands match on the punctuation/case-stripped key, or when one brand's words are all present
// in the other ("Nutrabay" vs "Nutrabay Gold"). Whole-word containment rather than raw substring
// is what keeps "MyPro" from swallowing "MyProtein".
function brandMatches(a: string, b: string): boolean {
  if (compact(a) === compact(b)) return true
  const aw = words(a)
  const bw = words(b)
  const [shorter, longer] = aw.length <= bw.length ? [aw, bw] : [bw, aw]
  return shorter.length > 0 && shorter.every((w) => longer.includes(w))
}

/**
 * Look up a lab result for a product. Matches brand first, then product name within that brand's
 * entries by word overlap — both conditions must hold. A brand hit with no product hit returns
 * undefined rather than the brand's other results, since attributing one product's pass to a
 * different SKU is the one failure mode worth avoiding here.
 *
 * Candidates rank by coverage (share of the shorter word-set matched), then density (share of the
 * longer set matched), then recency of the test.
 */
export function findTrustifiedMatch(brand: string, productName: string): TrustifiedEntry | undefined {
  const wantWords = meaningfulWords(productName)
  if (!compact(brand) || wantWords.length === 0) return undefined

  const candidates = trustifiedDatabase
    .filter((entry) => brandMatches(entry.brand, brand))
    .map((entry) => ({ entry, entryWords: meaningfulWords(entry.productName) }))
  if (candidates.length === 0) return undefined

  // How many of this brand's products use each word. A word appearing across several SKUs
  // ("biozyme") identifies the line, not the product, so on its own it can't carry a match.
  const wordFrequency = new Map<string, number>()
  for (const { entryWords } of candidates) {
    for (const w of new Set(entryWords)) {
      wordFrequency.set(w, (wordFrequency.get(w) ?? 0) + 1)
    }
  }

  let best: TrustifiedEntry | undefined
  let bestCoverage = 0
  let bestDensity = 0

  for (const { entry, entryWords } of candidates) {
    const matchedEntryWords = matchedAgainst(entryWords, wantWords)
    const shared = Math.min(matchedEntryWords.length, matchedAgainst(wantWords, entryWords).length)
    if (shared === 0) continue

    const coverage = shared / Math.min(entryWords.length, wantWords.length)
    const density = shared / Math.max(entryWords.length, wantWords.length)
    if (coverage < MIN_COVERAGE) continue

    // A thin overlap is only trustworthy when at least one shared word is unique to this product
    // within the brand. Without this, "Biozyme Clear Whey Isolate" matches every Biozyme SKU.
    const hasDistinctiveWord = matchedEntryWords.some((w) => wordFrequency.get(w) === 1)
    if (density < MIN_DENSITY && !hasDistinctiveWord) continue

    const better =
      coverage > bestCoverage ||
      (coverage === bestCoverage && density > bestDensity) ||
      (coverage === bestCoverage && density === bestDensity && best !== undefined && entry.testedDate > best.testedDate)

    if (better) {
      best = entry
      bestCoverage = coverage
      bestDensity = density
    }
  }

  return best
}
