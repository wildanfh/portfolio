import { Navbar } from "@/components/Navbar";
import { Profile } from "@/components/Profile";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Connect } from "@/components/Connect";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />

      {/* Main Content Wrapper */}
      <main className="flex-grow flex flex-col items-center pt-28 pb-20 px-4 sm:px-8">
        <div className="w-full max-w-[800px] flex flex-col gap-16">
          <Profile />
          <About />
          <Experience />
          <Projects />
          <Connect />
          <Footer />
        </div>
      </main>
    </div>
  );
}
