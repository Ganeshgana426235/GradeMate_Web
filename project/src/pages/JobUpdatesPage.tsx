import { Award, Search, MapPin, Briefcase, Clock, TrendingUp, Filter, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function JobUpdatesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const jobListings = [
    {
      id: 1,
      title: 'Senior Product Manager',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      category: 'Product',
      type: 'Full-time',
      salary: '$150k - $200k',
      posted: '2 days ago',
      description: 'Lead product strategy and development for our flagship education platform.',
      skills: ['Product Strategy', 'Analytics', 'Team Leadership']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'EdTech Solutions',
      location: 'Remote',
      category: 'Engineering',
      type: 'Full-time',
      salary: '$120k - $160k',
      posted: '1 day ago',
      description: 'Build scalable web applications for our learning management system.',
      skills: ['React', 'Node.js', 'PostgreSQL']
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      company: 'Learning Innovations',
      location: 'New York, NY',
      category: 'Design',
      type: 'Full-time',
      salary: '$100k - $140k',
      posted: '3 days ago',
      description: 'Design intuitive interfaces for student-facing applications.',
      skills: ['Figma', 'User Research', 'Prototyping']
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'Analytics Pro',
      location: 'Boston, MA',
      category: 'Data Science',
      type: 'Full-time',
      salary: '$130k - $180k',
      posted: '4 days ago',
      description: 'Develop machine learning models for predictive analytics in education.',
      skills: ['Python', 'Machine Learning', 'Statistics']
    },
    {
      id: 5,
      title: 'Customer Success Manager',
      company: 'GradeMate',
      location: 'Remote',
      category: 'Sales & Support',
      type: 'Full-time',
      salary: '$80k - $110k',
      posted: '1 day ago',
      description: 'Support and grow our customer relationships globally.',
      skills: ['Communication', 'CRM', 'Problem Solving']
    },
    {
      id: 6,
      title: 'Marketing Specialist',
      company: 'EduBrand',
      location: 'Austin, TX',
      category: 'Marketing',
      type: 'Full-time',
      salary: '$70k - $100k',
      posted: '5 days ago',
      description: 'Drive growth and brand awareness for innovative edu-tech products.',
      skills: ['Content Marketing', 'SEO', 'Social Media']
    },
    {
      id: 7,
      title: 'Mobile App Developer',
      company: 'MobileEdu',
      location: 'Seattle, WA',
      category: 'Engineering',
      type: 'Contract',
      salary: '$100k - $130k',
      posted: '2 days ago',
      description: 'Develop iOS and Android apps for educational purposes.',
      skills: ['Swift', 'Kotlin', 'Mobile Design']
    },
    {
      id: 8,
      title: 'Business Analyst',
      company: 'EduInsights',
      location: 'Chicago, IL',
      category: 'Business',
      type: 'Full-time',
      salary: '$90k - $120k',
      posted: '3 days ago',
      description: 'Analyze market trends and support strategic planning.',
      skills: ['Data Analysis', 'Excel', 'Business Strategy']
    }
  ];

  const categories = [
    'all',
    'Engineering',
    'Product',
    'Design',
    'Data Science',
    'Sales & Support',
    'Marketing',
    'Business'
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

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
              <Link to="/job-updates" className="text-blue-600 font-medium border-b-2 border-blue-600">Job Updates</Link>
              <Link to="/about-us" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">About Us</Link>
              <Link to="/support" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Support</Link>
              <Link to="/get-in-touch" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all">Get in Touch</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-semibold">Opportunities Await</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4">Job Updates</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover exciting career opportunities in education technology and adjacent fields
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Search Jobs</label>
                <div className="relative">
                  <Search className="absolute left-4 top-3 h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Job title, company, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </button>
            </div>

            {showFilters && (
              <div className="md:hidden mt-6 pt-6 border-t border-slate-200">
                <label className="block text-sm font-semibold text-slate-700 mb-3">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-28">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="space-y-6">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <div
                      key={job.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 hover:-translate-y-1 border-l-4 border-blue-600"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-2">{job.title}</h3>
                          <p className="text-lg text-slate-600 font-semibold">{job.company}</p>
                        </div>
                        <span className="inline-flex bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm w-fit">
                          {job.type}
                        </span>
                      </div>

                      <p className="text-slate-600 mb-4 leading-relaxed">{job.description}</p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 py-4 border-y border-slate-200">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-5 w-5 text-blue-600" />
                          <span className="text-slate-700">{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Briefcase className="h-5 w-5 text-blue-600" />
                          <span className="text-slate-700">{job.salary}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-5 w-5 text-blue-600" />
                          <span className="text-slate-700">{job.posted}</span>
                        </div>
                        <div className="text-slate-700 font-medium">{job.category}</div>
                      </div>

                      <div className="mb-6">
                        <p className="text-sm font-semibold text-slate-700 mb-2">Required Skills:</p>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105">
                        Apply Now
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                    <Briefcase className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                    <p className="text-xl text-slate-600">No jobs found matching your criteria</p>
                  </div>
                )}
              </div>

              {filteredJobs.length > 0 && (
                <div className="mt-8 text-center">
                  <p className="text-slate-600 font-medium">
                    Showing {filteredJobs.length} of {jobListings.length} positions
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Can't Find Your Dream Job?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Subscribe to our job alert system and get notified about new opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg focus:outline-none flex-1 sm:flex-initial"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all hover:scale-105">
              Subscribe Now
            </button>
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
              <p className="text-slate-400">Connecting talent with opportunities in education technology.</p>
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
