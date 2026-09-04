"use client";

import { useEffect } from "react";
import { initAnalytics } from "@/lib/analytics";

/** Mount pelacakan analytics ringan (PRD §25). */
export function Analytics() {
  useEffect(() => {
    initAnalytics();
  }, []);
  return null;
}