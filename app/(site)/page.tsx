import { getProjects } from "@/sanity/sanity-utils"
import Image from 'next/image'
import Link from 'next/link'
import {ThemeProvider} from 'next-themes'
// home page
export default async function Home() {
  const projects = await getProjects();

  return (
  
    <div className="pl-10 pr-10">
      <h1 className="text-7xl font-bold">Hello I&apos;m
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"> Jason!</span>
      </h1>
      <p className="mt-3 text-xl ">Hello everyone! Check out my projects!</p>
      <h2 className="mt-24 font-bold text-3xl">My Projects</h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">{projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id} className="  hover:scale-105 hover:border-blue-500 transition">
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={750}
              height={300}
              className="object-cover rounded-t-lg"
            />
          )}
          <div className="bg-stone-500 rounded-b-lg pb-1 pl-2  ">
            <p className="font-bold">{project.name}</p>
            <p className="italic pl-1">{project.date}</p>
          </div>
        </Link>
      ))}
      </div>
    </div>
  )

}