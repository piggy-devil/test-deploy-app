import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button variant="outline">ทดสอบ Deploy</Button>
      <br />
      <Button variant="outline">Deploy Test</Button>
    </main>
  );
}
