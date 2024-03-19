import { getProjects } from "@/sanity/sanity-utils";
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
 
    const projects = await getProjects();

    return (
        <div className="max-w-5xl mx-auto">
            <h1 className="text-7xl font-extrabold">hello, I&apos;m <span className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent">Marlon</span>!, I&apos;m a creative developer...</h1>
            <p className='mt-3 text-xl text-gray-600' > welcome to my project portfolio</p>
            <h2 className='mt-24 font-bold text-gray-700 text-3xl' >my projects</h2>
            <div className='mt-5 grid md:grid-cols-2 grid-cols-1 gap-8'>
                {projects.map((project) => (
                   <Link 
                     href={`/projects/${project.slug}`}
                   key={project._id} className='border-2 border-gray-500 rounded-lg p-1 hover:border-orange-500 hover:scale-105 transition'>
                    {project.imageUrl && (
                        <Image src={project.imageUrl}alt={project.name}
                        width={750} height={300} className='object-cover rounde border border-gray-500'/>
                    )}

                        <div className= 'mt-2 font-extra-bold bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent'> {project.name}
                        </div>
                        </Link>

                      
    
                ))} 
                </div>
        </div>
          

  );
}
