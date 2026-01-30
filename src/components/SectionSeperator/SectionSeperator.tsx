import { CircleChevronLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
interface SectionHeaderProps {
  icon?: ReactNode;
  title: string;
  linkText?: string;
  linkHref?: string;
}
const SectionHeader = ({
  icon,
  title,
  linkText = "مشاهده همه",
  linkHref = "#",
}: SectionHeaderProps) => {
  return (
    <div className="flex items-center justify-between py-4 w-[95%] mx-auto">
      <div className="flex items-center gap-2 text-right">
        {icon && <span className="text-blue-600">{icon}</span>}
        <h2 className="text text-gray-800">{title}</h2>
      </div>
      <div className="flex-1 mx-4 border-2 border-t border-dotted border-gray-400"></div>
      <Link
        href={linkHref}
        className="flex items-center gap-1 text-[11px] text-gray-700 hover:text-blue-600 transition"
      >
        <CircleChevronLeft size={17} color="#155dfc" />
        {linkText}
      </Link>
    </div>
  );
};

export default SectionHeader;
