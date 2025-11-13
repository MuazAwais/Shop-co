'use client'
import { useRouter } from "next/navigation";
import Star from "../ui/star";
import Link from "next/link";

type Product = {
  id: string | number;
  images: string[];
  name: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  discount?: string | number;
};

type ProductCardProps = {
  productsData: Product[];
};

const ProductCard = ({ productsData }: ProductCardProps) => {

    const products= productsData 
   const router = useRouter();

  const handleProductClick = (productId: string | number) => {
    router.push(`/shop/${productId}`);
  };

    return (
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 overflow-hidden">
          {products?.map((product) => (
            <div key={product?.id} className="flex flex-col gap-4" onClick={()=>handleProductClick(product?.id)} >
                <div className="w-[295px] h-[298px] overflow-hidden rounded-2xl ">
                    <img src={product?.images[0]} alt={product?.name}  className="w-full h-full hover:scale-[105%] transition-transform duration-300 object-cover"/>
                  </div>
                  <div className="">
                    <h3 className="text-[20px] font-black hover:cursor-pointer hover:underline"><Link href={`/shop/${product?.id}`}>{product?.name}</Link></h3>
                    <div >
                      <Star stars={product?.rating} reviews={product?.reviews}/>
                      <div className="flex gap-[5px] md:gap-[10px] items-center">
                        <div className="text-[20px] md:text-[24px] font-inter font-black">${product?.price}</div>
                        <div className={`text-[20px] md:text-[24px] font-inter font-bold text-gray-400 line-through ${product?.originalPrice ? 'block': 'hidden'}`}>${product?.originalPrice}</div>
                        <div className={`text-[10px] md:text-[12px] text-[#ff3333] bg-[#ff333334] px-[13px] py-[6px] rounded-full ${product?.discount ? 'block': 'hidden'}`}>{product?.discount}</div>
                      </div>
                    </div>
                  </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

export default ProductCard