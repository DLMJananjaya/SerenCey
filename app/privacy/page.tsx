"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function PrivacyPage() {
  return (
    <main className="bg-[#F8F9FA]">
      <Navbar2 />

      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#064E3B] font-bold tracking-[0.4em] uppercase text-xs mb-4 block"
          >
            Legal
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm"
          >
            Last updated: June 2026
          </motion.p>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <PolicySection index={0} title="1. Information We Collect">
              <p>
                When you use SerenCey&apos;s services, we may collect the following
                information:
              </p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> Name, email address,
                  phone/WhatsApp number, nationality, and passport details (for
                  booking purposes).
                </li>
                <li>
                  <strong>Travel Preferences:</strong> Desired destinations,
                  travel dates, accommodation preferences, dietary
                  requirements, and special requests.
                </li>
                <li>
                  <strong>Payment Information:</strong> Payment details processed
                  securely through our third-party payment providers.
                </li>
                <li>
                  <strong>Usage Data:</strong> Browser type, pages visited, time
                  spent on our site, and other analytics data.
                </li>
              </ul>
            </PolicySection>

            <PolicySection index={1} title="2. How We Use Your Information">
              <p>We use the information we collect to:</p>
              <ul>
                <li>Process and manage your tour bookings</li>
                <li>
                  Communicate with you about your trip, including itinerary
                  updates and travel advisories
                </li>
                <li>Customize your travel experience</li>
                <li>
                  Send promotional offers and newsletters (only with your
                  consent)
                </li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </PolicySection>

            <PolicySection index={2} title="3. Information Sharing">
              <p>
                We do <strong>not</strong> sell your personal information. We may
                share your data with:
              </p>
              <ul>
                <li>
                  <strong>Service Partners:</strong> Hotels, transport
                  providers, and activity operators required to fulfill your
                  booking.
                </li>
                <li>
                  <strong>Payment Processors:</strong> Secure third-party
                  payment gateways for transaction processing.
                </li>
                <li>
                  <strong>Legal Authorities:</strong> When required by law or to
                  protect our legal rights.
                </li>
              </ul>
            </PolicySection>

            <PolicySection index={3} title="4. Data Security">
              <p>
                We implement industry-standard security measures to protect your
                personal information, including encrypted communications (SSL),
                secure data storage, and restricted access controls. However, no
                method of transmission over the internet is 100% secure.
              </p>
            </PolicySection>

            <PolicySection index={4} title="5. Cookies">
              <p>
                Our website uses cookies to enhance your browsing experience.
                These include essential cookies for site functionality and
                analytics cookies to understand how visitors use our site. You
                can control cookie settings through your browser preferences.
              </p>
            </PolicySection>

            <PolicySection index={5} title="6. Your Rights">
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>
                  Request deletion of your data (subject to legal obligations)
                </li>
                <li>Withdraw consent for marketing communications</li>
                <li>Lodge a complaint with a data protection authority</li>
              </ul>
            </PolicySection>

            <PolicySection index={6} title="7. Third-Party Links">
              <p>
                Our website may contain links to external sites (e.g., WhatsApp,
                social media platforms). We are not responsible for the privacy
                practices of these third-party websites. We encourage you to
                review their privacy policies.
              </p>
            </PolicySection>

            <PolicySection index={7} title="8. Contact Us">
              <p>
                If you have any questions about this Privacy Policy or wish to
                exercise your data rights, please contact us:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong> hello@serencey.com
                </li>
                <li>
                  <strong>WhatsApp:</strong> +94 712345678
                </li>
              </ul>
            </PolicySection>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function PolicySection({
  title,
  children,
  index,
}: {
  title: string;
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div variants={fadeUp} custom={index}>
      <h2 className="text-xl font-black text-gray-900 mb-4 tracking-tight">
        {title}
      </h2>
      <div className="text-gray-600 text-sm leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}
