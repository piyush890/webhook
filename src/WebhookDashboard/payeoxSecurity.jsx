import React from 'react';
import { Shield, Lock, Key, Database, Code, FileText, Users, Server, HardDrive, CheckCircle, AlertTriangle, Clock, Mail, FileCheck } from 'lucide-react';
import HeaderPart from './Header';

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit and at rest using AES-256 encryption standards.'
    },
    {
      icon: Code,
      title: 'Secure Webhooks',
      description: 'Webhook signatures ensure authentic communication between systems.'
    },
    {
      icon: Database,
      title: 'Data Protection',
      description: 'Advanced data protection protocols safeguard your sensitive information.'
    },
    {
      icon: Key,
      title: 'Access Control',
      description: 'Granular permissions ensure only authorized users access critical data.'
    },
    {
      icon: Shield,
      title: 'API Security',
      description: 'API keys are encrypted and rotatable with rate limiting protection.'
    },
    {
      icon: FileText,
      title: 'Audit Logging',
      description: 'Comprehensive activity logs track all system interactions and changes.'
    },
    {
      icon: Users,
      title: 'Role-Based Access',
      description: 'Define custom roles and permissions for team members and collaborators.'
    },
    {
      icon: Server,
      title: 'Secure Infrastructure',
      description: 'Hosted on enterprise-grade infrastructure with 99.9% uptime guarantee.'
    },
    {
      icon: HardDrive,
      title: 'Regular Backups',
      description: 'Automated daily backups ensure your data is never lost.'
    }
  ];

  const dataProtectionPoints = [
    'All sensitive data is encrypted using industry-standard AES-256 encryption',
    'Payment card details are never stored on our servers',
    'Information is tokenized to minimize security exposure',
    'HTTPS/TLS encryption for all data transmission',
    'Compliance with PCI DSS and data protection standards'
  ];

  const platformMeasures = [
    'Webhook signature verification using HMAC-SHA256',
    'Intelligent rate limiting to prevent abuse',
    'Real-time IP monitoring and threat detection',
    'Detailed activity logs for all user actions',
    'Multi-factor authentication (MFA) support'
  ];

  const privacyPoints = [
    'GDPR-compliant data handling practices',
    'Complete data isolation between user accounts',
    'Regular security patches and system updates',
    'Transparent data processing policies',
    'User-controlled data retention settings'
  ];

  const incidentResponse = [
    { icon: AlertTriangle, text: '24/7 automated monitoring systems' },
    { icon: Clock, text: 'Instant alerts for suspicious activities' },
    { icon: Users, text: 'Dedicated security response team' },
    { icon: CheckCircle, text: 'Rapid incident resolution protocols' }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
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
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-8 shadow-lg shadow-blue-500/20">
              <Shield className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Security & Trust
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed">
              Your data and payments are protected with enterprise-grade security. We implement industry-leading standards to keep your business safe.
            </p>
          </div>
        </div>
      </div>

      {/* Core Security Features */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Core Security Features</h2>
          <p className="text-slate-400 text-lg">Comprehensive protection across every layer of our platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Data Protection Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
              <Database className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-3xl font-bold">Data Protection</h2>
          </div>
          
          <p className="text-slate-300 text-lg mb-8">
            We take your data privacy seriously. Here's how we protect your information at every step.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {dataProtectionPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-slate-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Security Measures */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold">Platform Security</h2>
            </div>
            
            <p className="text-slate-300 mb-6">
              Multiple layers of security protect your account and transactions.
            </p>
            
            <div className="space-y-3">
              {platformMeasures.map((measure, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <p className="text-slate-300">{measure}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">Privacy & Compliance</h2>
            </div>
            
            <p className="text-slate-300 mb-6">
              We adhere to global privacy standards and regulatory requirements.
            </p>
            
            <div className="space-y-3">
              {privacyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <p className="text-slate-300">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Incident Response */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Incident Response</h2>
          <p className="text-slate-400 text-lg">Proactive monitoring and rapid response to keep you protected</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {incidentResponse.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl mb-4">
                  <Icon className="w-7 h-7 text-orange-400" />
                </div>
                <p className="text-slate-300 font-medium">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 sm:p-16 text-center">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
          
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Have Security Questions?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Our security team is here to help. Reach out for detailed information about our security practices or to report a concern.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             
              <a href='/privacyPolicy' className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all hover:shadow-xl">
                <FileText className="w-5 h-5" />
                Read Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="text-center text-slate-500 text-sm">
          <p>Last updated: February 2026 • Payeox Security Center</p>
        </div>
      </div>
    </div>
  );
}
