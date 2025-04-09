import { Counter } from "@/components/counter";
import { Button } from "@/components/ui/button";
import SplitText from "@/components/ui/split-text";
import { WaitlistForm } from "@/components/waitlist-form";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

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
      <div className="mt-4">
        <Counter />
      </div>
      <footer className="sticky top-[100vh]">
        <Button size="icon" variant="ghost">
          <Link href="https://github.com/zeitgg/zeitlist" target="_blank">
            <FaGithub />
          </Link>
        </Button>
      </footer>
    </div>
  );
}
