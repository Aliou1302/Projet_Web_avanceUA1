"use client";
import Card from "@/components/card/Card";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold p-20">Welcome to Next.js</h1>

      <Card />

      <Card title="Juste un test" />

      <Card description="AAAAAAAAA" />
    </div>
  );
}
