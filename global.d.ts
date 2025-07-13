// global.d.ts
import React from "react";
import "framer-motion";

declare module "framer-motion" {
  interface MotionProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    id?: string;
    onClick?: React.MouseEventHandler;
  }
}
