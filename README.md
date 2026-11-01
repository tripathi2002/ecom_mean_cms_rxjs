# ecom_mean_cms_rxjs

Early-stage workspace for a MEAN-stack e-commerce site with a CMS, using RxJS for reactive data flow. The repo currently contains the Angular frontend scaffold in `angular-sass-cms-rxjs-more/`; the backend and CMS have not been added yet.

## Current status

- Angular 18 standalone app with SCSS and server-side rendering (`@angular/ssr` + Express `server.ts`)
- Routes file is empty: no pages or features are implemented yet
- `full-guid.txt` documents the Git/SSH setup used for this repo

## Tech stack

Angular 18 · TypeScript · SCSS · RxJS · Angular SSR · Express

## Project structure

```
angular-sass-cms-rxjs-more/
  src/app/        # root component, app.config(.server).ts, app.routes.ts
  src/main.ts     # browser bootstrap
  src/main.server.ts
  server.ts       # Express SSR server
full-guid.txt     # setup notes
```

## Getting started

```bash
cd angular-sass-cms-rxjs-more
npm install
npm start                     # ng serve → http://localhost:4200
npm run build
npm run serve:ssr:angular-sass-cms-rxjs-more   # run SSR build
```

## Environment variables

None used yet.

## Roadmap

Node.js/Express + MongoDB API, CMS for product content, and storefront pages.
## Screenshots

_Screenshots coming soon._

## License

No license file has been added to this repository yet.
