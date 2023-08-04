"use client"
import Image from 'next/image'
import bgimage from '../assets/bgimage.png'
import { useState } from 'react'

export default function Home() {

  const [signIn, setSignIn] = useState(true)

  return (
    <main className="flex relative min-h-screen">
      <div className='w-full absolute -z-20 bottom-0'>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="522" viewBox="0 0 1438 522" preserveAspectRatio="none">
          <path d="M171.5 209.5C127.1 215.9 39 286.833 0.5 321.5V522H1437.5V69.5C1426.7 -21.7 1228.67 -3.83335 1131 16.5C829.667 78.1667 215.9 203.1 171.5 209.5Z" fill="#DAF7E9" />
        </svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="420" viewBox="0 0 1439 420" preserveAspectRatio="none">
          <path d="M252 112.42C100 127.399 20.6667 207.599 0 245.826V522H1438V245.826C1452.4 9.90852 1269.33 -13.184 1176 4.75953L252 112.42Z" fill="#DAF7E9" />
        </svg>
      </div>

      <div className='flex flex-col md:flex-row w-full min-h-full px-10'>
        <div className='w-full md:w-[50%] h-full hidden md:flex justify-center items-center'>
          <Image src={bgimage} />
        </div>

        <div className='w-full md:w-[50%] h-full flex justify-center items-center'>
          {signIn ?
            <div className='flex flex-col space-y-4 w-full max-w-[500px] border p-[25px] md:p-[50px] rounded-lg shadow-md'>
              <div className='text-4xl text-left font-semibold text-[#004b50]'>Sign in your account.</div>

              <div className='text-lg text-left font-extralight'>Dont't have an account? <span onClick={() => setSignIn(!signIn)} className='hover:underline cursor-pointer text-[#00a76f]'>Sign Up</span></div>

              <input type="text" id="default-input" placeholder="Lorem Ipsum"
                className="focus:outline-[#00a76f] bg-transparent border h-[55px] border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              />

              <input type="text" id="default-input" placeholder="Lorem Ipsum"
                className="focus:outline-[#00a76f] bg-transparent border h-[55px] border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              />

              <button className='bg-[#00a76f] h-[55px] border border-[#00a76f] rounded-lg text-white hover:bg-[#daf7e9] hover:border-[#00a76f] hover:text-[#00a76f] transition-all ease-in-out duration-300'>
                Sign In
              </button>

            </div>
            :

            <div className='flex flex-col space-y-4 w-full max-w-[500px] border p-[25px] md:p-[50px] rounded-lg shadow-md'>
              <div className='text-4xl text-left font-semibold text-[#004b50]'>Get Started</div>

              <div className='text-lg text-left font-extralight'>Already have an account? <span onClick={() => setSignIn(!signIn)} className='hover:underline cursor-pointer text-[#00a76f]'>Sign In</span></div>

              <input type="text" id="default-input" placeholder="Lorem Ipsum"
                className="focus:outline-[#00a76f] bg-transparent border h-[55px] border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              />

              <input type="text" id="default-input" placeholder="Lorem Ipsum"
                className="focus:outline-[#00a76f] bg-transparent border h-[55px] border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              />

              <input type="text" id="default-input" placeholder="Lorem Ipsum"
                className="focus:outline-[#00a76f] bg-transparent border h-[55px] border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              />

              <input type="text" id="default-input" placeholder="Lorem Ipsum"
                className="focus:outline-[#00a76f] bg-transparent border h-[55px] border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              />

              <button className='bg-[#00a76f] h-[55px] border border-[#00a76f] rounded-lg text-white hover:bg-[#daf7e9] hover:border-[#00a76f] hover:text-[#00a76f] transition-all ease-in-out duration-300'>
                Submit
              </button>

            </div>
          }

        </div>
      </div>

    </main>
  )
}
