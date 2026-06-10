import { Button } from "@/components/ui/button";
export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold">
        My Static Website my name is disha
      </h1>

      <p className="text-muted-foreground">
        Built with love by Disha using Next.js and Radix UI. This website is fully static and optimized for performance.
      </p>

      <Button>Get Started</Button>
    </main>
  );
}