import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href='/' className="flex items-center space-x-2">
             <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-white/20">
          
              <img src="/logos.png" alt="" srcset="" />
              
            </div>
            <span className="text-xl font-semibold">Payeox</span>
          </a>
         
          <div className="flex items-center space-x-4">
            <a href="/auth" className="text-sm text-gray-400 hover:text-white transition-colors">Sign In</a>
            <a href="/auth" className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Title Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-gray-400">Last Updated: February 19, 2026</p>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <p className="text-gray-300 leading-relaxed">
            Welcome to <span className="text-white font-medium">Payeox</span> ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your access to and use of our platform, website, dashboard, APIs, and related services ("Service").
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            By accessing or using our Service, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use our Service.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-gray-500 mr-3">01</span>
              Acceptance of Terms
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              By creating an account or using any part of our Service, you confirm that:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>You have read and understood these Terms</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>You are legally able to accept these Terms</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>You agree to comply with all applicable laws</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-gray-500 mr-3">02</span>
              Description of Service
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Payeox provides a platform that helps users:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Receive and process payment gateway webhooks</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>View payment and refund reports</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Monitor transaction statuses</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Analyze payment data</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              We act only as an intermediary dashboard and data processing platform. We are not a payment gateway.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-gray-500 mr-3">03</span>
              User Accounts
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To use our Service, you must:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6 mb-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Create an account</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Provide accurate information</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Maintain the security of your login credentials</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Be responsible for all activities under your account</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6 mb-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Share your account with others</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Use false information</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Attempt unauthorized access</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to suspend or terminate accounts that violate these Terms.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-gray-500 mr-3">04</span>
              User Responsibilities
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You are solely responsible for:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6 mb-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>The payment gateway credentials you provide</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Webhook URLs and configurations</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Accuracy of the data you submit</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Compliance with payment gateway terms</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Compliance with applicable laws</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree not to use the Service for:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Fraudulent activities</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Illegal transactions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Unauthorized data collection</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Any misuse of third-party services</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-gray-500 mr-3">05</span>
              Data Processing
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our platform processes webhook and transaction data on your behalf. You acknowledge that:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>We process data as provided by you and your payment gateways</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>We do not modify payment gateway responses</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>You are responsible for ensuring you have the right to use the data</span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-gray-500 mr-3">06</span>
              Third-Party Services
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our Service integrates with third-party platforms such as:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6 mb-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Cashfree</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Razorpay</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>PhonePe</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Other payment gateways</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Use of these services is subject to their own terms and policies. We are not responsible for the performance or actions of third-party services.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-gray-500 mr-3">07</span>
              Fees and Payments
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you subscribe to a paid plan:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Fees will be charged as displayed on our pricing page</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Payments are non-refundable unless stated otherwise</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>We may change pricing with prior notice</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Failure to pay may result in suspension of service</span>
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-gray-500 mr-3">08</span>
              Service Availability
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We strive to keep the Service available at all times, but we do not guarantee:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6 mb-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Uninterrupted access</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Error-free operation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Real-time processing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Compatibility with all systems</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Update the platform</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Perform maintenance</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Modify features</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Temporarily suspend services</span>
              </li>
            </ul>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-gray-500 mr-3">09</span>
              Limitation of Liability
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To the maximum extent permitted by law:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6 mb-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>We are not liable for financial losses</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>We are not responsible for incorrect data from gateways</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>We are not responsible for missed or delayed webhooks</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>We are not liable for indirect or consequential damages</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Use of the Service is at your own risk.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-gray-500 mr-3">10</span>
              Data Security
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We implement reasonable security measures, but:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>You are responsible for protecting your credentials</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>No system is 100% secure</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>We cannot guarantee absolute data security</span>
              </li>
            </ul>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-gray-500 mr-3">11</span>
              Termination
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may suspend or terminate your account if:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6 mb-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>You violate these Terms</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>You misuse the Service</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>You engage in fraudulent activity</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Required fees are not paid</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              You may also stop using the Service at any time.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-gray-500 mr-3">12</span>
              Intellectual Property
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              All content, design, code, and branding related to Payeox are owned by us. You may not:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6 mb-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Copy</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Reverse engineer</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Resell</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Distribute</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              any part of our Service without permission.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-gray-500 mr-3">13</span>
              Indemnification
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree to indemnify and hold us harmless from any claims, damages, or losses arising from:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Your misuse of the Service</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Violation of these Terms</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Violation of third-party rights</span>
              </li>
            </ul>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-gray-500 mr-3">14</span>
              Modifications to Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update these Terms from time to time. Continued use of the Service after updates constitutes acceptance of the revised Terms.
            </p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-gray-500 mr-3">15</span>
              Governing Law
            </h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in India.
            </p>
          </section>

          {/* Section 16 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-gray-500 mr-3">16</span>
              Contact Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For any questions regarding these Terms, contact us at:
            </p>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-2">
                <span className="text-white font-medium">Email:</span> support@payeox.com
              </p>
              <p className="text-gray-300">
                <span className="text-white font-medium">Website:</span> https://payeox.com
              </p>
            </div>
          </section>
        </div>

        {/* Footer Section */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Payeox. All rights reserved. | India
          </p>
        </div>
      </main>
    </div>
  );
}
