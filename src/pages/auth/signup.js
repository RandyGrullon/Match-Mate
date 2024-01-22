import React from 'react';

const SignupPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
        {/* Add signup form */}
        <form>
          {/* Form fields go here */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;