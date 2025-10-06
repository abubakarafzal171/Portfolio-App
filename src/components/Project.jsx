import React from 'react'
import project1 from '../assets/project1.avif'
import project2 from '../assets/project2.avif'
import project3 from '../assets/project3.avif'
const Project = () => {
  return (
<div className='container h-full w-full mb-10'>
<h1 className='fontbold text-5xl font-sans mt-10 ml-10 md:mt-20 md:ml-20'>Project</h1>

<div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-40 lg:gap-50 mt-20 lg:ml-30'>
<div className="left flex flex-col gap-2 md:ml-10">
  <h2 className='fontbold text-2xl font-serif '>Project No 1</h2>
  <p className='text-gray-700 text-justify w-[420px]'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you</p>
</div>
<div className="right md:ml-10 flex flex-col gap-8">
  <img src={project1} alt=""   className="w-full max-w-md rounded-lg shadow-md object-cover"  />
  <button className='w-30 h-10 bg-gray-800 ml-4 text-white cursor-pointer rounded hover:bg-gray-700'>View Project</button>
</div>
</div>

<div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-40 lg:gap-50 mt-20 lg:ml-30'>
<div className="left flex flex-col gap-2 md:ml-10">
  <h2 className='fontbold text-2xl font-serif '>Project No 2</h2>
  <p className='text-gray-700 text-justify w-[420px]'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you</p>
</div>
<div className="right md:ml-10 flex flex-col gap-8">
  <img src={project2} alt=""   className="w-full max-w-md rounded-lg shadow-md object-cover"  />
  <button className='w-30 h-10 bg-gray-800 ml-4 text-white cursor-pointer rounded hover:bg-gray-700'>View Project</button>
</div>
</div>

<div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-40 lg:gap-50 mt-20 lg:ml-30'>
<div className="left flex flex-col gap-2 md:ml-10">
  <h2 className='fontbold text-2xl font-serif '>Project No 3</h2>
  <p className='text-gray-700 text-justify w-[420px]'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you</p>
</div>
<div className="right md:ml-10 flex flex-col gap-8">
  <img src={project3} alt=""   className="w-full max-w-md rounded-lg shadow-md object-cover"  />
  <button className='w-30 h-10 bg-gray-800 ml-4 text-white cursor-pointer rounded hover:bg-gray-700'>View Project</button>
</div>
</div>

</div>
  )
}

export default Project