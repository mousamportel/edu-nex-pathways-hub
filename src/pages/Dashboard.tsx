
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          Welcome to your personal dashboard. Here you can track your courses, achievements, and career progress.
        </p>
        <p className="mb-8">
          Coming soon: Full dashboard with enrolled courses, progress tracking, saved articles, and more.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
