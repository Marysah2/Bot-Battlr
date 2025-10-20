# Bot Battlr

Author: Your Name

License: MIT

A small React single-page application that lets you browse a collection of bots, view bot details, enlist bots into your army, release them, and permanently discharge (delete) them from the backend JSON DB.

Table of contents
- Features
- Installation
- Running locally
- Project structure
- API endpoints
- Behavior (requirements mapping)
- Advanced features implemented
- Deployment notes

Features
- Browse all available bots (fetched from a local JSON server).
- Enlist a bot into Your Bot Army (only one enlist per class enforced).
- Release a bot from your army.
- Discharge (DELETE) a bot from the backend and remove it from the UI.
- View a bot's detailed specs in a dedicated view and enlist from there.
- Filter bots by class and sort by health, damage, or armor.

Installation
1. Clone the repository (private repository expected):

   git clone <repo-url>
   cd Bot-Battlr

2. Install dependencies:

   npm install

3. Start the JSON server backend (serves /bots on port 8001):

   npm run server

   The endpoint will be available at: http://localhost:8001/bots

4. In another terminal start the React app:

   npm start

Project scripts (in package.json)
- npm start — starts the React development server
- npm run server — starts json-server (db.json) at port 8001
- npm run build — builds a production bundle

Project structure (relevant files)
- public/index.html — single-page entry
- src/index.js — React bootstrap
- src/App.js — main app state and routing between collection and specs
- src/index.css — global styles
- src/components/
  - BotCollection.js
  - BotCard.js
  - YourBotArmy.js
  - BotSpecs.js
  - SortBar.js
- db.json — sample bots data used by json-server

API endpoints
- GET /bots — returns an array of bot objects
- DELETE /bots/:id — deletes the bot with the given id

Example bot object
{
  "id": 101,
  "name": "wHz-93",
  "health": 94,
  "damage": 20,
  "armor": 63,
  "bot_class": "Support",
  "catchphrase": "1010010101001101100011000111101",
  "avatar_url": "https://robohash.org/...png?size=300x300&set=set1"
}

Behavior (how this maps to the assignment requirements)
- Single Page Application: the app is a React SPA served from `public/index.html` and bootstrapped by `src/index.js`.
- React components: the UI is composed of multiple components (`BotCollection`, `BotCard`, `YourBotArmy`, `SortBar`, `BotSpecs`).
- Core deliverables implemented:
  - All bots render in BotCollection.
  - Click Select (or in BotSpecs, Enlist) to add a bot to YourBotArmy. A bot may only be enlisted once and only one bot per class may be enlisted.
  - Click a bot in YourBotArmy to release it (remove from army list).
  - Click the red "x" button to discharge a bot: this sends a DELETE to `DELETE /bots/:id` and removes it from both backend and UI.

Advanced features implemented
- BotSpecs show view with Enlist and Back controls.
- SortBar with class filters and sort by health/damage/armor.
- Enlist enforces only one bot per `bot_class`.

Deployment notes
- Frontend can be deployed to Netlify, Vercel, or GitHub Pages. For Netlify/Vercel, connect the repository and set the build command to `npm run build` and publish the `build` directory.
- The json-server backend is local by default. To deploy it, consider using a small Node/Express wrapper or a hosted JSON server solution (Render, Railway, or a simple Docker container) that can serve the `db.json` file and expose `/bots` to your frontend. Update the frontend fetch URL to the deployed backend base URL.

Customizations
- Replace `Author: Your Name` with your actual name.
- Update license text as needed.

If you want, I can:
- Add a deployment GitHub Actions workflow for building and deploying the frontend, or
- Prepare instructions and files for deploying the json-server backend to Render/Railway, or
- Add more sample bots to `db.json`.

Enjoy Bot Battlr!