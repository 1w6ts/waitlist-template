"use client";
import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SplitText from "@/components/ui/split-text";
import { stagger } from "motion";
import { WaitlistForm } from "@/components/waitlist-form";
import { getWailistCount } from "@/lib/redis";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center text-center">
      <div className="mb-8">
        <SplitText className="text-5xl tracking-tighter font-medium">
          Get early access
        </SplitText>
        <SplitText className="tracking-tight text-xl">
          Be amongst the first to experience our services.
        </SplitText>
      </div>
      <WaitlistForm />
      <div></div>
    </div>
  );
}
