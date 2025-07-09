"use client"
import Container from "@/ui/Container";
import Instagram from "@/ui/Instagram";
import PageTopSection from "@/ui/PageTopSection";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
import { Pagination } from 'swiper/modules';

function Aboutpage() {
  const pathName = usePathname();

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
          <div className="flex justify-center">
            <Image src="/about.png" alt="about" width={800} height={800} />
          </div>
        </div>
      </Container>
      <ProfessionalExperts />
      <Instagram />
    </div>
  );
}
function ProfessionalExperts() {
	const experties = [
		{id:1, img:'/1.png', name:'Suddenlypsychic',role:'Software developer'},
		{id:2, img:'/2.png', name:'Suddenlypsychic',role:'Software developer'},
		{id:3, img:'/3.png', name:'Suddenlypsychic',role:'Software developer'},
		{id:4, img:'/4.png', name:'Suddenlypsychic',role:'Software developer'},
		{id:5, img:'/2.png', name:'Suddenlypsychic',role:'Software developer'},
	]
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
              el: '.custom-pagination',
              
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 40 },
              1024: { slidesPerView: 4, spaceBetween: 50 },
            }}
            modules={[Pagination]}
            className="mySwiper my-5 lg:my-10"
          >
            {experties.map(expert => (
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

export default page;


