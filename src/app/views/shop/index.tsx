import { menClothingData } from "@/components/data/data"
import ProductCard from "@/components/ui/productCard"

const ShpoView = () => {
    
    const products = menClothingData
  return (
    <div>
    <h2 className="font-black font-inter text-[24px] md:text-[32px] ">Casual</h2>
    <div className="mt-6 flex justify-center">
      <ProductCard productsData={products} />
    </div>
    </div>
  )
}

export default ShpoView