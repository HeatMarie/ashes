import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
        <div className=''>
          <div className='flex bg-bunker'>
            <div className="wrapper">
              <h1> ASHES </h1>
            </div>
            {/* The Div below will hold a login drop down */}
            <div className='mr-6'>
              <p className='text-white mt-5'>Login</p>
            </div>

          </div>
          <p className="bg-stone">This is stone</p>
          <p className="bg-cove text-white">This is cove</p>
          <p className="bg-bunker text-white">This is bunker</p>
          <p className="bg-sapphire text-white">This is sapphire</p>
          <p className="bg-fire">This is fire</p>
          <p className='bg-ashesRed'>this is ashes red</p>
        </div>
  )
}
