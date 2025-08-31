import { cn } from "@/lib/utils";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = ComponentPropsWithoutRef<"input">;

// forwardRef para que <Input ref={...}/> siga funcionando
export const AInput = forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => {
        return (
            <input
                ref={ref}
                className={cn(
                    "border outline-none border-primary p-2 rounded-md",
                    className
                )}  
                {...props}
            />
        );
    }
);
