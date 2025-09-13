import React, { useState } from "react";
import { Mail } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative py-20 bg-gradient-to-r from-indigo-50 via-white to-pink-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-indigo-700">
            Get in Touch
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            We'd love to hear from you! Fill out the form and our team will get
            back to you shortly.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12">
          {submitted && (
            <p className="mb-6 text-green-600 font-medium text-center">
              ✅ Thank you! Your message has been submitted successfully.
            </p>
          )}

          {!submitted && (
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={() => setSubmitted(true)}
              className="space-y-6"
            >
              {/* Hidden access key */}
              <input
                type="hidden"
                name="access_key"
                value={import.meta.env.VITE_WEB3FORMS_KEY}
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Decorative background blobs */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
      </div>
    </section>
  );
}
