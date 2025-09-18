import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Phone } from 'lucide-react';

import DoctorCard from './DoctorCard';
import AppointmentForm from './AppointmentForm';
import AppointmentSummary from './AppointmentSummary';

import doctor1m from '/doctor-list/doctor-1-m.png';
import doctor2f from '/doctor-list/doctor-2-f.png';
import doctor3f from '/doctor-list/doctor-3-f.png';

const doctors = [
  { name: 'Dr. Radhika Mehta', specialty: 'Psychiatrist', experience: '9+ years', location: 'Apollo Hospital, Delhi', image: doctor2f },
  { name: 'Dr. Arjun Patel', specialty: 'Cardiologist', experience: '12+ years', location: 'Fortis, Mumbai', image: doctor1m },
  { name: 'Dr. Neha Kapoor', specialty: 'Dermatologist', experience: '7+ years', location: 'Max Hospital, Noida', image: doctor3f },
];

const AppointmentSection = () => {
  const [formExpanded, setFormExpanded] = useState(false);
  const [appointmentData, setAppointmentData] = useState(null);

  const handleSubmitForm = (data) => {
    setAppointmentData({ ...data, status: 'Pending', userConfirmed: false });
    toast.success('Appointment submitted!');
    setFormExpanded(false);
  };

  const handleUserConfirm = () => {
    if (appointmentData) {
      setAppointmentData({ ...appointmentData, userConfirmed: true });
      toast.success('You have confirmed the appointment!');
    }
  };

  const handleUserCancel = () => {
    setAppointmentData(null);
    toast.error('Appointment canceled!');
  };

  const handleCall = (name) => alert(`Calling ${name}...`);
  const handleVideoCall = (name) => alert(`Starting video call with ${name}...`);

  return (
    <div className="min-h-screen p-6 bg-[#fff] text-white relative">

      <h1 className="text-3xl font-bold text-center mb-6 text-[#feb05d]">Book Appointment</h1>

      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-[#feb05d] mb-6">Our Doctors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc, index) => (
            <DoctorCard key={index} doc={doc} handleCall={handleCall} handleVideoCall={handleVideoCall} />
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <div
          onClick={() => setFormExpanded(!formExpanded)}
          className="cursor-pointer bg-[#003b38] p-4 rounded-lg text-center font-semibold hover:bg-[#004d45] transition"
        >
          {formExpanded ? 'Close Form ▲' : 'Open Appointment Form ▼'}
        </div>

        {formExpanded && <AppointmentForm onSubmit={handleSubmitForm} />}
      </div>

      {appointmentData && (
        <AppointmentSummary
          appointmentData={appointmentData}
          handleUserConfirm={handleUserConfirm}
          handleUserCancel={handleUserCancel}
        />
      )}

      <a
        href="tel:+919876543210"
        className="fixed bottom-5 right-5 flex items-center gap-2 bg-red-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-red-700 transition"
      >
        <Phone size={20} /> Help Line
      </a>
    </div>
  );
};

export default AppointmentSection;
