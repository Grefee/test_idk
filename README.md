This is Next js 14 project that should have login screen and home page, In login screen user should input this as email: test@test.com and this as password :Password123 to succesfully log in and get into app .. where user is being redirected to /hopme page where will be fetched data and displayed in grid.

Normally I would use sha256 to hash the password on frontend and send it to backend hashed where it would be hashed again with bcrypt to insert to db to have the two second layer even the first one should be handled by SSL but just to be sure..

Also after succesful login I would normally use JWT token which would be inputed to cookie to the user's browser and then I would create a middleware file which would be handling all the authorization before every request.

To run this project you need to download it.

Then open command line in root of the project and enter "npm install"

After downloading node-modules is done you can run "npm run build" and after that "npm run start" to get into build and production like version

Or you can run "npm run dev" to get into dev mode version ...


#############################################
#############################################
#############################################

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
