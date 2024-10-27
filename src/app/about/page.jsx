import Head from 'next/head'
import React from 'react'

export default function page() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about us." />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-100">
        <h1 className="mb-6 text-4xl font-bold text-gray-800">About Us</h1>
        <p className="max-w-2xl mb-4 text-lg text-center text-gray-600">
          We are a dedicated team committed to providing the best service to our customers. Our mission is to deliver high-quality products and ensure customer satisfaction through excellent support.
        </p>
        <p className="max-w-2xl mb-4 text-lg text-center text-gray-600">
          Our team consists of experienced professionals who are passionate about their work. We believe in continuous improvement and innovation to meet the needs of our clients.
        </p>
        <p className="max-w-2xl text-lg text-center text-gray-600">
          Thank you for taking the time to learn more about us. We look forward to serving you!
        </p>
      </div>
    </>
  )
}
