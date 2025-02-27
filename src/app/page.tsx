import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>LearnX - Elevate Your Skills</title>
        <meta name="description" content="The best platform to learn and grow your skills online." />
      </Head>

      <main className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white text-center py-20">
          <h1 className="text-4xl font-bold">Upgrade Your Skills with LearnX</h1>
          <p className="text-lg mt-4">Join thousands of learners and master new skills.</p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg">
            Get Started
          </button>
        </section>

        {/* Course Categories */}
        <section className="py-16 px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Popular Courses</h2>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {["Web Development", "Data Science", "UI/UX Design", "AI & ML"].map((course) => (
              <div key={course} className="bg-white p-6 shadow-lg rounded-lg w-60">
                <h3 className="text-xl font-semibold">{course}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800">What Our Students Say</h2>
          <p className="text-gray-600 mt-4">&quot;LearnX helped me land my dream job!&quot; - Jane Doe</p>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center py-6">
          <p>&copy; 2025 LearnX. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
