import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyAPg7VQxrS0gl0wnwYUnGgEasn0w3ivo-E';  // Apna API Key yaha dalna
const SEARCH_QUERY = 'मानसिक स्वास्थ्य ध्यान योग आराम करने के लिए वीडियो';

const ResourceHub = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        axios.get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(SEARCH_QUERY)}&maxResults=30&key=${API_KEY}`
        ).then(response => {
            setVideos(response.data.items);
        }).catch(err => console.error(err));
    }, []);

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="bg-[#feb05d] text-4xl p-2 rounded-2xl font-bold text-center mb-10 text-gray-800"> Relaxation Videos for Mental Wellness</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {videos.map(video => (
                    <div
                        key={video.id.videoId}
                        className="cursor-pointer shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform bg-[#002928]"
                        onClick={() => setSelectedVideo(video)}
                    >
                        <img
                            src={video.snippet.thumbnails.high.url}
                            alt={video.snippet.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="font-semibold text-lg text-gray-100">{video.snippet.title}</h2>
                            <p className="text-sm text-gray-100 mt-2">{video.snippet.channelTitle}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedVideo && (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-6 overflow-auto">
        <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full p-6 relative">

            <button
                className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-gray-900"
                onClick={() => setSelectedVideo(null)}
            >
                ✖
            </button>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                {selectedVideo.snippet.title}
            </h2>

            <div className="w-full">
                <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}?autoplay=1&controls=0`}
                    title={selectedVideo.snippet.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-[70vh] rounded-md"
                />
            </div>

            {/* Custom Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition">
                    ⏮ Previous
                </button>

                <button className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition">
                    ▶ Play / Pause
                </button>

                <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition">
                    ⏭ Next
                </button>

                <div className="flex items-center space-x-4">
                    <label className="text-gray-700">🔊 Volume</label>
                    <input type="range" min="0" max="100" className="w-40" />
                </div>

                <div className="flex items-center space-x-4">
                    <label className="text-gray-700">⏱ Seek</label>
                    <input type="range" min="0" max="100" className="w-40" />
                </div>
            </div>
        </div>
    </div>
)}

        </div>
    );
};

export default ResourceHub;
