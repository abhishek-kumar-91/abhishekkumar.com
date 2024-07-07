import React from 'react'

function Projects() {

  const products = [
    {
      id: 1,
      name: 'Twitter Clone',
      href: 'https://github.com/abhishek-kumar-91/twitterClone',
      imageSrc: './twitter.png',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'ReactJS, Nodejs, Redux-toolkit, ExpressJS, MongoDB, TailwindCSS',
    },
    {
      id: 2,
      name: 'Mystery Message | Stay Anonymous',
      href: 'https://github.com/abhishek-kumar-91/mystery-message',
      imageSrc: './mystery.png',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'NextJs, TypeScript, MongoDB, OpenAI API, TailwindCSS, NextAuth, Resend-Email, ZOD Validation, Shadcn/UI',
    },
    {
      id: 3,
      name: 'Music Art',
      href: 'https://github.com/abhishek-kumar-91/MusicService-NextApp',
      imageSrc: './music.png',
      imageAlt: "Front of men's Basic Tee in black.",
      live: 'https://music-service-smoky.vercel.app/',
      color: 'NextJS, Shadcn/UI, TailwindCSS',
    },
    {
      id: 4,
      name: 'Pet Adopt',
      href: 'https://github.com/abhishek-kumar-91/petAdopt',
      imageSrc: 'petAdopt.png',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'Reactjs, Nodejs, ExpressJs, MySQL',
    },

    {
      id: 5,
      name: 'Weather App',
      href: 'https://github.com/abhishek-kumar-91/WeatherApp',
      imageSrc: 'weather.png',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'ReactJs, CSS3, Weather API, Figma',
    },
    {
      id: 6,
      name: 'Crud Operation',
      href: 'https://github.com/abhishek-kumar-91/crud_operation',
      imageSrc: 'crud.png',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'ReactJS, NodeJS, ExpressJS, MongoDB, NodeMailer',
    },
    {
      id: 7,
      name: 'Venue Dashboard',
      href: 'https://github.com/abhishek-kumar-91/venueAdminLogin',
      imageSrc: './venue.png',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'ReactJS, Apex Chart, API Integration',
    },

    {
      id: 8,
      name: 'Crypto Dashboard',
      href: 'https://github.com/abhishek-kumar-91/cryptoLiveDashboard',
      imageSrc: './crypto.png',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'Reactjs, CoinGecko API, CSS3',
    },
    {
      id: 9,
      name: 'Bubble Game',
      href: 'https://github.com/abhishek-kumar-91/bubbleGame',
      imageSrc: './bubble.png',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'HTML5, CSS3, JavaScript',
    },
    {
      id: 10,
      name: 'Jobs Board UI',
      href: 'https://github.com/abhishek-kumar-91/JobsBoard',
      imageSrc: './jobs.png',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'ReactJS, TailwindCSS',
    },
    {
      id: 11,
      name: 'Trello Clone',
      href: 'https://github.com/abhishek-kumar-91/trelloClone',
      imageSrc: './dashboard.png',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'ReactJS, Typescript, TailwindCSS, ChatGPT Api',
    },

    {
      id: 12,
      name: 'Netflix Clone',
      href: 'https://github.com/abhishek-kumar-91/Netflix-Clone',
      imageSrc: './2.png',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'ReactJS, CSS3, Movie API',
    },
   
   
   


    // More products...
  ]
  return (
    <div id='projects' className="bg-gray-100">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Projects</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="h-full w-full bg-cover lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={product.href} target='_blank'>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              </div>
              
            </div>
           
          </div>
         
        ))}
      </div>
    </div>
  </div>
  )
}

export default Projects