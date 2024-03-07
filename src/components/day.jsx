import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Day(props) {
  return (
    <div className="flex items-center justify-between text-primary-foregroud">
      <div className="flex items-center justify-between">
        {props.icon}
        <div className="flex items-baseline ms-3">
          <h2 className="text-4xl font-semibold tracking-tight scroll-20">
            {props.max >= 0 && "+"} {props.max}
            <sup>°</sup>
          </h2>
          <p className="text-lg text-muted-foreground">
            / {props.min >= 0 && "+"} {props.min}
            <sup>°</sup>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-baseline">
          <h2 className="text-4xl font-semibold tracking-tight scroll-m-20">
            {props.day}
          </h2>
          <p className="text-sm ms-2 text-muted-foreground">{props.day2}</p>
        </div>
      </div>
    </div>
  );
}
