import React from 'react';
import { MdModeEdit } from "react-icons/md";
import { IoClose } from "react-icons/io5";
const CartTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[700px] w-full border border-gray-300 border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="py-4 px-2 text-lg font-semibold border border-gray-300">Product</th>
            <th className="py-4 px-2 text-lg font-semibold border border-gray-300">Price</th>
            <th className="py-4 px-2 text-lg font-semibold border border-gray-300">Quantity</th>
            <th className="py-4 px-2 text-lg font-semibold border border-gray-300">Total</th>
            <th className="py-4 px-2 text-lg font-semibold border border-gray-300">Edit</th>
          </tr>
        </thead>
        <tbody>
          {[1].map((data,index)=>(
            <tr key={index} className="border border-gray-300">
            <td className="flex items-center gap-4 py-4 px-2 ">
              <div className="w-24 h-28 bg-gray-200">
                {/* Image placeholder */}
                {/* <img src="IMAGE_URL" alt="Product" className="w-full h-full object-cover" /> */}
              </div>
              <div>
                <p className="font-semibold">Men's Crew T-shirt</p>
                <p className="text-sm text-gray-500">
                  SIZE: <span className="text-black">XL</span>
                </p>
                <p className="text-sm text-gray-500">
                  COLOR: <span className="text-black">BROWN</span>
                </p>
              </div>
            </td>
            <td className="py-4 px-2 text-center border border-gray-300">$29.00</td>
            <td className="py-4 px-2 text-center border border-gray-300">
              <div className="flex justify-center">
                <div className="border rounded-full px-4 py-2">1</div>
              </div>
            </td>
            <td className="py-4 px-2 text-center border border-gray-300">$29.00</td>
            <td className="py-4 px-2 text-center">
              <div className="flex justify-center gap-2">
                {/* Delete Button */}
                <button className="text-gray-500 w-8 h-8 rounded-full bg-white border flex items-center justify-center cursor-pointer">
                  <IoClose />
                </button>
                {/* Edit Button */}
                <button className="text-gray-500 w-8 h-8 rounded-full bg-white border flex items-center justify-center cursor-pointer">
                  <MdModeEdit />

                </button>
              </div>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
