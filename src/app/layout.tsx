import ShoppingCartContextProvider from "@/context/ShoppingCartContext";
import "./globals.css";
import Layout from "@/components/Layout/Layout";
import AuthContextProvider from "@/context/AuthContext";
import ChatBot from "@/components/ChatBot/ChatBot";
import { Metadata } from "next"; // وارد کردن تایپ Metadata

// ✅ اضافه کردن متادیتا
export const metadata: Metadata = {
  title: "نام فروشگاه شما | خرید انواع پمپ و لوازم صنعتی",
  description: "بهترین قیمت خرید انواع پمپ‌های خانگی و صنعتی با ضمانت کیفیت در اپیکا.",
  icons: {
    icon: "https://apika.ir/images/apika2.svg", // مسیر لوگوی کوچک سایت
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <AuthContextProvider>
          <ShoppingCartContextProvider>
            <Layout>
              {children} 
              <ChatBot/>
            </Layout>
          </ShoppingCartContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}