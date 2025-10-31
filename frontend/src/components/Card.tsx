import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({experience}: { experience: any}) {
  const navigate = useNavigate();
  return (
    <div className='bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200'>
        <img
        src={experience.image}
        alt={experience.title}
        className='w-full h-48 object-cover'
        />
        <div className='p-4'>
            <div className='flex items-center justify-between mb-2'>
                <h3 className='text-lg font-semibold text-gray-800'>
                    {experience.title}

                </h3>
                <span className='text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md' >
                    {experience.location}

                </span>
            </div>
            <p className='text-sm text-gray-600 mb-4'>
                {experience.description.length>80
                ? experience.description.slice(0,80)+".."
                :experience.description
                }

            </p>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-700'>
                    From ₹{" "}
                    <span className=' text-lg font-bold text-gray-900'>
                         {experience.price}
                    </span>

                </p>
              <button
              onClick={() => navigate(`/details/${experience._id}`)}
              className='bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-sm font-medium px-4 py-2 rounded-md'
              >
                View Details
              </button>
            </div>

        </div>

    </div>
  )
}

export default Card