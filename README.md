# Portfolio Website

Personal portfolio built with React, Vite, and Tailwind CSS.  
It includes animated sections for hero, about, projects, experience timeline, teamwork flip cards, testimonials, and contact.

## Tech Stack

- `React` + `Vite`
- `Tailwind CSS`
- `EmailJS` for contact form delivery
- `lucide-react` icons

## Project Structure

```txt
src/
  components/    # reusable UI pieces (Button, SectionHeader, etc.)
  layout/        # Navbar, Footer
  sections/      # page sections (Hero, About, Projects, Experience, Teamwork, Testimonials, Contact)
  data/          # static data helpers
  App.jsx        # page composition and global reveal-on-scroll setup
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - start local dev server
- `npm run build` - create production build in `dist/`
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## Contact Form Setup (EmailJS)

Create a `.env` file in the project root and add:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Restart the dev server after updating environment variables.

## Notes

- Theme is persisted with `localStorage` (`light` / `dark`).
- Scroll reveal animations are handled via `IntersectionObserver` in `App.jsx`.
