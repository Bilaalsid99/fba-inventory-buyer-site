import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"), // TODO: Replace with the live domain.
  title: {
    default: "Sell Amazon FBA UK Removal Inventory | Free Inventory Quote",
    template: "%s | Inventory Quote"
  },
  description:
    "Before you dispose of or liquidate Amazon FBA UK inventory, upload your removal or unfulfillable inventory list for a free, no-obligation quote.",
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
