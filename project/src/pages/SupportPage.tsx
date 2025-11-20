import { Award, HelpCircle, MessageSquare, Phone, Mail, Search, ChevronDown, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function SupportPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          q: 'How do I create a GradeMate account?',
          a: 'Simply download the GradeMate app from your device\'s app store, open it, and tap "Sign Up". Enter your email, create a password, and verify your email address. You\'ll be ready to start tracking grades in minutes!'
        },
        {
          q: 'Is GradeMate free to use?',
          a: 'Yes! GradeMate offers a free version with all essential features. We also offer premium plans with advanced analytics and additional features for power users.'
        },
        {
          q: 'Can I use GradeMate on multiple devices?',
          a: 'Absolutely! Your GradeMate account syncs across all devices. Sign in on your phone, tablet, or computer and your data stays in sync.'
        }
      ]
    },
    {
      category: 'Features & Usage',
      questions: [
        {
          q: 'How do I add my courses and grades?',
          a: 'After logging in, tap "Add Course" and enter your course name and instructor. Then add assignments and grades as you receive them. GradeMate will automatically calculate your average.'
        },
        {
          q: 'Can I set grade goals?',
          a: 'Yes! GradeMate allows you to set target grades for each course. We\'ll show you what you need to achieve your goals throughout the semester.'
        },
        {
          q: 'How do I export my grade report?',
          a: 'Go to the Reports section, select the courses you want to include, and choose your export format (PDF or Excel). Your report will be ready to download immediately.'
        }
      ]
    },
    {
      category: 'Account & Security',
      questions: [
        {
          q: 'How is my data protected?',
          a: 'We use enterprise-grade encryption and follow industry best practices for data security. Your grades and personal information are stored securely on our servers.'
        },
        {
          q: 'Can I delete my account?',
          a: 'Yes. To delete your account, go to Account Settings and select "Delete Account", or email support@grademate.in with your request.'
        },
        {
          q: 'How do I change my password?',
          a: 'Open the app, go to Settings > Account > Change Password. Enter your current password and create a new one. Changes take effect immediately.'
        }
      ]
    },
    {
      category: 'Technical Issues',
      questions: [
        {
          q: 'The app keeps crashing. What should I do?',
          a: 'Try these steps: 1) Force close the app and restart it. 2) Ensure you have the latest version installed. 3) Clear the app cache in your device settings. 4) If issues persist, uninstall and reinstall the app.'
        },
        {
          q: 'My grades aren\'t syncing between devices',
          a: 'Check your internet connection on both devices. Make sure you\'re logged into the same account on both. Try logging out and back in. If the issue continues, contact support.'
        },
        {
          q: 'I\'m not receiving notifications',
          a: 'Verify that notifications are enabled in your device settings. In the GradeMate app, go to Settings > Notifications and ensure they\'re turned on for the alerts you want.'
        }
      ]
    }
  ];

  const supportChannels = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      availability: 'Available 9 AM - 6 PM EST'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your questions and concerns',
      availability: 'Response within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call our support team directly',
      availability: 'Available 9 AM - 5 PM EST'
    },
    {
      icon: HelpCircle,
      title: 'Knowledge Base',
      description: 'Browse our comprehensive guides',
      availability: 'Available 24/7'
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <Award className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                GradeMate
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Home</Link>
              <Link to="/job-updates" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Job Updates</Link>
              <Link to="/about-us" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">About Us</Link>
              <Link to="/support" className="text-blue-600 font-medium border-b-2 border-blue-600">Support</Link>
              <Link to="/get-in-touch" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all">Get in Touch</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4">Support Center</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Find answers to your questions and get help when you need it
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all text-center">
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{channel.title}</h3>
                  <p className="text-slate-600 text-sm mb-3">{channel.description}</p>
                  <p className="text-xs text-blue-600 font-semibold">{channel.availability}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-lg"
            />
          </div>

          <div className="space-y-6">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                    <HelpCircle className="h-6 w-6 text-blue-600 mr-2" />
                    {category.category}
                  </h3>

                  <div className="space-y-3">
                    {category.questions.map((faq, questionIndex) => {
                      const globalIndex = categoryIndex * 100 + questionIndex;
                      const isExpanded = expandedFaq === globalIndex;

                      return (
                        <div
                          key={questionIndex}
                          className="border border-slate-200 rounded-lg hover:border-blue-600 transition-colors"
                        >
                          <button
                            onClick={() => setExpandedFaq(isExpanded ? null : globalIndex)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between bg-gradient-to-r from-slate-50 to-blue-50 hover:from-blue-50 hover:to-cyan-50 transition-colors"
                          >
                            <span className="font-semibold text-slate-900">{faq.q}</span>
                            <ChevronDown
                              className={`h-5 w-5 text-blue-600 transition-transform duration-300 ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          {isExpanded && (
                            <div className="px-6 py-4 border-t border-slate-200 text-slate-700 leading-relaxed">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                <p className="text-lg text-slate-600">No results found for "{searchTerm}"</p>
                <p className="text-slate-500 mt-2">Try different keywords or contact our support team</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Still Have Questions?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Our support team is ready to help you. Reach out to us via any of these channels.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:support@grademate.in"
              className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Mail className="h-6 w-6" />
              <span>Email Us</span>
            </a>
            <Link
              to="/get-in-touch"
              className="group bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <MessageSquare className="h-6 w-6" />
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Resources</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-bold text-slate-900">Getting Started Guide</h3>
              </div>
              <p className="text-slate-600 mb-4">Learn the basics of GradeMate and start tracking your grades in minutes.</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Download PDF →
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-bold text-slate-900">Video Tutorials</h3>
              </div>
              <p className="text-slate-600 mb-4">Watch step-by-step video guides on how to use all of GradeMate's features.</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Watch Videos →
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-bold text-slate-900">Community Forum</h3>
              </div>
              <p className="text-slate-600 mb-4">Connect with other GradeMate users and share tips and strategies.</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Join Community →
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-bold text-slate-900">API Documentation</h3>
              </div>
              <p className="text-slate-600 mb-4">Integrate GradeMate with your applications using our comprehensive API.</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                View Docs →
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Award className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">GradeMate</span>
              </div>
              <p className="text-slate-400">Your partner in academic success.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link to="/job-updates" className="hover:text-blue-400 transition-colors">Job Updates</Link></li>
                <li><Link to="/about-us" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="mailto:support@grademate.in" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
                <li><Link to="/support" className="hover:text-blue-400 transition-colors">Support Center</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2025 GradeMate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
