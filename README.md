# FitSpace - Yoga and Pilates Studio

![Events Page](./events.png)

## Description

FitSpace is a Next.js application for a yoga and Pilates studio, designed to allow users to view upcoming events and easily contact the studio.

## Key Features

- **Browse Events:** View a list of upcoming yoga and Pilates events.
- **Event Details:** See detailed information for each event.
- **Contact Form:** Contact the studio directly through an integrated form.

## Tech Stack

- Next.js
- React
- Prisma
- Tailwind CSS
- Nodemailer
- Zod

## Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Set up the database using Prisma:

    - Copy `.env.local.example` to `.env.local` and fill in the database URL.
    - Run `npx prisma migrate dev` to create the database schema.

4.  Start the development server:

    ```bash
    npm run dev
    ```

## Configuration

- **Environment Variables:**
  - `DATABASE_URL`: The URL for the SQLite database (defined in `prisma/schema.prisma`).
  - `NEXT_PUBLIC_API_URL`: The base URL for the API endpoints.

## Usage

- The application provides a landing page with an introduction and a menu of available services.
- Users can browse events on the `/events` page.
- Each event has its own detail page accessible via `/events/:eventId`.
- The `/contact` page allows users to send messages to the studio.

## API Endpoints

- `GET /api/events`: Fetches all events.
- `POST /api/events`: Creates a new event.
- `GET /api/events/:id`: Fetches a specific event.
- `PUT /api/events/:id`: Updates a specific event.
- `DELETE /api/events/:id`: Deletes a specific event.

## License

(e.g., MIT License)

## Credits

- Images from Unsplash
- Icons from Font Awesome
