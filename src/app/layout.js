import { Poppins } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Providers } from "@/context/DarkMode";

export const metadata = {
  title: "Srinivasa Reddy",
  description: "Personal website of Srinivasa Reddy",
  icons: {
    icon: "/heroimg.png", // Path to your favicon
    shortcut: "/favicon.ico", // Shortcut icon (optional)
    apple: "/apple-touch-icon.png", // Apple touch icon (optional)
  },
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  display: "swap", 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Apply the font class to the <body> */}
      <body className={`${poppins.className} bg-gray-100 dark:bg-red-700`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
