import React from 'react'

function PageNotFound() {
  return (
    <>

      <div className="h-screen flex flex-col items-center">
        <img src="https://imgs.search.brave.com/NFdjFaEbid21pPIRxc185K-FgOFiWy4njJk3sBTIbBQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMS8w/Ny8yMS8xMi80OS9l/cnJvci02NDgyOTg0/XzY0MC5wbmc" className='w-75' alt="" />
        <p className="text-xl mb-8">Page Not Found</p>
        <a href="/" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Go Home
        </a>
      </div>

    </>
  )
}

export default PageNotFound
