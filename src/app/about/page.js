"use client";
import Container from "@/ui/Container";
import Instagram from "@/ui/Instagram";
import PageTopSection from "@/ui/PageTopSection";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';
import { Pagination } from "swiper/modules";
import { useState } from "react";

function Aboutpage() {
  const [video,setVideo] = useState(false)
  const pathName = usePathname();
  const handelVideoFrameON=()=>{
    setVideo(true)
    console.log(' video on');
    
  }
  const handelVideoFrameOFF=()=>{
    setVideo(false)
  }

  return (
    <div>
      <PageTopSection pageName="About us" CurrentPageLocation={pathName} />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center gap-5 lg:gap-10 pt-10">
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl lg:text-[36px] font-medium">
              We take fashion personally & we bring you happiness
            </h3>
            <div className=" flex flex-col gap-4 lg:text-base text-[14px]">
              <p>
                Why not return to our amazing shop and start filling it with
                products. Just click on the button below to instantly get back
                to the shop page.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <span className="font-dancing lg:text-2xl text-[20px] text-primary">
                Moin Khan
              </span>
            </div>
          </div>
          <div className="flex justify-center relative ">
            <Image src="/about.png" alt="about" width={800} height={800} />
            <div onClick={handelVideoFrameON} className=" absolute left-1/2 top-1/2 -translate-1/2 flex justify-center items-center w-20 h-20 bg-white rounded-full cursor-pointer">
              <span class="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping -z-10"></span>
              <div className="w-0 h-0 border-t-[12px] border-b-[12px] border-l-[12px] border-t-transparent border-b-transparent border-l-primary"></div>
            </div>
            
          </div>
        </div>
       </Container>
       <VideoFrame video={video} handelVideoFrameOFF={handelVideoFrameOFF}/>
      <ProfessionalExperts />
      <Instagram />
    </div>
  );
}
function ProfessionalExperts() {
  const experties = [
    {
      id: 1,
      img: "/1.png",
      name: "Suddenlypsychic",
      role: "Software developer",
    },
    {
      id: 2,
      img: "/2.png",
      name: "Suddenlypsychic",
      role: "Software developer",
    },
    {
      id: 3,
      img: "/3.png",
      name: "Suddenlypsychic",
      role: "Software developer",
    },
    {
      id: 4,
      img: "/4.png",
      name: "Suddenlypsychic",
      role: "Software developer",
    },
    {
      id: 5,
      img: "/2.png",
      name: "Suddenlypsychic",
      role: "Software developer",
    },
  ];
  return (
    <div className="bg-[#F5F5F5] mt-5 lg:mt-10 py-5 lg:py-10">
      <Container>
        <div>
          <div>
            <h2 className="text-2xl font-bold lg:text-[36px] text-center">
              Professional Experts
            </h2>
            <div className="flex justify-center pt-5">
              <span className="w-25 h-[1px] bg-black relative">
                <span className="border p-1.5 absolute top-[50%] left-[50%] -translate-1/2 rotate-45 bg-white"></span>
              </span>
            </div>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 40 },
              1024: { slidesPerView: 4, spaceBetween: 50 },
            }}
            modules={[Pagination]}
            className="mySwiper my-5 lg:my-10"
          >
            {experties.map((expert) => (
              <SwiperSlide key={expert.id}>
                <div className="flex items-center justify-center gap-1 flex-col">
                  <Image
                    src={expert.img}
                    alt="persion"
                    width={1000}
                    height={1000}
                    className="object-center w-[250px] h-[250px] border-8 rounded-full border-white"
                  />
                  <h4 className="text-[18px] lg:text-[20px]">{expert.name}</h4>
                  <p className="text-[#9DA1A5] text-base">{expert.role}</p>
                  <ul className="flex items-center gap-4">
                    <li>
                      <Link href="">
                        <CiFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <CiTwitter />
                      </Link>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination flex justify-center mt-6"></div>
        </div>
      </Container>
    </div>
  );
}
function VideoFrame({video,handelVideoFrameOFF}){
  return(
    <>
    {video&&(
     <div className={` z-20 flex fixed top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,0.50)] items-center justify-center`}>
              
        <div className="flex flex-col items-end ">
          <span onClick={handelVideoFrameOFF} className="text-4xl text-white cursor-pointer"><IoMdClose/></span>
          <iframe
              className=" w-full md:h-[300px] md:w-[500px] lg:w-[800px] lg:h-[400px] lg:aspect-video rounded-lg"
             
              src="https://www.youtube.com/embed/P82yV0EWqvg?si=7fjCSGvU5GWynKs2&amp;start=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            >
            
            </iframe>
        </div>
    </div>
    )}</>
    
    
  )
}

export default Aboutpage;
