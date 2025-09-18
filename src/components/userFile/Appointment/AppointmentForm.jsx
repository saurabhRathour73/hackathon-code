import { useForm } from 'react-hook-form';

const AppointmentForm = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="bg-[#003b38] p-6 mt-4 rounded-lg space-y-4 shadow-md">
      <div>
        <label className="block mb-1">Full Name</label>
        <input type="text" {...register('name', { required: true })} className="w-full p-2 rounded bg-black text-white" placeholder="Enter your name" />
      </div>

      <div>
        <label className="block mb-1">Date of Birth</label>
        <input type="date" {...register('dob', { required: true })} className="w-full p-2 rounded bg-black text-white" />
      </div>

      <div>
        <label className="block mb-1">Gender</label>
        <select {...register('gender', { required: true })} className="w-full p-2 rounded bg-black text-white">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block mb-1">Contact (Phone/Email)</label>
        <input type="text" {...register('contact', { required: true })} className="w-full p-2 rounded bg-black text-white" placeholder="Phone or Email" />
      </div>

      <div>
        <label className="block mb-1">Preferred Appointment Date</label>
        <input type="date" {...register('date', { required: true })} className="w-full p-2 rounded bg-black text-white" />
      </div>

      <div>
        <label className="block mb-1">Mode of Consultation</label>
        <select {...register('mode', { required: true })} className="w-full p-2 rounded bg-black text-white">
          <option value="">Select Mode</option>
          <option value="In-person">In-person</option>
          <option value="Online">Online</option>
        </select>
      </div>

      <div>
        <label className="block mb-1">Reason for Visit</label>
        <textarea {...register('reason', { required: true })} className="w-full p-2 rounded bg-black text-white" placeholder="Describe your issue..." />
      </div>

      <div>
        <label className="block mb-1">Preferred Language (Optional)</label>
        <input type="text" {...register('language')} className="w-full p-2 rounded bg-black text-white" placeholder="English / Hindi / Others" />
      </div>

      <div className="text-center">
        <button type="submit" className="bg-[#feb05d] text-black px-6 py-2 rounded hover:bg-[#e69d4f] transition">Submit</button>
      </div>
    </form>
  );
};

export default AppointmentForm;
