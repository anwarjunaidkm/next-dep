This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Next.js with Tailwind CSS and Redux Toolkit
This project is built with [Next.js](https://nextjs.org/), utilizing [Tailwind CSS](https://tailwindcss.com/) for styling and [Redux Toolkit](https://redux-toolkit.js.org/) for state management. 

## Getting Started

## Installation

1. Clone the repository:
```bash
   git clone https://github.com/anwarjunaidkm/getlead.git
```
2.Navigate to the project directory:

```bash
cd getlead
```

3.Install dependencies:

```bash
 npm i
 ```



4. run the development server:

```bash
npm run dev
```

## Project Structure

The project follows a standard Next.js structure with additional configurations for Tailwind CSS and Redux Toolkit.

```plaintext
.
├── src/
│     ├── app
            ├── home/                 
            │    ├── page.jsx                       # Home page ('/home' : router)
            ├── Redux                               # Redux Toolkit store setup
            │    ├── store.jsx      
            │    ├── provide.jsx                    # React components to warp store
            │    ├── features/
            │       ├── AuthSlice                   # Redux reducers
            │       ├── BannerSlice                 # Redux reducers
            ├── page.jsx                            # Root router ( '/': login router)
      ├── Components/                               # Components
             ├── Home                               # Home Component
             ├── Login                              # Login Component
             └── ...
      ├── domain
             ├── axiosInstance.js                    # Set Base Url

├── .gitignore                                     # Git ignore file
├── tailwind.config.js                             # tailwind config file
├── package.json                                   # NPM package configuration
└── README.md                                      # Project documentation
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
