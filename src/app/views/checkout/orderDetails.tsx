"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getCart, clearCart } from "@/components/data/cartData";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  note: string;
}

interface OrderSummary {
  subtotal: number;
  deliveryFee: number;
  total: number;
}

interface Order extends FormValues {
  cart: CartItem[];
  summary: OrderSummary;
  date: string;
}

const OrderDetail = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false);

  useEffect(() => { 
    if (typeof window !== "undefined") {
      setCart((getCart() as CartItem[]) || []); 
    }
  }, []);

  const subtotal = cart.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity),
    0
  );
  const deliveryFee = subtotal > 0 ? 15 : 0;
  const total = subtotal + deliveryFee;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(40, "Too long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string()
      .matches(/^\d{10,15}$/, "Invalid phone")
      .required("Required"),
    address: Yup.string()
      .min(5, "Too short!")
      .max(100, "Too long!")
      .required("Required"),
    note: Yup.string().max(100, "Max 100 chars"),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      note: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (cart.length === 0) return;
      const order: Order = {
        ...values,
        cart,
        summary: { subtotal, deliveryFee, total },
        date: new Date().toISOString(),
      };
      let orders: Order[] = [];
      if (typeof window !== "undefined") {
        orders = JSON.parse(localStorage.getItem("orders") || "[]") as Order[];
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders, null, 2));
        clearCart();
        setOrderPlaced(true);
        setCart([]);
        resetForm();
      }
    },
  });

  if (orderPlaced) {
    return (
      <div className="max-w-md mx-auto mt-10 border rounded-xl p-8 bg-white text-center">
        <h2 className="text-2xl font-bold mb-4">Order Placed!</h2>
        <div className="my-4 text-gray-500">Thank you for your purchase.</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto border-2 rounded-xl p-8 bg-white mt-10">
      <form onSubmit={formik.handleSubmit}>
        <h2 className="font-inter font-bold mb-6 text-[24px]">
          Shipping Information
        </h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-400">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="mt-1 block w-full border p-2 rounded-lg"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-600 text-xs mt-1">
              {formik.errors.name}
            </div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-400">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1 block w-full border p-2 rounded-lg"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-600 text-xs mt-1">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-400">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            className="mt-1 block w-full border p-2 rounded-lg"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-600 text-xs mt-1">
              {formik.errors.phone}
            </div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-400">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            className="mt-1 block w-full border p-2 rounded-lg"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="text-red-600 text-xs mt-1">
              {formik.errors.address}
            </div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="note" className="block text-gray-400">
            Note (optional)
          </label>
          <input
            id="note"
            name="note"
            type="text"
            className="mt-1 block w-full border p-2 rounded-lg"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.note}
          />
          {formik.touched.note && formik.errors.note ? (
            <div className="text-red-600 text-xs mt-1">
              {formik.errors.note}
            </div>
          ) : null}
        </div>
        <div className="border-b-2 my-6"></div>
        <h3 className="text-xl font-bold mb-4">Order Summary</h3>
        <div className="mb-2 text-gray-700">
          {cart.length === 0 && <div>Your cart is empty.</div>}
          {cart.map((item, idx) => (
            <div className="flex justify-between py-1 text-[15px]" key={idx}>
              <div>
                {item.name}{" "}
                <span className="text-gray-400">x{item.quantity}</span>
              </div>
              <div className="font-inter font-black">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-gray-700 mt-2">
          <span>Subtotal</span>
          <span className="font-inter font-black">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Delivery Fee</span>
          <span className="font-inter font-black">
            ${deliveryFee.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-lg font-inter font-black mt-2">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-gray-950 text-white py-3 rounded-full font-semibold hover:bg-white hover:text-black hover:border-black hover:border transition-all duration-300 ease-in-out"
          disabled={cart.length === 0}
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default OrderDetail;
