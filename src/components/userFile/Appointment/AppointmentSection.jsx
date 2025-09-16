import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import doctor1m from '/doctor-list/doctor-1-m.png';
import doctor2f from '/doctor-list/doctor-2-f.png';
import doctor3f from '/doctor-list/doctor-3-f.png';
import doctor4f from '/doctor-list/doctor-4-f.png';
import doctor5f from '/doctor-list/doctor-6-f.png';
import doctor6m from '/doctor-list/doctor-5-m.png';
import doctor7m from '/doctor-list/doctor-7-m.png';
import doctor8m from '/doctor-list/doctor-8-m.png';
import doctor9m from '/doctor-list/doctor-9-m.png';

const doctors = [
  { name: 'Dr. Radhika Mehta', specialty: 'Psychiatrist', experience: '9+ years', location: 'Apollo Hospital, Delhi', image: doctor2f },
  { name: 'Dr. Arjun Patel', specialty: 'Cardiologist', experience: '12+ years', location: 'Fortis, Mumbai', image: doctor1m },
  { name: 'Dr. Neha Kapoor', specialty: 'Dermatologist', experience: '7+ years', location: 'Max Hospital, Noida', image: doctor3f },
  { name: 'Dr. Ravi Sharma', specialty: 'Orthopedic', experience: '10+ years', location: 'AIIMS, Delhi', image: doctor6m },
  { name: 'Dr. Meera Joshi', specialty: 'Neurologist', experience: '15+ years', location: 'Narayana, Bangalore', image: doctor4f },
  { name: 'Dr. Alok Singh', specialty: 'ENT Specialist', experience: '8+ years', location: 'Medanta, Gurgaon', image: doctor7m },
  { name: 'Dr. Pooja Verma', specialty: 'Pediatrician', experience: '6+ years', location: 'Apollo Cradle, Pune', image: doctor5f },
  { name: 'Dr. Rajat Jain', specialty: 'Oncologist', experience: '11+ years', location: 'Tata Memorial, Mumbai', image: doctor8m },
  { name: 'Dr. Ankit Rawat', specialty: 'General Physician', experience: '5+ years', location: 'Private Clinic, Dehradun', image: doctor9m },
];

const AppointmentSection = () => {
  const { register, handleSubmit, reset } = useForm();
  const [appointmentSubmitted, setAppointmentSubmitted] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [appointmentData, setAppointmentData] = useState(null);

  const onSubmit = (data) => {
    setAppointmentData(data);
    setAppointmentSubmitted(true);
    setConfirmed(false);

    toast.success('Appointment booked successfully!');
    reset();
  };

  const handleCancel = () => {
    setAppointmentSubmitted(false);
    toast.error('Appointment Canceled successfully!');
    setAppointmentData(null);
    reset();
  };

  const handleConfirm = () => {
    setConfirmed(true);
  };

  const handleContact = () => {
    alert("Doctor's contact: +91 9876543210");
  };

  return (
    <div className="min-h-screen text-white p-6">

      <h1 className="text-3xl font-bold mb-6 text-center text-[#feb05d]">Book Appointment</h1>

      {/* Doctor Grid Section */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-[#feb05d] mb-6">Our Doctors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="bg-[#002928] rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.5)] flex gap-4 items-center p-4"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-30 h-30 rounded-full object-center border-2 border-[#feb05d]"
              />
              <div>
                <h3 className="text-lg font-semibold">{doc.name}</h3>
                <p className="text-sm text-gray-300">{doc.specialty}</p>
                <p className="text-sm text-gray-300">{doc.experience}</p>
                <p className="text-sm text-gray-300">{doc.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form Section (React Hook Form) */}
     <div>
       <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto bg-[#003b38] p-6 rounded-lg shadow-md space-y-5"
      >
        <div>
          <label className="block mb-2 font-medium">Your Name</label>
          <input
            type="text"
            {...register('name', { required: true })}
            className="w-full p-2 rounded bg-black text-white"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Your Problem</label>
          <input
            type="text"
            {...register('problem', { required: true })}
            className="w-full p-2 rounded bg-black text-white"
            placeholder="e.g. Anxiety, Headache..."
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Preferred Date</label>
          <input
            type="date"
            {...register('date', { required: true })}
            className="w-full p-2 rounded bg-black text-white"
          />
        </div>

        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-[#feb05d] text-black font-semibold px-6 py-2 rounded hover:bg-[#e69d4f] transition"
          >
            Submit
          </button>
        </div>
      </form>
     </div>

      {/* Appointment Summary Card */}
      {appointmentSubmitted && appointmentData && (
        <div className="max-w-2xl mx-auto mt-10">
          <h2 className="text-2xl font-bold text-[#feb05d] mb-4">Your Appointment</h2>
          <div className="bg-black text-white p-6 rounded-lg shadow-md space-y-4">
            <p><strong>Name:</strong> {appointmentData.name}</p>
            <p><strong>Problem:</strong> {appointmentData.problem}</p>
            <p><strong>Date:</strong> {appointmentData.date}</p>
            <div className="flex gap-4 mt-4">
              <button
                onClick={handleConfirm}
                className={`px-4 py-2 rounded font-semibold ${confirmed ? 'bg-green-600' : 'bg-[#feb05d] text-black hover:bg-[#e69d4f]'
                  }`}
              >
                {confirmed ? 'Confirmed ✅' : 'Confirm'}
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 rounded bg-red-600 text-white font-semibold hover:bg-red-700"
              >
                Cancel
              </button>
              <button
                onClick={handleContact}
                className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700"
              >
                panding
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentSection;
