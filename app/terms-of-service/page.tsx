import React from "react";

export const metadata = {
  title: "Terms of Service | Orbitz Technology",
  description:
    "Read the Terms of Service governing the use of Orbitz Technology’s website, products, and services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: September 9, 2025</p>

        <section className="space-y-4 mb-10">
          <p className="text-gray-700">
            These Terms of Service ("Terms") govern your access to and use of the website, products, and services
            provided by Orbitz Technology, LLC ("Orbitz," "we," "us," or "our"). By accessing or using our website or
            services, you agree to be bound by these Terms. If you do not agree, do not access or use our website or
            services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">1. Eligibility</h2>
          <p className="text-gray-700">
            You must be at least 18 years old to use our website and services. By using our website, you represent and
            warrant that you meet this requirement.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">2. Use of the Website and Services</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>You agree to use our website and services only for lawful purposes.</li>
            <li>
              You will not attempt to gain unauthorized access to any systems, networks, or data, or interfere with the
              operation of the website or services.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of any account credentials you may use and for all
              activities that occur under your account.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
          <p className="text-gray-700 mb-4">
            All content, features, and functionality on the website, including text, graphics, logos, icons, images,
            audio, video, software, and the design and arrangement thereof, are owned by Orbitz or our licensors and
            are protected by intellectual property laws. You may not copy, reproduce, distribute, modify, or create
            derivative works from any content without our prior written permission.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">4. Third-Party Services and Links</h2>
          <p className="text-gray-700 mb-4">
            Our website may contain links to third-party websites or services that are not owned or controlled by
            Orbitz. We are not responsible for the content, privacy policies, or practices of any third-party websites
            or services. Your interactions with third parties are solely between you and the third party.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">5. Disclaimers</h2>
          <p className="text-gray-700 mb-4">
            OUR WEBSITE AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY
            KIND, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR
            A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE WEBSITE OR SERVICES WILL BE
            UNINTERRUPTED, SECURE, OR ERROR-FREE.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, ORBITZ AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, AND
            PARTNERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR
            ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL,
            OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE
            WEBSITE OR SERVICES; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY; OR (C) UNAUTHORIZED ACCESS, USE, OR
            ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">7. Indemnification</h2>
          <p className="text-gray-700">
            You agree to defend, indemnify, and hold harmless Orbitz and its affiliates, officers, employees, agents,
            and partners from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses,
            or fees (including reasonable attorneys’ fees) arising out of or relating to your violation of these Terms
            or your use of the website or services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">8. Changes to the Terms</h2>
          <p className="text-gray-700">
            We may update these Terms from time to time. The updated Terms will be posted on this page with the
            "Last updated" date. Your continued use of the website or services after any changes constitutes your
            acceptance of the updated Terms.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">9. Governing Law and Venue</h2>
          <p className="text-gray-700">
            These Terms are governed by the laws of the State of Illinois, without regard to its conflict of law
            principles. You agree to submit to the personal and exclusive jurisdiction of the state and federal courts
            located in Cook County, Illinois, for the resolution of any disputes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
          <p className="text-gray-700 mb-1">Orbitz Technology, LLC</p>
          <p className="text-gray-700 mb-1">14 Kimberley Cir., Oak Brook, IL 60523, USA</p>
          <p className="text-gray-700">Email: info@orbitztechnology.com</p>
        </section>
      </div>
    </div>
  );
}
