import React, {useEffect, useState} from 'react';
import {useTreeContext} from '../../utils/TreeProvider';
import DashboardCard02A from './DashboardCard02A';

const DashboardCard02 = () => {
  const {visibleTreesDashboard, visibleExtentDashboard} = useTreeContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (visibleExtentDashboard && visibleTreesDashboard.length > 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [visibleTreesDashboard, visibleExtentDashboard]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-800"></div>
      </div>
    );
  }

  if (!visibleExtentDashboard) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>Visible extent is null.</p>
      </div>
    );
  }

  if (visibleTreesDashboard.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>No trees within the visible extent.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col col-span-full  bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 h-[55vh] relative overflow-hidden">
      <div className="flex h-full">
        <div className="flex-1 overflow-auto">
          <DashboardCard02A data={{trees: visibleTreesDashboard}} />
        </div>
      </div>
    </div>
  );
};

export default DashboardCard02;
