import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function ContactPage() {
  const name = 'Jihoon'
  const result = 1 + 2
  return (
    <main>
      <div className="bg-blue-900 text-blue-300 font-mono">
        <Navbar />
      </div>
      <div className="font-mono bg-blue-900 text-blue-300 text-center mt-1 p-4">
        <h1 className="text-3xl font-bold">Contact Page! Wa!!!!</h1>
      </div>
      <Footer />
    </main>
  )
}
