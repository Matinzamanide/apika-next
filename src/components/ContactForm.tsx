"use client"
import { useEffect, useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "نام الزامی است";
    if (!formData.email.trim()) {
      newErrors.email = "ایمیل الزامی است";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "ایمیل معتبر نیست";
    }
    if (!formData.message.trim()) newErrors.message = "پیام شما خالی است";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // شبیه‌سازی ارسال فرم
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };
  useEffect(()=>{

      window.scrollTo({ top: 0, behavior: "smooth" });
  },[])


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* هدر با انیمیشن */}
     {/* هدر پویا و جذاب */}
<div className="bg-white overflow-hidden border-b border-gray-100 relative">
  {/* پس‌زمینه موج‌دار زیبا (SVG) */}
  <div className="absolute inset-0 opacity-5 pointer-events-none">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        fill="#3b82f6"
        fillOpacity="0.1"
        d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,154.7C672,139,768,149,864,176C960,203,1056,245,1152,240C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </div>

  <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
    {/* عنوان اصلی */}
    <div className="text-center max-w-3xl mx-auto mb-8">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-4 tracking-tight">
        در خدمت شما
        <span className="text-blue-600 block mt-2">هستیم</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
        سوال دارید؟ پیشنهادی دارید؟ یا می‌خواهید همکاری کنید؟
        <br />
        ما آماده‌ی شنیدن صدای شما هستیم.
      </p>
    </div>

    {/* انیمیشن Lottie با افکت شناور و نورپردازی */}
    <div className="flex justify-center mt-10">
      <div 
        className="
          relative w-52 h-52 md:w-72 md:h-72 
          transform hover:scale-105 transition-all duration-500
          drop-shadow-lg
        "
      >
        {/* نورپردازی زیر انیمیشن */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-300 to-transparent rounded-full blur-xl opacity-30 -z-10"></div>
        
        {/* iframe انیمیشن */}
        <iframe
          src="https://lottie.host/embed/e48d7391-a0f1-404c-9ada-8482fb635d7e/ZFuZFAyKk1.lottie"
          className="w-full h-full rounded-2xl shadow-2xl border border-blue-100"
          title="تماس با ما انیمیشن"
          style={{ pointerEvents: "none" }} // جلوگیری از تعامل غیرضروری
        ></iframe>
      </div>
    </div>

    {/* خط تزیینی زیر انیمیشن */}
    <div className="flex justify-center mt-12">
      <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
    </div>
  </div>

  {/* ذرات متحرک زیبا (اختیاری - افکت لوکس) */}
  <div className="absolute top-20 left-10 w-2 h-2 bg-blue-300 rounded-full opacity-60 animate-pulse delay-100"></div>
  <div className="absolute top-40 right-20 w-1 h-1 bg-purple-300 rounded-full opacity-50 animate-pulse delay-300"></div>
  <div className="absolute bottom-20 left-20 w-1 h-1 bg-green-300 rounded-full opacity-40 animate-pulse delay-500"></div>
</div>

      {/* محتوای اصلی */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-start">
        
        {/* اطلاعات تماس */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-800">اطلاعات تماس</h2>

          <div className="space-y-6">
            {/* آدرس */}
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-right">
                <h3 className="font-semibold text-gray-800">آدرس</h3>
                <p className="text-gray-600 leading-relaxed mt-1">اصفهان، بهرام‌آباد</p>
              </div>
            </div>

            {/* تلفن */}
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-right">
                <h3 className="font-semibold text-gray-800">تلفن</h3>
                <p className="text-gray-600 mt-1">۰۳۱-۳۴۲۵۸۰۷۰</p>
                <a href="tel:02112345678" className="text-blue-600 hover:underline text-sm mt-1 inline-block">تماس سریع</a>
              </div>
            </div>

            {/* ایمیل */}
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-right">
                <h3 className="font-semibold text-gray-800">ایمیل</h3>
                <p className="text-gray-600 mt-1">matinzamanide@gmail.com</p>
                <a href="mailto:matinzamanide@gmail.com" className="text-blue-600 hover:underline text-sm mt-1 inline-block">ارسال ایمیل</a>
              </div>
            </div>

            {/* واتساپ */}
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="bg-emerald-100 p-3 rounded-full flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z" />
                </svg>
              </div>
              <div className="text-right">
                <h3 className="font-semibold text-gray-800">واتساپ</h3>
                <p className="text-gray-600 mt-1">پشتیبانی آنی</p>
                <a
                  href="https://wa.me/989911048097"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline text-sm mt-1 inline-block font-medium"
                >
                  چت در واتساپ
                </a>
              </div>
            </div>
          </div>

          {/* شبکه‌های اجتماعی (اختیاری) */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-3">ما را دنبال کنید</h3>
            <div className="flex space-x-4 space-x-reverse">
              {["instagram", "linkedin", "telegram"].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com/apika`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-800 transition"
                  aria-label={social}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {social === "instagram" && (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    )}
                    {social === "linkedin" && (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    )}
                    {social === "telegram" && (
                      <path d="M9.43 18.63l.36-1.68 7.04-6.42c.35-.32.6-.38.97-.16.37.22.47.6.3.97l-1.5 8.18c-.23 1.24-.4 1.36-1.55 1.02-1.78-.53-6.42-2.19-8.56-2.94-.8-.27-1.13-.5-1.13-1.02 0-.41.29-.68.82-.88z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* فرم تماس */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          {submitStatus === "success" ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">پیام شما ارسال شد!</h3>
              <p className="text-gray-600 mt-2">به زودی پاسخ شما را ایمیل خواهیم کرد.</p>
              <button
                onClick={() => setSubmitStatus("idle")}
                className="mt-6 text-blue-600 hover:underline"
              >
                ارسال پیام جدید
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">ارسال پیام</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="text-right">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    نام و نام خانوادگی
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.name ? "border-red-300" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-right`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div className="text-right">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    ایمیل
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.email ? "border-red-300" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-right`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="text-right">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    موضوع
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-right"
                  />
                </div>

                <div className="text-right">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    پیام شما
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.message ? "border-red-300" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-right resize-none`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 rounded-lg transition duration-200 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      در حال ارسال...
                    </>
                  ) : (
                    "ارسال پیام"
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;