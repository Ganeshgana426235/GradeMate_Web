import { Mail, AlertCircle, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DeleteAccountPage() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:support@grademate.in?subject=Account Deletion/Modification Request';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <nav className="bg-white/90 backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <Award className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                GradeMate
              </span>
            </Link>
            <Link
              to="/"
              className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full mb-4">
              <AlertCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">Account Management</h1>
            <p className="text-blue-100 text-lg">Delete or modify your GradeMate account</p>
          </div>

          <div className="px-8 py-12">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Need to Make Changes?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We're here to help you with any account-related requests. Whether you want to delete your account
                or modify your account details, our support team is ready to assist you.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <Mail className="h-6 w-6 text-blue-600 mr-2" />
                Contact Support
              </h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                For deleting your account or modifying your account details, please contact our support team.
                We'll process your request promptly and securely.
              </p>

              <button
                onClick={handleEmailClick}
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3"
              >
                <Mail className="h-5 w-5" />
                <span className="text-lg">support@grademate.in</span>
                <ArrowLeft className="h-5 w-5 rotate-180 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Account Deletion</h3>
                <p className="text-slate-600 leading-relaxed">
                  When requesting account deletion, all your data including grades, assignments, and personal
                  information will be permanently removed from our servers. This action cannot be undone.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Modify Account Details</h3>
                <p className="text-slate-600 leading-relaxed">
                  Need to update your email, name, or other account information? Our support team can help you
                  make these changes securely.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Response Time</h3>
                <p className="text-slate-600 leading-relaxed">
                  We typically respond to all account management requests within 24-48 hours. You'll receive
                  a confirmation email once your request has been processed.
                </p>
              </div>
            </div>

            <div className="mt-10 p-6 bg-amber-50 border-2 border-amber-200 rounded-xl">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Important Information</h4>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    Please include your registered email address and specific details about your request when
                    contacting support. This helps us process your request more efficiently and securely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/"
            className="text-slate-600 hover:text-blue-600 transition-colors font-medium inline-flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>

      <footer className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Award className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">GradeMate</span>
          </div>
          <p className="text-slate-400">&copy; 2025 GradeMate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
