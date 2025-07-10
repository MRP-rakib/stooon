import React from "react";

function CartPrice() {
  return (
    <div className="bg-gray-100 p-5">
      <div className="text-base">
        <h5 className="py-3 border-b border-gray-400">Summary</h5>
        <h5 className="">Estimate Shipping and Tax</h5>
        <p className=" text-[rgba(0,0,0,0.5)]">
          Enter your destination to get a shipping estimate.
        </p>
      </div>
      <form className="flex flex-col gap-3">
        <label htmlFor="country">Country</label>
        <select
          className="w-full px-2 py-3 bg-white outline-none"
          id="country"
          name="country"
        >
          <option value="united state">United State</option>
          <option value="Germany">Germany</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="japan">Japan</option>
        </select>
        <label htmlFor="state">State/Provienc</label>
        <select
          className="w-full px-2 py-3 bg-white outline-none"
          id="state"
          name="State"
        >
          <option value="Region/State">Region/State</option>
          <option value="Germany">Germany</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="japan">Japan</option>
        </select>
        <label htmlFor="zip">Zip/Postal Code</label>
        <input
          type="text"
          className="w-full px-2 py-3 bg-white outline-none"
          id="zip"
          name="zip"
        />
        <p>Flat Rate</p>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="py-3 px-2 bg-white outline-none"
            id="zip"
            name="zip"
          />
          <label htmlFor="flat-rate">fixed: $5.00</label>
        </div>
      </form>
      <div className=" divide-y-1 divide-[rgba(255,255,255,0.5)] pt-4">
        <span className="bg-primary text-white px-2 flex justify-between items-center py-3">
          <p>Subtotal</p>
          <p>$190.00</p>
        </span>
        <span className="bg-primary text-white px-2 flex justify-between items-center py-3">
          <p>Shipping</p>
          <p>$190.00</p>
        </span>
        <span className="bg-primary text-white px-2 flex justify-between items-center py-3">
          <p>Order Total</p>
          <p>$190.00</p>
        </span>
      </div>
      <div className="pt-4 flex flex-col gap-4">
        <label htmlFor="discount">Apply Discount Code</label>
        <input
          type="text"
          className="w-full py-3 bg-white outline-none"
          id="discount"
          name="discount"
        />
        <button className="mt-15 bg-Black text-white py-3 rounded">
          Proceed To checkbox
        </button>
      </div>
      <p className="text-center mb-6 mt-3">CHeckout WIth Multiple Address</p>
    </div>
  );
}

export default CartPrice;
