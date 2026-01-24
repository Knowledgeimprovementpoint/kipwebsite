import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-emerald-500",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 text-white shadow-sm hover:from-indigo-500 hover:via-indigo-500 hover:to-sky-400 hover:shadow-lg hover:-translate-y-[1px] dark:from-indigo-400 dark:via-indigo-500 dark:to-emerald-400",
        outline:
          "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 hover:-translate-y-[1px] hover:shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50 dark:hover:bg-slate-900",
        ghost:
          "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

