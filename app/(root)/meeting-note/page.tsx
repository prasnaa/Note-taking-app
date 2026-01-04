// pages/your-route.js
import TemplHeader from "@/components/TemplHeader";
import TemplFooter from "@/components/TemplFooter";

export default function YourRoutePage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <TemplHeader />

      <main className="flex-1 container mx-auto p-8 ">
        {children}
      </main>

      <footer>
        <TemplFooter />
      </footer>
    </div>
  );
}