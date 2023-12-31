"use client"
import Image from 'next/image'
import bgimage1 from '../../assets/bgimage1.jpg'
import bgimage2 from '../../assets/bgimage2.jpg'
import bgimage3 from '../../assets/bgimage3.jpg'
import bgimage4 from '../../assets/bgimage4.jpg'
import { useState } from 'react'
import Link from 'next/link'

export default function SignIn() {

    const backgroundImages = [
        bgimage1,
        bgimage2,
        bgimage3,
        bgimage4,
    ];

    const shuffleArray = (array) => {
        const shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const [backgroundImage] = useState(shuffleArray(backgroundImages));

    const handleSubmit = (e) => {

        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');


    }

    return (
        <main className="flex relative min-h-screen">
            <div className='w-full absolute -z-20 bottom-0'>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1439 400" preserveAspectRatio="none">
                    <path d="M252 112.42C100 127.399 20.6667 207.599 0 245.826V522H1438V245.826C1452.4 9.90852 1269.33 -13.184 1176 4.75953L252 112.42Z" fill="#DAF7E9" />
                </svg>
            </div>

            <div className='flex flex-col md:flex-row w-full min-h-full px-10'>
                <div className='w-full md:w-[50%] h-full hidden md:flex flex-row justify-center items-center relative pr-10'>

                    <div className='h-[250px] w-[250px] lg:h-[320px] lg:w-[320px] absolute bottom-[36%] lg:bottom-[32%] rounded-[50%] border-[20px] border-[#004b50] bg-transparent opacity-40 -z-20'>

                    </div>

                    <div className='w-[50%] -mt-12'>
                        <div className='w-fit ml-auto py-4 pr-4'>
                            <Image src={backgroundImage[0]} className='rounded-[20px] transition-all ease-in-out duration-300 w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]' />
                        </div>
                        <div className='w-fit ml-auto py-4 pr-4'>
                            <Image src={backgroundImage[1]} className='rounded-[20px] transition-all ease-in-out duration-300 w-[200px] h-[110px] lg:w-[250px] lg:h-[160px]' />
                        </div>
                    </div>
                    <div className='w-[50%] -mb-12'>
                        <div className='w-fit py-4 pl-4'>
                            <Image src={backgroundImage[2]} className='rounded-[20px] transition-all ease-in-out duration-300 w-[200px] h-[110px] lg:w-[250px] lg:h-[160px]' />
                        </div>
                        <div className='w-fit py-4 pl-4'>
                            <Image src={backgroundImage[3]} className='rounded-[20px] transition-all ease-in-out duration-300 w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]' />
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-[50%] h-full flex justify-center items-center'>

                    <form onSubmit={handleSubmit} className='bg-white flex flex-col space-y-4 w-full max-w-[460px] border p-[25px] md:p-[50px] rounded-lg shadow-md'>
                        <div className='text-4xl text-left font-semibold text-[#004b50]'>Sign in</div>

                        <div className='text-lg text-left font-extralight'>Don't have an account? <Link href='/sign-up' className='hover:underline cursor-pointer text-[#00a76f]'>Sign Up</Link></div>

                        <input type="text" name="email" placeholder="Lorem Ipsum"
                            className="focus:outline-[#00a76f] bg-transparent border h-[45px] border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                        />

                        <input type="text" name="password" placeholder="Lorem Ipsum"
                            className="focus:outline-[#00a76f] bg-transparent border h-[45px] border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                        />

                        <button type='submit' className='bg-[#00a76f] h-[45px] border border-[#00a76f] rounded-lg text-white hover:bg-[#daf7e9] hover:border-[#00a76f] hover:text-[#00a76f] transition-all ease-in-out duration-300'>
                            Sign In
                        </button>

                    </form>

                </div>
            </div>

        </main>
    )
}
