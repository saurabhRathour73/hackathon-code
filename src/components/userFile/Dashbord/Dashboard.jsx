import React from 'react';
import aibotlogo from '/doctor-list/ai-chatbot-logo.png'
const Dashboard = ({ username }) => {
  return (
    <div className="h-screen flex flex-col bg-[#002928] text-white">

      {/* Header */}
      <header className="bg-gray-100 w-1/2 text-black py-3 px-3 rounded-br-3xl  shadow-md border-t-4 border-l-4 border-[#feb05d]">
        <h1 className="text-2xl font-bold">Welcome, {username}</h1>
        <p>We’re glad to have you here at <span className='font-bold '>Sahaay</span> – Your Digital Mental Health Support System.</p>
      </header>


      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Chatbot Section */}
        <div className="bg-white rounded-md shadow-md p-6 h-full min-h-[300px]">
          <div className='flex items-center'><img className='w-20 h-20' src={aibotlogo} alt="" />
            <h2 className="text-xl font-bold text-black mb-4">Chatbot</h2> </div>
          <div className="bg-gray-100 rounded-md p-4 text-black h-[20rem]">
            Chatbot Interface Here
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
