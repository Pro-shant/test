import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import img from "../images/logo.png";
import { BsYoutube, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-[#B82132] dark:bg-[rgb(54,66,99)]'>
      <div className='w-full max-w-7xl mx-auto '>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
          <Link to="/" className="flex">
        <img src={img} width={100} height={50} alt="" />
        <span
          className="self-end text-sm 
        sm:text-2xl  font-light   dark:text-white"
        >
          Blog
        </span>
      </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/SudiptaHalder/Projects'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github Projects
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Piki's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/SudiptaHalder'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Piki's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://youtube.com/@piku2090?si=la2Ld_TUf7D9l_2m' icon={BsYoutube} />
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitter}/>
            <Footer.Icon href='https://github.com/SudiptaHalder' icon={BsGithub}/>
            <Footer.Icon href='https://dribbble.com/Prashantph' icon={BsDribbble}/>

          </div>
        </div>
      </div>
    </Footer>
  );
}
