import React from 'react';
import { Conversation, Message } from '../../../../src/pages/dashboard/Messenger'; // Assuming types are defined in Messenger.tsx

interface ChatWindowProps {
  selectedConversation: Conversation | null;
  messages: Message[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ selectedConversation, messages }) => {
  return (
    <div className="flex flex-col flex-1 bg-white">
      {selectedConversation ? (
        <>
          {/* Chat Title Bar */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <img
                src={selectedConversation.avatar}
                alt={selectedConversation.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h2 className="text-xl font-bold">{selectedConversation.name}</h2>
                {/* Add user status or other info here if available */}
                <p className="text-sm text-gray-500">Online</p> {/* Placeholder */}
              </div>
            </div>
            <div className="flex items-center gap-4">
            {/* Voice Call Icon */}
              <button className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h9a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11H8m4 4h4m-4-8h4" />
                  </svg>
              </button>
              {/* Video Call Icon */}
              <button className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.61v6.78a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
              </button>



              {/* Search Icon */}
              <button className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              {/* More Options Icon (Three Dots) */}
              <button className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v.01M12 12v.01M12 18v.01" />
                </svg>
              </button>
            </div>
          </div>

          {/* Message Area */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex mb-4 ${message.isSent ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`p-3 rounded-lg ${message.isSent ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                >
                  <p>{message.text}</p>
                  <span className="text-xs mt-1 block text-right">{message.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input Area */}
          <div className="p-4 border-t flex items-center">
            {/* Attachment Icon */}
            <button className="text-gray-500 hover:text-gray-700 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.414 6.586a2 2 0 000 2.828l6.586 6.586a2 2 0 002.828 0l6.414-6.586a2 2 0 000-2.828l-6.586-6.586z" />
              </svg>
            </button>
            <input
              type="text"
              placeholder={`Type your message to ${selectedConversation.name}`}
              className="flex-1 border rounded-full px-4 py-2 mr-2 focus:outline-none"
            />
            {/* Emoji Icon */}
            <button className="text-gray-500 hover:text-gray-700 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            {/* Send Button */}
            <button className="bg-blue-500 text-white rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-full text-gray-500">
          Select a conversation to start messaging
        </div>
      )}
    </div>
  );
};

export default ChatWindow;