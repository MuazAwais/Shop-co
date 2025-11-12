import { RiDeleteBinFill } from "react-icons/ri";
import { removeFromCart } from "@/components/data/cartData"

interface CartItem {
    id: string;
    size: string;
    quantity: number;
    image?: string;
    name?: string;
    price?: number | string;
}

interface ItemsCardProps {
    cartData?: CartItem[];
}

const ItemsCard = ({ cartData }: ItemsCardProps) => {
  const data = cartData;

 
  return (
    <div className="flex flex-col border-2 border-collapse rounded-xl  px-[24px]">
      {data?.map((data: CartItem, index: number) => (
        <div key={index} className="max-w-[667px] w-full">
            <div className="flex gap-[14px] md:gap-4 max-w-[667px] w-full py-[20px]">
          <div className="w-[99px] h-[99px] md:w-[124px] md:h-[124px] rounded-xl overflow-hidden">
            <img
              src={data?.image}
              alt={data?.name}
              className="w-full h-full object-cover "
            />
          </div>
          <div className="flex flex-col justify-between w-full">
            <div className="flex justify-between ">
              <div>
                <h4 className="text-[16px] md:text-[20px] font-bold">
                  {data?.name}
                </h4>
                <p className="text-[14px]">
                  Size: <span className="text-gray-400">{data?.size}</span>
                </p>
              </div>
              <button
                type="button"
                aria-label="Remove from cart"
                className="text-red-500"
                onClick={() => removeFromCart(data?.id, data?.size)}
              >
                <RiDeleteBinFill size={24} />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-[20px] md:text-[24px] font-inter font-black">
                ${data?.price}
              </div>
              <div className="flex items-center text-gray-400 ">
                Quantity :{" "}<span className="text-black">{data?.quantity}</span>
              </div>
            </div>
          </div>
          </div>
          <div className="border mx-4"></div>
        </div>
      ))}
    </div>
  );
};

export default ItemsCard;
