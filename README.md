# Frontend Assessment - 10 Minute School (Didn't make is responsive working fine only on 1920px x 1080px screen)

This is a Next.js project created for a frontend assessment. The application fetches and displays course data from the 10 Minute School API.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running with Docker

To build and run the application using Docker, use the following commands:

```bash
docker compose build
docker compose up
```

## Features

- Fetches course data from a remote API.
- Displays course details including title, description, instructors, and features.
- Language support for fetching data (English by default, can be changed with `lang` query parameter).
- Responsive design with Tailwind CSS.
- Image optimization with Next.js Image component.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation.
- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [React Feather](https://feathericons.com/) - Simply beautiful open source icons.
- [React YouTube](https://github.com/tjallingt/react-youtube) - Simple React component acting as a thin layer over the YouTube IFrame Player API.

## API

The application fetches data from the following API endpoint:

`https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course`

The API endpoint can be configured using the `NEXT_PUBLIC_API_URL` environment variable.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
