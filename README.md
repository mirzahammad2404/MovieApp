# Movie Explorer

**Live demo:** https://wemovieapp.netlify.app/

![Movie Explorer screenshot](screenshot.png)

A movie browser built with React and React Router. It shows popular movies from The Movie Database (TMDB), lets you search by title, and has a separate favourites page.

## Features
- Popular movies on the home page
- Search by title
- Favourites page, with state shared through the Context API
- Loading and error states
- Responsive dark layout

## Tech stack
React 19, React Router 7, Context API, Vite, TMDB API, CSS

## Run locally
1. Get a free API key from https://www.themoviedb.org/settings/api
2. Clone the repo and install dependencies:
```bash
   npm install
```
3. Create a `.env` file in the project root:
```
   VITE_TMDB_API_KEY=your_api_key_here
```
4. Start the app:
```bash
   npm run dev
```

## Project structure
```
src/pages        Home and Favorites pages
src/components   Navbar and MovieCard
src/contexts     favourites state (Context API)
src/services     TMDB API calls
```

## What I learned
- Client-side routing with React Router
- Sharing state across pages with the Context API
- Building a search flow with loading and error states

## What I would improve next
- Save favourites between visits
- Add user accounts and a small backend, so the API key stays off the browser
- Add pagination and a movie details page
