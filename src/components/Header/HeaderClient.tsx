'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Home,
  ShoppingBag,
  Phone,
  Menu,
  X,
  ChevronDown,
  User,
  ShoppingCart,
} from 'lucide-react';
import { useAuthContext } from '../../context/AuthContext';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';
import Link from 'next/link';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { name, family, isLoggedIn } = useAuthContext();
  const { cartTotalQty } = useShoppingCartContext();

  const openMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsProductsMenuOpen(true);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProductsMenuOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border border-cyan-400/20 shadow-glow shadow-cyan-500/10 backdrop-saturate-150 transition-all duration-300 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            <div className="flex-shrink-0">
              <Link href='/' className="flex items-center font-extrabold text-2xl group">
                <img 
                  src="https://apitak.ir/images/apika2.svg" 
                  alt="APIKA Logo" 
                  width={130} 
                  height={40} 
                  className="drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-1 rtl" ref={menuRef}>
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2.5 text-blue-950 hover:text-blue-950 hover:bg-cyan-500/20 rounded-xl backdrop-blur-sm border border-cyan-400/0 hover:border-cyan-400/30 transition-all duration-300 group"
              >
                <Home size={18} className="group-hover:rotate-12 transition-transform" />
                صفحه اصلی
              </Link>

              <div
                className="relative"
                onMouseEnter={openMenu}
                onMouseLeave={closeMenu}
              >
                <span
                  className="flex items-center gap-2 px-4 py-2.5 text-gray-700 hover:text-purple-700 hover:bg-purple-200 rounded-xl cursor-pointer transition-all duration-300 group"
                >
                  <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
                  محصولات
                  <ChevronDown
                    size={16}
                    className={`mr-1 transition-transform duration-300 ${
                      isProductsMenuOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </span>

                {isProductsMenuOpen && (
                  <div
                    className="absolute right-0 mt-2 w-96 origin-top-right rounded-3xl overflow-hidden shadow-2xl border border-cyan-400/30 z-50 animate-in fade-in slide-in-from-top-2 duration-300"
                    style={{
                      background: 'rgba(15, 23, 42, 0.6)',
                      backdropFilter: 'blur(24px)',
                      WebkitBackdropFilter: 'blur(24px)',
                    }}
                    onMouseEnter={openMenu}
                    onMouseLeave={closeMenu}
                  >
                    <div className="p-6 grid grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-bold text-white mb-3 text-lg flex items-center gap-2">
                          <span className="inline-block w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></span>
                          الکتروپمپ ها
                        </h3>
                        <ul className="space-y-2">
                          {[
                            { to: "/HouseholdPump", label: "پمپ های خانگی" },
                            { to: "/DosingPump", label: "دوزینگ پمپ" },
                            { to: "/SludgePump", label: "لجن کش" },
                          ].map((item, i) => (
                            <li key={i}>
                              <Link
                                href={item.to}
                                className="block text-blue-100 hover:text-cyan-200 hover:translate-x-1 transition-all duration-200 relative group"
                                onClick={closeMenu}
                              >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-3 text-lg flex items-center gap-2">
                          <span className="inline-block w-2 h-2 bg-gradient-to-r from-green-400 to-teal-500 rounded-full animate-pulse"></span>
                            لوازم جانبی
                        </h3>
                        <ul className="space-y-2">
                          {[
                            { href: "/SetControl", label: "ست کنترل" },
                            { href: "/ExpansionSource", label: "منبع انبساط" },
                            { href: "/Cooler", label: "لوازم کولر" },
                          ].map((item, i) => (
                            <li key={i}>
                              <a
                                href={item.href}
                                className="block text-blue-100 hover:text-green-200 hover:translate-x-1 transition-all duration-200 relative group"
                                onClick={closeMenu}
                              >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-600/90 to-blue-700/90 text-white px-6 py-4 backdrop-blur-sm">
                      <h3 className="font-bold text-lg mb-1">✨ پیشنهاد ویژه</h3>
                      <p className="text-blue-950 text-sm mb-3">تخفیف تا ۴۰٪ روی جدیدترین محصولات</p>
                      <a
                        href="/products/special"
                        className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm px-5 py-2 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
                      >
                        مشاهده پیشنهادها →
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/cart"
                className="flex items-center gap-2 px-4 py-2.5 text-blue-950 hover:text-orange-700 hover:bg-orange-500/20 rounded-xl backdrop-blur-sm border border-cyan-400/0 hover:border-orange-400/30 transition-all duration-300 group relative"
              >
                <ShoppingCart size={18} className="group-hover:scale-110 transition-transform" />
                <span className="relative">
                  سبد خرید
                  {cartTotalQty > 0 && (
                    <span
                      style={{
                        background: 'linear-gradient(135deg, #fdba74, #f97316)',
                        backdropFilter: 'blur(8px)',
                      }}
                      className="absolute -top-2 -right-6 text-white text-xs font-bold px-2 min-w-5 h-5 rounded-full flex items-center justify-center shadow-lg border border-orange-300 animate-pulse"
                    >
                      {cartTotalQty}
                    </span>
                  )}
                </span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-4 py-2.5 text-blue-950 hover:text-red-700 hover:bg-red-500/20 rounded-xl backdrop-blur-sm border border-cyan-400/0 hover:border-red-400/30 transition-all duration-300 group"
              >
                <Phone size={18} className="group-hover:scale-110 transition-transform" />
                تماس با ما
              </Link>
            </nav>
            <div className="hidden md:flex">
              {isLoggedIn ? (
                <Link
                href="/UserPanel"
                  className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white px-5 py-2.5 rounded-xl shadow-lg hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-cyan-400/30"
                >
                  <User size={20} /> {name} {family}
                </Link>
              ) : (
                <Link
                href="/Sign_in&up"
                  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-5 py-2.5 rounded-xl shadow-lg hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-indigo-400/30 font-medium"
                >
                  ورود | ثبت نام
                </Link>
              )}
            </div>

            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2.5 rounded-xl bg-white/10 text-blue-950 hover:bg-white/20 backdrop-blur-sm border border-cyan-400/20 transition-all duration-300"
              aria-label="باز کردن منو"
            >
              {
                cartTotalQty>0 && <span className='fixed -top-2 -right-2 bg-red-700 text-white w-5 h-5 rounded-4xl'>{cartTotalQty}</span>
              }
              
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden backdrop-blur-sm"
        />
      )}

      <aside
        className={`fixed top-0 right-0 z-50 w-80 h-full bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-950 text-white shadow-2xl transform transition-transform duration-500 ease-in-out md:hidden ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        dir="rtl"
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-cyan-400/20">
          <Link href="/" onClick={() => setSidebarOpen(false)}>
            <img src="https://apitak.ir/images/apika2.svg" alt="Logo" width={120} height={40} className="drop-shadow" />
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2.5 rounded-xl bg-white/10 text-cyan-100 hover:bg-white/20 backdrop-blur-sm border border-cyan-400/20 transition-all duration-300"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="p-6 space-y-4">
          <Link
            href="/"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 p-3 text-cyan-100 hover:text-white hover:bg-cyan-500/20 rounded-xl backdrop-blur-sm transition-all duration-300 group"
          >
            <Home size={20} className="group-hover:rotate-12 transition-transform" /> صفحه اصلی
          </Link>
          <Link
            href="/products"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 p-3 text-cyan-100 hover:text-white hover:bg-purple-500/20 rounded-xl backdrop-blur-sm transition-all duration-300 group"
          >
            <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" /> محصولات
          </Link>
          <Link
            href="/cart"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 p-3 text-cyan-100 hover:text-white hover:bg-orange-500/20 rounded-xl backdrop-blur-sm transition-all duration-300 group relative"
          >
            <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" />
            سبد خرید
            {cartTotalQty > 0 && (
              <span
                style={{
                  background: 'linear-gradient(135deg, #fdba74, #f97316)',
                  backdropFilter: 'blur(8px)',
                }}
                className="absolute -top-1 right-6 text-white text-xs font-bold px-2 min-w-5 h-5 rounded-full flex items-center justify-center shadow-sm border border-orange-300 animate-pulse"
              >
                {cartTotalQty}
              </span>
            )}
          </Link>
          <Link
            href="/contact"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 p-3 text-cyan-100 hover:text-white hover:bg-red-500/20 rounded-xl backdrop-blur-sm transition-all duration-300 group"
          >
            <Phone size={20} className="group-hover:scale-110 transition-transform" /> تماس با ما
          </Link>
          {isLoggedIn ? (
            <Link
            href="/UserPanel"
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-3 p-4 mt-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white rounded-2xl shadow-lg hover:shadow-cyan-500/40 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-cyan-400/30"
            >
              <User size={22} /> {name} {family}
            </Link>
          ) : (
            <Link
            href="/Sign_in&up"
              onClick={() => setSidebarOpen(false)}
              className="block text-center p-4 mt-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl shadow-lg hover:shadow-indigo-500/40 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-indigo-400/30 font-medium"
            >
              ورود | ثبت نام
            </Link>
          )}
        </nav>
      </aside>
    </>
  );
}