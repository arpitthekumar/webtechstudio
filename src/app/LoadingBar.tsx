"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

const LoadingBar = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    NProgress.start();

    const timer = setTimeout(() => {
      NProgress.done();
      setLoading(false);
    }, 500); // Simulated loading time (adjust as needed)

    return () => clearTimeout(timer);
  }, [pathname]);

  return null; // No UI needed
};

export default LoadingBar;
