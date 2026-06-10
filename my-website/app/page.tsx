import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold">
        My Static Website
      </h1>

      <p className="text-muted-foreground">
        Built with Next.js and shadcn/ui
      </p>

      <Button>Get Started</Button>
    </main>
  );
}