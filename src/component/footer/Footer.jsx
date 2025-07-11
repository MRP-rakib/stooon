import Container from '@/ui/Container';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube, FaSkype, FaHome, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#f8f8f8] pt-12">
      <Container>
        <div className="grid grid-cols-1 items-start md:grid-cols-4  gap-10 pb-10 border-b border-gray-200">
          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">CATEGORIES</h3>
            <ul className="space-y-2 text-gray-500">
              <li className="text-black">Clothing</li>
              <li>Accessories</li>
              <li>Women</li>
              <li>Men</li>
              <li>Shoes</li>
              <li>New Arrivals</li>
              <li>Clearance</li>
            </ul>
          </div>
          {/* Our Policy */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">OUR POLICY</h3>
            <ul className="space-y-2 text-gray-500">
              <li className="text-[#F79483]">Brands</li>
              <li>Contact Us</li>
              <li>Gift Certificates</li>
              <li>Affiliate</li>
              <li>Specials</li>
              <li>Shipping & Delivery</li>
              <li>My Account</li>
            </ul>
          </div>
          {/* Get In Touch */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">GET IN TOUCH</h3>
            <ul className="space-y-3 text-gray-500">
              <li className="flex items-start gap-2"><FaHome className="mt-1 text-xl text-gray-400" />
                <span>
                  Davis Patrick<br />
                  P.O. Box 147 2546 Sociosqu Rd.<br />
                  Bethlehem Utah 02913
                </span>
              </li>
              <li className="flex items-center gap-2"><FaEnvelope className="text-lg text-gray-400" /> support@example.com</li>
              <li className="flex items-center gap-2"><FaPhoneAlt className="text-lg text-gray-400" /> (939) 353-1107, (302) 259-2375</li>
            </ul>
          </div>
          {/* Follow Us */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">FOLLOW US</h3>
            <ul className="space-y-2 text-gray-500">
              <li className="flex items-center gap-2"><FaFacebookF /> Facebook</li>
              <li className="flex items-center gap-2"><FaTwitter /> Twitter</li>
              <li className="flex items-center gap-2"><FaInstagram /> Instagram</li>
              <li className="flex items-center gap-2"><FaPinterestP /> Pinterest</li>
              <li className="flex items-center gap-2"><FaYoutube /> Youtube</li>
              <li className="flex items-center gap-2"><FaSkype /> Skype</li>
            </ul>
          </div>
        </div>
        {/* Copyright & Payment */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 text-gray-400 text-sm">
          <div className="mb-4 md:mb-0">
            © Stoon 2020. Powered with <span className="text-[#F79483]">♥</span> by Zwin.
          </div>
          <div className="flex items-center gap-3">
            <img src="/shopify.png" alt="shopify" className="h-5" />
            <img src="/paypal.png" alt="paypal" className="h-5" />
            <img src="/visa.png" alt="visa" className="h-5" />
            <img src="/mastercard.png" alt="mastercard" className="h-5" />
            <img src="/discover.png" alt="discover" className="h-5" />
            <img src="/amex.png" alt="amex" className="h-5" />
          </div>
        </div>
      </Container>
    </footer>
  );
}