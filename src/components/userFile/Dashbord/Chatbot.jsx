import React from 'react';

const Chatbot = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-[#feb05d]">Chatbot</h2>
      <div className="bg-black text-white h-[20rem] rounded-md overflow-y-auto space-y-2 text-sm">
        <p><strong>Bot:</strong> Hello! How are you feeling today?</p>
        {/* Chat messages will go here */}
      </div>
    </div>
  );
};

export default Chatbot;
