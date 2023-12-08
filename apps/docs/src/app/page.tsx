import { Button } from "@repo/ui/button";

export default function App(): JSX.Element {
  return (
    <div className="bg-white h-screen flex items-center justify-center text-neutral-800 flex-col gap-2">
      <h1>Next</h1>
      <Button size="lg">Teste</Button>
    </div>
  );
}

