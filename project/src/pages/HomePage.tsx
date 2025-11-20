import { Star, Download, Users, Award, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: CheckCircle,
      title: 'Smart Grade Tracking',
      description: 'Track all your grades and assignments in one place with intelligent analytics'
    },
    {
      icon: Award,
      title: 'Performance Insights',
      description: 'Get detailed insights into your academic performance with visual charts'
    },
    {
      icon: Sparkles,
      title: 'Goal Setting',
      description: 'Set academic goals and track your progress throughout the semester'
    },
    {
      icon: Users,
      title: 'Easy to Use',
      description: 'Intuitive interface designed for students of all levels'
    }
  ];

  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'College Student',
      rating: 5,
      text: 'GradeMate has completely transformed how I track my academic progress. The insights are invaluable!'
    },
    {
      name: 'Michael Chen',
      role: 'High School Senior',
      rating: 5,
      text: 'Best grade tracking app out there. Clean interface and powerful features that actually help.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Graduate Student',
      rating: 5,
      text: 'Finally, an app that understands what students need. The goal-setting feature keeps me motivated!'
    }
  ];

  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '4.9', label: 'App Rating' },
    { value: '1M+', label: 'Downloads' },
    { value: '99%', label: 'Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Award className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                GradeMate
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </a>
              <Link
                to="/job-updates"
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Job Updates
              </Link>
              <Link
                to="/about-us"
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                About Us
              </Link>
              <Link
                to="/support"
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Support
              </Link>
              <Link
                to="/get-in-touch"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 animate-bounce">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold">Your Academic Success Partner</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Track Your Grades,
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Achieve Your Goals
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              GradeMate is the ultimate grade tracking app that helps students stay organized,
              monitor their academic performance, and reach their educational goals with confidence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Download Now</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-slate-700 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-slate-200">
                Learn More
              </button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Powerful Features for Students
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need to excel academically, all in one beautiful app
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Loved by Students Everywhere
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See what students are saying about GradeMate
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed italic">"{review.text}"</p>
                <div>
                  <div className="font-bold text-slate-900">{review.name}</div>
                  <div className="text-sm text-slate-500">{review.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Excel in Your Studies?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Join thousands of students who are already using GradeMate to achieve their academic goals
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto">
            <Download className="h-6 w-6" />
            <span>Download GradeMate Now</span>
          </button>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">GradeMate</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Empowering students to take control of their academic journey with smart grade tracking and insights.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
                <li><a href="#reviews" className="hover:text-blue-400 transition-colors">Reviews</a></li>
                <li><Link to="/delete-account" className="hover:text-blue-400 transition-colors">Support</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="mailto:support@grademate.in" className="hover:text-blue-400 transition-colors">
                    support@grademate.in
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 GradeMate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
