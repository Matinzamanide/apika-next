import Image from 'next/image';
import Link from 'next/link';

const data = [
  {
    name: 'الکتروموتور',
    src: 'https://rahabsanat.ir/wp-content/uploads/2017/04/ABBEMotor-100x100.jpg',
    gradient: 'from-blue-500 to-purple-600',
    hoverColor: 'hover:from-blue-600 hover:to-purple-700',
    link: '/ElectroMotor',
  },
  {
    name: 'پمپ لجن کش',
    src: 'https://rahabsanat.ir/wp-content/uploads/2017/05/ImageHandler-11-100x100.png',
    gradient: 'from-orange-500 to-red-600',
    hoverColor: 'hover:from-orange-600 hover:to-red-700',
    link: '/SludgePump',
  },
  {
    name: 'دوزینگ پمپ',
    src: 'https://rahabsanat.ir/wp-content/uploads/2019/12/dosing-pump-500-100x100.jpg',
    gradient: 'from-green-500 to-teal-600',
    hoverColor: 'hover:from-green-600 hover:to-teal-700',
    link: '/DosingPump',
  },
  {
    name: 'الکترو پمپ',
    src: 'https://rahabsanat.ir/wp-content/uploads/2016/10/ImageHandler-8-100x100.jpg',
    gradient: 'from-indigo-500 to-pink-600',
    hoverColor: 'hover:from-indigo-600 hover:to-pink-700',
    link: '/ElectroPump',
  },
];

export default function CategoryCards() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
          دسته‌بندی محصولات
        </h2>
        <p className="text-md text-gray-600 max-w-2xl mx-auto">
          محصولات باکیفیت ما را در دسته‌بندی‌های متنوع کشف کنید.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {data.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="group relative bg-white/70 backdrop-blur-lg rounded-3xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <div
              className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${item.gradient} blur-md -z-10 scale-95 group-hover:scale-100`}
            />

            <div className="p-8 flex justify-center">
              <div
                className={`p-4 rounded-full bg-gradient-to-br ${item.gradient} shadow-lg group-hover:scale-110 transition-transform duration-500`}
              >
                <Image
                  width={80}
                  height={80}
                  src={item.src}
                  alt={item.name}
                  className="rounded-full object-cover w-16 h-16 drop-shadow-md"
                />
              </div>
            </div>

            <div className="px-8 pb-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-white transition-colors duration-300">
                {item.name}
              </h3>

              <span
                className={`block py-3 text-white font-medium rounded-xl bg-gradient-to-r ${item.gradient} ${item.hoverColor} transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300`}
              >
                مشاهده محصولات
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
