import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image"
// displays individual project page content
type Props = {
  params: { project: string }
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return <div>
    <header className="flex items-center justify-between pl-10 pr-10">
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold h-16">{project.name}</h1>
      <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer" className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-orange-500 hover:text-orange-100 transition">
        View Project
      </a>
    </header>

    <div className="text-lg mt-5 pl-10 pr-10">
      <PortableText value={project.content} />
      <Image src={project.image} alt={project.name} width={1920} height={1080} className="mt-10 border-2 border object-cover rounded-xl " />
    </div>
    
    
  </div>
} 