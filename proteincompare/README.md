# proteincompare.in

Custom-built (React + Vite + Tailwind v4) comparison + blog site for Indian protein/supplement products.

## Stack
- React + TypeScript + Vite
- Tailwind v4 (via @tailwindcss/vite, tokens in src/index.css)
- react-router-dom for routing
- No backend yet — product/post data lives in src/data as typed arrays. Swap for Supabase later exactly like bhavdesk if you want a CMS/admin flow.

## Structure
- `src/data/products.ts` — product dataset + `pricePerGramProtein()`, the core value metric
- `src/data/posts.ts` — blog posts (plain objects for now; swap to markdown/MDX later)
- `src/components/CompareTable.tsx` — filterable/sortable comparison table
- `src/components/ValueGauge.tsx` — the site's signature visual, a cost-per-gram bar
- `src/pages/` — Home, BlogList, BlogPost

## Run locally
```
npm install
npm run dev
```

## Deploy (Cloudflare Pages, same as bhavdesk)
```
npm run build
```
Push to a GitHub repo, connect it in Cloudflare Pages:
- Build command: `npm run build`
- Output directory: `dist`
- Point proteincompare.in's DNS to the Pages project (CNAME) in Cloudflare.

## Next steps to make this real
1. Replace `affiliateUrl: "#"` with real Amazon Associates / brand affiliate links per product.
2. Verify every `proteinPerServingG` / `priceINR` against the actual current label — these are illustrative placeholders.
3. Add more products (aim for 15-20 across whey/isolate/plant/mass gainer to make comparisons useful).
4. Move blog posts to markdown files + a simple loader once you're writing regularly (current inline-array approach is fine until then).
5. Add AdSense once there's traffic; don't block on it.
