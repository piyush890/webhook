import React, { useState, useEffect } from 'react';
import { Shield, Zap, BarChart3, Lock, Eye, Link2, CheckCircle2, ArrowRight, Sparkles, Globe, Users, Target } from 'lucide-react';

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "Track every transaction as it happens across all your payment gateways"
    },
    {
      icon: BarChart3,
      title: "Unified Dashboard",
      description: "One central view for all payment channels, no more switching platforms"
    },
    {
      icon: Link2,
      title: "Easy Webhook Management",
      description: "Configure, test, and monitor webhooks without the technical headache"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-grade security with 99.9% uptime guaranteed"
    },
    {
      icon: Sparkles,
      title: "Simple Analytics",
      description: "Clear insights and reports that actually help you make decisions"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Connect Your Gateways",
      description: "Link Cashfree or any payment provider in minutes"
    },
    {
      number: "02",
      title: "Monitor in Real-time",
      description: "Watch payments flow through a single, beautiful dashboard"
    },
    {
      number: "03",
      title: "Gain Insights",
      description: "Make data-driven decisions with automated reports and analytics"
    }
  ];

  const team = [
    {
      icon: Target,
      role: "Mission-Driven",
      description: "Built by developers who felt the pain of fragmented payment tracking"
    },
    {
      icon: Users,
      role: "Customer-First",
      description: "Every feature designed based on real user feedback and needs"
    },
    {
      icon: Globe,
      role: "Global Reach",
      description: "Supporting businesses from startups to enterprises worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans overflow-x-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.1}px)`
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full backdrop-blur-sm">
              <span className="text-indigo-300 text-sm font-medium tracking-wider uppercase">About Payeox</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-indigo-200 to-violet-300 bg-clip-text text-transparent">
                Built to Simplify
              </span>
              <br />
              <span className="text-white">Payment Monitoring</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Payeox helps businesses track payments from multiple gateways in one unified dashboard. 
              No more switching between platforms. No more missed transactions. Just clarity.
            </p>

            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Live monitoring</span>
              </div>
              <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                <span>Bank-grade security</span>
              </div>
              <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>99.9% uptime</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Payeox Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                Why <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Payeox</span>?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                We've built the payment monitoring platform we always wished existed
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: 'fadeInUp 0.6s ease-out forwards',
                      opacity: 0
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    
                    <div className="relative">
                      <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors duration-300">
                        <Icon className="w-7 h-7 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works Timeline */}
        <section className="py-24 px-6 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                How It <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Works</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Get started in three simple steps
              </p>
            </div>

            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600/30 via-violet-600/30 to-indigo-600/30"></div>
              
              <div className="grid md:grid-cols-3 gap-8 md:gap-4">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 transition-all duration-700 ${
                      activeStep === index ? 'md:transform md:scale-105 border-indigo-500/50 shadow-xl shadow-indigo-500/20' : ''
                    }`}
                  >
                    {/* Step Number Circle */}
                    <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                      activeStep === index 
                        ? 'bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/50' 
                        : 'bg-gray-800 text-gray-500'
                    }`}>
                      {index + 1}
                    </div>

                    <div className="mt-8 text-center">
                      <div className={`text-6xl font-black mb-4 transition-colors duration-500 ${
                        activeStep === index ? 'text-indigo-400' : 'text-gray-700'
                      }`}>
                        {step.number}
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-white">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Team Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                We're on a mission to make payment monitoring accessible, intuitive, and powerful for every business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => {
                const Icon = member.icon;
                return (
                  <div 
                    key={index}
                    className="text-center"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto border border-indigo-500/20">
                      <Icon className="w-10 h-10 text-indigo-400" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {member.role}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust & Security Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-12 md:p-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-500/10 rounded-2xl mb-6 border border-indigo-500/20">
                  <Lock className="w-10 h-10 text-indigo-400" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Security & Privacy <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">First</span>
                </h2>
                
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Your payment data is sensitive. We treat it that way.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">End-to-End Encryption</h4>
                    <p className="text-gray-400">All data encrypted in transit and at rest using AES-256 encryption</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">SOC 2 Compliant</h4>
                    <p className="text-gray-400">Independently audited security controls and practices</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                      <Eye className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">GDPR & PCI DSS</h4>
                    <p className="text-gray-400">Full compliance with global data protection standards</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-orange-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">99.9% Uptime SLA</h4>
                    <p className="text-gray-400">Enterprise-grade infrastructure with guaranteed availability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-indigo-200 to-violet-300 bg-clip-text text-transparent">
                Start Monitoring
              </span>
              <br />
              <span className="text-white">Payments Today</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join hundreds of businesses who've simplified their payment tracking with Payeox
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl font-semibold text-lg hover:bg-gray-800 hover:border-gray-600 transition-all duration-300">
                Schedule a Demo
              </button>
            </div>

            <p className="text-gray-500 text-sm mt-8">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </section>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
