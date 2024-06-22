import NavigationBar from "@/components/navbar";
import ToolCardGrid from "@/components/toolCardGrid";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ToolCardGrid/>
      <p>
        <Link href="/random-user-generator">Random User Generator</Link>
      </p>
    </main>
  );
}
