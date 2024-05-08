import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
      <h1 className="text-2xl font-extrabold ">Welcome </h1>
      <Link href={"auth/login"} className={buttonVariants()}>
        Get Started
      </Link>
      <div>
        <h1>Test Routes</h1>
        <div className="flex items-center gap-4">
          <Link href={"auth/login"} className={buttonVariants()}>
            signin
          </Link>

          <Link href={"auth/signup"} className={buttonVariants()}>
            signup
          </Link>
          <Link href={"/dashboard"} className={buttonVariants()}>
            dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
