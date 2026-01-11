import { motion, HTMLMotionProps } from "framer-motion";
import { LucideIcon } from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "danger" | "ghost";
    size?: "sm" | "md" | "lg" | "xl";
    icon?: LucideIcon;
    fullWidth?: boolean;
}

export function Button({
    children,
    className,
    variant = "primary",
    size = "md",
    icon: Icon,
    fullWidth = false,
    ...props
}: ButtonProps) {

    const baseStyles = "inline-flex items-center justify-center rounded-xl font-bold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-neon-green text-black hover:bg-[#00D47A] shadow-neon-green",
        secondary: "bg-dark-card border border-dark-border text-white hover:border-neon-purple hover:text-neon-purple hover:shadow-neon-purple",
        danger: "bg-neon-red text-white hover:bg-[#D41E1E] shadow-[0_0_20px_rgba(255,46,46,0.3)]",
        ghost: "bg-transparent text-gray-400 hover:text-white"
    };

    const sizes = {
        sm: "h-9 px-4 text-sm",
        md: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-lg",
        xl: "h-16 px-10 text-xl uppercase tracking-wide"
    };

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            className={twMerge(
                baseStyles,
                variants[variant],
                sizes[size],
                fullWidth ? "w-full" : "",
                className
            )}
            {...props}
        >
            {children}
            {Icon && <Icon className="ml-2 w-5 h-5" />}
        </motion.button>
    );
}
