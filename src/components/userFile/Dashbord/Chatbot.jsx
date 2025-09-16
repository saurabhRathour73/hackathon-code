import React, { useState, useRef, useEffect } from 'react';
import chatbotLogo from '/doctor-list/ai-chatbot-logo.png';
import userLog from '/doctor-list/user-logo.png';

const ChatBot = () => {
    const [messages, setMessages] = useState([
        { sender: 'bot', text: "Hi! I am your mental health support bot. How can I help you today?" }
    ]);
    const [input, setInput] = useState('');

    const chatApiUrl = 'http://localhost:5000/api/chat';
    const messagesEndRef = useRef(null);

    const addMessage = (sender, text) => {
        setMessages(prev => [...prev, { sender, text }]);
    };

    const handleSend = async () => {
        if (!input.trim()) return;
        addMessage('user', input);

        try {
            const res = await fetch(chatApiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input })
            });

            const data = await res.json();
            addMessage('bot', data.response);
        } catch (err) {
            addMessage('bot', 'Oops! Something went wrong.');
        }

        setInput('');
    };

    // Auto scroll to latest message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="w-full mx-auto p-4 bg-[#002928] rounded shadow mt-5 flex flex-col">
            <div className="custom-scrollbar h-[29rem] overflow-y-auto p-4 mb-4 space-y-4">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex items-start ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        
                        {msg.sender === 'bot' && (
                            <img src={chatbotLogo} alt="ChatBot Logo" className="w-10 h-10 rounded-full mr-3" />
                        )}

                        <div className={`p-3 rounded-lg max-w-xs ${msg.sender === 'user' ? 'bg-blue-500 shadow-[0_4px_6px_rgba(0,0,0,0.6)] text-white' : 'bg-gray-100 shadow-[0_4px_6px_rgba(0,0,0,0.6)] font-semibold text-black'}`}>
                            <p>{msg.text}</p>
                        </div>

                        {msg.sender === 'user' && (
                            <img src={userLog} alt="User Avatar" className="w-10 h-10 rounded-full ml-3" />
                        )}
                    </div>
                ))}

                {/* Dummy div to scroll into view */}
                <div ref={messagesEndRef} />
            </div>

            <div className="flex gap-2">
                <input
                    type="text"
                    className="flex-grow border text-white rounded px-3 py-2"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => { if (e.key === 'Enter') handleSend(); }}
                />

                <button onClick={handleSend} className="bg-[#feb05d] text-black px-4 rounded">Send</button>
            </div>
        </div>
    );
};

export default ChatBot;
