import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
 

const inter = Inter({
  subsets: ["latin"],

});{/*it is the font used throughout the application */}

export const metadata = {
  title: "Proxima - AI career coach",
  description: "Proxima is an AI career coach that helps you find your dream job.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className}  min-h-screen flex flex-col`}
        >
           <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
            {/* HEADER */}
            <Header />
            {/* MAIN CONTENT */}
            <main className="min-h-screen">{children}</main>
            {/* FOOTER */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-grey-200">
                <p>© 2025 My Website</p>
              </div>
          </footer>
          </ThemeProvider>
      </body>
    </html>
  </ClerkProvider>
  );
}
