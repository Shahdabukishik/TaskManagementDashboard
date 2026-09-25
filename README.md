# TaskFlow — Task Management Dashboard

A small task management dashboard built with Next.js App Router and TypeScript.

The project demonstrates core Next.js concepts including Server Components, Client Components, Server Actions, dynamic routes, loading and error states, metadata, and TypeScript data modeling.

## Features

- Dashboard overview
- Task list
- Search tasks
- Filter tasks by status
- Create new tasks using a Server Action
- Dynamic task detail pages
- Loading UI
- Error UI
- Responsive design
- Olive and gold visual theme
- TypeScript task types
- Metadata for pages

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Next.js App Router

## Routes

| Route | Description |
| --- | --- |
| `/` | Redirects to the dashboard |
| `/dashboard` | Dashboard overview |
| `/dashboard/tasks` | Task list, search, filter, and create |
| `/dashboard/tasks/[id]` | Task details |

## Getting Started

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL

# Installation & Setup

## Install Dependencies

```bash
npm install
```

## Run the Development Server

```bash
npm run dev
```

## Open

Open the application at:

```text
http://localhost:3000
```

## Production Build

Run the production build:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

## Project Structure

```text
app/
├── actions/
│   └── tasks.ts
├── dashboard/
│   ├── tasks/
│   │   ├── [id]/
│   │   │   └── page.tsx
│   │   ├── error.tsx
│   │   ├── loading.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── AddTaskForm.tsx
├── TaskCard.tsx
└── TaskFilters.tsx

lib/
├── data.ts
└── types.ts
```

## What I Learned

### Server Components

I learned how Next.js App Router uses Server Components by default and how server-side data can be accessed without making the whole page a Client Component.

### Client Components

I used a Client Component for task search and filtering because the UI requires client-side state and event handlers.

### Server Actions

I used a Server Action to handle task creation through a form without creating a separate API route.

### Dynamic Routes

The `[id]` route demonstrates how Next.js handles dynamic segments such as `/dashboard/tasks/1`.

### Loading and Error UI

I learned how `loading.tsx` and `error.tsx` provide route-level loading and error experiences.

### TypeScript

I created explicit types for task status, priority, and the complete `Task` object instead of relying on untyped data.

### Metadata

I added route-level metadata so each page can have a meaningful title and description.

## Data Note

This project intentionally uses a local in-memory array because the assignment does not require a database.

New tasks are therefore not persistent across server restarts. A production application would use a persistent database.

## Future Improvements

Possible improvements for a production version include:

* Persistent database storage
* Authentication
* Edit and delete task functionality
* Pagination
* Server-side search and filtering
* Form validation with detailed user feedback
* Automated tests
