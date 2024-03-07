import { cn } from "@/lib/utils";
import React from "react";

export function ContainerCols({ children }) {
  return (
    <div className="max-w-screen-md px-5 m-auto space-y-5 lg:max-w-screen-lg md:columns-2 columns-1 md:px-0">
      {children}
    </div>
  );
}
export function Container({ children, ...props }) {
  return (
    <div
      className={cn(
        props.className,
        "max-w-screen-md p-4 bg-accent m-auto mt-10 border rounded-lg border-zinc-700/50 lg:max-w-screen-lg"
      )}
    >
      {children}
    </div>
  );
}
