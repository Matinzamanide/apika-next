"use client"
export default function LoadingApika() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 relative overflow-hidden">
      <h1 className="relative text-6xl md:text-8xl font-extrabold text-gray-800 tracking-wide">
        <span className="relative">
          A
          <span
            className="absolute top-0 right-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full opacity-0 animate-drop-start"
          ></span>
        </span>
        PIKA
      </h1>

      <div className="absolute animate-drop-travel">
        <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
        <div className="w-1 h-4 mx-auto bg-blue-400 rounded-full mt-0.5"></div>
      </div>

      <p className="text-gray-600 text-sm mt-6 animate-pulse">در حال بارگذاری سیستم...</p>

      <style jsx>{`
        @keyframes drop-start {
          0% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0; transform: scale(0) translateY(4px); }
        }

        @keyframes drop-travel {
          0% {
            opacity: 0;
            transform: translateY(-20px) scale(0.8);
          }
          10% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          90% {
            opacity: 1;
            transform: translateY(150px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(180px) scale(0.8);
          }
        }

        .animate-drop-start {
          animation: drop-start 2s ease-in-out infinite;
        }

        .animate-drop-travel {
          animation: drop-travel 2s ease-in-out infinite;
          top: -30px;
          right: calc(50% - 6px); /* وسط حرف A */
        }
      `}</style>
    </div>
  );
}