"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    currentTools: "",
    challenge: "",
    package: "scan",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
    alert("Bedankt voor je interesse! We nemen binnen 24 uur contact op.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-6">
              Klaar voor <span className="text-primary dark:text-accent">volwassen AI</span>?
            </h2>
            <p className="text-xl text-gray-900/70 dark:text-gray-50/70">
              Vul onderstaand formulier in. We filteren op kwaliteit, dus wees zo specifiek mogelijk over jouw situatie.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-900/10 dark:border-gray-50/10"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-gray-50 mb-2">
                  Jouw naam *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-900/20 dark:border-gray-50/20 rounded-lg focus:border-primary dark:focus:border-accent focus:outline-none transition-colors"
                  placeholder="Jan Jansen"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-gray-50 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-900/20 dark:border-gray-50/20 rounded-lg focus:border-primary dark:focus:border-accent focus:outline-none transition-colors"
                  placeholder="jan@bedrijf.nl"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 dark:text-gray-50 mb-2">
                  Bedrijfsnaam *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-900/20 dark:border-gray-50/20 rounded-lg focus:border-primary dark:focus:border-accent focus:outline-none transition-colors"
                  placeholder="MijnBedrijf B.V."
                />
              </div>

              {/* Employees */}
              <div>
                <label htmlFor="employees" className="block text-sm font-semibold text-gray-900 dark:text-gray-50 mb-2">
                  Aantal medewerkers *
                </label>
                <select
                  id="employees"
                  name="employees"
                  required
                  value={formData.employees}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-900/20 dark:border-gray-50/20 rounded-lg focus:border-primary dark:focus:border-accent focus:outline-none transition-colors bg-white"
                >
                  <option value="">Selecteer...</option>
                  <option value="1-10">1-10</option>
                  <option value="11-25">11-25</option>
                  <option value="26-50">26-50</option>
                  <option value="51-100">51-100</option>
                  <option value="100+">100+</option>
                </select>
              </div>
            </div>

            {/* Current tools */}
            <div className="mb-6">
              <label htmlFor="currentTools" className="block text-sm font-semibold text-gray-900 dark:text-gray-50 mb-2">
                Welke AI-tools gebruiken jullie nu? *
              </label>
              <input
                type="text"
                id="currentTools"
                name="currentTools"
                required
                value={formData.currentTools}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-900/20 dark:border-gray-50/20 rounded-lg focus:border-primary dark:focus:border-accent focus:outline-none transition-colors"
                placeholder="Bijv: ChatGPT, Notion AI, Zapier, Make..."
              />
            </div>

            {/* Challenge */}
            <div className="mb-6">
              <label htmlFor="challenge" className="block text-sm font-semibold text-gray-900 dark:text-gray-50 mb-2">
                Wat is jouw grootste AI-uitdaging? *
              </label>
              <textarea
                id="challenge"
                name="challenge"
                required
                value={formData.challenge}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-900/20 dark:border-gray-50/20 rounded-lg focus:border-primary dark:focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Bijv: Te veel losse tools, geen security oversight, onduidelijke ROI..."
              />
            </div>

            {/* Package selection */}
            <div className="mb-8">
              <label htmlFor="package" className="block text-sm font-semibold text-gray-900 dark:text-gray-50 mb-2">
                Welk pakket interesseert je? *
              </label>
              <select
                id="package"
                name="package"
                required
                value={formData.package}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-900/20 dark:border-gray-50/20 rounded-lg focus:border-primary dark:focus:border-accent focus:outline-none transition-colors bg-white"
              >
                <option value="scan">Pakket A: De Resuno Scan (€2.000)</option>
                <option value="foundation">Pakket B: De Foundation Build</option>
                <option value="custom">Pakket C: Custom AI Development</option>
                <option value="unsure">Weet ik nog niet</option>
              </select>
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-primary dark:bg-accent text-white dark:text-gray-900 rounded-lg font-semibold text-lg hover:bg-primary-dark dark:hover:bg-accent/90 transition-colors shadow-lg shadow-primary/30 dark:shadow-accent/30"
            >
              Verstuur aanvraag
            </motion.button>

            <p className="text-sm text-gray-900/60 dark:text-gray-50/60 text-center mt-4">
              We nemen binnen 24 uur contact op voor een vrijblijvend gesprek.
            </p>
          </motion.form>

          {/* Alternative contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-900/70 dark:text-gray-50/70 mb-4">
              Liever direct contact?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:tom@resuno.nl"
                className="inline-flex items-center gap-2 text-primary dark:text-accent font-semibold hover:text-primary-dark dark:hover:text-accent/90 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                tom@resuno.nl
              </a>
              <a
                href="https://linkedin.com/in/tomresuno"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary dark:text-accent font-semibold hover:text-primary-dark dark:hover:text-accent/90 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
