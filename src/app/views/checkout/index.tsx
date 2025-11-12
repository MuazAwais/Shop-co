
import PaymentCard from './payment'
import OrderDetail from './orderDetails'

const CheckoutView = () => {
  return (
    <div>
        <div className="flex gap-[20px] flex-col md:flex-row">
        <div className="w-full">
        <PaymentCard />
        </div>
        <div className="w-full">
        <OrderDetail/>
        </div>
      </div>
    </div>
  )
}

export default CheckoutView