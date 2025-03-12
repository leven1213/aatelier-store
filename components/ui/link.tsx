import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const linkVariants = cva(
  "underline-offset-4 hover:underline justify-center cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "text-primary", 
        strong:
          "uppercase underline font-semibold hover:text-gray-500", 
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80", 
      },
      size: {
        default: "h-9",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4", 
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Link({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"a"> &
  VariantProps<typeof linkVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="a"
      className={cn(linkVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Link, linkVariants }
