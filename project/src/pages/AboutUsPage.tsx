import { Award, Users, Target, Heart, Lightbulb, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutUsPage() {
  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & CEO',
      bio: 'Passionate about transforming education through technology with 10+ years of experience.',
      image: '👩‍💼'
    },
    {
      name: 'James Patterson',
      role: 'CTO & Co-founder',
      bio: 'Tech innovator dedicated to building scalable solutions for educators and students.',
      image: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Lead',
      bio: 'User-focused product strategist with a background in educational psychology.',
      image: '👩‍🎓'
    },
    {
      name: 'David Chen',
      role: 'Head of Design',
      bio: 'Creates beautiful, intuitive interfaces that students love to use.',
      image: '🎨'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Student-Centric',
      description: 'We put students first in every decision, ensuring our platform serves their real needs.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously pushing boundaries to create smarter, better solutions for education.'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Making quality education tools available and affordable for everyone worldwide.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for perfection in every detail of our product and service.'
    }
  ];

  const milestones = [
    { year: '2020', event: 'GradeMate Founded' },
    { year: '2021', event: '10,000 Users Milestone' },
    { year: '2022', event: 'Mobile Apps Launched' },
    { year: '2023', event: '100,000 Active Users' },
    { year: '2024', event: 'International Expansion' },
    { year: '2025', event: 'AI-Powered Features' }
  ];

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
              <Link to="/about-us" className="text-blue-600 font-medium border-b-2 border-blue-600">About Us</Link>
              <Link to="/support" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Support</Link>
              <Link to="/get-in-touch" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all">Get in Touch</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              <Users className="h-4 w-4" />
              <span className="text-sm font-semibold">About Our Mission</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">About GradeMate</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to revolutionize how students track their academic progress and achieve their educational goals through intelligent, intuitive technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="text-6xl font-bold text-blue-600 mb-4">Our Story</div>
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p>
                  GradeMate was founded in 2020 by a group of educators and technologists who saw a gap in the market. Students were struggling to keep track of their grades, assignments, and academic progress across multiple platforms.
                </p>
                <p>
                  What started as a simple note-taking tool evolved into a comprehensive grade tracking and analytics platform. Today, GradeMate serves over 100,000 students worldwide, helping them make informed decisions about their academic future.
                </p>
                <p>
                  Our commitment remains unchanged: empower students with the tools they need to succeed academically and beyond.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 text-white">
              <div className="space-y-8">
                <div>
                  <div className="text-4xl font-bold mb-2">100K+</div>
                  <p className="text-blue-100">Active Students</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <p className="text-blue-100">Countries Supported</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">4.9/5</div>
                  <p className="text-blue-100">Average Rating</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">5 Years</div>
                  <p className="text-blue-100">Continuous Innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Key milestones in GradeMate's growth and evolution
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-cyan-600"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <p className="text-xl text-slate-700 font-semibold">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Passionate people dedicated to transforming education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-40 bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                  <div className="text-7xl">{member.image}</div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            We're always looking for talented individuals to join our team and help us transform education technology.
          </p>
          <Link
            to="/job-updates"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all"
          >
            <span>Explore Opportunities</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
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
              <p className="text-slate-400">Empowering students through intelligent education technology.</p>
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
                <li><Link to="/support" className="hover:text-blue-400 transition-colors">Help Center</Link></li>
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
