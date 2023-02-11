import { useState } from 'react'
import Container from './Container';
import Link from 'next/link'

export default function Navbar() {
  const [offcanvas, setOffcanvas] = useState(false);
  const [search, setSearch] = useState(false);
  return (

    <nav className='py-10'>
      <Container>
        <div className='flex items-center'>
          <div className='w-3/12 lg:hidden'>
            <button onClick={() => setOffcanvas(!offcanvas)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <path d="M3 12H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
            </button>
          </div>

          <div className='lg:w-3/12 w-6/12'>
            <Link href="/">
              <a className='flex items-center justify-center lg:justify-start'>
                <div className='w-10 h-10 bg-gray-500 mr-4 shadow-2xl rounded flex items-center justify-center'>H
                </div>
                Frozen Food Hariyanto
              </a>
            </Link>
          </div>
          <div className='w-3/12 lg:hidden text-right'>
            <button onClick={() => setSearch(!search)}>
              <svg className='inline-block' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21 21L16.65 16.65" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
            </button>
          </div>
          <div className={`lg:w-7/12 w-full bg-gradient-to-b from-sky-700 to-sky-800 lg:bg-none fixed lg:static top-0 h-full lg:h-auto p-10 lg:p-0 transition-all ${offcanvas ? 'left-0' : '-left-full'}`}>
            <button className='absolute top-10 right-10 lg:hidden'
              onClick={() => setOffcanvas(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <ul className='lg:space-x-14 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0'>
              <li><Link href='/posts'><a className='hover:underline'>About</a></Link></li>
              <li><Link href='/posts'><a className='hover:underline'>Contact Us</a></Link></li>
              <li><Link href='/posts'><a className='hover:underline'>Testimoni</a></Link></li>
            </ul>
          </div>
          <div className={`lg:w-3/12 absolute w-full lg:static px-10 lg:px-0 left-0 transition-all ${search ? 'top-10' : '-top-40'}`}>
            <button className='absolute top-3 right-14 lg:hidden'
              onClick={() => setSearch(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <input className='bg-sky-700 py-3 px-8 lg:rounded-full rounded-lg w-full bg-search pl-10 border-gray-800 ' placeholder='Search..' />
          </div>
        </div>
      </Container>
    </nav>

  )
}