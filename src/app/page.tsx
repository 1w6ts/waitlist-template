"use client";
import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SplitText from "@/components/ui/split-text";
import { stagger } from "motion";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center text-center">
      <div>
        <SplitText className="text-5xl tracking-tighter font-medium">
          Get early access
        </SplitText>
        <SplitText className="tracking-tight text-xl">
          Be amongst the first to experience our services.
        </SplitText>
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 1.5,
            scale: {
              type: "spring",
              bounce: 0,
            },
          }}
          className="flex gap-2 mt-8"
        >
          <Input placeholder="Your email address" className="rounded-xl" />
          <Button className="rounded-xl">Get me in</Button>
        </motion.div>
      </div>
    </div>
  );
}
