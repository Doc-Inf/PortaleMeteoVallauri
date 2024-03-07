import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Info(props) {
  return (
    <Card className="bg-accent border-zinc-700/50">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold tracking-tight scroll-m-20">
              {props.title}
            </h3>
            {props.icon || " "}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-3">
        <h4 className="text-3xl font-semibold tracking-tight scroll-m-20">
          {props.value}
          <sup className="ms-2">{props.unit}</sup>
        </h4>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">{props.subtitle}</p>
      </CardFooter>
    </Card>
  );
}
