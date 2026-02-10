"use client";
import { Switch } from "@/components/ui/switch";

import { useTheme } from "next-themes";
export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <nav className="fixed top-0 w-full bg-white/50 backdrop-blur-sm dark:bg-slate-800/50 h-16 flex justify-end items-center p-4">
        <Switch
          id="theme-toggle"
          checked={theme === "dark"}
          onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      </nav>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-slate-800">
        <main className="flex gap-4 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-slate-800 sm:items-start">
          <h4 className="text-emerald-400 scroll-m-20 text-xl font-semibold tracking-tight">
            Hello World, I'm
          </h4>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
            Lucile
          </h1>
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Fullstack Web Developer
          </h1>
          <h1 className="scroll-m-20 tracking-tight leading-8">
            I am a self-taught and bilingual (FR/EN) TypeScript/Node.js
            fullstack web developer with 4 years of experience working in agile
            teams. I enjoy creating functional applications with clean and
            maintainable code.
          </h1>
        </main>
      </div>
    </>
  );
}
