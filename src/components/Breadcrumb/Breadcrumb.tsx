'use client';

import Link from 'next/link';
import { Home } from 'lucide-react';

interface BreadcrumbProps {
  productName: string;
  category?: string; 
  link:string
}

const Breadcrumb = ({ productName, category,link  }: BreadcrumbProps) => {
  return (
    <nav className="flex py-4 px-2 text-sm text-gray-600 overflow-x-auto" aria-label=" breadcrumb">
      <ol className="flex items-center space-x-2 space-x-reverse">
        <li>
          <Link href="/" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
            <Home size={16} />
            <span>صفحه اصلی</span>
          </Link>
        </li>
        <li className="text-gray-400">/</li>

        <li>
          <Link href={`/${link}`} className="hover:text-blue-600 transition-colors">
            {category}
          </Link>
        </li>
        <li className="text-gray-400">/</li>

        <li>
          <span className="text-gray-800 font-medium truncate max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            {productName}
          </span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;