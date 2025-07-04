export const metadata = {
  title: "DraftMyAgreement",
  description: "An AI-powered tool to draft your legal agreements",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
