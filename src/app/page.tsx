export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <header className="bg-blue-600 text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Landing Page</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="text-center py-20 bg-gray-100">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Product</h2>
        <p className="mb-6">Build your awesome landing page with ease.</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Get Started
        </button>
      </section>

      <section id="features" className="py-20 container mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-10">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded shadow">🚀 Fast Performance</div>
          <div className="p-6 bg-white rounded shadow">🎨 Modern UI</div>
          <div className="p-6 bg-white rounded shadow">📱 Responsive Design</div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6 mt-20">
        <p>&copy; {new Date().getFullYear()} My Landing Page. All rights reserved.</p>
      </footer>
    </div>
  );
}
