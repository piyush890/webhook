import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, MessageCircle, Twitter, Linkedin, Github, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 font-sans">
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
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fadeIn">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-emerald-400 font-medium tracking-wide">Available 24/7</span>
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We're here to help you with anything you need. Our team is ready to assist you with your financial operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 md:p-12 shadow-2xl hover:border-gray-700/50 transition-all duration-500">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                </div>
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-400 mb-2 transition-colors group-focus-within:text-emerald-400">
                    Name
                  </label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'scale-[1.01]' : ''}`}>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:bg-gray-900/70 transition-all duration-300 focus:shadow-lg focus:shadow-emerald-500/10"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-400 mb-2 transition-colors group-focus-within:text-emerald-400">
                    Email
                  </label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.01]' : ''}`}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:bg-gray-900/70 transition-all duration-300 focus:shadow-lg focus:shadow-emerald-500/10"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-400 mb-2 transition-colors group-focus-within:text-emerald-400">
                    Subject
                  </label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'subject' ? 'scale-[1.01]' : ''}`}>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:bg-gray-900/70 transition-all duration-300 focus:shadow-lg focus:shadow-emerald-500/10"
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-400 mb-2 transition-colors group-focus-within:text-emerald-400">
                    Message
                  </label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'message' ? 'scale-[1.01]' : ''}`}>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows="6"
                      className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:bg-gray-900/70 transition-all duration-300 resize-none focus:shadow-lg focus:shadow-emerald-500/10"
                      placeholder="Tell us more about your inquiry..."
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full px-8 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent Successfully!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Support Information Sidebar */}
          <div className="space-y-6">
            {/* Support Email */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 shadow-xl hover:border-gray-700/50 transition-all duration-500 group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Support Email</h3>
              <a href="mailto:support@payeox.com" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 break-all">
                support@payeox.com
              </a>
              <p className="text-sm text-gray-500 mt-2">We typically reply within 2 hours</p>
            </div>

            {/* Business Address */}
            {/* <div className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 shadow-xl hover:border-gray-700/50 transition-all duration-500 group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Business Address</h3>
              <p className="text-gray-400 leading-relaxed">
                123 Fintech Boulevard<br />
                Suite 450<br />
                San Francisco, CA 94102<br />
                United States
              </p>
            </div> */}

            {/* Working Hours */}
            {/* <div className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 shadow-xl hover:border-gray-700/50 transition-all duration-500 group">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Working Hours</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-white">9:00 - 18:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-white">10:00 - 16:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-gray-500">Closed</span>
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <p className="text-sm text-emerald-400">Emergency support available 24/7</p>
              </div>
            </div> */}
          </div>
        </div>

        {/* FAQ Section */}
        {/* <div className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 md:p-12 shadow-2xl mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Assistance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-900/30 rounded-2xl border border-gray-800/30 hover:border-emerald-500/30 transition-all duration-300">
              <h3 className="font-semibold text-lg mb-2 text-emerald-400">Need immediate help?</h3>
              <p className="text-gray-400 text-sm mb-4">Our live chat support is available for urgent queries and technical assistance.</p>
              <button className="text-emerald-400 hover:text-emerald-300 font-medium text-sm flex items-center gap-2 group">
                Start Live Chat
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
            <div className="p-6 bg-gray-900/30 rounded-2xl border border-gray-800/30 hover:border-blue-500/30 transition-all duration-300">
              <h3 className="font-semibold text-lg mb-2 text-blue-400">Check our Knowledge Base</h3>
              <p className="text-gray-400 text-sm mb-4">Browse through our comprehensive documentation and FAQs for common questions.</p>
              <button className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center gap-2 group">
                Visit Help Center
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        </div> */}

        {/* Social Media & CTA Section */}
        {/* <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Stay Connected</h2>
            <p className="text-gray-400">Follow us on social media for updates and announcements</p>
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            <a href="#" className="w-14 h-14 bg-gray-900/50 border border-gray-700/50 rounded-2xl flex items-center justify-center hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300 group">
              <Twitter className="w-6 h-6 text-gray-400 group-hover:text-emerald-400 transition-colors duration-300" />
            </a>
            <a href="#" className="w-14 h-14 bg-gray-900/50 border border-gray-700/50 rounded-2xl flex items-center justify-center hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300 group">
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a href="#" className="w-14 h-14 bg-gray-900/50 border border-gray-700/50 rounded-2xl flex items-center justify-center hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300 group">
              <Github className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
            </a>
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 group">
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Open Live Chat Support
            </button>
          </div>
        </div> */}

        {/* Footer Note */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>Payeox Financial Technologies © 2024. All rights reserved.</p>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
