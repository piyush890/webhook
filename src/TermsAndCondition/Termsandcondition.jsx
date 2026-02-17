import React from 'react';
import { FileText } from 'lucide-react';
import Navbar from '../HomePage/Navbar';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <Navbar featureRef={null} useCaseRef={null} aboutRef={null} />

      {/* Main Content */}
      <main className="max-w-4xl mt-10 mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h2>
          <p className="text-gray-600 mb-2">Last updated: 11-01-2026</p>
          <div className="h-1 w-24 bg-blue-600 rounded-full"></div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to Payeox. These Terms and Conditions ("Terms") govern your access to and use of the Payeox software platform, website, APIs, and related services (collectively, the "Service"). By accessing or using Payeox, you agree to be bound by these Terms.
          </p>
          <p className="text-gray-700 leading-relaxed font-medium">
            If you do not agree with these Terms, please do not use the Service.
          </p>
        </div>

        {/* Terms Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="prose prose-gray max-w-none">
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. About Payeox</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Payeox is a technology platform that provides software solutions for automating payouts to bank accounts and UPI IDs. Payeox does not provide financial services, hold funds, or execute payments on its own. All payment transactions are processed through third-party, RBI-authorized payment service providers.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Eligibility</h3>
            <p className="text-gray-700 leading-relaxed mb-3">To use Payeox, you must:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Be at least 18 years of age</li>
              <li>Be legally capable of entering into a binding contract</li>
              <li>Represent a legally registered business or entity (where applicable)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              You confirm that all information provided to Payeox is accurate and up to date.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Scope of Services</h3>
            <p className="text-gray-700 leading-relaxed mb-3">Payeox provides:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Payout automation software</li>
              <li>Dashboard and reporting tools</li>
              <li>API-based integrations for initiating payouts</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-3">Payeox does not:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Act as a bank, wallet, or payment aggregator</li>
              <li>Store, pool, or settle funds</li>
              <li>Guarantee successful completion of payouts (execution depends on partner payment providers)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Third-Party Payment Providers</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              All payouts initiated through Payeox are executed by third-party payment service providers. You agree that:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Payment processing is governed by the terms and policies of the respective payment provider</li>
              <li>Payeox is not responsible for delays, failures, reversals, or errors caused by banks, UPI networks, or third-party providers</li>
              <li>Compliance requirements such as KYC, AML, and transaction limits are enforced by payment partners</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. User Responsibilities</h3>
            <p className="text-gray-700 leading-relaxed mb-3">You agree to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Use the platform only for lawful purposes</li>
              <li>Ensure proper KYC of your vendors or beneficiaries</li>
              <li>Not misuse the Service for fraud, money laundering, or prohibited activities</li>
              <li>Maintain confidentiality of your account credentials and API keys</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              You are solely responsible for all activities performed using your account.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Fees and Charges</h3>
            <p className="text-gray-700 leading-relaxed mb-3">Fees for using Payeox may include:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Platform usage fees</li>
              <li>API or service charges</li>
              <li>Third-party payment provider fees</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              All applicable fees will be communicated separately and are non-refundable unless stated otherwise.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Data Privacy and Security</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Payeox collects and processes data in accordance with its Privacy Policy. You acknowledge that:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Sensitive payment data is handled by licensed payment partners</li>
              <li>You are responsible for obtaining necessary user/vendor consent</li>
              <li>You will not upload or transmit unlawful or unauthorized data</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Intellectual Property</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              All content, software, logos, trademarks, and intellectual property related to Payeox are owned by or licensed to Payeox. You may not copy, modify, distribute, or reverse engineer any part of the Service without prior written consent.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Suspension and Termination</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Payeox reserves the right to suspend or terminate access if:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>These Terms are violated</li>
              <li>Suspicious, fraudulent, or unlawful activity is detected</li>
              <li>Required compliance or verification is not completed</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              Termination may occur without prior notice where required by law or compliance obligations.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Limitation of Liability</h3>
            <p className="text-gray-700 leading-relaxed mb-3">To the maximum extent permitted by law:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Payeox shall not be liable for indirect, incidental, or consequential damages</li>
              <li>Payeox is not responsible for payment failures caused by banks, UPI systems, or third-party providers</li>
              <li>Payeox's liability, if any, shall not exceed the fees paid by you to Payeox in the preceding three months</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Indemnification</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              You agree to indemnify and hold harmless Payeox from any claims, losses, damages, or liabilities arising from:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Your misuse of the Service</li>
              <li>Violation of applicable laws</li>
              <li>Inaccurate or incomplete information provided by you</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Modifications to Terms</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Payeox may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance of the revised Terms.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Governing Law and Jurisdiction</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              These Terms shall be governed by and interpreted in accordance with the laws of India. All disputes shall be subject to the exclusive jurisdiction of courts located in India.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Contact Information</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              For questions or concerns regarding these Terms, contact us at:
            </p>
            <p className="text-gray-700 leading-relaxed">
              Email: support@payeox.com<br />
              Website: www.payeox.com
            </p>

          </div>
        </div>

        {/* Footer Note */}
        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <p className="text-sm text-gray-600 text-center">
            By continuing to use Payeox, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Payeox. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}