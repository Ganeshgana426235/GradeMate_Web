import { Star, Download, Users, Award, CheckCircle, ArrowRight, Sparkles, TrendingUp, BookOpen, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// CORRECTED: Defining the RatingStars component at the top level 
// requires 'Star' to be imported, which it is.

interface RatingStarsProps {
    rating: number;
}

const RatingStars = ({ rating }: RatingStarsProps) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                // Tailwind CSS classes to control filled vs. empty stars
                className={`h-5 w-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}`}
            />
        ))}
    </div>
);

export default function HomePage() {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    // Initial load animation and scroll listener for the navbar
    useEffect(() => {
        setIsVisible(true);
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const features = [
        {
            icon: TrendingUp,
            title: 'Predictive GPA Calculator',
            description: 'Instantly see how your current grades impact your final GPA and set target scores.'
        },
        {
            icon: BookOpen,
            title: 'Course Weighting Management',
            description: 'Accurately manage complex grade structures, categories, and assignment weights for every class.'
        },
        {
            icon: Clock,
            title: 'Assignment Deadline Sync',
            description: 'Never miss a due date. Sync assignments and get smart reminders tailored to your schedule.'
        },
        {
            icon: Award,
            title: 'Historical Performance Log',
            description: 'Track progress semester-over-semester and identify your strongest and weakest academic areas.'
        }
    ];

    const steps = [
        { icon: Download, title: 'Download & Sign Up', description: 'Quickly set up your account using Firebase Authentication.' },
        { icon: BookOpen, title: 'Add Your Courses', description: 'Input your class names, credits, and grade weighting system.' },
        { icon: CheckCircle, title: 'Log Your Grades', description: 'Enter scores for quizzes, tests, and projects as you get them.' },
        { icon: Zap, title: 'Get Instant Insights', description: 'View your real-time GPA and performance predictions.' },
    ];

    const reviews = [
        {
            name: 'Sarah Johnson',
            role: 'College Student',
            rating: 5,
            text: 'GradeMate is my secret weapon for staying ahead. The GPA prediction feature is a game-changer!'
        },
        {
            name: 'Michael Chen',
            role: 'High School Senior',
            rating: 5,
            text: 'The clean interface makes grade entry fast, and the performance charts keep me motivated all semester long.'
        },
        {
            name: 'Emily Rodriguez',
            role: 'Graduate Student',
            rating: 5,
            text: 'As a grad student, I need precision. GradeMate handles complex weighting systems flawlessly. Highly recommend!'
        }
    ];

    const stats = [
        { value: '4.9/5', label: 'App Store Rating', icon: Star },
        { value: '50K+', label: 'Active Daily Users', icon: Users },
        { value: '1M+', label: 'Total Downloads', icon: Download },
        { value: '30%', label: 'Avg. GPA Improvement', icon: TrendingUp }
    ];

    // Tailwind classes for the gradient background and text
    const primaryGradient = 'bg-gradient-to-r from-indigo-600 to-sky-600';
    const primaryTextGradient = 'bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent';

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* --- Navigation Bar --- */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center space-x-2">
                            <Award className="h-8 w-8 text-indigo-600" />
                            <span className={`text-2xl font-bold ${primaryTextGradient}`}>
                                GradeMate
                            </span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Features</a>
                            <a href="#how-it-works" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">How It Works</a>
                            <a href="#reviews" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Reviews</a>
                            <Link
                                to="/support"
                                className="px-5 py-2 rounded-full font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* --- Hero Section --- */}
            <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
                    style={{ background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23a9c7f6\' fill-opacity=\'0.3\'%3E%3Cpath d=\'M36 34.5L30 40.5L24 34.5L30 28.5L36 34.5ZM0 30L6 36L0 42L-6 36L0 30Z\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
                </div>
                <div className="max-w-7xl mx-auto text-center z-10 relative">
                    <div className={`transform transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full mb-6 font-medium border border-indigo-200 shadow-md">
                            <Sparkles className="h-5 w-5 animate-pulse" />
                            <span className="text-sm font-semibold">The Future of Student Success</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                            Master Your Grades,
                            <br />
                            <span className={primaryTextGradient}>
                                Own Your Academic Future
                            </span>
                        </h1>

                        <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Stop guessing and start achieving. GradeMate is the ultimate smart tracker that gives you real-time GPA, performance insights, and confidence to reach your goals.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className={`group ${primaryGradient} text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl shadow-indigo-400/50 hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300 flex items-center space-x-2`}>
                                <Download className="h-6 w-6" />
                                <span>Get the App Now</span>
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <a href="#how-it-works" className="bg-white text-slate-700 px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 border-2 border-slate-200">
                                See How It Works
                            </a>
                        </div>
                    </div>

                    {/* Stats Bar */}
                    <div className="mt-20 flex justify-center">
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200 border border-slate-200 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div
                                        key={index}
                                        className="text-center px-6 py-2 transition-opacity duration-500 hover:bg-slate-50/50 rounded-lg"
                                    >
                                        <div className="flex items-center justify-center space-x-2 text-4xl font-extrabold mb-1">
                                            <Icon className="h-6 w-6 text-sky-600" />
                                            <span className={primaryTextGradient}>{stat.value}</span>
                                        </div>
                                        <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Features Section --- */}
            <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wider mb-2">Power Tools</h2>
                        <h3 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
                            Designed to Eliminate Academic Stress
                        </h3>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Leverage intelligent features to simplify grade management and gain complete clarity on your academic standing.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
                                >
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md ${primaryGradient}`}>
                                        <Icon className="h-7 w-7 text-white" />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                                    <p className="text-slate-600 leading-relaxed text-base">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* --- How It Works Section --- */}
            <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-base font-semibold text-sky-600 uppercase tracking-wider mb-2">Simple Steps</h2>
                        <h3 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
                            From Zero to GPA Hero in Minutes
                        </h3>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            GradeMate is fast to set up, easy to use, and immediately starts delivering value to your study routine.
                        </p>
                    </div>

                    <div className="relative flex justify-center">
                        {/* Desktop Timeline Line */}
                        <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-slate-200 mx-16">
                            <div className={`absolute top-0 left-0 h-full ${primaryGradient} transition-all duration-1000 ease-out`} style={{ width: '100%' }}></div>
                        </div>

                        <div className="grid md:grid-cols-4 gap-12 relative z-10">
                            {steps.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <div
                                        key={index}
                                        className="text-center group"
                                    >
                                        <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto transition-all duration-500 border-4 border-white shadow-xl ${primaryGradient} group-hover:scale-110`}>
                                            <Icon className="h-10 w-10 text-white" />
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                                        <p className="text-slate-600 text-sm">{step.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Reviews Section --- */}
            <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 bg-indigo-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wider mb-2">Testimonials</h2>
                        <h3 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
                            Trusted by Dedicated Students
                        </h3>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Hear from the community about how GradeMate is changing their academic life.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100"
                            >
                                {/* CORRECTED: Calling the imported RatingStars component */}
                                <RatingStars rating={review.rating} />
                                <p className="text-slate-700 mt-4 mb-6 leading-relaxed italic text-lg">"{review.text}"</p>
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 font-bold text-lg">
                                        {review.name[0]}
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">{review.name}</div>
                                        <div className="text-sm text-slate-500">{review.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA Section --- */}
            <section className={`py-20 px-4 sm:px-6 lg:px-8 ${primaryGradient}`}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                        Stop Stressing. Start Tracking.
                    </h2>
                    <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
                        Join the community of successful students using GradeMate to get the grades they deserve.
                    </p>
                    <button className="bg-white text-indigo-600 px-12 py-4 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 mx-auto">
                        <Download className="h-6 w-6" />
                        <span>Download GradeMate Now</span>
                    </button>
                </div>
            </section>

            {/* --- Footer --- */}
            <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-12 border-b border-slate-800 pb-8 mb-8">
                        {/* Logo and Description */}
                        <div className="md:col-span-1">
                            <div className="flex items-center space-x-2 mb-4">
                                <Award className="h-8 w-8 text-sky-400" />
                                <span className="text-2xl font-bold">GradeMate</span>
                            </div>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Empowering students to take control of their academic journey with smart grade tracking and insights.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-bold mb-4 text-slate-200">Quick Links</h4>
                            <ul className="space-y-3 text-slate-400 text-sm">
                                <li><a href="#features" className="hover:text-sky-400 transition-colors">Features</a></li>
                                <li><a href="#how-it-works" className="hover:text-sky-400 transition-colors">How It Works</a></li>
                                <li><a href="#reviews" className="hover:text-sky-400 transition-colors">Testimonials</a></li>
                            </ul>
                        </div>

                        {/* Support & Legal */}
                        <div>
                            <h4 className="font-bold mb-4 text-slate-200">Legal & Support</h4>
                            <ul className="space-y-3 text-slate-400 text-sm">
                                <li><Link to="/support" className="hover:text-sky-400 transition-colors">Support Center</Link></li>
                                <li><Link to="/privacy" className="hover:text-sky-400 transition-colors">Privacy Policy</Link></li>
                                <li><Link to="/terms" className="hover:text-sky-400 transition-colors">Terms of Service</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="font-bold mb-4 text-slate-200">Connect</h4>
                            <ul className="space-y-3 text-slate-400 text-sm">
                                <li>
                                    <a href="mailto:support@grademate.in" className="hover:text-sky-400 transition-colors">
                                        support@grademate.in
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-sky-400 transition-colors">
                                        Twitter
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center text-slate-500 text-sm">
                        <p>&copy; 2025 GradeMate. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}