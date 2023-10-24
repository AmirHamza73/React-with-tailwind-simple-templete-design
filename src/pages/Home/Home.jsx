import React from 'react'
import img2 from "../../assets/img/Rectangle.png"
import img3 from "../../assets/img/Screenshot.png"
import img1 from "../../assets/img/image4.png"

import pimg1 from "../../assets/img/McDonald's.svg"
import pimg2 from "../../assets/img/Nestlé.svg"
import pimg3 from "../../assets/img/Pepsi.svg"
import pimg4 from "../../assets/img/Starbucks.svg"
import pimg5 from "../../assets/img/Walmart.svg"
function Home() {
  return (
    <>
      <div className='px-4 pt-10 flex justify-center items-center flex-col'>
        <p className='text-[#4E9983] font-normal uppercase text-lg '>BIO-DISPOSABLE DINNERWARE</p>
        <h1 className='text-6xl pb-4 font-[400]'>Leave No Trace !</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-8 w-full'>
          <div className=''>
            <img src={img1} alt="" className='w-full h-[30vh] object-fill' />
          </div>
          <div className=''>
          <img src={img2} alt="" className='w-full h-[30vh] object-fill' />
          </div>
          <div className=''>
          <img src={img3} alt="" className='w-full h-[30vh] object-fill' />
          </div>
        </div>
        <p className=' w-[80%] font-normal leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa enim dolor quis explicabo ad culpa amet, veniam ipsam adipisci a nam. Laboriosam dicta asperiores architecto? Facere iusto saepe perferendis?</p>
        <button className=' bg-[#4E9983] h-12 mt-10 px-6 rounded-3xl text-white font-bold'>Conact Sales</button>
      </div>

      <div className='flex flex-col justify-center items-center bg-[#19473A] py-32 mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full'>
          <div className='flex justify-center flex-col items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 120 120" fill="none">
            <path d="M88 73.9333C88 89.3973 75.464 101.933 60 101.933C44.536 101.933 32 89.3973 32 73.9333C32 58.4694 60 19.0001 60 19.0001C60 19.0001 88 58.4694 88 73.9333Z" fill="url(#paint0_linear_10_1588)"/>
            <defs>
            <linearGradient id="paint0_linear_10_1588" x1="60" y1="19.0001" x2="60" y2="101.933" gradientUnits="userSpaceOnUse">
            <stop stop-color="#EDC37D"/>
            <stop offset="1" stop-color="#BFF7E7"/>
            </linearGradient>
            </defs>
            </svg>

            <h1 className=' text-white text-2xl py-3'>67%</h1>
            <p className=' text-white opacity-50'>Waste Reduced</p>
          </div>
          <div className='flex justify-center flex-col items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="42" r="19" fill="url(#paint0_linear_10_1592)"/>
            <path d="M24 97C24 92.2724 24.9312 87.5911 26.7403 83.2234C28.5495 78.8557 31.2012 74.8871 34.5442 71.5442C37.8871 68.2012 41.8557 65.5495 46.2234 63.7403C50.5911 61.9312 55.2724 61 60 61C64.7276 61 69.4089 61.9312 73.7766 63.7403C78.1443 65.5495 82.1129 68.2012 85.4559 71.5442C88.7988 74.8871 91.4505 78.8557 93.2597 83.2234C95.0688 87.5911 96 92.2724 96 97L24 97Z" fill="url(#paint1_linear_10_1592)"/>
            <defs>
              <linearGradient id="paint0_linear_10_1592" x1="87.5" y1="51" x2="41" y2="61" gradientUnits="userSpaceOnUse">
                <stop stop-color="#EDC37D"/>
                <stop offset="1" stop-color="#BFF7E7"/>
              </linearGradient>
              <linearGradient id="paint1_linear_10_1592" x1="26" y1="81" x2="91" y2="88" gradientUnits="userSpaceOnUse">
                <stop stop-color="#EDC37D"/>
                <stop offset="1" stop-color="#BFF7E7"/>
              </linearGradient>
            </defs>
          </svg>

          <h1 className=' text-white text-2xl py-3'>32+</h1>
          <p className=' text-white opacity-50'>Satisfied Green Companies</p>

          </div>
          <div className='flex justify-center flex-col items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 120 120" fill="none">
            <circle cx="48" cy="70" r="31" fill="url(#paint0_linear_10_1595)"/>
            <circle cx="14.5" cy="14.5" r="14.5" transform="matrix(1 0 0 -1 74 47)" fill="url(#paint1_linear_10_1595)"/>
            <defs>
              <linearGradient id="paint0_linear_10_1595" x1="48" y1="39" x2="48" y2="101" gradientUnits="userSpaceOnUse">
                <stop stop-color="#EDC37D"/>
                <stop offset="1" stop-color="#BFF7E7"/>
              </linearGradient>
              <linearGradient id="paint1_linear_10_1595" x1="14.5" y1="0" x2="14.5" y2="29" gradientUnits="userSpaceOnUse">
                <stop stop-color="#EDC37D"/>
                <stop offset="1" stop-color="#BFF7E7"/>
              </linearGradient>
            </defs>
          </svg>

          <h1 className=' text-white text-2xl py-3'>3000 tons+</h1>
          <p className=' text-white opacity-50'>CO₂ saved</p>

          </div>
        </div>
      </div>


      <div className=' bg-[#FFFAF2] h-[60%] px-20 py-20'>
        <div className=" grid grid-cols-1 md:grid-cols-3">
          <div className="text-3xl text-[#19473A]">Our Green Offerings</div>
          <div className="col-span-2">Dedicated to providing environmentally conscious businesses with a comprehensive suite of eco-friendly solutions. Our commitment to sustainability is woven into every aspect of our offerings.</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 py-8">
          <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 120 120" fill="none">
            <path d="M60.5 59L26 16H95L60.5 59Z" fill="url(#paint0_linear_10_1397)"/>
            <path d="M60.5 59L26 103H95L60.5 59Z" fill="url(#paint1_linear_10_1397)"/>
            <defs>
            <linearGradient id="paint0_linear_10_1397" x1="60.5" y1="16" x2="60.5" y2="103" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFCD83"/>
            <stop offset="1" stop-color="#19473A"/>
            </linearGradient>
            <linearGradient id="paint1_linear_10_1397" x1="60.5" y1="16" x2="60.5" y2="103" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFCD83"/>
            <stop offset="1" stop-color="#19473A"/>
            </linearGradient>
            </defs>
            </svg>

            <h1 className=' font-bold text-[20px] py-2'>Sustainability</h1>
            <p>Sustainability drives our packaging solutions. We offer eco-friendly options to align with your commitment to the environment.</p>

          </div>
          <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 120 120" fill="none">
              <path d="M104 53C104 64.6695 99.3643 75.8611 91.1127 84.1127C82.8611 92.3643 71.6695 97 60 97C48.3305 97 37.1389 92.3643 28.8873 84.1127C20.6357 75.8611 16 64.6695 16 53L60 53H104Z" fill="url(#paint0_linear_10_1403)"/>
              <circle cx="60" cy="53" r="30" fill="url(#paint1_linear_10_1403)"/>
              <defs>
                <linearGradient id="paint0_linear_10_1403" x1="93.5" y1="85.5" x2="21.5" y2="26.5" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#E2BC7A"/>
                  <stop offset="1" stop-color="#2B5240"/>
                </linearGradient>
                <linearGradient id="paint1_linear_10_1403" x1="60" y1="23" x2="60" y2="83" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#EDC37D"/>
                  <stop offset="1" stop-color="#214C3D"/>
                </linearGradient>
              </defs>
            </svg>

            <h1 className=' font-bold text-[20px] py-2'>Eco Solutions</h1>
            <p>Explore our eco-conscious packaging solutions, crafted for businesses like yours, promoting sustainability at every turn.</p>
          </div>
          <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 120 120" fill="none">
            <path d="M38.1583 58.7214L59.8782 96.3414H16.4384L38.1583 58.7214Z" fill="url(#paint0_linear_10_1411)"/>
            <path d="M84.9435 60.1599L106.663 22.54H63.2236L84.9435 60.1599Z" fill="url(#paint1_linear_10_1411)"/>
            <path d="M37.9332 17.9666L59.6531 55.5865H16.2134L37.9332 17.9666Z" fill="url(#paint2_linear_10_1411)"/>
            <path d="M84.7184 100.915L106.438 63.2949H62.9985L84.7184 100.915Z" fill="url(#paint3_linear_10_1411)"/>
            <defs>
              <linearGradient id="paint0_linear_10_1411" x1="38.1583" y1="58.7214" x2="38.1583" y2="108.881" gradientUnits="userSpaceOnUse">
                <stop offset="0.453125" stop-color="#5B6E4F"/>
                <stop offset="0.864583" stop-color="#E7C07C"/>
              </linearGradient>
              <linearGradient id="paint1_linear_10_1411" x1="84.9435" y1="60.1599" x2="84.9435" y2="10" gradientUnits="userSpaceOnUse">
                <stop offset="0.401042" stop-color="#5B6E4F"/>
                <stop offset="1" stop-color="#E7C07C"/>
              </linearGradient>
              <linearGradient id="paint2_linear_10_1411" x1="37.9332" y1="17.9666" x2="37.9332" y2="55.5865" gradientUnits="userSpaceOnUse">
                <stop offset="0.453125" stop-color="#5B6E4F"/>
                <stop offset="0.864583" stop-color="#E7C07C"/>
              </linearGradient>
              <linearGradient id="paint3_linear_10_1411" x1="84.7184" y1="100.915" x2="84.7184" y2="63.2949" gradientUnits="userSpaceOnUse">
                <stop offset="0.401042" stop-color="#5B6E4F"/>
                <stop offset="1" stop-color="#E7C07C"/>
              </linearGradient>
            </defs>
          </svg>

          <h1 className=' font-bold text-[20px] py-2'>Recycling Program</h1>
          <p>Join our recycling program to reduce waste and support a circular economy. Together, we make a lasting impact.</p>
          </div>
        </div>
      </div>
      

      <div className=" bg-[#FAFAFA] w-full h-[30%] px-10 py-20 flex flex-col justify-center items-center">
        <h1 className='text-3xl font-bold text-[40px]'>Our Partners</h1>
        <div className=" grid grid-cols-1 md:grid-cols-5 gap-4 py-4">
          <div><img src={pimg1} alt="" className=' w-32 h-16' /></div>
          <div><img src={pimg2} alt="" className=' w-32 h-16' /></div>
          <div><img src={pimg3} alt="" className=' w-32 h-16' /></div>
          <div><img src={pimg4} alt="" className=' w-32 h-16' /></div>
          <div><img src={pimg5} alt="" className=' w-32 h-16' /></div>
        </div>
      </div>
    </>
    
  )
}

export default Home