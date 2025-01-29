import { Button } from 'flowbite-react';
import img from "../images/my.jpg";

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-[#A294F9] justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-3xl'>
                Learn More About Projects
            </h2>
            <p className='text-gray-500 my-2'>
                View My github projects
            </p>
            <Button  className='rounded-tl-xl bg-[#B82132] hover:bg-blue-500 rounded-bl-none'> 
                <a href="https://github.com/SudiptaHalder" target='_blank' rel='noopener noreferrer'>
                    Click Here
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1 flex justify-center items-center">
            {/* Reduce the size of the image */}
            <img src={img} className="w-64 h-auto rounded-xl" alt="My Image" />
        </div>
    </div>
  )
}