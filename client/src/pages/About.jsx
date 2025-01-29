// export default function About() {
//   return (
//     <div className='min-h-screen flex items-center justify-center'>
//       <div className='max-w-2xl mx-auto p-3 text-center'>
//         <div>
//           <h1 className='text-3xl font font-semibold text-center my-7'>
//             About ME
//           </h1>
//           <div className='text-md text-gray-500 flex flex-col gap-6'>
//             <p>
//             I’m Sudipta Halder, a passionate web developer with a love for creating seamless digital experiences. I started my journey as a web developer in 2019, and by 2022, I had expanded my skills to become a full-stack developer. I’m always eager to stay on top of the latest tech updates and trends, ensuring I’m continuously evolving in this fast-paced industry.


//             </p>

//             <p>
//             When I’m not coding, you’ll find me traveling and appreciating the beauty of nature, which often inspires my work. I’m a big fan of coding with a cup of chai in hand—it’s the perfect way to fuel my creativity.
//             </p>

//             <p>
//             I’m committed to keeping my skills sharp and pushing the boundaries of web development while embracing new challenges and technologies.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-700 flex items-center justify-center py-16">
      <div className="max-w-3xl mx-auto p-8 bg-white dark:bg-slate-800 shadow-xl rounded-xl border border-indigo-500 text-center">
        <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-8 tracking-wide">
          About Me
        </h1>
        <div className="text-lg text-gray-600 dark:text-gray-300 space-y-6">
          <p className="leading-relaxed">
            I’m Sudipta Halder, a passionate web developer with a love for creating seamless digital experiences. I started my journey as a web developer in 2019, and by 2022, I had expanded my skills to become a full-stack developer. I’m always eager to stay on top of the latest tech updates and trends, ensuring I’m continuously evolving in this fast-paced industry.
          </p>

          <p className="leading-relaxed">
            When I’m not coding, you’ll find me traveling and appreciating the beauty of nature, which often inspires my work. I’m a big fan of coding with a cup of chai in hand—it’s the perfect way to fuel my creativity.
          </p>

          <p className="leading-relaxed">
            I’m committed to keeping my skills sharp and pushing the boundaries of web development while embracing new challenges and technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
