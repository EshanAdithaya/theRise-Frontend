import React from 'react';
import { Card, CardHeader, CardContent } from '../miniComponents/card';
import { Link } from 'react-router-dom';

const HealthDashboard = () => {
  return (
    <div class name=" rounded-md bg-white">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
      <Link to="/water-schedule">
        <Card>
          <CardHeader>Water Schedule</CardHeader>
          <CardContent>
            <p>View and manage your water schedule.</p>
          </CardContent>
        </Card>
      </Link>

      <Link to="/sensor-levels">
        <Card>
          <CardHeader>Sensor Levels</CardHeader>
          <CardContent>
            <p>Monitor your sensor data and levels.</p>
          </CardContent>
        </Card>
      </Link>

      <Link to="/fertilizer-schedule">
        <Card>
          <CardHeader>Fertilizer Schedule</CardHeader>
          <CardContent>
            <p>Manage your fertilizer application schedule.</p>
          </CardContent>
        </Card>
      </Link>

      <Link to="/soil-condition">
        <Card>
          <CardHeader>Soil Condition</CardHeader>
          <CardContent>
            <p>Check the current state of your soil.</p>
          </CardContent>
        </Card>
      </Link>
    </div>
    </div>
  );
};

export default HealthDashboard;