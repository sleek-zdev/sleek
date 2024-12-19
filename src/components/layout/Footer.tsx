import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Shirt } from 'lucide-react';
import logolight from '../../resources/sleeklight.png';
import logodark from '../../resources/sleekdark.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src={logodark}
                className="h-16 w-16" // You can adjust the size of your logo
              />
              <span className="text-xl font-bold text-white">Sleek</span>
            </div>
            <p className="text-sm">
              Crafting premium sports jerseys with quality and style since 2024.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'Products', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={
                      item === 'Home'
                        ? '/'
                        : `/${item.toLowerCase().replace(' ', '')}`
                    }
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li>78/4 IFL LANE</li>
              <li>Jamalia, CH 600012</li>
              <li>Phone: (+91) 9710056441</li>
              <li>Email: sleek.contactus@gmail.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Newsletter
            </h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-400"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Mail, href: '#' },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="hover:text-blue-400 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} Sleek Sports & fitness. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
