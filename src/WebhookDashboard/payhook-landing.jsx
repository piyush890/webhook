import React, { useState, useEffect } from 'react';
import { Check, Lock, Shield, Zap, Bell, BarChart3, RefreshCw, Eye, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

export default function PayeoxLanding() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black font-sans antialiased">
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 group cursor-pointer">
           <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-white/20">
              {/* <svg
                className="w-6 h-6 text-black"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
              </svg> */}
              <img src="logos.png" alt="" srcset="" />
              
            </div>
            <span className="text-xl font-semibold tracking-tight text-white">Payeox</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Features</a>
            <a href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">How it Works</a>
            <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Pricing</a>
            <a href="#security" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Security</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href='/auth' className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Sign In</a>
            <a href='/auth' className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Gradient orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 opacity-0 animate-fade-in">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm text-gray-400">Webhook monitoring reimagined</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-white opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Monitor payments from all your gateways
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Get a single webhook URL and a real-time dashboard for Cashfree, Razorpay, PhonePe, and more. Never miss a payment event again.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a href='/auth' className="px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 group">
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              {/* <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 group">
                <span>View Dashboard Demo</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button> */}
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="max-w-5xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {/* <div className="relative">
              <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-2xl"></div>
              <div className="relative bg-zinc-950 rounded-2xl shadow-2xl border border-white/10 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                <div className="bg-zinc-900 border-b border-white/10 px-4 py-3 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-zinc-700 rounded-full"></div>
                    <div className="w-3 h-3 bg-zinc-700 rounded-full"></div>
                    <div className="w-3 h-3 bg-zinc-700 rounded-full"></div>
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="bg-zinc-800 rounded-md px-3 py-1.5 text-xs text-gray-400 border border-white/10 max-w-md flex items-center space-x-2">
                      <Lock className="w-3 h-3 text-green-400" />
                      <span>dashboard.Payeox.com</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-zinc-950 to-black">
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="bg-zinc-900/50 backdrop-blur rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
                      <div className="text-sm text-gray-400 mb-2">Total Payments</div>
                      <div className="text-3xl font-bold text-white mb-1">1,247</div>
                      <div className="text-xs text-green-400 flex items-center space-x-1">
                        <span>↗</span>
                        <span>+12.3% this week</span>
                      </div>
                    </div>
                    <div className="bg-zinc-900/50 backdrop-blur rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
                      <div className="text-sm text-gray-400 mb-2">Success Rate</div>
                      <div className="text-3xl font-bold text-white mb-1">98.4%</div>
                      <div className="text-xs text-green-400 flex items-center space-x-1">
                        <span>↗</span>
                        <span>+2.1% improved</span>
                      </div>
                    </div>
                    <div className="bg-zinc-900/50 backdrop-blur rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
                      <div className="text-sm text-gray-400 mb-2">Failed</div>
                      <div className="text-3xl font-bold text-white mb-1">20</div>
                      <div className="text-xs text-orange-400">Needs attention</div>
                    </div>
                  </div>

                  <div className="bg-zinc-900/50 backdrop-blur rounded-xl border border-white/10 overflow-hidden">
                    <div className="px-6 py-4 border-b border-white/10">
                      <div className="text-sm font-medium text-white flex items-center space-x-2">
                        <Zap className="w-4 h-4 text-gray-400" />
                        <span>Recent Payments</span>
                      </div>
                    </div>
                    <div className="divide-y divide-white/5">
                      {[
                        { id: 'pay_1a2b3c', amount: '₹2,499', status: 'success', gateway: 'Razorpay', time: '2m ago' },
                        { id: 'pay_4d5e6f', amount: '₹999', status: 'success', gateway: 'Cashfree', time: '5m ago' },
                        { id: 'pay_7g8h9i', amount: '₹4,999', status: 'pending', gateway: 'PhonePe', time: '8m ago' },
                        { id: 'pay_0j1k2l', amount: '₹1,499', status: 'success', gateway: 'Razorpay', time: '12m ago' },
                      ].map((payment, idx) => (
                        <div key={idx} className="px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors duration-200 group cursor-pointer">
                          <div className="flex items-center space-x-6 flex-1">
                            <div className="text-sm font-mono text-gray-500 group-hover:text-gray-400 transition-colors">{payment.id}</div>
                            <div className="text-sm font-medium text-white">{payment.amount}</div>
                            <div className="text-xs text-gray-500">{payment.gateway}</div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              payment.status === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                              payment.status === 'pending' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                              'bg-red-500/10 text-red-400 border border-red-500/20'
                            }`}>
                              {payment.status}
                            </span>
                            <span className="text-xs text-gray-500 min-w-[60px] text-right">{payment.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>


              </div>
            </div> */}

            <img src="screen.png" alt="" srcset="" />
            
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="relative py-16 px-6 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 font-medium">TRUSTED BY INDIA'S LEADING PAYMENT GATEWAYS</p>
          </div>
          <div className="flex items-center justify-center gap-16 flex-wrap">
            {['Cashfree', 'Razorpay', 'PhonePe', 'Paytm'].map((gateway, idx) => (
              <div key={idx} className="text-2xl font-bold text-gray-600 hover:text-white transition-colors duration-300 cursor-pointer">
                {gateway}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 text-sm text-gray-500 px-5 py-2 bg-white/5 rounded-full border border-white/10">
              <Lock className="w-4 h-4 text-green-400" />
              <span>Read-only access · We never process or store money</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Payments fail silently. Webhooks get missed.
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Managing multiple payment gateways creates complexity and visibility gaps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, title: 'Multiple gateways, multiple dashboards', desc: 'Switching between Razorpay, Cashfree, and PhonePe dashboards wastes time and creates visibility gaps.' },
              { icon: Bell, title: 'Webhooks fail with no visibility', desc: 'Your server goes down or times out, and you have no idea which payment events were missed.' },
              { icon: Zap, title: 'No backend team to debug payment events', desc: 'You\'re a founder or developer focused on product, not building webhook infrastructure from scratch.' },
            ].map((problem, idx) => (
              <div key={idx} className="bg-zinc-900/30 backdrop-blur rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-zinc-900/50 group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors duration-300">
                  <problem.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{problem.title}</h3>
                <p className="text-gray-400 leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="relative py-24 px-6 bg-zinc-950 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              One webhook. One dashboard. Full clarity.
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to monitor payment webhooks in one place
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'Single webhook URL for all gateways', desc: 'One endpoint to rule them all. Copy your unique Payeox URL and paste it into every gateway.' },
              { icon: Eye, title: 'Real-time payment status', desc: 'See every payment as it happens. Success, failed, pending — all in one clean interface.' },
              { icon: BarChart3, title: 'Normalized payment events', desc: 'Every gateway speaks a different language. We translate them all into one consistent format.' },
              { icon: RefreshCw, title: 'Webhook logs with retries', desc: 'Full audit trail of every webhook received, including verification status and retry attempts.' },
              { icon: Shield, title: 'Signature verification', desc: 'Automatic webhook signature validation ensures every event is authentic and tamper-proof.' },
              { icon: Check, title: 'Built for founders & developers', desc: 'Clean interface, zero complexity. Get payment visibility without DevOps overhead.' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-zinc-900/30 backdrop-blur rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-zinc-900/50 group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get started in minutes
            </h2>
            <p className="text-xl text-gray-400">Four simple steps to complete payment visibility</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Sign up on Payeox', desc: 'Create your account in under 30 seconds' },
              { num: '2', title: 'Copy your webhook URL', desc: 'Get your unique endpoint from the dashboard' },
              { num: '3', title: 'Paste into your gateways', desc: 'Add the URL to Cashfree, Razorpay, PhonePe' },
              { num: '4', title: 'See payments instantly', desc: 'Watch events flow into your dashboard in real-time' },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-white/10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="relative py-24 px-6 bg-zinc-950 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built for trust. Designed for safety.
            </h2>
            <p className="text-xl text-gray-400">Enterprise-grade security for your payment data</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-zinc-900/30 backdrop-blur rounded-2xl p-10 border border-white/10">
              <div className="space-y-6">
                {[
                  'We do not process payments',
                  'We do not hold funds',
                  'Secrets are encrypted & masked',
                  'Used only for webhook verification',
                  'HTTPS-only secure endpoints',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-4 group">
                    <div className="w-6 h-6 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-green-500/20 transition-colors duration-300">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <p className="text-lg text-gray-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built for modern teams
            </h2>
            <p className="text-xl text-gray-400">Trusted by startups and enterprises alike</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Startups without backend infra', desc: 'Ship fast without building webhook infrastructure' },
              { title: 'Freelancers & agencies', desc: 'Monitor client payments across projects' },
              { title: 'SaaS founders', desc: 'Focus on product, not payment debugging' },
              { title: 'Side projects & MVPs', desc: 'Get payment visibility without DevOps' },
            ].map((useCase, idx) => (
              <div key={idx} className="bg-zinc-900/30 backdrop-blur rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-zinc-900/50 group">
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative py-24 px-6 bg-zinc-950 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-400">Start free. Upgrade anytime.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Free', price: '₹0', events: '100 events / month', features: ['Single webhook URL', 'Real-time dashboard', 'Basic support'] },
              { name: 'Starter', price: '₹499', events: '5,000 events / month', features: ['Everything in Free', 'Webhook retries', 'Email alerts', 'Priority support'], popular: true },
              { name: 'Growth', price: '₹1,999', events: '50,000 events / month', features: ['Everything in Starter', 'Custom retention', 'API access', 'Dedicated support'] },
            ].map((plan, idx) => (
              <div key={idx} className={`rounded-2xl p-8 relative transition-all duration-500 hover:scale-105 ${
                plan.popular 
                  ? 'bg-white text-black border-2 border-white shadow-2xl' 
                  : 'bg-zinc-900/30 backdrop-blur border border-white/10 hover:border-white/20'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black border border-white/20 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className={`text-xl font-semibold mb-2 ${plan.popular ? 'text-black' : 'text-white'}`}>{plan.name}</h3>
                  <div className="flex items-baseline mb-2">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-black' : 'text-white'}`}>{plan.price}</span>
                    <span className={`ml-2 ${plan.popular ? 'text-gray-600' : 'text-gray-400'}`}>/month</span>
                  </div>
                  <p className={plan.popular ? 'text-gray-600' : 'text-gray-400'}>{plan.events}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center space-x-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-black' : 'text-gray-400'}`} />
                      <span className={plan.popular ? 'text-gray-700' : 'text-gray-300'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-black text-white hover:bg-gray-900' 
                    : 'bg-white text-black hover:bg-gray-200'
                }`}>
                  {plan.name === 'Free' ? 'Start Free' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-white rounded-3xl p-16 text-center overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Stop guessing payment status. Get clarity in minutes.
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Join hundreds of startups and developers who trust Payeox for payment monitoring.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href='/auth' className="px-8 py-4 bg-black text-white font-medium rounded-lg hover:bg-gray-900 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 group">
                  <span>Get Started Free</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                {/* <button className="px-8 py-4 bg-white border-2 border-black text-black font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 group">
                  <span>View Live Demo</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-white/20">
              {/* <svg
                className="w-6 h-6 text-black"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
              </svg> */}
              <img src="logos.png" alt="" srcset="" />
              
            </div>
                <span className="text-xl font-semibold text-white">Payeox</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Payment webhook monitoring for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="/about" className="text-sm text-gray-500 hover:text-white transition-colors">About</a></li>
                <li><a href="/contact" className="text-sm text-gray-500 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="/privacyPolicy" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/termsAndConditions" className="text-sm text-gray-500 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/security" className="text-sm text-gray-500 hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-gray-500 text-center">
              Payeox is a technology platform and does not process payments. All payments are handled by partner gateways.
            </p>
            <p className="text-sm text-gray-600 text-center mt-3">
              © 2026 Payeox. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
