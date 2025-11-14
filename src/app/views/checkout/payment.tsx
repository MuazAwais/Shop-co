'use client'

import { useFormik } from "formik"
import { useState } from "react";
import * as Yup from 'yup';

const PaymentCard = () => {
  const [paid, setPaid] = useState(false)
    const validationSchema = Yup.object().shape({
        nameOnCard : Yup.string()
        .min(4, 'Too short!')
        .max(30, 'Too Long!')
        .required('Required!'),
        cardNumber: Yup.string()
          .matches(/^\d{16}$/, 'Card number must be exactly 16 digits')
          .required('Required!'),
        cvv : Yup.string()
        .matches(/^\d{3}$/, 'CVV number must be valid')
        .required('Required!'),
    })
    const formik = useFormik({
        initialValues : {
            nameOnCard : '',
            cardNumber : '',
            month : '',
            year : '',
            cvv : '',
        },
        validationSchema,
        onSubmit: (values, {resetForm}) => {
        localStorage.setItem("Payment Details",JSON.stringify(values, null, 2));  
        resetForm();    
        setPaid(true)
        } 
    })
    if (paid) {
      return (
        <div className="max-w-md mx-auto mt-10 border rounded-xl p-8 bg-white text-center">
          <h2 className="text-2xl font-bold mb-4">Payment Successful</h2>
          <div className="my-4 text-gray-500">Thank you for your purchase.</div>
        </div>
      );
    }
  return (
    <div>
      <div className="w-full max-w-md mx-auto border-2 rounded-xl p-8 bg-white mt-10">
      <form onSubmit={formik.handleSubmit}>
        <h2 className="font-inter font-bold mb-6 text-[24px]">Payment Detail</h2>
        <div className="mb-4 relative">
          <label htmlFor="nameOnCard" className="block text-gray-400">Name on Card</label>
          <input
            id="nameOnCard"
            name="nameOnCard"
            type="text"
            className="mt-1 block w-full border p-2 rounded-lg focus:ring focus:ring-gray-400 ring-inset"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nameOnCard}
          />
          {formik.touched.nameOnCard && formik.errors.nameOnCard ? (
            <div className="text-red-600 text-xs mt-1 absolute bottom-[-16px] left-1">{formik.errors.nameOnCard}</div>
          ) : null}
        </div>
        <div className="mb-4 relative">
          <label htmlFor="cardNumber" className="block text-gray-400">Card Number</label>
          <input
            id="cardNumber"
            name="cardNumber"
            type="text"
            className="mt-1 block w-full border p-2 rounded-lg"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cardNumber}
            maxLength={16}
          />
          {formik.touched.cardNumber && formik.errors.cardNumber ? (
            <div className="text-red-600 text-xs mt-1 absolute bottom-[-16px] left-1">{formik.errors.cardNumber}</div>
          ) : null}
        </div>
        <div className="mb-4 flex gap-4">
          <div className="w-1/2">
            <label htmlFor="month" className="block text-gray-400">Month</label>
            <input
              id="month"
              name="month"
              type="text"
              placeholder="MM"
              className="mt-1 block w-full border p-2 rounded-lg"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.month}
              maxLength={2}
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="year" className="block text-gray-400">Year</label>
            <input
              id="year"
              name="year"
              type="text"
              placeholder="YY"
              className="mt-1 block w-full border p-2 rounded-lg"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.year}
              maxLength={2}
            />
          </div>
        </div>
        <div className="mb-4 relative">
          <label htmlFor="cvv" className="block text-gray-400 ">CVV</label>
          <input
            id="cvv"
            name="cvv"
            type="password"
            className="mt-1 block w-full border p-2 rounded-lg"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cvv}
            maxLength={4}
          />
          {formik.touched.cvv && formik.errors.cvv ? (
            <div className="text-red-600 text-xs mt-1 absolute bottom-[-16px] left-1">{formik.errors.cvv}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="w-full bg-gray-950 mt-2 text-white py-2 px-4 rounded-full hover:bg-white hover:text-black hover:border-black hover:border transition-all duration-300 ease-in-out"
        >
          Pay Now
        </button>
      </form>
    </div>
    </div>
  );
};

export default PaymentCard;
