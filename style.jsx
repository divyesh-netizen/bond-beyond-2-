import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { UserPlus, Info } from 'https://cdn.skypack.dev/lucide-react@0.303.0';

// Main App component
function App() {
  // State to manage the current page/view.
  // We'll use a switch statement to render the correct content.
  const [view, setView] = useState('home');

  // State to manage the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    graduationYear: '',
    major: ''
  });

  // Handle form input changes 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data Submitted:", formData);
    // In a real application, you would send this data to a server.
    alert("Registration submitted! Check the console for the data.");
    // Reset the form
    setFormData({
      name: '',
      email: '',
      graduationYear: '',
      major: ''
    });
    setView('home'); // Go back to the home page
  };

  const renderContent = () => {
    switch (view) {
      case 'register':
        return (
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Register</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700">Graduation Year</label>
                <input
                  type="number"
                  id="graduationYear"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="major" className="block text-sm font-medium text-gray-700">Major</label>
                <input
                  type="text"
                  id="major"
                  name="major"
                  value={formData.major}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </form>
          </div>
        );
      case 'about':
        return (
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">About Us</h2>
            <p className="text-gray-600 text-center mb-4">
              The Alumni Association is dedicated to fostering a strong and supportive community among graduates. Our mission is to connect alumni with each other and with our institution, providing resources, networking opportunities, and a platform for lifelong engagement.
            </p>
            <p className="text-gray-600 text-center">
              We believe in the power of our community to uplift and inspire. Join us to stay connected, give back, and celebrate the shared journey of our alumni.
            </p>
          </div>
        );
      default: // 'home' view
        return (
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-white mb-4">Welcome, Alumni!</h1>
            <p className="text-xl text-gray-200 mb-8">Stay connected and be a part of our growing community.</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setView('register')}
                className="flex items-center space-x-2 py-3 px-6 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:bg-indigo-50 hover:text-indigo-700 transition duration-300 transform hover:scale-105"
              >
                <UserPlus className="w-6 h-6" />
                <span>Register</span>
              </button>
              <button
                onClick={() => setView('about')}
                className="flex items-center space-x-2 py-3 px-6 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:bg-indigo-50 hover:text-indigo-700 transition duration-300 transform hover:scale-105"
              >
                <Info className="w-6 h-6" />
                <span>About Us</span>
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-indigo-500 font-[Inter] flex flex-col items-center justify-center p-4">
      {/* Header/Navigation */}
      <div className="absolute top-0 left-0 right-0 bg-indigo-700 text-white p-4 shadow-md flex justify-between items-center rounded-b-lg">
        <span className="text-xl font-bold cursor-pointer" onClick={() => setView('home')}>Alumni Portal</span>
        <nav className="flex space-x-4">
          <button
            onClick={() => setView('register')}
            className="flex items-center space-x-1 hover:text-indigo-200 transition-colors"
          >
            <UserPlus className="w-5 h-5" />
            <span>Register</span>
          </button>
          <button
            onClick={() => setView('about')}
            className="flex items-center space-x-1 hover:text-indigo-200 transition-colors"
          >
            <Info className="w-5 h-5" />
            <span>About Us</span>
          </button>
        </nav>
      </div>
      
      {/* Main content area */}
      <div className="flex-1 flex items-center justify-center w-full">
        {renderContent()}
      </div>

    </div>
  );
}

// React setup
const root = createRoot(document.getElementById('root'));
root.render(<App />);