"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { MenuIcon, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <div className="flex">
      <NavigationMenu className="fixed top-0 w-full bg-white/50 backdrop-blur-sm dark:bg-slate-800/50 h-16 flex justify-end items-center p-4 max-w-full">
        <NavigationMenuList className="flex items-center gap-4">
          <NavigationMenuItem className="hidden md:flex">
            LALA
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:flex">
            LILI
          </NavigationMenuItem>
          {/* Mobile hamburger */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                  <MenuIcon className="w-6 h-6" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-slate-800 shadow-md rounded-md mt-2 right-0 w-40">
                <DropdownMenuItem>LALA</DropdownMenuItem>
                <DropdownMenuItem>LILI</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white dark:bg-slate-800 shadow-md rounded-md mt-2 right-0 w-40">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex w-full min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-slate-800 max-w-full">
        <main className="flex gap-4 w-full max-w-3xl flex-col items-center justify-between py-32 md:px-48 px-16 bg-white dark:bg-slate-800 md:items-start max-w-full">
          <h4 className="text-emerald-400 scroll-m-20 text-xl font-semibold tracking-tight  md:text-left text-center">
            Hello World, I'm
          </h4>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance  md:text-left text-center">
            Lucile
          </h1>
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight md:text-left text-center">
            Fullstack Web Developer
          </h1>
          <h1 className="scroll-m-20 tracking-tight leading-8  md:text-left text-center">
            I am a self-taught and bilingual (FR/EN) TypeScript/Node.js
            fullstack web developer with 4 years of experience working in agile
            teams. I enjoy creating functional applications with clean and
            maintainable code.
          </h1>
        </main>
      </div>
    </div>
  );
}
