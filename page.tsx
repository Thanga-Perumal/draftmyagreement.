export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">DraftMyAgreement</h1>
      <p className="text-lg">Create and manage legal agreements with ease.</p>
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Get Started
      </button>
    </main>
  );
}