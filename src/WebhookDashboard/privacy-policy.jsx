import React, { useState } from 'react';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: 'information-collection',
      title: '1. Information We Collect',
      subsections: [
        {
          subtitle: 'A. Information You Provide',
          content: 'When you register or use our Service, we may collect:',
          items: ['Name', 'Email address', 'Phone number', 'Business details', 'Project details', 'Payment gateway credentials (securely encrypted)', 'API keys or webhook details provided by you']
        },
        {
          subtitle: 'B. Automatically Collected Information',
          content: 'When you use our platform, we may automatically collect:',
          items: ['IP address', 'Browser type', 'Device information', 'Usage logs', 'Activity data', 'Cookies and analytics data']
        },
        {
          subtitle: 'C. Payment and Transaction Data',
          content: 'As part of our Service, we process and store:',
          items: ['Payment-related webhook data', 'Transaction status', 'Refund information', 'Order IDs', 'Gateway responses'],
          note: 'We do not store sensitive payment card details. All financial processing is handled by third-party payment gateways such as Cashfree, Razorpay, etc.'
        }
      ]
    },
    {
      id: 'use-of-information',
      title: '2. How We Use Your Information',
      content: 'We use the collected information to:',
      items: [
        'Provide and operate our Service',
        'Process payment webhook data',
        'Display transaction reports and analytics',
        'Improve platform performance',
        'Communicate with you',
        'Provide customer support',
        'Detect and prevent fraud or misuse',
        'Comply with legal obligations'
      ]
    },
    {
      id: 'data-security',
      title: '3. Data Storage and Security',
      content: 'We take data security seriously.',
      items: [
        'All sensitive information is encrypted',
        'Access is restricted to authorized personnel only',
        'Industry-standard security practices are followed',
        'Secure servers and databases are used',
        'Regular monitoring and backups are performed'
      ],
      note: 'However, no online platform can guarantee 100% security. Users are advised to keep their credentials secure.'
    },
    {
      id: 'third-party',
      title: '4. Third-Party Services',
      content: 'Our platform may integrate with third-party services such as:',
      items: [
        'Payment gateways (Cashfree, Razorpay, etc.)',
        'Analytics tools',
        'Hosting providers',
        'Email service providers'
      ],
      note: 'These third parties may collect and process information according to their own privacy policies. We encourage you to review their policies separately.'
    },
    {
      id: 'cookies',
      title: '5. Cookies and Tracking',
      content: 'We may use cookies and similar technologies to:',
      items: [
        'Improve user experience',
        'Analyze platform usage',
        'Maintain user sessions'
      ],
      note: 'You may disable cookies through your browser settings, but some features of the Service may not function properly.'
    },
    {
      id: 'data-sharing',
      title: '6. Data Sharing',
      content: 'We do not sell or rent your personal information. We may share information only in the following cases:',
      items: [
        'To comply with legal requirements',
        'To protect our rights and safety',
        'With trusted service providers',
        'With your explicit consent'
      ]
    },
    {
      id: 'data-retention',
      title: '7. Data Retention',
      content: 'We retain your data only as long as necessary to:',
      items: [
        'Provide our services',
        'Comply with legal obligations',
        'Resolve disputes',
        'Enforce agreements'
      ],
      note: 'You may request deletion of your account and data at any time.'
    },
    {
      id: 'user-rights',
      title: '8. User Rights',
      content: 'You have the right to:',
      items: [
        'Access your data',
        'Request corrections',
        'Request deletion',
        'Withdraw consent',
        'Opt out of communications'
      ],
      note: 'To exercise these rights, contact us at the email below.'
    },
    {
      id: 'children',
      title: "9. Children's Privacy",
      content: "Our Service is not intended for users under 18 years of age. We do not knowingly collect information from minors."
    },
    {
      id: 'changes',
      title: '10. Changes to This Policy',
      content: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. Continued use of the Service after changes indicates acceptance of the revised policy.'
    },
    {
      id: 'contact',
      title: '11. Contact Us',
      content: 'If you have any questions about this Privacy Policy, you can contact us at:',
      items: [
        'Email: support@payeox.com',
        'Website: https://payeox.com'
      ],
      footer: 'Payeox\n Vellaration Technologies Pvt LTD. – if applicable]\nIndia'
    }
  ];

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

      <div className=" text-white py-6 px-4 ">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-gray-600 mt-2">Last Updated: February 19, 2026</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-12 pb-8 border-b-2 border-white">
          <p className="text-lg leading-relaxed text-gray-300">
            This Privacy Policy explains how <span className="text-white font-semibold">Payeox</span> ("we," "our," or "us") collects, uses, stores, and protects information when you use our platform, website, and services ("Service").
          </p>
          <p className="text-lg leading-relaxed text-gray-300 mt-4">
            By accessing or using our Service, you agree to the collection and use of information in accordance with this Privacy Policy.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-12 bg-white text-black p-6 border-2 border-white">
          <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            {sections.map((section, index) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="hover:underline inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    {section.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              className="border-2 border-white p-6 hover:bg-gray-900 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">
                  {section.title}
                </h2>
                <button
                  onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                  className="text-white hover:bg-white hover:text-black border-2 border-white px-3 py-1 transition-colors duration-200 flex-shrink-0 ml-4"
                  aria-label={activeSection === section.id ? "Collapse section" : "Expand section"}
                >
                  {activeSection === section.id ? '−' : '+'}
                </button>
              </div>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeSection === section.id ? 'max-h-[1000px] opacity-100' : 'max-h-48 opacity-70'
                }`}
              >
                {section.subsections ? (
                  <div className="space-y-6">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex}>
                        <h3 className="text-xl font-semibold text-white mb-2">{subsection.subtitle}</h3>
                        <p className="text-gray-300 mb-3">{subsection.content}</p>
                        {subsection.items && (
                          <ul className="space-y-2 ml-6">
                            {subsection.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-gray-300 flex items-start">
                                <span className="mr-3 text-white">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {subsection.note && (
                          <p className="text-gray-400 mt-3 italic">{subsection.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    <p className="text-gray-300 leading-relaxed mb-3">{section.content}</p>
                    {section.items && (
                      <ul className="space-y-2 ml-6 mt-3">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-300 flex items-start">
                            <span className="mr-3 text-white">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.note && (
                      <p className="text-gray-400 mt-3 italic">{section.note}</p>
                    )}
                    {section.footer && (
                      <div className="mt-4 text-gray-300 whitespace-pre-line font-semibold">
                        {section.footer}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Box */}
        <div className="mt-12 bg-white text-black p-8 border-4 border-white">
          <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-3 mt-1 font-bold">•</span>
              <span>We collect information you provide and data about how you use our services</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 font-bold">•</span>
              <span>We do not sell or rent your personal information to third parties</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 font-bold">•</span>
              <span>You have rights to access, update, and delete your personal data</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 font-bold">•</span>
              <span>We use industry-standard security measures to protect your information</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 font-bold">•</span>
              <span>Our Service is not intended for users under 18 years of age</span>
            </li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-black py-8 px-4 mt-16 border-t-2 border-white">
        <div className="max-w-6xl mx-auto text-center">
         
          <p className="mt-6 text-sm text-gray-600">
            © 2026 Payeox. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
