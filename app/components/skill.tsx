import React from 'react';



const apiUrlmages = 'https://simpleicons.org/icons/';
const skills = [
  { name: 'React', image: 'react' },
  { name: 'Next.js', image: 'nextdotjs' },
  { name: 'TypeScript', image: 'typescript' },
  { name: 'Tailwind', image: 'tailwindcss' },
  { name: 'JavaScript', image: 'javascript' },
  { name: 'Node.js', image: 'nodedotjs' },
  { name: 'MongoDB', image: 'mongodb' },
  { name: 'Python', image: 'python' },
  { name: 'PostgreSQL', image: 'postgresql' },
  { name: 'PHP', image: 'php' },
  { name: 'CSS', image: 'css' },
  { name: 'ThreeJs', image: 'threedotjs' },
  { name: 'PHP', image: 'php' },
];

export const SkillsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 10,
  };

  return (

      
      <div className="flex gap-4 flex-wrap items-center justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card group p-8 flex flex-col items-center justify-center bg-gray-300 dark:bg-slate-600 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 fill-gray-200"
          >
            <div 
  className="w-24 h-24 mb-4 group-hover:opacity-80 transition duration-300  dark:bg-slate-100  bg-slate-800 "
  style={{
    maskImage: `url(${apiUrlmages}${skill.image}.svg)`,
    WebkitMaskImage: `url(${apiUrlmages}${skill.image}.svg)`,
    maskSize: 'cover',
  }}
></div>

            <h3 className="text-lg font-semibold text-center dark:text-white group-hover:text-blue-500 transition duration-300">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>

  );
};



