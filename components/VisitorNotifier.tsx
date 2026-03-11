"use client";

import { useEffect } from "react";

export default function VisitorNotifier() {
  useEffect(() => {
    fetch("/api/notify", { method: "POST" }).catch(() => {});
  }, []);

  return null;
}
