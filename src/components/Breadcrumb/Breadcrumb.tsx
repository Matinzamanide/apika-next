'use client';

import Link from 'next/link';
import { Home, ChevronLeft } from 'lucide-react';

interface BreadcrumbProps {
  productName: string;
  category?: string;
  link: string;
}

const Breadcrumb = ({ productName, category, link }: BreadcrumbProps) => {
  const linkMapping: Record<string, string> = {
    'مکانیکال سیل': 'mechanical-seal',
    'الکتروموتور': 'ElectroMotor',
    'بلوئر': 'bluer',
    'پمپ لجن کش': 'SludgePump',
    'الکترو پمپ': 'ElectroPump',
    'ست کنترل پمپ': 'SetControl',
    'پمپ آب خانگی': 'HouseholdPump',
    'منبع انبساط': 'ExpansionSource',
    'تیوپ': 'tube',
    'موتور کولر': 'Cooler',
    'پمپ کف کش': 'kafkesh-pump',
    'پمپ کارواش': 'karvash-pump',
    'موتور برق': 'motor-bargh',
    'پمپ دنده‌ای': 'gear-pump',
    'روغن داغ': 'hot-oil',
  };

  const finalLink = linkMapping[category || ''] || link;

  return (
    <nav className="flex py-4 px-3 text-sm text-slate-500 overflow-x-auto whitespace-nowrap bg-white/50 backdrop-blur-sm rounded-2xl mb-4 border border-slate-100" aria-label="breadcrumb" dir="rtl">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="flex items-center gap-1.5 hover:text-blue-600 transition-all duration-200">
            <Home size={16} className="text-slate-400" />
            <span className="font-medium">خانه</span>
          </Link>
        </li>

        {category && (
          <>
            <li className="text-slate-300">
              <ChevronLeft size={14} />
            </li>
            <li>
              <Link 
                href={`/${finalLink}`} 
                className="font-medium hover:text-blue-600 transition-all duration-200"
              >
                {category}
              </Link>
            </li>
          </>
        )}

        <li className="text-slate-300">
          <ChevronLeft size={14} />
        </li>

        <li className="flex-1">
          <span className="text-slate-900 font-bold truncate block max-w-[150px] sm:max-w-none">
            {productName}
          </span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;