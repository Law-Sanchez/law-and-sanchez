"use client";
import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import Navbar04Page from "@/components/navbar/navbar";
import Footer05Page from "@/components/footer/footer";
import { Input } from "@/components/ui/input";
import { MagicCard } from "@/components/magicui/magic-card";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type DateTimeRange = {
  date: Date;
  time1: string;
  time2: string;
};
export default function Page() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [time1, setTime1] = React.useState<string>("");
  const [time2, setTime2] = React.useState<string>("");
  const data = React.useState<DateTimeRange[]>([]);

  return (
    <div className="min-h-screen bg-muted">
      <Navbar04Page />
      <div className="h-32"></div>
      <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">
        Book an Appointment
      </h2>
      <div className="px-32 py-20">
        <Card className="p-0 w-full shadow-none border-none">
          <MagicCard gradientColor={"#D9D9D955"} className="p-0">
            {/* <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader> */}
            <CardContent className="p-4">
              <form>
                <div className="grid grid-cols-6 gap-4">
                  <div className="grid gap-2 col-span-3">
                    <Label htmlFor="email">Name</Label>
                    <Input id="name" type="name" placeholder="" />
                  </div>
                  <div className="grid gap-2 col-span-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div className="grid gap-2 col-span-2">
                    <Label htmlFor="make">Make</Label>
                    <Input id="make" type="text" placeholder="e.g. Toyota" />
                  </div>
                  <div className="grid gap-2 col-span-2">
                    <Label htmlFor="model">Model</Label>
                    <Input id="model" type="text" placeholder="e.g. Camry" />
                  </div>
                  <div className="grid gap-2 col-span-2">
                    <Label htmlFor="email">Year</Label>
                    <Input
                      id="year"
                      type="number"
                      min="1900"
                      max="2100"
                      placeholder="2010"
                    />
                  </div>
                  <div className="grid gap-2 col-span-6">
                    <Label htmlFor="email">Tell us about your problem</Label>
                    <Textarea placeholder="Type your message here." />
                  </div>

                  <div className="grid gap-2 col-span-6">
                    <Label htmlFor="email">Select appointment time</Label>
                    <div className="flex gap-4">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border w-fit"
                      />
                      <ScrollArea className="h-72 w-40 border rounded-md">
                        <div className="flex flex-col gap-2 h-full mx-8 my-2">
                          {Array.from({ length: 41 }).map((_, i) => {
                            const hour = Math.floor(i / 4) + 8;
                            const hour_str = (hour > 12 ? hour - 12 : hour)
                              .toString()
                              .padStart(2, "0");
                            const minute = (i % 4) * 15;
                            const minute_str = minute
                              .toString()
                              .padStart(2, "0");
                            var timeValue = `${hour_str}:${minute_str} AM`;
                            if (hour > 12) {
                              timeValue = `${hour_str}:${minute_str} PM`;
                            }
                            return (
                              <Button
                                key={i}
                                className="w-full text-left px-2"
                                variant={
                                  time1 === timeValue || time2 === timeValue
                                    ? "default"
                                    : "ghost"
                                }
                                onClick={(e) => {
                                  e.preventDefault();
                                  if (!time1) setTime1(timeValue);
                                  else if (time1 === timeValue) {
                                    setTime1("");
                                  } else if (time2 === timeValue) {
                                    setTime2("");
                                  } else {
                                    setTime2(timeValue);
                                  }
                                }}
                              >
                                {timeValue}
                              </Button>
                            );
                          })}
                        </div>
                      </ScrollArea>
                      <ScrollArea className="h-72 w-40">
                        {/* {data.map((point) => {
                          point.date;
                        })} */}
                      </ScrollArea>
                    </div>

                    {/* <TimePickerDemo /> */}
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="p-4 border-t border-border [.border-t]:pt-4">
              <Button>Meet with us!</Button>
            </CardFooter>
          </MagicCard>
        </Card>
      </div>

      <Footer05Page />
    </div>
  );
}
