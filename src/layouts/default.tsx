import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3 bg-gray-200 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 backdrop-blur-sm">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://luissubiabre.dev"
          title="Luis Subiabre homepage"
        >
          <span className="text-default-600">Creado por</span>
          <p className="text-primary dark:text-violet-500">
            Luis Subiabre Salviat.
          </p>
        </Link>
      </footer>
    </div>
  );
}
