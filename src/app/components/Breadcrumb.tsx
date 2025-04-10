// src/app/components/ui/Breadcrumb.tsx

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const crumbs = segments.map((segment, i) => {
    const href = "/" + segments.slice(0, i + 1).join("/");
    const label = decodeURIComponent(segment).replace(/-/g, " ");

    return {
      href,
      label: label.charAt(0).toUpperCase() + label.slice(1),
    };
  });

  return (
    <nav className="text-sm text-bluish-gray  mb-8">
      <ol className="flex space-x-2">
        <li>
          <Link href="/" className="hover:underline text-white">
            Home
          </Link>
        </li>
        {crumbs.map((crumb, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <span className="mx-1 text-gray-500">/</span>
            <Link href={crumb.href} className="hover:underline text-acua-marine">
              {crumb.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
