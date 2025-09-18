import React, { useState } from "react";

const AppointmentSummary = ({ appointmentData, handleUserConfirm, handleUserCancel }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(appointmentData);

  // Input change handler
  const handleChange = (e) => {
    setEditedData({
      ...editedData,
      [e.target.name]: e.target.value,
    });
  };

  // Confirm handler (with or without edit)
  const handleConfirmClick = () => {
    handleUserConfirm(editedData); // send updated data
    setIsEditing(false);
  };

  return (
    <div className="max-w-3xl mx-auto mt-6 bg-[#002928] p-6 rounded-lg shadow-md space-y-3">
      <h2 className="text-2xl font-semibold text-[#feb05d]">Appointment Summary</h2>

      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={editedData.name}
            onChange={handleChange}
            className="w-full p-2 rounded border"
          />
          <input
            type="date"
            name="dob"
            value={editedData.dob}
            onChange={handleChange}
            className="w-full p-2 rounded border"
          />
          <input
            type="text"
            name="gender"
            value={editedData.gender}
            onChange={handleChange}
            className="w-full p-2 rounded border"
          />
          <input
            type="text"
            name="contact"
            value={editedData.contact}
            onChange={handleChange}
            className="w-full p-2 rounded border"
          />
          <input
            type="date"
            name="date"
            value={editedData.date}
            onChange={handleChange}
            className="w-full p-2 rounded border"
          />
          <input
            type="text"
            name="mode"
            value={editedData.mode}
            onChange={handleChange}
            className="w-full p-2 rounded border"
          />
          <textarea
            name="reason"
            value={editedData.reason}
            onChange={handleChange}
            className="w-full p-2 rounded border"
          />
          {appointmentData.language && (
            <input
              type="text"
              name="language"
              value={editedData.language}
              onChange={handleChange}
              className="w-full p-2 rounded border"
            />
          )}
        </>
      ) : (
        <>
          <p><strong>Name:</strong> {appointmentData.name}</p>
          <p><strong>DOB:</strong> {appointmentData.dob}</p>
          <p><strong>Gender:</strong> {appointmentData.gender}</p>
          <p><strong>Contact:</strong> {appointmentData.contact}</p>
          <p><strong>Date:</strong> {appointmentData.date}</p>
          <p><strong>Mode:</strong> {appointmentData.mode}</p>
          <p><strong>Reason:</strong> {appointmentData.reason}</p>
          {appointmentData.language && <p><strong>Language:</strong> {appointmentData.language}</p>}
        </>
      )}

      <p><strong>Status (Doctor Approval):</strong> {appointmentData.status}</p>
      <p><strong>Your Confirmation:</strong> {appointmentData.userConfirmed ? "Confirmed ✅" : "Not Confirmed"}</p>

      <div className="flex gap-4 mt-3">
        {isEditing ? (
          <button
            onClick={handleConfirmClick}
            className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
          >
            Save & Confirm
          </button>
        ) : (
          <button
            onClick={handleConfirmClick}
            className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
          >
            {appointmentData.userConfirmed ? "Confirmed ✅" : "Confirm"}
          </button>
        )}
        <button
          onClick={handleUserCancel}
          className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
        >
          Cancel
        </button>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default AppointmentSummary;
