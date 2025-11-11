import HeroSection from "./heroSection";
import Brands from "./brands";
import NewArrivals from "./newArrivals";
import TopSelling from "./topSelling";
import Reviews from "./reviews";

const HomeView = () => {
  return (
    <div>
      <div className="bg-[#f0f0f0]">
        <HeroSection />
      </div>
      <div className="bg-black ">
        <Brands />
      </div>
      <div className="mt-[50px] md:mt-[72px]">
        <NewArrivals />
      </div>
      <hr className="container my-[40px] md:my-[64px] text-gray-400" />
      <div>
        <TopSelling />
      </div>
      <div className="mt-[50px] md:mt-[72px]">
        <Reviews />
      </div>
    </div>
  );
};

export default HomeView;
