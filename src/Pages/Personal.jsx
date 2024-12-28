import React from 'react'
import picture from "../Image/picture.png"
import togg from "../Image/togg.png"
import personal from "../Image/Personal.png"
import icon2 from "../Image/icon2.png"
import icon4 from "../Image/icon4.png"
import plus from "../Image/plus .png"
import Service from '../component/Service'
import Bitmap6 from "../Image/Bitmap6.png"
import Bitmap13 from "../Image/Bitmap13.png"
import icon15 from "../Image/icon15.png"
import icon16 from "../Image/icon16.png"
import icon6 from "../Image/icon6.png"
import image4 from "../Image/image4.png"
import image5 from "../Image/image5.png"
import Portfoilo from '../component/Portfoilo'
import image6a from "../Image/image6a.png"
import image28 from "../Image/image28.png"
import Contact1 from '../component/Contact1'
import icon20 from "../Image/icon20.png"
import icon21 from "../Image/icon21.png"
import image29 from "../Image/image29.png"
import Text from '../component/Text'
import icon7 from "../Image/icon7.png"
import image7 from "../Image/image7.png"
import image8 from "../Image/image8.png"
import image16 from "../Image/image16.png"
import image20 from "../Image/image20.png"
import image17 from "../Image/image17.png"
import Testimonial from '../component/Testimonial'
import image18 from "../Image/image18.png"
import up from "../Image/up.png"
import Box from '../component/Box'
import Bitmap1 from "../Image/Bitmap1.png"
import Bitmap2 from "../Image/Bitmap2.png"
import Bitmap3 from "../Image/Bitmap3.png"
import Bitmap4 from "../Image/Bitmap4.png"
import Bitmap5 from "../Image/Bitmap5.png"
import image24 from "../Image/image24.png"
import Blog from '../component/Blog'
import image25 from "../Image/image25.png"
import image26 from "../Image/image26.png"
import Triangle from "../Image/Triangle.png"
import icon14 from "../Image/icon14.png"
import Contact2 from '../component/Contact2'
import Bitmap8 from "../Image/Bitmap8.png"
import Bitmap7 from "../Image/Bitmap7.png"
import Bitmap9 from "../Image/Bitmap9.png"
import Bitmap10 from "../Image/Bitmap10.png"
import Bitmap11 from "../Image/Bitmap11.png"
import Bitmap12 from "../Image/Bitmap12.png"
import icon17 from "../Image/icon17.png"
import icon18 from "../Image/icon18.png"
import icon19 from "../Image/icon19.png"
function Personal() {
  return (

    <div className='bg-[white] h-[100svh] grid'>
        <div className='h-[950px] md:h-[1280px] xl:h-[750px]  bg-[#28293E] '>

            <div className='mx-auto px-4 py-6 flex justify-between  md:justify-between items-center ' >
                <div className='flex  items-center'>
                    <img src={personal} alt="" className=' mr-4 mt-[1rem]' />
                </div>

                <div className='sm:hidden md:flex lg:flex hidden  space-x-8 ' >
                    <ul className='flex text-[16px] flex-col  md:flex-row gap-[3rem] md:gap-[4rem] lg:gap-[8rem]  sm:gap-[1rem]  mt-[10px] md:relative    text-center  font-[300] text-[#ffffffa3] '>
                        <li>About</li>
                        <li>Service</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <img src={togg} className="text-white md:hidden w-[50px] h-[50px]  flex"></img>

                <div className='hidden md:flex'>
                    <button className=' w-[138px] h-[48px] mt-[10px] text-center font-[900] text-[14px] text-[#FFFFFF] leading-[14.35px] rounded-[6px] border-[1px] border-solid md:ml- border-[#FFFFFF4B]'>CONTACT</button>
                </div>
                
            </div>

            <div className='md:hidden flex items-center justify-center '>
                <img src={Bitmap13} className=' grid  sm:mt-[2rem]  sm:w-[500px]  h-[400px] ' alt=''/>
            </div>
            
            <div>
                <div className='xl:flex xl:gap-[3rem] xl:mt-[2rem] xl:items-center xl:justify-center  '>
                    <div className=' sm:mt-[3rem] '>
                        <p className='mt-[1rem] text-center   text-[#EF6D58] text-[16px] font-[400]' >GABRIEL PIRES</p>

                        <h1 className='text-[80px] text-center  xl:w-[700px] lg:text-[155px] lg:leading-[8.5rem] w-[full] sm:text-[100px] md:text-[120px] sm:leading-[7rem] relative xl:text-[100px] xl:leading-[6rem] leading-[5rem] font-[800]  text-white '>The Simple, Clean Design</h1>

                        <p className='font-[600px] sm:text-[20px] text-center xl:w-[700px] xl:text-[30px] md:text-[25px] text-[20px] lg:text-[30px]   relative w-[full] mt-[1rem] text-[#FFFFFFA3]'>Agency provides a full service range including technical skills, design, business understanding.</p> 

                        <div className='flex justify-center items-center'> 
                            <button className='w-[154px]  rounded-[6px] relative h-[48px] bg-[#EF6D58] mt-[2rem] text-white font-[900] text-[14px]'> How We Work</button>
                        </div>

                        
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={Bitmap13} className='hidden  md:mt-[2rem] xl:mr-[5rem]  md:grid  ' alt=''/>
                    </div>
                    
                </div>
            </div>
            
        </div>
        <div className='h-[1100px] lg:h-[700px]  md:h-[1200px] sm:h-[1200px] bg-[#FDF0E9]'>
            <div className='text-center w-full  '>
                <p className=' font-[400]  mt-[4rem] leading-[2rem] text-[#EF6D58] text-[16px] tracking-[3px]'>SERVICE</p>
                <h2 className='font-[800]   relative  md:text-center text-[#391400] text-[40px] leading-[3rem]'>How I Can Help You With</h2>
            </div>
            <div className=' lg:flex lg:items-center  lg:justify-center'>
                <div className='mt-[2rem]   relative  '>
                    <Service
                    imgSrc={icon2}
                    title ="Design"
                    description="Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house."
                    subtitle="Learn More"
                    iconSrc={plus}
                    />
                </div>


                <div className="md:mt-[2rem] ">
                    <Service
                    imgSrc={icon4}
                    title ="Development"
                    description="Hire to outsource your digital marketing efforts, instead of handling in-house can provide your business."
                    subtitle="Learn More"
                    iconSrc={plus}
                    />
                </div>
            </div>
            <div className='flex mt-[2rem] items-center md:mt-[3rem] justify-center' >
                <p className='text-center font-[300] xl:text-[20px]'>Want more service?</p>
                <p className='text-center font-[600] xl:text-[20px]'>Explore Now</p>
            </div>
        </div> 

        <div className='h-[1600px] md:h-[1700px] xl:h-[700px]  bg-[#28293E]'>

            <div className=''>
                <div className=' xl:justify-between mx-[4rem] px-4 py-3 xl:flex items-center justify-center '>
                    <div>
                        <div>
                            <p className=' text-center text-[#EF6D58]   font-[400] leading-[2rem] tracking-[3px] mt-[3rem] text-[16px]'>PORTFOLIO</p>
                            <h2 className='font-[800] md:text-[40px] text-[30px] relative  text-center leading-[3rem]  text-[#FFFFFF]'>Latest Work</h2>
                        </div>
                        
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className='md:w-[170px] w-[150px] h-[30px] mt-[1rem]  md:h-[48px] border-solid border-[1px]  rounded-[10px] font-[900] text-[14px] text-[#FFFFFF] text-center ' >EXPLORE MORE</button> 
                    </div>
                   
                </div>  
            </div>

            <div className=' flex items-center justify-center  '>
                <div className='xl:flex xl:gap-[2rem]'>
                    <div className='w-[323px] mt-[2rem] md:w-[390px]  rounded-[10px]  h-[200px]' >
                        <Portfoilo
                        image={image4}
                        title="SOFA"
                        subtitle="Design"
                        textColor="#391400"
                        bgColor="white"
                        />
                    </div>
                    <div className='w-[323px] md:w-[390px] rounded-[10px] mt-[15rem] xl:mt-[2rem]  h-[200px] '>
                        <Portfoilo
                        image={image5}
                        title="KeyBoard"
                        subtitle="Branding"
                        textColor="#391400"
                        bgColor="white"
                        />       
                    </div>

                    <div className='w-[323px]  md:w-[390px]  mt-[15rem] xl:mt-[2rem] rounded-[10px] relative ' >
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
            </div>
        </div> 

        <div className='bg-[#FDF0E9] md:h-[900px] h-[1300px]'>

            <div className='flex items-center justify-center '>
                <div className='md:flex md:gap-[3rem] lg:gap-[5rem] xl:gap-[7rem]'>
                    <img src={image28} className='mt-[5rem] lg:w-[500px] ' alt=''></img>
                    <div className='ml-[2rem] md:mt-[8rem] '>
                        <p className=' tracking-[3px] leading-[2rem] font-[400] text-[#EF6D58] text-[16px]'>GABRIEL PIRES</p>
                        <h1 className='font-[800] w-[290px] text-[40px] leading-[3rem] text-[#391400]'>Professional Web Designer</h1> 
                        <h3 className='mt-[1rem] text-[#391400] text-[20px] font-[400] leading-[2rem]'>Provides a full service range</h3>
                        <p className='font-[400] mt-[1rem] xl:w-[500px] w-[330px] md:w-[300px] text-[16px] text-[#391400A3] leading-[2rem]'>Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>
                        <button className='w-[138px] h-[48px] font-[900] text-[14px] text-[#391400] mt-[1.5rem] bg-[#FFFFFF] rounded-[6px]'>About Us</button>
                    </div>
                </div>
            </div>
           
           <div className='flex items-center justify-center'>
            <div className='mt-[4rem] block md:flex'>
                <div className='realtive   md:mt-[2rem] h-[150px]  border-[1px]  border-[#F3D1BF] border-solid  '>
                    <Contact1
                    imgSrc={icon20}
                    title={'42%'}
                    subTitle={'Years of experience'}  
                   />
                </div>

                <div className='md:mt-[2rem] realtive  w-[350px] h-[150px]    border-[1px]  border-[#F3D1BF] border-solid '>
                    <Contact1
                    imgSrc={icon21}
                    title={'73+'}
                    subTitle={'Projects Done'}  
                   />
                </div>
            </div> 
           </div>
        </div>

        <div className='bg-[#28293E] md:h-[600px] xl:h-[700px] lg:h-[900px] h-[900px]'>

                <div className=' md:flex md:justify-center lg:gap-[5rem] lg:mt-[2rem]  md:mt-[1rem]'>

                    <div className=' flex items-center justify-center'>
                        <img src={image29} className=' md:hidden  mt-[2rem]' alt=''/>
                    </div>

                    <div className=' justify-items-center md:justify-items-start '>

                        <div className=' md:w-[400px]  xl:w-[600px] text-center   md:text-left   mt-[2rem]'>
                            <p className='font-[400]  text-[16px] text-[#EF6D58] tracking-[3px] leading-[2rem]'>FEATURES</p>
                            <h1 className='text-[60px] lg:text-[70px] xl:w-[600px]  w-[400px] md:text-[50px]  relative xl:text-[90px] leading-[4rem] xl:leading-[5rem] lg:leading-[4rem] font-[800]  text-white '>Give Your Site A New Look</h1>
    
                            <p className='font-[400px] lg:w-[400px] xl:w-[500px] xl:text-[30px] md:text-[25px] text-[25px]  lg:text-[20px] text-white  relative md:w-[400px] w-[450px] mt-[1rem]'>Service range including technical skills, design, business understanding.</p>

                            <div className=' justify-items-center md:justify-items-start '>
                                <div style={{color:'white', marginTop:'2rem',}} className='' >
                                    <Text text="Range including technical skills"/>
                                    < Text text="Business understanding"/>
                                    <Text text="Partner on the long run"/> 
                                </div>
                            </div>

                        </div>
                    </div>
                    
                    <div className=' justify-items-center md:justify-items-start'>
                        <div className=' hidden md:flex  md:mt-[2rem]  mt-[2rem]'>
                            <img src={image29} className='  ' alt=''/>
                        </div>
                    </div>
                    

                </div>
            

        </div> 
        <div className=' bg-[#F9E5DA] lg:h-[600px] md:h-[600px] h-[700px] '>
            <div className='flex items-center justify-center'>
                <img src={icon7} className='  mt-[-2rem]' alt=''></img>
            </div>
            
            <div className=''>
                <div className='md:flex md:justify-evenly md:p-4'>
                    <div className=' text-center  '>
                        <p className='font-[400] text-[16px]  text-[#EF6D58] sm:leading-[2rem] tracking-[3px]'> Get Started</p>
                        <h2 className='font-[800] leading-[4rem] sm:text-[50px] lg:text-[80px] lg:w-[550px] md:text-[50px] text-[50px] md:leading-[5rem]  text-[#391400] '>We Help Companies Move Faster</h2>
                        <button className='mt-[16px] w-[154px] rounded-[10px] h-[48px] bg-[#EF6D58] text-[#FFFFFF]'>Contact Us</button> 

                    </div>

                    <div className=' text-center  md:mt-[1rem] mt-[10px] '>
                        <p className='font-[400px] lg:w-[400px] xl:w-[500px] xl:text-[30px] md:text-[25px] text-[25px]  lg:text-[20px] text-[#391400A3] relative w-[full] mt-[1rem]'>Put themselves in the merchant's shoes. It is meant to partner on the long run.</p>
                        
                        
                        <div className=' flex items-center justify-center mt-[1rem]'>
                            <img src={image8} className='  md:w-[250px] absolute  ml-[3rem]' alt=''></img>
                            <img src={image7} className='relative md:w-[400px] lg:top-[1.3rem]  top-[1rem] ' alt=''></img>
                        </div>
                    </div>

                </div>
            </div>
        </div> 


        <div className='bg-[#FDF0E9] md:h-[1400px] lg:h-[800px] sm:h-[1700px] h-[1700px]'>
            <p className='text-center font-[400] mt-[3rem] text-[16px] tracking-[3px]  text-[#EF6D58]' >Testimonials</p>
            <h1 className='text-center  md:mt-[1rem] font-[800] text-[#391400] leading-[3rem] text-[40px]'>What My Clients Saying</h1>

            <div className='flex items-center justify-center'>
                <div className='lg:flex  md:mt-[3rem]'>
                    <div className='w-[329px] h-[450px] md:w-[586px] relative lg:bottom-[3rem] lg:left-[2rem] lg:w-[391px] lg:h-[370px] md:h-[340px] mt-[3rem] border-[1px] border-solid border-[#F3D1BF] rounded-[10px] ml-[2rem]'>
                        <Testimonial
                        imgSrc={image16} 
                        title="Graham Griffiths" 
                        text="Twitor" 
                        description="Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety." 
                        picSrc={image20}
                        />
                    </div>

                    <div className='w-[329px] h-[470px]  md:w-[586px]  lg:w-[391px] lg:h-[432px] md:h-[340px] border-[1px] border-solid border-[#F3D1BF] rounded-[10px] ml-[2rem] bg-[#FFFFFF]'>
                        <Testimonial
                        imgSrc={image16} 
                        title="Alan Martí" 
                        text="Meta Inc." 
                        description="A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions." 
                        picSrc={image17}
                        />
                    </div>

                    <div className='w-[329px] h-[430px]  md:w-[586px] lg:right-[2rem] relative lg:w-[391px] lg:h-[370px] md:h-[340px] border-[1px] border-solid border-[#F3D1BF] rounded-[10px] ml-[2rem] '> 
                       <Testimonial
                       imgSrc={image16} 
                       title="Richardo Kann" 
                       text="Photogram" 
                       description="Provide your business with a variety of digital solutions to promote your product or service online." 
                       picSrc={image18}
                       />
                    </div>

                </div>
            </div> 
            <div className='flex items-center justify-center'>
                <button className='w-[138px]  mt-[2rem]  h-[48px] font-[900] text-[14px] text-[#391400] bg-[#FFFFFF] rounded-[10px]'>See All</button>
            </div>

            
        </div>

        <div className='h-[1650px] md:h-[1200px] lg:h-[1000px] bg-[#28293E]'>

            <div className='lg:flex lg:mt-[6rem] lg:justify-evenly'>
                <div className='flex items-center justify-center'>
                    <div className='mt-[3rem] lg:bottom-[5rem] text-center relative '>
                        <p className='font-[400] text-[16px] text-[#EF6D58] tracking-[2px] leading-[2rem]'>FAQ</p>
                        <h1 className='font-[800] mt-[1rem] lg:w-[450px] lg:leading-[4rem] text-[40px] lg:text-[70px]   leading-[3rem] text-[#FFFFFF]' >Frequently Asked Questions</h1>
                        <p className='font-[400] mt-[1rem] text-[#FFFFFFA3] w-[500px] leading-[2rem] text-[16px]'>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                        <button className='w-[145px] h-[48px] mt-[1rem] font-[400] text-[16px] leading-[2rem] text-[#391400] bg-[#FFFFFF] rounded-[10px]'>Contact Us</button>
                    </div>  

                </div>

                <div className='flex items-center justify-center'>
                    <div className=''>
                        <div className='w-[360px]  md:w-[570px] md:h-[273px] rounded-[10px]  mt-[2rem] h-[417px] border-[1px] border-solid border-[#F3D1BF] bg-[#FFFFFF] '>
                            <div className='flex ml-[2rem] mt-[2.5rem] md:gap-[3rem] gap-[2rem] '>
                                <h2 className='font-[700] text-[24px] md:w-[400px] w-[226px] leading-[2rem] text-[#391400]'>A digital agency is a business</h2>
                                <img src={up} className='w-[32px] h-[32px] mt-[6px]' alt=''></img>
                            </div>
                            <p className='font-[400] mt-[2rem] md:mt-[1rem] ml-[2rem] md:w-[440px] text-[16px] w-[303px] text-[#391400A3] leading-[2rem]'>Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of 
                            digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.
                            </p>
                        </div>
                        <div className='w-[360px] md:w-[570px] text-[#FFFFFF]  md:h-[113px] h-[145px]  border-[1px] border-solid rounded-[10px] border-[#F3D1BF]'>
                            <Box text= "Hire to outsource your digital"/>
                        </div>
                        <div className='w-[360px] md:w-[570px] text-[#FFFFFF]  md:h-[113px] h-[145px]  border-[1px] border-solid  rounded-[10px] border-[#F3D1BF]'>
                            <Box text= "Marketing efforts"/>
                        </div>
                        <div className='w-[360px] md:w-[570px]  text-[#FFFFFF] md:h-[113px] h-[145px]  border-[1px] border-solid rounded-[10px] border-[#F3D1BF]'>
                            <Box text= "Can provide your business"/>
                        </div>
                    </div> 

                </div> 
            </div>
    
            <div className='flex items-center justify-center '>
                <div className='  md:gap-[3rem] gap-[4rem] md:flex mt-[4rem]'>
                    <div className='flex md:gap-[4rem]  md:mt-[1rem]   gap-[4rem]'>
                        <img src={ Bitmap1} className=' w-[120px] md:w-[100px]' alt=''/>
                        <img src={Bitmap2} className=' w-[120px] md:w-[100px]' alt=''/>
                    </div>
                    <div className='mt-[2rem] md:gap-[4rem] flex gap-[4rem]'>
                        <img src={ Bitmap3} className='w-[120px] md:w-[100px] h-[40px]' alt=''/>
                        <img src={ Bitmap4} className=' w-[120px] md:w-[100px] h-[40px]' alt=''/>
                    </div>
                    <img src={ Bitmap5} className=' w-[120px] md:w-[100px] mt-[3rem] md:mt-[2rem]   h-[40px]' alt=''/> 
                </div>
                
            </div>  
        </div>  

        <div className='bg-[#FDF0E9] lg:h-[1500px] h-[1980px]'>
            <div className=' text-center  mt-[4rem]'>
                <p className='font-[400] text-[16px] leading-[2rem] text-[#EF6D58] tracking-[3px]'>OUR BLOG</p>
                <h1 className='font-[800] text-[40px] leading-[3rem]  mt-[1rem] text-[#391400]'> Latest Blog Articles</h1>
                <button className='w-[170px] h-[48px] mt-[2rem] rounded-[10px] font-[900] text-[14px] text-[#391400] bg-[#FFFFFF]'>Discover All</button>
            </div>

            <div className='flex items-center justify-center'>
                <div className='lg:flex lg:gap-[5rem]'>
                    <div className=''>
                        <Blog 
                        className="lg:w-[700px]"                       
                        imgSrc={image24} 
                        title='Stories'
                        description='Agency is a business you hire to outsource'
                        date='5 Nov, 2021'
                        />
                    </div>
                    <div>
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
                    

                </div>
            

            </div>
            <div className='flex items-center justify-center'>
                <div className=''>
                    <div className='w-[329px] h-[1px] lg:w-[1150px]  bg-[#F3D1BF] mt-[2rem] '></div>
                    <div className='lg:flex lg:gap-[3rem]'>
                        <div className='mt-[2rem] text-center'>
                            <h1 className='font-[700] text-[24px] text-[#391400] leading-[2rem]'>Newsletter</h1>
                            <p className='mt-[10px]  font-[400] text-[16px] leading-[25px] text-[#391400A3]'>A digital agency is a business you hire to outsource</p>
                        </div>

                        <div className='flex items-center justify-center'>
                            <div className='lg:flex lg:gap-[2rem] lg:mt-[3rem]'>
                                <div className='w-[359px] h-[48px] mt-[1rem] bg-[#FFFFFF] border-[1px] border-solid  rounded-[10px] border-[#F3D1BF]'>
                                    <input text="text" placeholder='Your email' className= 'ml-[1rem] w-[300px] border-none mt-[10px]'></input>
                                </div>
                                <button className='w-[359px] font-[900] text-[14px] h-[48px] mt-[1rem] bg-[#FFFFFF] border-[1px] border-solid  rounded-[10px]'>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>

                </div>                

            </div>


        </div> 

        <div className='h-[1150px] lg:h-[700px] bg-[#28293E]'>
            <div className=' items-center justify-center lg:justify-evenly lg:flex' >
                <div className='flex items-center justify-center'>
                    <div className='w-[409px] lg:w-[500px] h-[464px] relative rounded-[10px] lg:mt-[7rem]  mt-[3rem] bg-[#FFFFFF]'>
                        <div className='ml-[1rem]'>
                            <h2 className='font-[700] text-[24px] relative top-[3rem] leading-[2rem]'>Get In Touch</h2>
                            <div className='w-[380px]  lg:w-[450px] h-[48px] relative  top-[5rem] bg-[#FFFFFF] border-[1px] border-solid  rounded-[10px] border-[#F3D1BF]'>
                                <input text="text" placeholder='Your email' className= 'ml-[10px] w-[200px]  border-none mt-[10px]'></input>
                            </div>
                            <div className='w-[380px] lg:w-[450px] h-[48px] relative flex  justify-between p-2 top-[6rem] bg-[#FFFFFF] border-[1px] border-solid  rounded-[10px] border-[#F3D1BF]'>
                                <input text="text"  placeholder='subject'  className= 'ml-[10px] w-[200px] border-none mt-[px]'></input>
                                <select>
                                    <option  value="">none</option>
                                    <option  value="">Crk</option>
                                    <option value="">English</option>
                                    <option value="">Math</option>   
                                    <option value=""> Art</option>      
                                </select> 
                            </div>
                        </div>
                        <div className='w-[379px] lg:w-[450px] mt-[7rem]  ml-[1rem] h-[96px] border-[1px] border-solid  rounded-[10px] border-[#F3D1BF]'>
                            <input text="text" placeholder='Message' className= 'ml-[10px] border-none mt-[10px]'></input>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button className='w-[154px] font-[900] text-[14px] text-[#FFFFFF] h-[48px] mt-[1rem] ml-[9rem] lg:ml-[13rem] rounded-[10px] bg-[#EF6D58]'>SUBMIT NOW</button>
                        </div>
                        
                    </div>
                </div>

                <div className='flex items-center justify-center'>
                    <div>
                        <div className='mt-[3rem] text-center'>
                            <p className='font-[400] text-[#EF6D58] tracking-[3px] text-[16px] leading-[2rem]'>CONTACT</p>
                            <h2 className='font-[800] text-[40px] mt-[1rem] leading-[3rem] text-[#FFFFFF]'>CONTACT ME</h2>
                            <p className='font-[400] w-[410px] text-[16px] leading-[2rem] text-[#FFFFFFA3]'>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                        </div>
                        <div>
                            <Contact2
                            iconSrc={icon15}
                            title="2247 Lunetta Street, TX 76301"
                            />

                            <Contact2
                            iconSrc={icon14}
                            title="+1 (234) 567-89-00"
                            />

                            <Contact2
                            iconSrc={icon16}
                            title="info@agency.com"
                            />
                        </div>
                    </div>
                </div>

            </div>
                
        </div>

        <div className='bg-[#FDF0E9] lg:h-[900px] h-[1499px]'>
            <div className='lg:flex   lg:justify-evenly'>
                <div className='flex items-center justify-center'> 
                   <img src={Bitmap6} className='mt-[2rem]' alt=''></img>
                </div>

                <div className='mt-[2rem] lg:w-[700px] lg:mt-[4rem] text-center '>
                    <p className='font-[400] text-[16px] tracking-[3px] leading-[2rem] text-[#EF6D58]'>GABRIEL PIRES</p>
                    <h2 className='font-[800] sm:text-[70px] md:text-[80px] sm:leading-[4.5rem]  text-center mt-[1rem] text-[#391400] md:leading-[5rem] leading-[3rem] text-[50px]'>Help To Build Your Dream Project</h2>
                    <p className='font-[400]  text-center md:text-[25px] lg:text-[25px] sm:text-[19px]   text-[16px]  leading-[1.5rem] md:leading-[2rem] mt-[1rem] text-[#391400A3]'>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                    <button className='w-[154px] h-[48px] mt-[1rem] rounded-[10px] font-[900] text-[14px] text-[#FFFFFF] bg-[#EF6D58]'>CONTACT ME</button>
                </div>

            </div>

            <div className='flex items-center justify-center'>
                <div className='lg:flex lg:mt-[4rem]'>
                    <div className=' flex ml-[rem] lg:mt-[0px] mt-[4rem]'>
                        <img src={Bitmap7} className='w-[250px] h-[200px]' alt=''></img>
                        <img src={Bitmap8} className='w-[250px] h-[200px]' alt=''></img>
                    </div>
                    
                    <div className='flex'>
                        <img src={Bitmap9} className='w-[250px] h-[200px]' alt=''></img>
                        <img src={Bitmap10} className='w-[250px] h-[200px]' alt=''></img>
                    </div>

                    <div className='flex'>
                        <img src={Bitmap11} className='w-[250px] h-[200px]' alt=''></img>
                        <img src={Bitmap12} className='w-[250px] h-[200px]' alt=''></img>
                    </div>

                </div>
                

            </div>    
        </div>

        <div className='h-[900px] lg:h-[500px] bg-[#28293E]'>
            <div className='flex justify-center items-center'>
                
               

                <div className='lg:flex lg:mt-[5rem] lg:justify-evenly lg:gap-[10rem]'>
                    <h1 className='text-center mt-[4rem] font-[700] text-[24px] leading-[2rem] text-[#FFFFFF]'>Personal</h1>
                    <div className='mt-[2rem] md:mt-[2rem]  text-center'>
                        <h3 className='text-center font-[400] text-[16px] text-[#EF6D58] tracking-[3px] leading-[2rem]'>MENU</h3>
                        <p className='text-center  leading-[2rem] font-[400] text-[#FFFFFF] text-[16px]'> About </p>
                        <p className='text-center  leading-[2rem] font-[400] text-[#FFFFFF] text-[16px]'> Service  </p>
                        <p className='text-center  leading-[2rem] font-[400] text-[#FFFFFF] text-[16px]'>  Blog  </p>
                        <p className='text-center  leading-[2rem] font-[400] text-[#FFFFFF] text-[16px]'> Contact </p>
                    </div>
                    <div className='mt-[2rem] md:mt-[4rem] lg:mt-[2rem] text-center'>
                        <h3 className='text-center font-[400] text-[16px] text-[#EF6D58] tracking-[3px] leading-[2rem]'>SERVICE</h3>
                        <p className='text-center  leading-[2rem] font-[400] text-[#FFFFFF] text-[16px]'>Design</p>
                        <p className='text-center  leading-[2rem] font-[400] text-[#FFFFFF] text-[16px]'> Development</p>
                        <p className='text-center  leading-[2rem] font-[400] text-[#FFFFFF] text-[16px]'>Marketing</p>
                        <p className='text-center  leading-[2rem] font-[400] text-[#FFFFFF] text-[16px]'>See More</p>
                    </div> 

                    <div className='md:mt-[4rem] flex  gap-[10px] mt-[2.5rem]  md:gap-[1rem]'>
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
                
            </div>
            <div className='flex items-center justify-center'>
                <div className=''>
                    <div className='w-[325px] h-[1px]  lg:w-[900px]   bg-[#3A3C56] mt-[2rem] grid '></div>

                    <div className='lg:flex lg:gap-[10rem]  mt-[2rem]  grid  '>
                        <p className='   text-center  font-[400] text-[16px] leading-[2rem] text-[#FFFFFFA3] '>Copyright © 2022 Laaqiq. All Rights Reserved.</p>
                        <div className='md:flex flex items-center justify-center lg:mt-[0px] mt-[2rem] relative md:gap-[3rem]'>
                            <div className='text-[16px]  flex text-center gap-[5rem] font-[400]  text-[#FFFFFF]'>
                                <p>Terms of Use</p>
                                <p>Privacy Policy</p>
                            </div>
                    
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
        
)}

export default Personal