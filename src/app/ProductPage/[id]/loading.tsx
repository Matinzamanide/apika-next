export default function Loading() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
          <p className="text-sm text-slate-500 font-semibold">
            در حال بارگذاری محصول...
          </p>
        </div>
      </div>
    );
  }
  