import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function InfoCard({ title, src, par, sub }) {
  return (
    <Card className="relative px-4 pb-8 m-auto shadow-sm shadow-primary lg:max-w-screen-lg">
      <CardHeader className="flex flex-col items-center justify-between md:flex-row">
        <CardTitle
          className={` ${
            !src && `text-center w-full`
          } pb-2 mt-8 text-3xl font-normal tracking-tight md:text-3xl 2xl:text-4xl scroll-m-20 md:mt-0 whitespace-nowrap`}
        >
          {title}
        </CardTitle>
        {src && (
          <div className="absolute top-0 -translate-y-1/2 border-2 rounded-full md:-translate-y-px md:static border-primary">
            <img
              src={src}
              className="p-0 m-0 rounded-full w-14 h-14 grayscale"
              md
            ></img>
          </div>
        )}
      </CardHeader>
      <CardDescription className="px-4 text-justify w-[95%]">
        <p
          className={`leading-6 [&:not(:first-child)]:mt-6 ${
            src ? `text-pretty` : `text-center`
          } text-foreground/95`}
        >
          {par}
        </p>
        {sub && (
          <blockquote className="pl-6 mt-6 italic text-center">
            {sub}
          </blockquote>
        )}
      </CardDescription>
    </Card>
  );
}
