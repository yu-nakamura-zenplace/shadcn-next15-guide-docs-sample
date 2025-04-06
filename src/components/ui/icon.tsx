"use client";

import React from "react";
import { LucideIcon, LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

type AnimationType = "pulse" | "bounce" | "spin" | "ping" | "none";

export interface IconProps extends LucideProps {
  icon: LucideIcon;
  animateOnHover?: boolean;
  animation?: AnimationType;
  label?: string;
}

export function Icon({
  icon: Icon,
  className,
  animateOnHover = false,
  animation = "none",
  label,
  ...props
}: IconProps) {
  // アニメーションクラスを定義
  const animationClass = {
    pulse: "animate-pulse",
    bounce: "animate-bounce",
    spin: "animate-spin",
    ping: "animate-ping",
    none: "",
  }[animation];

  // ホバーアニメーションクラスを定義
  const hoverAnimationClass = animateOnHover
    ? "transition-transform duration-200 group-hover:scale-110"
    : "";

  return (
    <span
      className={cn("inline-flex", animation !== "none" && animationClass)}
      aria-label={label}
      role={label ? "img" : undefined}
      aria-hidden={!label}
    >
      <Icon
        className={cn(
          "shrink-0",
          hoverAnimationClass,
          className
        )}
        {...props}
      />
    </span>
  );
} 