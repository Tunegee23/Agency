import React from 'react'
import logo from "../Image/logo.png"
import menu from "../Image/menu.png"
import small from "../Image/small.png"
import icon from "../Image/icon.png"
import Brands from "../Image/Brands.png"
import Image from "../Image/Image1.png"
import image from "../Image/Image2.png"
import Text from '../component/Text'
import icon3 from "../Image/icon3.png"
import image3 from "../Image/image3.png"
import icon1 from "../Image/icon1.png"
import icon2 from '../Image/icon2.png'
import icon4 from "../Image/icon4.png"
import icon5 from "../Image/icon5.png"
import icon6 from "../Image/icon6.png"
import image4 from "../Image/image4.png"
import image5 from "../Image/image5.png"
import image6 from "../Image/image6.png"
import icon7 from "../Image/icon7.png"
import image7 from "../Image/image7.png"
import image8 from "../Image/image8.png"
import image9 from "../Image/image9.png"
import icon8 from "../Image/icon8.png"
import image10 from "../Image/image10.png"
import image11 from "../Image/image11.png"
import image12 from "../Image/image12.png"
import image13 from "../Image/image13.png"
import image14 from "../Image/image14.png"
import image15 from "../Image/image15.png"
import image16 from "../Image/image16.png"
import image17 from "../Image/image17.png"
import image18 from "../Image/image18.png"
import image19 from "../Image/image19.png"
import image20 from "../Image/image20.png"
import minus from "../Image/minus.png"
import plus from "../Image/plus.png"
import up from "../Image/up.png"
import Box from "../component/Box"
import image21 from "../Image/image21.png"
import icon9 from "../Image/icon9.png"
import icon10 from "../Image/icon10.png"
import Award from '../component/Award'
import image22 from "../Image/image22.png"
import image23 from "../Image/image23.png"
import icon11 from "../Image/icon11.png"
import image24 from "../Image/image24.png"
import Blog from '../component/Blog'
import image25 from "../Image/image25.png"
import image26 from "../Image/image26.png"
import icon12 from "../Image/icon12.png"
import map from "../Image/map.png"
import icon13 from "../Image/icon13.png"
import Contact from '../component/Contact'
import icon14 from "../Image/icon14.png"
import icon15 from "../Image/icon15.png"
import icon16 from "../Image/icon16.png"
import image27 from "../Image/image27.png"
import Footer from '../component/Footer'
import brand5 from "../Image/brand5.png"
import brand6 from "../Image/brand6.png"
import brand7 from "../Image/brand7.png"
import brand8 from "../Image/brand8.png"
import brand9 from "../Image/brand9.png"
import Epilogue from '../fonts/Epilogue-VariableFont_wght.ttf'
import Portfoilo from '../component/Portfoilo'
import image6a from "../Image/image6a.png"
import Event from '../component/Event'
import Pricing from '../component/Pricing'
import icon17 from "../Image/icon17.png"
import icon18 from "../Image/icon18.png"
import icon19 from "../Image/icon19.png"

function Home() {
    const features = [
        { icon: 'plus', text: 'Brand Design' },
        { icon: 'plus', text: 'Market Analysis' },
        { icon: 'minus', text: 'Production' }
    ];

  return (
    <div className='bg-[white] h-[100svh] grid' >

        <div className='h-[1000px] sm:h-[900px] md:h-[700px] bg-[#28293E] '>
            <div className='flex md:justify-evenly justify-between md:ml-[1rem] md:p-4 ' >

                <div className='p-2'>
                    <img src={logo} alt="" className='w-[100px] md:ml-[3rem] mt-[5px] ' />
                </div>  

                <div className='hidden  md:flex mt-[10px]' >
                    <ul className='flex text-[16px] gap-[5rem] mt-[10px]  text-center md:ml-[3rem] md:none font-[300] text-[#ffffffa3] '>
                        <li>About</li>
                        <li>Service</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div className='hidden md:flex'>
                    <button className=' w-[138px] h-[48px] mt-[10px] text-center font-[900] text-[14px] text-[#FFFFFF] leading-[14.35px] rounded-[6px] border-[1px] border-solid md:ml-[4rem] border-[#FFFFFF4B]'>CONTACT</button>
                </div>
                

                <div className='p-4'>
                     <img src={menu} alt="" className='relative mt-[px] md:hidden'/>
                </div>
            </div>

            <div className='md:hidden'>
                <div className=' justify-items-center '>
                    <img src={small} className='' alt=''/>
                </div> 
            </div>

            <div className='flex items-center justify-center'>
                <div>
                    <p className='relative text-[#EF6D58]  text-center mt-[2rem] text-[16px] font-[400]' >Modern Studio</p>
                    <div className='md:flex  mt-[10px] md:gap-[10rem] '>
                        <div className=' grid justify-items-center md:text-left text-center'>
                            <h1 className='text-[54px]  leading-[4rem]  md:mt-[1rem]   md:leading-[4rem]  font-[800]   text-white w-full  md:w-[400px] '>We’re Help To Build Your Dream Project</h1>
                            
                            <p className='font-[400px] text-[16px] md:mb-[2rem] md:w-[400px] w-full sm:w-[400px] mt-[10px] text-[#FFFFFFA3]'>Agency provides a full service range including technical skills, design, business understanding.</p> 
                        </div>
                        <div className='grid '>
                            <img src={small} className=' hidden md:flex' alt=''/>
                        </div> 
                    </div>

                    <div className=' justify-items-center md:justify-items-start md:ml-[0px] md:mt-[0px]  mt-[10px] '>
                        <div className='md:flex gap-[2rem] md:mt-[0px] mt-[16px]  flex'>
                            <button className='w-[154px] rounded-[6px] h-[48px] bg-[#EF6D58] text-white ml-[10px] font-[900] text-[14px]'> How We Work</button>
                            <p className='font-[400] text-[#FFFFFF] mt-[10px] text-[18px]'>contact us</p>
                        </div>
                    </div>

                    <div className='mt-[2rem] justify-center md:justify-start md:mt-[2rem] flex gap-[2rem]'>
                        <img src={icon} alt=''/>
                        <div className=''>
                            <p className='font-[400] text-[#FFFFFFA3]   w-[200px] text-[16px]'>"Put themselves in the merchant's shoes"</p>
                            <p className=' font-[400]  mt-[10px] text-[#FFFFFF] text-[16px]'>Meta Inc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='h-[6800px] md:h-[3500px] bg-[#FDF0E9] '>

            <div className='justify-items-center md:justify-evenly  md:flex  mt-[2rem]'>
                <div className=' flex gap-[3rem] sm:mt-[1rem]'>
                    <img src={ brand5} className=' w-[120px] md:w-[w-[80px] h-[40px]' alt=''/>
                    <img src={ brand6} className=' w-[120px] md:w-[w-[80px] h-[40px] ' alt=''/>
                </div>
                <div className=' flex  gap-[3rem] sm:mt-[1rem]  mt-[2rem] '>
                    <img src={ brand7} className='w-[120px] md:w-[w-[80px] h-[40px]' alt=''/>
                    <img src={ brand8} className=' w-[120px] md:w-[w-[80px] h-[40px]' alt=''/>
                </div>
                <img src={ brand9} className=' w-[120px] sm:mt-[1rem] mt-[2rem] h-[40px]' alt=''/>
            </div>

            <div className='  md:mt-[4rem] md:flex md:justify-evenly'>

                <div className='mt-[1.3rem] justify-items-center  md:mt-[10px]'>
                    <img src={Image} alt='' />
                </div>

                <div className=' justify-items-center text-center mt-[1rem]  grid md:mt-[2rem] '>
                    <p className='font-[400] text-[#EF6D58]  mt-[10px]  text-[18px] '>About</p>
                    <h1 className='font-[800] text-[#391400]   md:w-[300px] text-[40px] leading-[3rem]'>An Experience Design Agency</h1>
                    <p className='mt-[1rem] md:mt-[8px]  font-[500] text-[#391400] text-[20px]'> Provides a full service range</p>
                    <p className='font-[400] text-[#391400A3] md:text-left  md:leading-[1.5rem] md:w-[370px] mt-[8px] md:mt-[3px] w-[330px]  leading-[1.5rem] text-[16px]'>Ability to put themselves in the ,merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>
                    <button className='w-[138px] justify-items-start md:justify-start h-[48px] mt-[1rem] bg-[#FFFFFF] font-[900] text-[14px] md:mt-[1.5rem] rounded-[10px]'>ABOUT US</button>  
                </div> 
            </div>
            

            <div className=' justify-items-center  md:justify-center  md:flex md:mt-[4rem]  '>
                <div className='w-[320px] h-[170px] mt-[4rem] md:mt-[1px] ml-[10px] border-solid border-[1px] border-[#F3D1BF]'>
                    <small className=' ml-[4rem] relative top-[2rem] font-[800]  text-[40px] '> 42%</small>
                    <p className='font-[400] ml-[4rem] mt-[2rem] text-[20px]'>Years of experience</p>
                </div>

                <div className= 'w-[320px] h-[170px] mt-[2px]  ml-[10px] md:ml-[0px] border-solid border-[1px] border-[#F3D1BF]'>
                    <small className=' ml-[4rem] relative top-[2rem] font-[800]  text-[40px] '>73+</small>
                    <p className='font-[400] ml-[4rem] mt-[2rem] text-[20px]'>Agency members</p>
                </div>

                <div className= 'w-[320px] h-[170px] mt-[2px] ml-[10px] md:ml-[0px] border-solid border-[1px] border-[#F3D1BF]'>
                    <small className=' ml-[4rem] relative top-[2rem] font-[800]  text-[40px] '>5.000</small>
                    <p className='font-[400] ml-[4rem] mt-[2rem] text-[20px]'>Projects complete</p>
                </div>

            </div>

            <div className='md:flex  md:mt-[3rem] md:justify-evenly '>
                <div className='justify-items-center md:justify-items-start text-center md:text-left  '>
                    <p className='font-[400] text-[16px] text-[#EF6D58]   mt-[3rem]'>HOW WE WORK</p>
                    <h1 className='font-[800] w-[300px] md:w-[450px] text-[43px]  mt-[10px] leading-[3rem] '>Making Your Projects Look Awesome</h1>
                    <p className='font-[400]  text-[#391400A3] md:w-[400px] mt-[12px] leading-[2rem] w-[300px] text-[16px]'>Technical skills, design, business understanding, ability to put themselves in the merchant's shoes.</p>
                    <p className='font-[400] text-[16px] text-[#391400] mt-[10px]  '>Read More</p>
                </div>

                <div className=' justify-items-center mt-[0px] md:mt-[1rem]'>
                    <div className='flex   gap-[2rem] '>
                        <h1 className='w-[34px] h-[80px] mt-[2rem] font-[800] text-[72px]'> 1</h1>
                        <p className='mt-[3.5rem] text-[#391400] w-[257px] h-[64px] font-[700] text-[24px]'>Full service range including</p>
                    </div>
                    
                    <div className='flex  gap-[2rem] '>
                        <h1 className='w-[34px] h-[80px] mt-[2rem] font-[800] text-[72px]'> 2</h1>
                        <p className='mt-[3.5rem] text-[#391400] w-[257px] h-[64px] font-[700] text-[24px]'>Technical skills, design, business</p>
                    </div>

                    <div className='flex   gap-[2rem] '>
                        <h1 className='w-[34px] h-[80px] mt-[2rem] font-[800] text-[72px]'> 3</h1>
                        <p className='mt-[3.5rem] text-[#391400] w-[257px] h-[64px] font-[700] text-[24px]'>Themselves in the merchant's</p>
                    </div> 
                </div>
                
            </div>
            

               {/**thiner line */}
               <div className='justify-items-center  mt-[3rem]'>
                 <div className='w-[329px]  md:w-[1000px] md:mt-[8rem] h-[2px]  bg-[#F3D1BF]'></div>
               </div>
            

            {/* <div className='md:flex justify-items-center'>

                <div className='md:mt-[5rem] md:text-left text-center '>
                    <p className='font-[400] text-[16px] text-[#EF6D58]  ] mt-[3rem]'>VIDEO REEL</p>
                    <h1 className=' font-[800] text-[40px]  leading-[3rem] md:w-[400px] text-[#391400] '>Unlock The Greatest Value Possible</h1>
                    <h2 className='font-[400] md:w-[300px]  text-[#391400A3] mt-[12px]  leading-[2rem]] text-[16px] '>Design, business understanding, ability to put themselves in the merchant's shoes meant to partner.</h2>
                </div> 
            </div>  */}

            <div className='md:flex md:justify-evenly  mt-[3rem] md:mt-[5rem]  '>

                <div className='justify-items-center md:hidden '>
                    <img src={image} className=' md:hidden' alt=''></img>
                </div>

                <div className='md:mt-[3rem]  mt-[2rem]  md:text-left text-center '>
                    <p className='font-[400]  text-[16px] text-[#EF6D58]  tracking-[3px]  '>FEATURES</p>
                    <h1 className=' font-[800]  text-[40px] md:w-[290px] text-[#391400] leading-[3rem]' >Give Your Site A New Look</h1>
                    <p className=' font-[400] text-[20px] md:w-[350px] mt-[1rem] leading-[2rem] text-[#39140099]'>Service range including technical skills, design, business understanding.</p>

                    <div className='justify-items-center md:justify-items-start '>
                        <div className=' text-[#391400A3] md:mt-[1rem] mt-[2rem] '>
                            <Text text="Range including technical skills"/>
                            < Text  text="Business understanding"/>
                            <Text text="Partner on the long run"/> 
                        </div> 
                     </div>
                </div>

                <div className=''>
                    <img src={image} className=' hidden md:flex md:mt-[2rem]' alt=''></img>
                </div>
            </div>

            <div className='md:flex md:mt-[4rem] md:justify-evenly justify-items-center'>  

                <div className='text-center   md:text-left'>
                    <div className='  md:mt[2rem] mt-[4rem]'>
                        <p className='font-[400] text-[16px] text-[#EF6D58] leading-[2rem] tracking-[3px]'>FEATURES</p>
                        <h2 className=' font-[400] text-[20px] md:w-[300px] text-[#391400f1] leading-[2rem]'>Long run, and work as an extension of the merchant's team.</h2>
                    </div>
                    <p className='mt-[1rem]  font-[400] text-[16px] text-[#391400]'>Read More</p> 
                </div>

                <div className=' justify-items-center md:flex'>
                    <div className=' mt-[3rem] w-[320px]  h-[327px] border-solid border-[1px] rounded-[10px] border-[#F3D1BF] bg-[#FFFFFF]'>
                        <div className='w-[90px] h-[90px] mt-[3rem] rounded-[3rem] ml-[4rem] bg-[#EF6C57]' >
                            <img src={icon3} className='relative left-[1.7rem] top-[1.7rem]' alt=''/>
                        </div>
                        <h2 className='ml-[4rem] mt-[2rem] font-[700] text-[24px]'>Professional</h2>
                        <p className='font-[400] text-[16px] ml-[4rem] mt-[1rem] text-[#391400A3]'>Full service range including technical skills, design.</p>
                    </div>

                    <div className=' md:mt-[7.8rem] w-[320px] h-[250px] border-solid border-[1px] rounded-[10px] border-[#F3D1BF] bg-[none]'>
                        <h2 className='ml-[4rem] mt-[6rem] font-[700] text-[24px]'>Accessibility</h2>
                        <p className='font-[400] w-[200px] text-[16px] ml-[4rem] mt-[1rem] text-[#391400A3]'>Business understanding, ability to put themselves.</p>
                    </div>
                </div> 
            </div>

            <div className='md:flex justify-items-center md:justify-evenly md:mt-[2rem] ]'>
                <div className='mt-[4rem] ]'>
                    <img src={image3} className=' '  alt=''></img>
                </div>
                <div className=' md:mt-[2rem] text-center justify-items-center'>
                    <div className=' md:mt-[4rem]  md:text-left'>
                        <p className='font-[400] md:h-[0px] text-[16px] text-[#EF6D58] leading-[2rem] tracking-[3px]'>SERVICE</p>
                        <h1 className='font-[800] text-[40px] md:w-[400px] leading-[3rem] mt-[2rem]'>Making Complex Digital Products</h1>
                        <h2 className='font-[400] text-[20px] md:w-[400px] mt-[1rem] leading-[2rem] text-[#391400A3] '>Agency provides a full service range including technical skills, design, business.</h2>
                    </div>
                    <div className='flex mt-[2rem] md:mt-[12px] text-left gap-[1rem]'>
                        <img src={icon1} alt=''></img>
                        <h2 className='font-[400] text-[14px] w-[245px] md:w-[300px] leading-[24px] '>"Understanding, ability to put themselves in the merchant's shoes. It is meant to partner."</h2>
                    </div>
                    <p className=' text-[#391400] text-left text-[16px] font-[400] leading-[2rem]'>Jenny Murtaugh</p>
                    <button className='w-[138px] h-[48px] bg-[#FFFFFF] font-[900] text-[16px]  mt-[16px] '>Explore</button>
                </div> 
            </div> 
         
            <div className="justify-items-center  text-center md:mt-[7rem] mt-[5rem]">
                <p className='font-[400] text-[16px] text-[#EF6D58] leading-[2rem] tracking-[3px]'>SERVICE</p>
                <h1 className='font-[800] text-[40px] leading-[3rem] md:w-[350px] text-[#391400]'>How Our Agency Can Help</h1>
            </div> 
        
            <div className='md:flex md:mt-[2rem]  md:justify-evenly justify-items-center'>
                <div className=' mt-[3rem] md:mt-[1rem]  w-[320px] h-[400px] border-solid border-[1px] rounded-[10px] border-[#F3D1BF] bg-[none]'>
                    <div className='w-[90px] h-[90px] mt-[3rem] rounded-[3rem] ml-[2rem] bg-[#EF6C57]' >
                        <img src={icon2} className='relative left-[1.7rem] top-[1.7rem]' alt=''/>
                    </div>
                    <h2 className='ml-[2rem] mt-[2rem] font-[700] text-[24px]'>Design</h2>
                    <p className='font-[400] text-[16px] ml-[2rem] mt-[1rem] leading-[2rem] text-[#391400A3]'>Agency provides a full service range including technical skills, design.</p>
                    <p className=' mt-[1rem] ml-[2rem] font-[400] text-[16px] text-[#391400]'>Learn More</p>
                </div>

                <div className='  w-[320px] h-[400px] md:mt-[1rem] border-solid border-[1px] rounded-[10px] border-[#F3D1BF] bg-[none]'>
                    <div className='w-[90px] h-[90px] mt-[3rem] rounded-[3rem] ml-[2rem] bg-[#EF6C57]' >
                        <img src={icon4 } className='relative left-[1.7rem] top-[1.7rem]' alt=''/>
                    </div>
                    <h2 className='ml-[2rem] mt-[2rem] font-[700] text-[24px]'>Development</h2>
                    <p className='font-[400] text-[16px] ml-[2rem] mt-[1rem] leading-[2rem] text-[#391400A3]'>Full service range including technical skills, design, business.</p>
                    <p className=' mt-[1rem] ml-[2rem] font-[400] text-[16px] text-[#391400]'>Discover More</p>
                </div> 

                <div className='  w-[320px] md:mt-[1rem] h-[400px] border-solid border-[1px] rounded-[10px] border-[#F3D1BF] bg-[none]'>
                    <div className='w-[90px] h-[90px] mt-[3rem] rounded-[3rem] ml-[2rem] bg-[#EF6C57]' >
                        <img src={icon5} className='relative left-[1.7rem] top-[1.7rem]' alt=''/>
                    </div>
                    <h2 className='ml-[2rem] mt-[2rem] font-[700] text-[24px]'>Marketing</h2>
                    <p className='font-[400] text-[16px] ml-[2rem] mt-[1rem] leading-[2rem] text-[#391400A3]'>Technical skills, design, business understanding, ability.</p>
                    <p className=' mt-[1rem] ml-[2rem] font-[400] text-[16px] text-[#391400]'>Explore Now</p>
                </div>  
            </div>
        </div>


        <div className='bg-[#141caa] md:h-[3080px] h-full '>
            <p className=' text-center text-[#EF6D58] font-[400] leading-[2rem] tracking-[3px] mt-[3rem] text-[16px]'>PORTFOLIO</p>
            <h2 className='font-[800] text-[40px] text-center leading-[3rem]  text-[#FFFFFF]'>Latest Work</h2>

            <div className='justify-items-center'>
                <div className='flex w-[329px] h-[48px] md:relative   mt-[14px] justify-between rounded-[10px] bg-[#FFFFFF]'>
                    <p className='font-[400] text-[16px] text-[#391400A3] ml-[1rem] mt-[1rem] '>Show All </p>
                    <img className='w-[20px] h-[10px] mr-[1rem] mt-[1.5rem]' src={icon6 } alt=''/>
                </div>
            </div>

            

            <div className='md:flex justify-items-center  md:justify-evenly '>
                
                <div className='w-[323px] mt-[3rem] md:w-[470px]  rounded-[10px] relative h-[200px]' >
                    <Portfoilo
                    image={image4}
                    title="SOFA"
                    subtitle="Design"
                    textColor="#391400"
                    bgColor="white"
                    />
                </div>  

                <div className='w-[323px] md:w-[670px] mt-[15rem] md:mt-[3rem] rounded-[10px]  relative h-[200px]'>
                    <Portfoilo
                    image={image5}
                    title="KeyBoard"
                    subtitle="Branding"
                    textColor="#391400"
                    bgColor="white"
                    />       
                </div>  
            </div>

            <div className='md:flex justify-items-center md:justify-evenly md:mt-[1rem]  '>

                <div className='w-[323px] md:flex hidden mt-[3rem] md:w-[470px] md:mt-[16rem]  rounded-[10px] relative ' >
                    <Portfoilo
                    image={image6}
                    title="SOFA"
                    subtitle="Design"
                    textColor="#391400"
                    bgColor="white"
                    />  
                </div>

                <div className='w-[323px] md:w-[670px] mt-[15rem] md:mt-[16rem] rounded-[10px]  relative h-[200px]' >
                    <Portfoilo
                    image={image6a}
                    title="Work Media"
                    subtitle="Illustration"
                    textColor="#391400"
                    bgColor="white"
                    imageClassName="h-[400px]"
                    />
                </div> 

            </div>

            {/* <div className='flex  justify-items-center mt-[5rem]'>
                <button className='w-[200px] font-[500px] h-[70px] text-[20px] text-[white]  bg-none text-center border-[1px] solid'> Explore More</button>
            </div> */}
            
            <div className=' justify-items-center md:mt-[6rem] '> 
                {/* <img src={icon7} className='ml-[2rem] flex  ' alt=''></img> */}

                {/* <div className='w-[329px] md:w-[1050px] md:h-[336px] h-[822px] mt-[3rem]  rounded-[10px]  bg-[#FDF0E9]'>
                    <div className='md:flex mt-[2rem] '>
                        <div className=''>
                            <p className='font-[400] text-[16px]  ml-[2rem]  text-[#EF6D58] leading-[2rem] tracking-[3px]'> Get Started</p>
                            <h2 className='font-[700] text-[24px] w-[248px] leading-[2rem] ml-[2rem] '>We Help Companies Move Faster</h2>
                            <button className='text-center ml-[2rem] w-[154px] h-[48px] bg-[#EF6D58] text-[#FFFFFF] '>Contact Us</button>
                        </div>

                        <div className=' md:flex md:gap-[2rem] mt-[5rem] '>
                            <img src={image7} className=' md:w-[400px]  md:top-[4rem] ' alt=''></img>
                            <div className=' justify-center  flex '>
                                <img src={image8} className=' md:w-[230px] mt-[5rem] absolute' alt=''></img>
                                <img src={image9} className='absolute  md:w-[230px]  ml-[2rem]' alt=''></img>
                            </div>
                        </div>  

                    </div>
                </div>  */}
               
            </div>
            <div className='relative md:mt-[10rem] mt-[14rem]'>
                <p className='text-center text-[#EF6D58] font-[400] leading-[2rem] tracking-[3px] mt-[3rem] text-[16px]'>EVENTS</p>
                <h2 className='font-[800] text-[40px] text-center leading-[3rem]  text-[#FFFFFF]'>Explore Future Conferences</h2>
            </div>
            

            <div className='md:flex justify-items-center md:justify-evenly  '>
                <div>
                    <Event
                    date="3"
                    year="November 2021"
                    icon={icon8}
                    time="9:00 am – 3:00 pm"
                    title="Design Weeks"
                    description="Digital agency is a business you hire to outsource your digital."
                    buttonText="Explore Now"
                    />
                </div>

                <div>
                    <Event
                    date="15"
                    year="November 2021"
                    icon={icon8}
                    time="1:00 pm – 8:00 pm"
                    title="Interior Design"
                    description="Marketing efforts, instead of handling in-house."
                    buttonText="Explore Now"
                    />
                </div>

                <div>
                    <Event
                    date="2"
                    year="December 2021"
                    icon={icon8}
                    time="10:00 am – 2:00 pm"
                    title="The F design events"
                    description="Provide your business with a variety of digital solutions to promote."
                    buttonText="Explore Now"
                    />
                </div>
            </div>

            <div className=' flex justify-center items-center  mt-[3rem]   '>
                <button className='text-center mt-[13px] border-[#FFFFFF4B] w-[170px] h-[48px] border-solid border-[1px] font-[900] text-[14px] text-[#FFFFFF]'> Explore More</button>
            </div>

            <div className='justify-items-center mt-[2rem] text-center'>
                <p className='  text-[#EF6D58] font-[400] leading-[2rem] tracking-[3px] mt-[2rem] text-[16px]'>Our Team</p>
                <h2 className='font-[800] text-[40px] leading-[3rem] md:w-[400px]  text-[#FFFFFF]'>Team of Designers and Developers</h2>
            </div>
            
            <div className=' md:flex  md:mt-[5rem]  md:justify-evenly justify-items-center mt-[2rem] ' >
                <div className='w-[270px]  rounded-[10px]  justify-items-center  h-[272px]  border-solid border-[1px] border-[#3A3C56]'>
                    <img src={image10} className=' mt-[1.3rem]' alt=''></img>
                    <h2 className='font-[700] mt-[1rem] text-[#FFFFFF] leading-[2rem] text-[24px]'>Azah Anyeni</h2>
                    <p className='font-[400] text-[16px] leading-[2rem] text-[#FFFFFFA3]'>Designer</p>
                </div>

                <div className='w-[270px]  rounded-[10px]  justify-items-center  h-[272px]  border-solid border-[1px] border-[#3A3C56]'>
                    <img src={image10} className=' mt-[1.3rem]' alt=''></img>
                    <h2 className='font-[700] mt-[1rem] text-[#FFFFFF] leading-[2rem] text-[24px]'>Azah Anyeni</h2>
                    <p className='font-[400] text-[16px] leading-[2rem] text-[#FFFFFFA3]'>Designer</p>
                </div>


                <div className='w-[270px]  rounded-[10px]  justify-items-center  h-[272px]  border-solid border-[1px] border-[#3A3C56]'>
                    <img src={image10} className=' mt-[1.3rem]' alt=''></img>
                    <h2 className='font-[700] mt-[1rem] text-[#FFFFFF] leading-[2rem] text-[24px]'>Azah Anyeni</h2>
                    <p className='font-[400] text-[16px] leading-[2rem] text-[#FFFFFFA3]'>Designer</p>
                </div>
                {/* <div className='w-[65px] h-[272px] justify-items-center rounded-[10px]  ml-[3px]  border-solid border-[1px] border-[#3A3C56]'>
                    <img src={image11} className='ml-[3px] mt-[1.2rem] w-[200px] h-[250px] ' alt=''></img>
                    <h2 className='font-[700] mt-[1rem] text-[#FFFFFF] leading-[2rem] text-[24px]'>Roel</h2>
                    <p className='font-[400] text-[16px] leading-[2rem] text-[#FFFFFFA3]'>React </p>
                </div>    */}
            </div>

            <div className='mt-[8rem] justify-items-center '>
                <img src={image12}  alt="" />
            </div>

            <div className='md:flex md:mt-[5rem] md:justify-evenly'>
                <div className='justify-items-center'>
                    <div className=' relative mt-[3rem]'>
                        <img src={image13} className='' alt=''></img>
                        <img src={image14} className='absolute top-[1rem]'  alt=''></img>
                    </div>
                </div>

               
                <div>
                    <p className='mt-[3rem] text-center md:text-left   font-[400] text-[16px] text-[#EF6D58] tracking-[3px]'>FOUNDER WORDS</p>
                    <div className='text-center md:text-left '>
                        <h2 className=' leading-[2rem] md:w-[400px]  relative text-[#FFFFFF]   font-[700] text-[24px]'>Digital agency is a business you hire to outsource your digital marketing efforts</h2>
                        {/* <img src={image15} className='relative' alt=''></img> */}
                        <h3 className=' font-[400] text-[#FFFFFF] mt-[8px] text-[20px]'>Ren Delan</h3>
                        <p className='font-[400] mt-[3px] text-[14px] text-[#FFFFFFA3]'>Founder</p>
                    </div>
                </div>

            </div>

        </div>

        <div className=' bg-[#FDF0E9] h-full'>
            <div className='text-center '>
                <p className='  text-[#EF6D58] font-[400] leading-[2rem]  tracking-[3px] mt-[2rem] text-[16px]'>Testimonials</p>
                <h2 className='font-[800] text-[40px] leading-[3rem] text-[#391400]'>What Our Clients 
                Saying</h2>
            </div>

            <div className='md:flex justify-items-center md:justify-center  '>
                <div className='w-[329px] h-[528px] md:w-[586px] md:h-[400px] border-[1px] border-solid border-[#F3D1BF] rounded-[10px] bg-[#FFFFFF] mt-[2rem]'>
                    <img src={image16} className='ml-[2rem] mt-[2rem]' alt=''></img>
                    <h3 className='mt-[2rem] w-[275px] ml-[2rem] font-[400] md:w-[520px] text-[16px] text-[#391400A3] leading-[2.5rem]'>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</h3>
                    <div className='ml-[2rem] flex gap-[1.5rem]'>
                        <img src={image17} className='mt-[2rem] md:mt-[10px] ' alt=''></img>
                        <h2 className='font-[700] text-[24px] text-[#391400] md:mt-[2rem] leading-[2rem] mt-[2.5rem]'>Alan Martí</h2>
                    </div>
                    <p className='ml-[8.5rem] mt-[-2rem] relative md:bottom-[0.5rem] md:mt-[-18px] font-[400] text-[#391400] text-[16px]'>Meta Inc.</p>
                </div>

                <div className='w-[329px] h-[370px] md:w-[520px] md:h-[336px] border-[1px] md:mt-[2rem] border-solid border-[#F3D1BF] rounded-[10px] '>
                    <img src={image16} className='ml-[2rem] mt-[2rem]' alt=''></img>
                    <h3 className='mt-[2rem] w-[275px] ml-[2rem] font-[400] md:w-[420px] text-[16px] text-[#391400A3] leading-[2.5rem]'>Provide your business with a variety of digital solutions to promote your product or service online.</h3>
                    <div className='ml-[2rem] flex gap-[1.5rem]'>
                        <img src={image18} className='mt-[2rem]' alt=''></img>
                        <h2 className='font-[700] text-[24px] text-[#391400] md:w-[300px] w-[50px] leading-[2rem] mt-[2rem]'>Richardo Kann</h2>
                    </div>
                    <p className='ml-[8.5rem] mt-[-0.7rem] font-[400] relative md:bottom-[2rem] text-[#391400] text-[16px]'>Photogram</p>
                </div>

            </div>

            <div className=' justify-items-center md:flex md:justify-center '>
                <div className='w-[329px] md:justify-center  h-[400px] md:w-[586px] md:h-[340px] border-[1px] border-solid border-[#F3D1BF] rounded-[10px]'>
                    <img src={image16} className='ml-[2rem] mt-[2rem]' alt=''></img>
                    <h3 className='mt-[2rem] w-[275px] md:w-[450px] ml-[2rem] font-[400] text-[16px] text-[#391400A3] leading-[2.5rem]'>Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.</h3>
                    <div className='ml-[2rem] flex gap-[1.5rem]'>
                        <img src={image20} className='mt-[2rem]' alt=''></img>
                        <h2 className='font-[700] text-[24px] md:w-[300px] text-[#391400] w-[50px] leading-[2rem] mt-[2rem]'>Graham Griffiths</h2>
                    </div>
                    <p className='ml-[8.5rem] relative md:bottom-[2rem] mt-[-0.7rem] font-[400] text-[#391400] text-[16px]'>Twitor</p>
                </div>
        
           
                <div className='w-[329px] h-[400px] md:mt-[-3.7rem] border-[1px] border-solid border-[#F3D1BF]  md:h-[336px] md:w-[520px] s] '>
                    <img src={image16} className='ml-[2rem] mt-[2rem]' alt=''></img>
                    <h3 className='mt-[2rem] w-[275px] ml-[2rem] font-[400] md:w-[420px] text-[16px] text-[#391400A3] leading-[2.5rem]'>Promote your product or service online and help you hit your marketing goals and grow your business.</h3>
                    <div className='ml-[2rem] flex gap-[1.5rem]'>
                        <img src={image19} className='mt-[2rem]' alt=''></img>
                        <h2 className='font-[700] text-[24px] md:w-[200px] text-[#391400] w-[50px] leading-[2rem] mt-[2rem]'>Maria Trofimova</h2>
                    </div>
                    <p className='ml-[8.5rem] mt-[-0.7rem] relative font-[400]  md:bottom-[2rem] text-[#391400] text-[16px]'>Whochat</p>
                </div>
            </div>

            <div className=' flex justify-center'>
                <button className=' w-[138px] mt-[2rem] rounded-[10px] h-[48px] bg-[#FFFFFF]'>See All</button>
            </div>


            <div className='text-center'  >
                <p className='mt-[4rem]  font-[400] text-[16px] leading-[2rem] tracking-[3px] text-[#EF6D58]'>PRICING</p>
                <h2 className='mt-[8px] text-[#391400] font-[800] text-[40px] leading-[3rem]' >Check Our Pricing Plans</h2>
            </div>

            <div className='md:flex justify-items-center md:mt-[4rem] md:justify-evenly' >
                <div className=' mt-[2rem] w-[329px] relative md:left-[2rem]  h-[512px] border-[1px] border-solid border-[#F3D1BF]' >
                    <Pricing
                     sectionTitle="CONSULTATION"
                     mainTitle="Free"
                    description="Your digital marketing efforts, instead of handling in-house."
                    features={features}
                    buttonText="Contact Us"
                    plusIcon={plus}
                    minusIcon={minus}
                   />
                   <button className='w-[154px] h-[48px] bg-[#FFFFFF] font-[900] text-[14px] text-[#391400] ml-[2rem] mt-[2rem] rounded-[10px] text-center '>Contact Us</button>
                </div>

                <div className='w-[329px]   h-[593px] md:h-[544px] relative md:right-[1px] border-[1px] border-[solid] border-[#F3D1BF] bg-[#FFFFFF]'>
                    <Pricing
                    sectionTitle="DESIGN"
                    mainTitle="$1500"
                    description="Provide your business with a variety of digital solutions to promote."
                    features={features}
                    buttonText="Contact Us"
                    plusIcon={plus}
                    minusIcon={minus}
                    />
                    <button className='w-[154px] h-[48px] font-[900] text-[14px] text-[#FFFFFF] bg-[#EF6D58] ml-[2rem] mt-[2rem] rounded-[10px] text-center '>Contact Us</button>
                </div>

                <div className='  w-[329px]  h-[512px] md:right-[2rem] relative md:top-[2rem] border-[1px] border-solid border-[#F3D1BF]'>
                    <Pricing
                    sectionTitle="DESIGN+CODE"
                    mainTitle="$2900"
                    description="Help you hit your marketing goals and grow your business."
                    features={features}
                    buttonText="Contact Us"
                    plusIcon={plus}
                    minusIcon={minus}
                    />
                    <button className='w-[154px] h-[48px] bg-[#FFFFFF] font-[900] text-[14px] text-[#391400] ml-[2rem] mt-[2rem] rounded-[10px] text-center '>Contact Us</button>
                </div>
            </div>

            <div className='md:flex justify-items-center md:justify-evenly md:mt-[5rem]'>

                <div className='text-center md:text-left mt-[4rem]'>
                    <p className='font-[400] text-[16px] tracking-[3px] text-[#EF6D58] leading-[2rem]'>FAQ</p>
                    <h1 className='font-[800]  md:w-[350px] text-[40px] mt-[1rem] text-[#391400] leading-[3rem]'>Frequently Asked Questions</h1>
                    <p className='font-[400] text-[16px] mt-[10px  md:w-[410px] text-[#391400A3] leading-[2rem] '>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                    <p className='font-[400] text-[16px] mt-[10px]  text-[#391400A3] leading-[2rem]'>Contact Us</p>
                </div>

                <div className='w-[329px]  md:w-[570px] md:h-[273px] rounded-[10px]  mt-[2rem] h-[417px] border-[1px] border-solid border-[#F3D1BF] bg-[#FFFFFF] '>
                    <div className='flex ml-[2rem] mt-[2.5rem] md:gap-[3rem] gap-[15px] '>
                        <h2 className='font-[700] text-[24px] md:w-[400px] w-[226px] leading-[2rem] text-[#391400]'>A digital agency is a business</h2>
                        <img src={up} className='w-[32px] h-[32px] mt-[6px]' alt=''></img>
                    </div>
                    <p className='font-[400] mt-[2rem] md:mt-[1rem] ml-[2rem] md:w-[440px] text-[16px] w-[273px] text-[#391400A3] leading-[2rem]'>Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of 
                    digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.</p>
                    
                    <div className='relative md:bottom-[7px]'>

                        <div className='w-[329px] md:w-[570px] text-[#391400]  md:h-[113px] h-[145px] ] border-[1px] border-solid mt-[3.6rem] rounded-[10px] border-[#F3D1BF]'>
                            <Box text= "Hire to outsource your digital"/>
                       </div>
                       
                       <div className='w-[329px] h-[145px] text-[#391400]   md:w-[570px] md:h-[113px] border-[1px] border-solid  rounded-[10px] border-[#F3D1BF]'>
                        <Box text= "Marketing efforts"/>
                       </div> 

                       <div className='w-[329px] h-[145px] text-[#391400]  md:w-[570px] md:h-[113px] border-[1px] border-solid  rounded-[10px] border-[#F3D1BF]'>
                        <Box text= "Can provide your business"/>
                       </div>

                    </div>
                </div>
            </div>

            

            
            <h1 className='font-[800] text-center text-[40px] text-[#391400] leading-[3rem] mt-[30rem]'>Our Awards</h1>

            <div className='justify-items-center'>
                <div className='w-[329px] md:w-[1100px] h-[1px]   bg-[#F3D1BF] mt-[2rem] '></div>
            </div>


            <div className='md:text-center'>
                <Award 
                 imgSrc={image21}
                 title='SOFA'
                 date='25 Oct, 2021'
                 description='Awwwards'
                 iconSrc={icon9}
                />
            </div>

            <div className='justify-items-center'>
                <div className='w-[329px] h-[1px] md:w-[1100px] bg-[#F3D1BF] mt-[2rem] '></div>
            </div>

            <div>
                <Award 
                 imgSrc={image22}
                 title='KeyBoard'
                 date='19 Oct, 2021'
                 description='CSS Design Awards'
                 iconSrc={icon10}
                />
            </div> 

            <div className='justify-items-center'>
                <div className='w-[329px] h-[1px] md:w-[1100px] bg-[#F3D1BF] mt-[2rem] '></div>
            </div>

            <div>
                <Award 
                 imgSrc={image23}
                 title='Work Media'
                 date='7 Oct, 2021'
                 description='The FWA'
                 iconSrc={icon11}
                />
            </div>

            <div className='justify-items-center'>
                <div className='w-[329px] h-[1px] md:w-[1100px] bg-[#F3D1BF] mt-[2rem] '></div>
            </div>

            <div className='mt-[2rem] md:mt-[3rem] flex gap-[10px] text-center justify-center    md:flex  '>
                <p className='text-[#391400A3] md:text-center font-[400] text-[16px]'>Want more awards?</p>
                <p className='text-[#391400] font-[400] text-[16px]'>Explore Now</p>
            </div>

            <div className='mt-[3rem] justify-center justify-items-center  md:justify-around md:flex '>
                <div className='text-center md:text-left'>
                    <p className='font-[400] text-[16px] text-[#EF6D58] leading-[2rem] tracking-[3px]'>OUR BLOG</p>
                    <h2 className='font-[800] md:w-[318px] text-[35px] leading-[2rem] mt-[10px] text-[#391400]'>Latest Blog Articles</h2>
                </div>
                <button className='w-[170px] h-[48px] mt-[15px] md:mt-[4rem] rounded-[10px] relative  bg-[#FFFFFF] text-center font-[900] text-[14px]'>Discover All</button>
            </div>

            <div className='md:flex md:justify-center justify-items-center'>
                <div>
                    <Blog 
                    imgSrc={image24}
                    title='Stories'
                    description='Agency is a business you hire to outsource'
                    date='5 Nov, 2021'
                   />
                </div>

                <div>
                    <Blog 
                    imgSrc={image25}
                    title='Design'
                    description='Outsource your digital marketing efforts'
                    date='29 Oct, 2021'
                    />
                </div>

                <div>
                    <Blog 
                    imgSrc={image26}
                    title='Marketing'
                    description='Your business with a variety of digital'
                    date='21 Oct, 2021'
                    />
                </div>
            </div>

            <div className='justify-items-center'>
                <div className='w-[329px] h-[1px] md:w-[1100px]  bg-[#F3D1BF] mt-[2rem] md:mt-[4rem] '></div>
            </div>
            

            <div className='md:flex justify-items-center md:justify-evenly'>
                <h1 className='font-[800] text-[40px]  mt-[3rem] text-[#391400] leading-[3rem]'>Newsletter</h1>
                <div className='md:mt-[1rem] md:gap-[2rem] md:flex'>
                    <div className='w-[329px] h-[48px] mt-[2rem] bg-[#FFFFFF] border-[1px] border-solid border-[#F3D1BF]'>
                        <input type='text' placeholder='Your email' style={{marginLeft:"10px", marginTop:"10px", fontWeight:"400px",fontSize:"16px", color:'#391400A3' }}></input>
                    </div>
                    <button className='w-[329px] md:w-[170px]  h-[48px]  mt-[2rem] bg-[#FFFFFF] font-[900] text-[16px] leading-[14.35px] text-center border-[1px] border-solid border-[#F3D1BF]'>SUBSCRIBE</button>
                </div>
                
            </div>
               
            <div className='md:w-[1280px] md:mt-[1rem] justify-items-center md:justify-items-start  '>

                <div className='mt-[2rem] hidden md:block md:relative '>
                    <div>
                        <img src={map} className='  w-[427px] md:w-[1280px] md:h-[720px]' alt=''></img>
                        <img src={icon13} className='relative md:relative  md:left-[50rem] bottom-[24rem] md:bottom-[25rem]  left-[8rem]' alt=''></img>  
                    </div>

                    <div className='w-[329px] md:w-[470px] md:h-[464px] h-[415px] md:top-[5rem]  md:ml-[5rem]  md:absolute bg-[#FFFFFF] rounded-[10px]  mt-[4rem]'>
                        <div className='ml-[2rem]'>
                            <h1 className=' font-[700] relative top-[3rem] text-[24px] leading-[2rem]'>Get In Touch</h1>
                        <input text="" placeholder='Your email' className='w-[273px] md:w-[374px] rounded-[6px] mt-[4rem] h-[48px] border-solid border-[1px] font-[400] p-[10px] text-[16px] border-[#F3D1BF] '></input>
                        <div className='flex relative'>
                            <input text="text" placeholder='Subject'  className='w-[273px] md:w-[374px] rounded-[6px]  mt-[1rem] h-[48px] border-solid border-[1px] font-[400] p-[10px] text-[16px] border-[#F3D1BF] '></input>
                            <img src={icon12} className='w-[10px] h-[6px] relative top-[2.5rem] right-[2rem]' alt=''></img>
                        </div>
                        <div className='w-[273px] md:w-[374px]   relative mt-[1rem] rounded-[6px] h-[96px] border-solid border-[1px] border-[#F3D1BF]'>
                            <input text="text" placeholder='Message' className='ml-[10px]   mt-[10px] w-[273px] '></input>
                        </div>
                        <button className='relative left-[7.3rem] font-[900] text-[14px] text-[#FFFFFF] top-[1rem] w-[154px] h-[48px] bg-[#EF6D58] rounded-[6px]' >SUMMIT NOW</button> 
                    </div> 
                </div> 
                    
                </div>
                
                <div className='w-[329px] md:w-[470px] md:h-[464px] h-[415px] md:hidden md:top-[5rem]    md:relative bg-[#FFFFFF] rounded-[10px]  mt-[4rem]'>
                    <div className='ml-[2rem]'>
                        <h1 className=' font-[700] relative top-[3rem] text-[24px] leading-[2rem]'>Get In Touch</h1>
                        <input text="" placeholder='Your email' className='w-[273px] md:w-[374px] rounded-[6px] mt-[4rem] h-[48px] border-solid border-[1px] font-[400] p-[10px] text-[16px] border-[#F3D1BF] '></input>
                        <div className='flex relative'>
                            <input text="text" placeholder='Subject'  className='w-[273px] md:w-[374px] rounded-[6px]  mt-[1rem] h-[48px] border-solid border-[1px] font-[400] p-[10px] text-[16px] border-[#F3D1BF] '></input>
                            <img src={icon12} className='w-[10px] h-[6px] relative top-[2.5rem] right-[2rem]' alt=''></img>
                        </div>
                        <div className='w-[273px] md:w-[374px]   relative mt-[1rem] rounded-[6px] h-[96px] border-solid border-[1px] border-[#F3D1BF]'>
                            <input text="text" placeholder='Message' className='ml-[10px]   mt-[10px] w-[273px] '></input>
                        </div>
                        <button className='relative left-[7.3rem] font-[900] text-[14px] text-[#FFFFFF] top-[1rem] w-[154px] h-[48px] bg-[#EF6D58] rounded-[6px]' >SUMMIT NOW</button> 
                    </div> 
                </div> 
                <div className='mt-[2rem] md:hidden   '>
                    <img src={map} className='' alt=''></img>
                    <img src={icon13} className='relative md:relative  md:left-[50rem] bottom-[24rem] md:bottom-[25rem]  left-[8rem]' alt=''></img>  
                </div>
            </div>
            
            <div className=' justify-items-center md:justify-center md:mt-[3rem] md:flex'>
                {/* <div className='md:ml-[2rem] w-[329px] h-[192px] border-[1px] rounded-[10px] border-[#F3D1BF] border-solid ml-[2rem] mt-[-2rem]'></div> */}
                <div className=''>
                    <Contact
                    imgSrc={icon14}
                    title={'PHONE'}
                    phoneNo={'+1 (234) 567-89-00'}  
                   />
                </div>

                <div className='mt-[2rem] md:mt-[0px]'>
                    <Contact
                    imgSrc={icon15}
                    title={'EMAIL'}
                    phoneNo={'info@agency.com'}  
                    />
                </div>

                <div className='mt-[2rem] md:mt-[0px]'> 
                    <Contact
                    imgSrc={icon16}
                    title={'ADDRESS'}
                    phoneNo={'2247 Lunetta Street, TX 76301'}  
                   />
                </div>
            </div>

            <div className='justify-items-center'>
                <div className='w-[329px] h-[784px] md:w-[1170px] md:mt-[4rem] md:h-[500px] bg-[#EF6D58] rounded-[6px] mt-[2rem]'>
                    <div className='ml-[2rem] md:ml-[4rem] md:flex '>
                        <div className='md:mt-[3rem]'>
                            <img src={image27}  className=' md:w-[444px] md:left-[35rem] md:relative  md:h-[323px] top-[2rem]' alt=''></img>
                        </div>
                        <div className='relative md:absolute md:mt-[3rem] md:ml-[3rem] '>
                            <h1 className='mt-[4rem] w-[250px] md:w-[270px] font-[800] text-[40px] leading-[3rem] text-[#FFFFFF]'>We’re Help To Build Your Dream Project</h1>
                            <p className='text-[#FFFFFFA3] mt-[2rem] md:w-[420px] w-[250px] font-[400] text-[16px] leading-[2rem]'>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                            <button className='w-[154px] h-[48px] mt-[1rem] rounded-[6px] bg-[#FFFFFF] font-[900] text-[14px] leading-[14.35px] text-[center] '>CONTACT US</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:flex md:justify-evenly  justify-items-center '>
                <h1 className='font-[700] text-[24px] text-center md:text-left  mt-[4rem] leading-[2rem]'>Agency</h1>
                <div className='md:flex md:gap-[10rem]'>
                    <div className='mt-[3rem] md:mt-[4rem]  text-center'>
                        <h3 className='text-center font-[400] text-[16px] text-[#EF6D58] tracking-[3px] leading-[2rem]'>MENU</h3>
                        <p className='text-center  leading-[2rem] font-[400] text-[#391400] text-[16px]'> About </p>
                        <p className='text-center  leading-[2rem] font-[400] text-[#391400] text-[16px]'> Service  </p>
                        <p className='text-center  leading-[2rem] font-[400] text-[#391400] text-[16px]'>  Blog  </p>
                        <p className='text-center  leading-[2rem] font-[400] text-[#391400] text-[16px]'> Contact </p>
                    </div>
                    <div className='mt-[3rem] md:mt-[4rem] text-center'>
                        <h3 className='text-center font-[400] text-[16px] text-[#EF6D58] tracking-[3px] leading-[2rem]'>SERVICE</h3>
                        <p className='text-center  leading-[2rem] font-[400] text-[#391400] text-[16px]'> Design </p>
                        <p className='text-center  leading-[2rem] font-[400] text-[#391400] text-[16px]'> Development </p>
                        <p className='text-center  leading-[2rem] font-[400] text-[#391400] text-[16px]'> Marketing</p>
                        <p className='text-center  leading-[2rem] font-[400] text-[#391400] text-[16px]'>See more</p>
                    </div> 

                </div>

                <div className='md:mt-[4rem] flex   gap-[10px] mt-[2.5rem]  md:gap-[1rem]'> 
                    <div className=' w-[48px] h-[48px] bg-[#EF6D58] rounded-[5rem]'>
                        <img src={icon17} className='md:mt-[1rem] mt-[1rem] ml-[1.1rem] md:ml-[1.1rem]' alt=''/>
                    </div>
                    <div className=' w-[48px] h-[48px] bg-[#EF6D58] rounded-[5rem]'>
                        <img src={icon18} className='md:mt-[1rem] mt-[1rem] ml-[1.1rem] md:ml-[1.1rem]' alt=''/>
                    </div>
                    <div className=' w-[48px] h-[48px] bg-[#EF6D58] rounded-[5rem]'>
                         <img src={icon19} className='md:mt-[1rem] mt-[1rem] ml-[1.1rem] md:ml-[1.1rem]' alt=''/>
                    </div>
                </div> 

            </div>
            <div className='justify-items-center'>
                <div className='w-[325px] h-[1px]  md:w-[1120px]  bg-[#F3D1BF] mt-[2rem] '></div>
            </div>

            <div className='md:flex block mt-[2rem] justify-items-center md:justify-evenly text-center  md:mt-[3rem]'>
                <p className=' w-[200px] text-center '>Copyright © 2022 Laaqiq. All Rights Reserved.</p>
                <div className='md:flex flex mt-[1rem] gap-[5rem]  relative '>
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
           
        </div>
            
            
            
    </div>
   
)}
export default Home
    
      