import React from 'react'

const Product = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full object-cover h-48" src="https://via.placeholder.com/300" alt="Placeholder" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-800">Elegant Card Title</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag3</span>
          </div>
          <div className="px-6 py-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button
            </button>
          </div>
        </div>
      );
}

export default Product