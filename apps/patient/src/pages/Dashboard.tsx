// apps/patient-dashboard/src/PatientDashboard.tsx
import { useState } from 'react';
import React from 'react'
import { DashboardLayout} from '@repo/ui/dashboardLayout'
import { InfoButton } from '@repo/ui/infoButton';
import { Input } from '@repo/ui/input';
import { Modal } from '@repo/ui/modal';
import { ProfileCard } from '../components/ProfileCard';
import { RequestAppointment } from '../components/RequestAppointment';
import { MedicalHistory } from '../components/MedicalHistory';
import {Prescriptions} from "../components/Prescriptions"

const PatientDashboard = () => {
  const [selectedItem, setSelectedItem] = useState('Profile');
  const medicines=[
    "panadol",
    "ponston"
  ]

  const sidebarItems = ['Profile', 'Medical History', 'Prescriptions', 'Request Appointment'];

  const renderContent = () => {
    switch (selectedItem) {
      case 'Profile':
        return <div><ProfileCard name="John Doe" phone="+92 343 3234323" email="doe@gmail.com" cnic='3123 123 3123' relation='S/O Elite Doe' profileImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLA994hpL3PMmq0scCuWOu0LGsjef49dyXVg&s' /></div>;
      case 'Medical History':
        return <div><MedicalHistory history={medicines} recommendations='Take the medicine three times a day'/></div>;
      case 'Prescriptions':
        return <div><Prescriptions medicines={medicines}/></div>;
      case 'Request Appointment':
        return <div><RequestAppointment/></div>;
      default:
        return <div>Default Content</div>;
    }
  };

  return (
    <DashboardLayout
      sidebarTitle="Menu"
      sidebarItems={sidebarItems}
      onSidebarItemClick={setSelectedItem}
    >
      <h2 className="text-2xl font-bold mb-4">{selectedItem}</h2>
      {renderContent()}
      
    </DashboardLayout>
  );
};

export default PatientDashboard;