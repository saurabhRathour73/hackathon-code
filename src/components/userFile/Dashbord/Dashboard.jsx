import React from 'react';
import aibotlogo from '/doctor-list/ai-chatbot-logo.png'
import ChatBot from './Chatbot';
const Dashboard = ({ username }) => {
  return (
    <div className="h-screen flex flex-col  text-white">

      {/* Header */}
      <header className="bg-gray-200 w-1/2 text-black py-3 px-3 rounded-br-3xl  shadow-md border-t-4 border-l-4 border-[#feb05d]">
        <h1 className="text-2xl font-bold">Welcome, {username}</h1>
        <p>We’re glad to have you here at <span className='font-bold '>Sahaay</span> – Your Digital Mental Health Support System.</p>
      </header>


      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Chatbot Section */}
        <div className="bg-gray-200 rounded-md shadow-md pt-2 h-full min-h-[300px]">
          <div className='flex items-centerv h-8 pl-5 '><img className='w-12 h-12' src={aibotlogo} alt="" />
            <h2 className="text-xl font-bold text-black mb-4">Chatbot</h2> </div>
          <div className="bg-gray-100 rounded-md  text-black h-[20rem]">
            <ChatBot/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
