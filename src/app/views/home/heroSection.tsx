import Link from "next/link"


const HeroSection = () => {
  return (
    <div className='container flex flex-col items-center lg:flex-row justify-around pt-8' >
        <div className="flex flex-col gap-[20px] justify-center max-w-[596px]">
            <h1 className='font-inter font-black text-[36px] md:text-[64px] leading-8 md:leading-[60px]'>
            FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-[14px] md:text-[16px]">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <Link href={"/shop"} className="bg-black text-[#f0f0f0] py-[15px] px-[67px] rounded-full md:w-fit hover:cursor-pointer text-center hover:bg-white hover:text-black transition-all duration-300 ease-in-out hover:border-black hover:border ">Shop Now</Link>
            <div className="flex gap-[32px] flex-wrap justify-center md:mt-[20px]">
                <div>
                    <h2 className="text-[26px] md:text-[40px] font-semibold">200+</h2>
                    <span className="text-[14px] md:text-[16px]">International Brans</span>
                </div>
                <div className="border-r border-gray-950/20"></div>
                <div>
                    <h2 className="text-[26px] md:text-[40px] font-semibold">2,000+</h2>
                    <span className="text-[14px] md:text-[16px]">High-Quality Products</span>
                </div>
                <div className="border-r border-gray-950/20 hidden md:block"></div>
                <div>
                    <h2 className="text-[26px] md:text-[40px] font-semibold">30,000+</h2>
                    <span className="text-[14px] md:text-[16px]">Happy Customers</span>
                </div>
            </div>
        </div>
        <div className="relative max-w-[390px] md:max-w-[590px]">
            <img src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1761500692/Rectangle_2_oeplji.png" alt="hero Section" />
            <img src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1761479873/Vector1_aiifi7.png" alt="star" className="absolute top-5 right-5 md:top-12 md:right-12 w-[76px]  md:w-[104px] md:h-[104px]" />
            <img src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1761479873/Vector1_aiifi7.png" alt="star" className="absolute top-2/5 md:top-1/2 left-0 w-[44px] md:w-[56px] md:h-[56px]" />
        </div>
    </div>
  )
}

export default HeroSection