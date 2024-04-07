"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import arrows from "../../assets/icon-slider.svg";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-[#e9f0fa]">
      <SliderPrimitive.Range className="absolute h-full bg-[#a0f1e8]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className="block h-7 w-7 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      style={{
        backgroundImage: `url(${arrows})`, // Assuming arrows contains the image path
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
