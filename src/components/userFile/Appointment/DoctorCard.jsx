import { Phone, Video } from 'lucide-react';

const DoctorCard = ({ doc, handleCall, handleVideoCall }) => (
  <div className="bg-[#002928] rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.5)] p-4 flex flex-col items-center gap-4 relative">
    <span className="absolute top-3 right-3 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
    <img
      src={doc.image}
      alt={doc.name}
      className="w-28 h-28 rounded-full object-cover border-2 border-[#feb05d]"
    />
    <h3 className="text-lg font-semibold">{doc.name}</h3>
    <p className="text-sm text-gray-300">{doc.specialty}</p>
    <p className="text-sm text-gray-300">{doc.experience}</p>
    <p className="text-sm text-gray-300">{doc.location}</p>

    <div className="flex gap-3 mt-2">
      <button
        onClick={() => handleCall(doc.name)}
        className="flex items-center gap-1 bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
      >
        <Phone size={16} /> Call
      </button>
      <button
        onClick={() => handleVideoCall(doc.name)}
        className="flex items-center gap-1 bg-green-600 px-3 py-1 rounded hover:bg-green-700"
      >
        <Video size={16} /> Video
      </button>
    </div>
  </div>
);

export default DoctorCard;
