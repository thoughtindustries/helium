import React from 'react'

const CTA = () => {
  return (
    <div className="bg-black text-center pt-16 px-12 pb-10">
      <div className="flex flex-col text-white text-3xl font-bold">
        Are you ready to learn?
      </div>
      <div className="max-w-md mx-auto">
        <div className="flex flex-col text-gray-300 text-xl font-bold">
        Whether you’re looking to grow your business, launch a new product, or simply want to improve certain aspects of your life, we have the tools you need to achieve your goals.
        </div>
      </div>
      <a href="/sign-in">
        <button className='bg-white text-blue-900 font-normal py-2 px-4 rounded mx-auto mt-6'>Sign in</button>
      </a>
    </div>
  )
}

export default CTA;