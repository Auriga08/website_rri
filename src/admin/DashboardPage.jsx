// src/admin/DashboardPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { RadioIcon, UsersIcon, CalendarIcon, TrendingUpIcon } from 'lucide-react';

export const DashboardPage = () => {
  const stats = [
    { name: 'Total Programs', value: '3', icon: RadioIcon, color: 'bg-blue-500', cssClass: 'stat-card--programs' },
    { name: 'Staff Members', value: '6', icon: UsersIcon, color: 'bg-green-500', cssClass: 'stat-card--staff' },
    { name: 'Upcoming Events', value: '2', icon: CalendarIcon, color: 'bg-purple-500', cssClass: 'stat-card--events' },
    { name: 'Total Schedules', value: '24', icon: TrendingUpIcon, color: 'bg-orange-500', cssClass: 'stat-card--schedules' },
  ];


  const recentActivity = [
    { action: 'New schedule added', program: 'Pro 1', time: '2 hours ago' },
    { action: 'Event updated', program: 'Festival Musik', time: '4 hours ago' },
    { action: 'Staff member added', program: 'Organization', time: '1 day ago' },
    { action: 'Program schedule modified', program: 'Pro 2', time: '2 days ago' },
  ];

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="text-gray-600">Welcome to RRI Jambi Admin Panel</p>
        </div>
      </div>

       <div className="dashboard-grid">
        {stats.map((stat) => (
          // Tambahkan stat.cssClass di sini
          <div key={stat.name} className={`stat-card ${stat.cssClass}`}>
            <div className={`stat-card-icon ${stat.color}`}>
              <stat.icon />
            </div>
            <div className="stat-card-info">
              <p className="name">{stat.name}</p>
              <p className="value">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="admin-card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-2">
            {recentActivity.map((activity, index) => (
              <div key={index} className="recent-activity-item">
                <div>
                  <p className="activity-action">{activity.action}</p>
                  <p className="activity-details">{activity.program}</p>
                </div>
                <span className="activity-details">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Link to="/admin/schedules/add" className="quick-action-link">
              <div className="quick-action-title">Add New Schedule</div>
              <div className="quick-action-desc">Create a new program schedule</div>
            </Link>
            <Link to="/admin/events/add" className="quick-action-link">
              <div className="quick-action-title">Create Event</div>
              <div className="quick-action-desc">Add a new upcoming event</div>
            </Link>
            <Link to="/admin/staff" className="quick-action-link">
              <div className="quick-action-title">Manage Staff</div>
              <div className="quick-action-desc">View and update organization members</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};