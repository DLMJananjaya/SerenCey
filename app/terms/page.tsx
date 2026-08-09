"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function TermsPage() {
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
            Terms of Service
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
            <TermsSection index={0} title="1. Acceptance of Terms">
              <p>
                By accessing and using the SerenCey website and services, you
                agree to be bound by these Terms of Service. If you do not agree
                to these terms, please do not use our services. These terms
                apply to all visitors, users, and customers of SerenCey.
              </p>
            </TermsSection>

            <TermsSection index={1} title="2. Booking & Reservations">
              <ul>
                <li>
                  All bookings are subject to availability and confirmation by
                  SerenCey.
                </li>
                <li>
                  A <strong>non-refundable deposit of 30%</strong> is required
                  to confirm your booking. The remaining balance is due 14 days
                  before the tour start date.
                </li>
                <li>
                  Booking confirmations will be sent via email or WhatsApp
                  within 48 hours of receiving your deposit.
                </li>
                <li>
                  Prices are quoted in US Dollars and are subject to change
                  until booking confirmation.
                </li>
              </ul>
            </TermsSection>

            <TermsSection index={2} title="3. Cancellation Policy">
              <ul>
                <li>
                  <strong>30+ days before departure:</strong> Full refund minus
                  the non-refundable deposit.
                </li>
                <li>
                  <strong>15–29 days before departure:</strong> 50% refund of
                  the total tour cost.
                </li>
                <li>
                  <strong>7–14 days before departure:</strong> 25% refund of
                  the total tour cost.
                </li>
                <li>
                  <strong>Less than 7 days before departure:</strong> No refund.
                </li>
                <li>
                  Cancellations must be submitted in writing via email to
                  hello@serencey.com.
                </li>
              </ul>
            </TermsSection>

            <TermsSection index={3} title="4. Itinerary Changes">
              <p>
                SerenCey reserves the right to modify tour itineraries due to
                unforeseen circumstances, including but not limited to:
              </p>
              <ul>
                <li>Adverse weather conditions or natural disasters</li>
                <li>Road closures or transportation disruptions</li>
                <li>
                  Government regulations, entry restrictions, or safety
                  advisories
                </li>
                <li>Accommodation or activity provider unavailability</li>
              </ul>
              <p>
                In such cases, we will provide alternative arrangements of
                equivalent or higher quality. No refunds will be given for
                minor itinerary changes.
              </p>
            </TermsSection>

            <TermsSection index={4} title="5. Travel Documents & Insurance">
              <ul>
                <li>
                  Travelers are responsible for obtaining valid passports, visas,
                  and any required travel documents for entry into Sri Lanka.
                </li>
                <li>
                  SerenCey <strong>strongly recommends</strong> purchasing
                  comprehensive travel insurance covering medical emergencies,
                  trip cancellation, lost luggage, and personal liability.
                </li>
                <li>
                  SerenCey is not responsible for any losses incurred due to
                  inadequate or missing travel documentation or insurance.
                </li>
              </ul>
            </TermsSection>

            <TermsSection index={5} title="6. Health & Safety">
              <ul>
                <li>
                  Travelers must disclose any medical conditions, allergies, or
                  dietary restrictions at the time of booking.
                </li>
                <li>
                  Some activities (hiking, water sports, wildlife safaris) carry
                  inherent risks. Participation is at your own discretion and
                  risk.
                </li>
                <li>
                  SerenCey reserves the right to refuse participation in
                  activities if we deem it unsafe for the traveler or group.
                </li>
              </ul>
            </TermsSection>

            <TermsSection index={6} title="7. Liability">
              <p>
                SerenCey acts as a tour coordinator and uses third-party
                providers for accommodation, transportation, and activities.
                While we carefully vet all partners:
              </p>
              <ul>
                <li>
                  SerenCey is <strong>not liable</strong> for any injury, loss,
                  damage, delay, or expense arising from events beyond our
                  control.
                </li>
                <li>
                  Our total liability for any claim shall not exceed the total
                  amount paid for the tour.
                </li>
                <li>
                  Travelers agree to indemnify SerenCey against any claims
                  arising from their own negligence or misconduct.
                </li>
              </ul>
            </TermsSection>

            <TermsSection index={7} title="8. Photography & Content">
              <p>
                SerenCey may take photographs and videos during tours for
                marketing and promotional purposes. By participating in a tour,
                you grant SerenCey permission to use these images unless you
                notify us in writing before the tour begins.
              </p>
            </TermsSection>

            <TermsSection index={8} title="9. Intellectual Property">
              <p>
                All content on the SerenCey website — including text, images,
                logos, and design — is the property of SerenCey and is protected
                by copyright laws. Unauthorized reproduction or distribution is
                prohibited.
              </p>
            </TermsSection>

            <TermsSection index={9} title="10. Governing Law">
              <p>
                These Terms of Service shall be governed by and construed in
                accordance with the laws of Sri Lanka. Any disputes arising
                from these terms shall be subject to the exclusive jurisdiction
                of the courts of Sri Lanka.
              </p>
            </TermsSection>

            <TermsSection index={10} title="11. Contact Us">
              <p>
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong> hello@serencey.com
                </li>
                <li>
                  <strong>WhatsApp:</strong> +94 712345678
                </li>
              </ul>
            </TermsSection>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function TermsSection({
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
