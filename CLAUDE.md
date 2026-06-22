# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # dev server at localhost:3000
npm run build    # production build to /build
npm test         # run tests (watch mode)
```

Deployment is automated via GitHub Actions: pushing to `master` triggers a build and deploys to Firebase Hosting (project `jpforman-007`). Pull requests deploy to a preview channel.

## Architecture

This is a Create React App (React 16) personal portfolio site with client-side routing via `react-router-dom` v4.

**Routing** is defined in `src/components/App.js`. Routes: `/` and `/aboutMe` → `AboutMe`, `/projects` → `Projects`, `/contact` → `Contact`, `/neato` → `Neato` (color toy), `/dragme` → `DragMe`.

**Dark mode** is a boolean state (`darkmode`) owned by `App`, passed down as a prop to all page components and `Header`. Page components apply a `dark` CSS class or inline styles based on this prop. The toggle exists in both `Header` (desktop) and `SideDrawer` (mobile hamburger menu).

**Layout pattern**: Page components (`AboutMe`, `Projects`, `Contact`) share a consistent structure — a `.main-container` wrapping `.title-wrapper` and a series of `.block` divs (word content + image side by side). `Footer` is imported and rendered at the bottom of each page component.

**Styling**: Mix of `.css` files (in `src/css/`) and `.scss` files (co-located with components in `src/components/`). Bootstrap 4 and Reactstrap are available but used minimally (mainly the `CustomInput` toggle switch in the nav).

**Static data**: `src/blogEntries_json.js` exports an array of blog entry objects with title, date, description, link, and image. The `Blog` component (currently not wired into any route) consumes this.

**Images**: All stored in `src/img/`. Blog images are in `src/img/blog/`.

**Navigation**: `Header.jsx` renders the desktop nav with links from a `linkList` array and passes the same array to `SideDrawer.jsx` for the mobile hamburger drawer. To add a nav link, update `linkList` in `Header.jsx` and add the corresponding route in `App.js`.
