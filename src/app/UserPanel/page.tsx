"use client";

import { useAuthContext } from "@/context/AuthContext";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  User, Phone, LogOut, ShoppingBag,
  MapPin, Calendar, Hash, Copy, 
  Check, Clock, ShieldCheck, ChevronRight, Info,
  CreditCard,
  X,
  CheckCircle,
  Sparkle,Banknote,QrCode,
  AlertCircle,
  ArrowLeft
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import OrderItem from "@/components/OrderItem/orderItem";

interface IUserInfo {
  name: string;
  family: string;
}

interface IOrder {
  id: number;
  total_price: number;
  old_total_price: number;
  created_at: string;
  payment_status: string;
  shipping_method: string;
  province: string;
  city: string;
  address: string;
  postal_code: string;
  products: string;
}

const UserPanel = () => {
  const { phoneNumber, setFamily, setName, isLoggedIn, name, family, handleLogout } = useAuthContext();
  const router = useRouter();

  const [userData, setUserData] = useState<IUserInfo | null>(null);
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);

  useEffect(() => {
    if (!isLoggedIn) router.push("/Sign_in&up");
  }, [isLoggedIn, router]);

  useEffect(() => {
    if (!isLoggedIn || !phoneNumber) return;
    setLoadingUser(true);
    axios(`https://apitak.ir/apitak/auth/get_user_info.php?phone=${phoneNumber}`)
      .then((result) => {
        setUserData(result.data);
        setName(result.data.name);
        setFamily(result.data.family);
      })
      .finally(() => setLoadingUser(false));
  }, [isLoggedIn, phoneNumber, setName, setFamily]);

  useEffect(() => {
    if (!isLoggedIn || !phoneNumber) return;
    setLoadingOrders(true);
    axios(`https://apitak.ir/apitak/orders/submit_order.php?user_phone=${phoneNumber}`)
      .then((res) => setOrders(res.data))
      .finally(() => setLoadingOrders(false));
  }, [isLoggedIn, phoneNumber]);

  if (!isLoggedIn) return null;

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24 font-[vazirmatn] text-slate-900 overflow-x-hidden" dir="rtl">
      <div className="h-64 sm:h-80 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-indigo-500/20"></div>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 0.4 }}
          className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500 rounded-full blur-[80px] sm:blur-[120px]"
        />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40 sm:-mt-48 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          <aside className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="bg-white/90 backdrop-blur-xl rounded-[2rem] lg:rounded-[2.5rem] shadow-xl p-6 lg:p-8 border border-white"
            >
              <div className="flex flex-row lg:flex-col items-center gap-4 lg:gap-0 lg:text-center">
                <div className="relative shrink-0">
                  <div className="w-16 h-16 lg:w-28 lg:h-28 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl lg:rounded-3xl flex items-center justify-center text-white shadow-2xl">
                    <User size={32} className="lg:hidden" />
                    <User size={54} className="hidden lg:block" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 lg:-bottom-2 lg:-right-2 bg-emerald-500 p-1 lg:p-1.5 rounded-lg lg:rounded-xl border-2 lg:border-4 border-white shadow-lg">
                    <ShieldCheck size={14} className="text-white lg:w-5 lg:h-5" />
                  </div>
                </div>

                <div className="flex flex-col lg:items-center">
                  <h2 className="text-lg lg:text-2xl font-black mt-0 lg:mt-6 text-slate-800">
                    {name || userData?.name} {family || userData?.family}
                  </h2>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] lg:text-xs font-bold mt-1 lg:mt-3 border border-blue-100">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                    کاربر سطح طلایی
                  </div>
                </div>
              </div>

              <div className="mt-8 lg:mt-10 space-y-2 lg:space-y-3">
                <ProfileStat icon={<Phone size={18}/>} label="شماره تماس" value={phoneNumber} />
                <ProfileStat icon={<MapPin size={18}/>} label="استان" value="اصفهان" />
              </div>

              <button
                onClick={handleLogout}
                className="w-full mt-8 lg:mt-10 flex items-center justify-center gap-3 py-4 bg-slate-100 hover:bg-red-50 text-slate-500 hover:text-red-600 rounded-2xl lg:rounded-[1.5rem] font-black transition-all duration-300 group"
              >
                <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
                خروج از حساب
              </button>
            </motion.div>

            <div className="hidden lg:block bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl">
                <ShoppingBag className="absolute -right-8 -bottom-8 opacity-10 rotate-12" size={180} />
                <h4 className="text-lg font-black mb-3 relative z-10">سوالی دارید؟</h4>
                <p className="text-blue-100/80 text-sm leading-relaxed mb-6 relative z-10">پشتیبانان ما آماده پاسخگویی به شما هستند.</p>
                <button className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 py-3 rounded-2xl font-bold text-sm hover:bg-white hover:text-blue-700 transition-all">ارسال تیکت</button>
            </div>
          </aside>

          <section className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              className="bg-white/90 backdrop-blur-xl rounded-[2rem] lg:rounded-[3rem] shadow-xl border border-white min-h-[500px] overflow-hidden"
            >
              <div className="px-6 py-6 lg:px-10 lg:py-10 flex items-center justify-between border-b border-slate-100/50">
                <div>
                  <h2 className="text-lg lg:text-2xl font-black text-slate-800">تاریخچه سفارشات</h2>
                  <p className="hidden sm:block text-slate-400 text-sm font-bold mt-1">لیست تمامی خریدهای شما در آپیکاتک</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                  {orders.length}
                </div>
              </div>

              <div className="p-4 lg:p-10 space-y-6 lg:space-y-10">
                {loadingOrders ? (
                  <div className="space-y-6">
                    {[1, 2].map(i => <div key={i} className="h-48 bg-slate-50 rounded-[2rem] animate-pulse" />)}
                  </div>
                ) : (
                  orders.map((order, index) => (
                    <OrderCard key={order.id} order={order} index={index} onPay={() => setSelectedOrder(order)} />
                  ))
                )}
              </div>
            </motion.div>
          </section>
        </div>
      </main>

      <AnimatePresence>
        {selectedOrder && (
          <PaymentModal order={selectedOrder} onClose={() => setSelectedOrder(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

const ProfileStat = ({ icon, label, value }: any) => (
  <div className="flex items-center justify-between p-3 lg:p-4 bg-slate-50/50 rounded-xl lg:rounded-2xl border border-transparent hover:border-slate-100 transition-all group">
    <div className="flex items-center gap-3">
      <div className="text-blue-600 bg-white p-2 rounded-lg lg:rounded-xl shadow-sm group-hover:scale-110 transition-transform">{icon}</div>
      <span className="text-slate-400 text-[10px] lg:text-xs font-bold">{label}</span>
    </div>
    <span className="text-slate-700 font-black text-xs lg:text-sm">{value}</span>
  </div>
);

const OrderCard = ({ order, index, onPay }: { order: IOrder, index: number, onPay: () => void }) => {
  let products = [];
  try { products = JSON.parse(order.products); } catch (e) { products = []; }
  const isPaid = order.payment_status === "paid" || order.payment_status.includes("موفق");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-[1.5rem] lg:rounded-[2.5rem] p-1 border border-slate-100 hover:border-blue-200 transition-all duration-500"
    >
      <div className="p-5 lg:p-7">
        <div className="flex justify-between items-center mb-6 lg:mb-8">
          <div className="flex items-center gap-3 lg:gap-4">
            <div className="flex flex-col">
              <span className="text-[9px] lg:text-[10px] font-black text-slate-300 uppercase">کد سفارش</span>
              <span className="text-slate-900 font-black flex items-center gap-1.5 text-sm lg:text-base">
                <Hash size={14} className="text-blue-500"/> {order.id}
              </span>
            </div>
            <div className="w-px h-8 bg-slate-100 mx-1"></div>
            <div className="flex flex-col">
              <span className="text-[9px] lg:text-[10px] font-black text-slate-300 uppercase">تاریخ</span>
              <span className="text-slate-500 font-bold text-[11px] lg:text-sm flex items-center gap-1.5">
                <Calendar size={13}/> {order.created_at}
              </span>
            </div>
          </div>
          <div className={`px-3 lg:px-5 py-1.5 lg:py-2 rounded-xl lg:rounded-2xl text-[10px] lg:text-[11px] font-black border ${
            isPaid ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-amber-50 text-amber-600 border-amber-100"
          }`}>
            {
              order.payment_status==="paid"?(<p>پرداخت شده</p>) : <p>در انتظار پرداخت</p>
            }
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center bg-slate-50/80 rounded-2xl lg:rounded-[2rem] p-5 lg:p-7 border border-slate-50">
          <div className="lg:col-span-4 text-center lg:text-right">
            <p className="text-[9px] lg:text-[10px] text-slate-400 font-black mb-1 uppercase">مبلغ نهایی</p>
            <p className="text-xl lg:text-2xl font-black text-blue-600">
              {Number(order.total_price).toLocaleString()}
              <span className="text-xs font-normal text-slate-400 mr-1.5">تومان</span>
            </p>
          </div>

          <div className="hidden lg:block lg:col-span-5 border-r border-slate-200 pr-6">
            <p className="text-[10px] text-slate-400 font-black mb-1.5 uppercase">آدرس مقصد</p>
            <p className="text-sm font-bold text-slate-600 line-clamp-1">{order.province}، {order.city}، {order.address}</p>
          </div>

          <div className="lg:col-span-3">
             {!isPaid ? (
               <button
                  onClick={onPay}
                  className="w-full py-3 lg:py-4 bg-blue-600 text-white rounded-xl lg:rounded-2xl font-black text-xs lg:text-sm shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
               >
                  پرداخت <ChevronRight size={18} className="hidden lg:block" />
               </button>
             ) : (
               <button className="w-full py-3 lg:py-4 bg-white border border-slate-200 text-slate-600 rounded-xl lg:rounded-2xl font-bold text-xs lg:text-sm">
                 مشاهده فاکتور
               </button>
             )}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
           {products.slice(0, 3).map((p: any, i: number) => (
             <OrderItem key={i} id={p.id} qty={p.qty} />
           ))}
           {products.length > 3 && <span className="text-[10px] text-slate-400 font-bold">+{products.length - 3} مورد دیگر</span>}
        </div>
      </div>
    </motion.div>
  );
};



const PaymentModal = ({ order, onClose }: { order: IOrder; onClose: () => void }) => {
  const [copied, setCopied] = useState<{ card: boolean; sheba: boolean; qr: boolean }>({
    card: false,
    sheba: false,
    qr: false
  });
  const [account, setAccount] = useState({
    card_number: "",
    sheba_number: "",
    account_holder: "",
    bank_name: "",
    qr_image: ""
  });
  const [activeTab, setActiveTab] = useState<"card" | "sheba" | "qr">("card");
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const res = await axios.get("https://apitak.ir/apitak/bank_account/get_accounts.php");
        if (res.data && res.data[0]) {
          setAccount(res.data[0]);
        }
      } catch (error) {
        console.error("Error fetching account:", error);
      }
    };
    
    fetchAccount();
  }, []);

  // فرمت‌دهی شماره کارت
  const formatCardNumber = (num: string) => {
    const cleaned = num.replace(/\D/g, '');
    return cleaned.replace(/(\d{4})/g, '$1 ').trim();
  };

  // فرمت‌دهی شماره شبا
  const formatShebaNumber = (num: string) => {
    const cleaned = num.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    return cleaned.replace(/(.{4})/g, '$1 ').trim();
  };

  // کپی به کلیپ‌بورد
  const handleCopy = (text: string, type: "card" | "sheba" | "qr") => {
    navigator.clipboard.writeText(text);
    setCopied(prev => ({ ...prev, [type]: true }));
    
    // نمایش پیام موفقیت
    setSuccessMessage(type === "card" ? "شماره کارت کپی شد!" : 
                     type === "sheba" ? "شماره شبا کپی شد!" : "لینک پرداخت کپی شد!");
    setShowSuccess(true);
    
    // مخفی کردن پیام پس از 3 ثانیه
    setTimeout(() => {
      setCopied(prev => ({ ...prev, [type]: false }));
      setShowSuccess(false);
    }, 3000);
  };

  // تولید لینک پرداخت (برای نمایش در QR کد)
  const generatePaymentLink = () => {
    return `https://apitak.ir/pay?order=${order.id}&amount=${order.total_price}`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* پس‌زمینه تاریک با گرادیانت */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-black/80 backdrop-blur-sm"
      />
      
      {/* کارت اصلی مودال */}
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white w-full max-w-md rounded-t-[2.5rem] sm:rounded-[2.5rem] overflow-hidden relative z-10 shadow-2xl border border-white/20"
      >
        {/* هدر مودال با طراحی لوکس */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-5 sm:p-6 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_40%)]"></div>
          
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-300 rounded-full animate-pulse"></div>
              <h3 className="text-xl sm:text-2xl font-extrabold flex items-center gap-2">
                <CreditCard size={24} />
                پرداخت سفارش
              </h3>
            </div>
            <button 
              onClick={onClose} 
              className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="بستن"
            >
              <X size={20} />
            </button>
          </div>
          
          <p className="text-white/90 font-medium">
            سفارش شماره <span className="font-bold">#{order.id}</span>
          </p>
          
          {/* خط تزئینی */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-pink-500"></div>
        </div>
        
        {/* بدنه اصلی مودال */}
        <div className="p-5 sm:p-7 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* نمایش موفقیت‌آمیز کپی */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2 font-bold text-sm"
              >
                <CheckCircle size={20} />
                {successMessage}
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* تب‌های انتخاب روش پرداخت */}
          <div className="flex border-b border-gray-100">
            {[
              { id: "card", label: "کارت بانکی", icon: CreditCard },
              { id: "sheba", label: "شماره شبا", icon: Banknote },
              { id: "qr", label: "پرداخت آنلاین", icon: QrCode }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "card" | "sheba" | "qr")}
                  className={`flex-1 py-3 px-2 flex flex-col items-center gap-2 transition-all ${
                    activeTab === tab.id
                      ? "text-indigo-700 font-bold border-b-3 border-indigo-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <div className={`p-2 rounded-xl ${
                    activeTab === tab.id 
                      ? "bg-indigo-50 text-indigo-600" 
                      : "bg-gray-100 text-gray-500"
                  }`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
          
          {/* محتوای تب‌ها */}
          <AnimatePresence mode="wait">
            {activeTab === "card" && (
              <motion.div
                key="card-tab"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.08),transparent_70%)]"></div>
                
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2">
                    <CreditCard size={22} className="text-amber-300" />
                    <span className="text-sm font-bold opacity-80">{account.bank_name} بانک</span>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-400/20 px-2.5 py-1 rounded-full">
                    <Sparkle size={14} className="text-amber-300 animate-spin-slow" />
                    <span className="text-xs font-bold text-amber-200">کارت معتبر</span>
                  </div>
                </div>
                
                <p className="text-2xl font-extrabold tracking-[0.1em] text-center mb-6" dir="ltr">
                  {formatCardNumber(account.card_number)}
                </p>
                
                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <p className="text-sm font-bold opacity-70 flex items-center gap-2">
                    <span>صاحب حساب:</span>
                    <span className="text-amber-200">{account.account_holder}</span>
                  </p>
                  <button 
                    onClick={() => handleCopy(account.card_number, "card")}
                    className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all backdrop-blur-sm border border-white/10"
                  >
                    {copied.card ? (
                      <>
                        <Check size={16} className="text-emerald-400" />
                        کپی شد
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        کپی شماره کارت
                      </>
                    )}
                  </button>
                </div>
                
                {/* افکت نورپردازی */}
                <div className="absolute top-4 right-4 w-32 h-32 bg-amber-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-purple-500/10 rounded-full filter blur-3xl"></div>
              </motion.div>
            )}
            
            {activeTab === "sheba" && (
              <motion.div
                key="sheba-tab"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-emerald-600 to-cyan-800 rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_70%)]"></div>
                
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2">
                    <Banknote size={22} className="text-white" />
                    <span className="text-sm font-bold opacity-90">{account.bank_name} بانک</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white/20 px-2.5 py-1 rounded-full">
                    <Sparkle size={14} className="text-white animate-spin-slow" />
                    <span className="text-xs font-bold">شبا معتبر</span>
                  </div>
                </div>
                
                <p className="text-2xl font-extrabold tracking-[0.1em] text-center mb-6" dir="ltr">
                  {formatShebaNumber(account.sheba_number)}
                </p>
                
                <div className="flex justify-between items-center pt-4 border-t border-white/20">
                  <p className="text-sm font-bold opacity-85 flex items-center gap-2">
                    <span>صاحب حساب:</span>
                    <span className="text-white">{account.account_holder}</span>
                  </p>
                  <button 
                    onClick={() => handleCopy(account.sheba_number, "sheba")}
                    className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all backdrop-blur-sm border border-white/20"
                  >
                    {copied.sheba ? (
                      <>
                        <Check size={16} className="text-white" />
                        کپی شد
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        کپی شماره شبا
                      </>
                    )}
                  </button>
                </div>
                
                {/* افکت نورپردازی */}
                <div className="absolute top-4 right-4 w-32 h-32 bg-cyan-300/20 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-emerald-300/20 rounded-full filter blur-3xl"></div>
              </motion.div>
            )}
            
           
          </AnimatePresence>
          
          {/* جزئیات مبلغ و اطلاعات تماس */}
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-bold text-blue-800 flex items-center gap-2">
                  <span>مبلغ قابل پرداخت:</span>
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                </span>
                <span className="text-2xl font-extrabold text-indigo-900">
                  {Number(order.total_price).toLocaleString()}
                  <span className="text-lg font-bold text-blue-700 mr-1">تومان</span>
                </span>
              </div>
              
              <div className="mt-3 pt-3 border-t border-blue-100/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-2 text-blue-700 bg-blue-100/70 px-3 py-2 rounded-xl text-sm font-medium">
                  <Phone size={16} className="flex-shrink-0" />
                  <span>پشتیبانی: 09911048097</span>
                </div>
                <div className="flex items-center gap-2 text-amber-700 bg-amber-100/70 px-3 py-2 rounded-xl text-sm font-medium">
                  <Clock size={16} className="flex-shrink-0" />
                  <span>شنبه تا پنجشنبه، 9 الی 17</span>
                </div>
              </div>
            </div>
            
            {/* نکات مهم */}
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-xl">
              <div className="flex items-start gap-3">
                <AlertCircle size={20} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <h4 className="font-bold text-amber-900">نکات مهم:</h4>
                  <ul className="text-sm text-amber-800 space-y-1.5 pr-1">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>پس از واریز، حتماً رسید پرداخت را در واتساپ پشتیبانی ارسال نمایید .  </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>سفارش شما پس از تأیید پرداخت، ارسال خواهد شد</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>در صورت هرگونه مشکل، با پشتیبانی تماس بگیرید</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* دکمه تأیید */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClose}
            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white rounded-2xl font-extrabold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <span>متوجه شدم و آماده پرداخت هستم</span>
            <ArrowLeft size={20} className="rtl:rotate-180" />
            
            {/* ذرات نورانی */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-white rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    y: [0, -15, -30]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
          </motion.button>
        </div>
        
        {/* فوتر تزئینی */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-4 border-t border-gray-100">
          <div className="flex items-center justify-center gap-2 text-sm text-indigo-700 font-medium">
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></div>
            <span>آپیکا - فروشگاه معتبر  فروش تجهیزات صنعتی</span>
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </motion.div>
      
      {/* استایل‌های انیمیشن */}
      <style jsx global>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default UserPanel;

// const PaymentModal = ({ order, onClose }: { order: IOrder; onClose: () => void }) => {
//   const [copied, setCopied] = useState(false);
//   const cardNumber = "6037997365819722";

//   const handleCopy = () => {
//     navigator.clipboard.writeText(cardNumber);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
//       <motion.div
//         initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//         onClick={onClose} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
//       />
//       <motion.div
//         initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
//         className="bg-white w-full max-w-md rounded-t-[2rem] sm:rounded-[2.5rem] overflow-hidden relative z-10 shadow-2xl p-6 sm:p-8"
//       >
//         <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6 sm:hidden" />
//         <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-6 text-center">جزئیات واریز وجه</h3>

//         <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 text-white shadow-2xl mb-6 relative overflow-hidden">
//           <div className="flex justify-between items-start mb-8 italic opacity-60 text-xs">
//             <span>Melli Bank</span>
//             <Info size={16} />
//           </div>
//           <p className="text-xl sm:text-2xl font-black tracking-[0.15em] text-center mb-6" dir="ltr">
//             {cardNumber.match(/.{1,4}/g)?.join(" - ")}
//           </p>
//           <div className="flex justify-between items-center">
//             <p className="text-[10px] font-bold opacity-50">مدیریت بازرگانی آپیکا</p>
//             <button onClick={handleCopy} className="bg-white/10 px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1">
//               {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
//               {copied ? "کپی شد" : "کپی کارت"}
//             </button>
//           </div>
//         </div>

//         <div className="space-y-4 mb-6">
//           <div className="flex justify-between items-center p-4 bg-blue-50 rounded-2xl border border-blue-100">
//             <span className="text-xs font-bold text-blue-700">مبلغ قابل واریز:</span>
//             <span className="text-lg font-black text-blue-800">{Number(order.total_price).toLocaleString()} تومان</span>
//           </div>
//           <div className="p-4 bg-slate-50 rounded-2xl space-y-2 text-[11px] font-bold text-slate-500 leading-relaxed">
//             <div className="flex items-center gap-2"><Phone size={14} className="text-blue-500" /> تماس تایید: ۰۳۱-۳۴۲۵۸۰۷۰</div>
//             <div className="flex items-center gap-2"><Clock size={14} className="text-amber-500" /> شنبه تا پنجشنبه (ساعات اداری)</div>
//           </div>
//         </div>

//         <button onClick={onClose} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-sm transition-all active:scale-95">
//           متوجه شدم
//         </button>
//       </motion.div>
//     </div>
//   );
// };