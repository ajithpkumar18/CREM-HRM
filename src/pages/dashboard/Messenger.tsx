import React, { useState } from 'react';
import Navbar from '/home/user/CREM-HRM/src/components/ui/Navbar.tsx'; // Assuming Navbar component exists
import { Sidebar } from '../../components/ui/Sidebar/Sidebar';
import ChatWindow from '../../components/ui/Messenger/ChatWindow';
import profileImage from '/src/assets/images/profile.png';

interface Conversation {

  id: number;
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
}

interface Message {
  id: number;
  text: string;
  time: string;
  isSent: boolean; // true if sent by the current user, false if received
}

const dummyConversations: Conversation[] = [
  {
    id: 1,
    name: 'Alice Smith',
    lastMessage: 'Hey, how are you?',
    time: '10:30 AM',
    avatar: profileImage,
  },
  {
    id: 2,
    name: 'Bob Johnson',
    lastMessage: 'Meeting at 2 PM?',
    time: 'Yesterday',
    avatar: profileImage,
  },
  {
    id: 3,
    name: 'Charlie Brown',
    lastMessage: "Let's grab coffee.",
    time: 'Monday',
    avatar: profileImage,
  },
];

const initialMessages: { [key: number]: Message[] } = {
  1: [
    {
      id: 1,
      text: 'Hello!',
      time: '10:30 AM',
      isSent: false,
    },
    {
      id: 2,
      text: 'Hi there!',
      time: '10:31 AM',
      isSent: true,
    },
    {
      id: 3,
      text: 'How are you doing?',
      time: '10:32 AM',
      isSent: false,
    },
    {
      id: 4,
      text: 'I\'m good, thanks! And you?',
      time: '10:33 AM',
      isSent: true,
    },
  ],
    2: [
        { id: 5, text: "Hey Bob! Let's discuss the project.", time: "10:00 AM", isSent: false },
        { id: 6, text: "Sure, Alice. What's up?", time: "10:01 AM", isSent: true },
    ],
    3: [
        { id: 7, text: "Hi Charlie! What about the proposal?", time: "9:45 AM", isSent: true }
    ]
};

const MessengerPage: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(dummyConversations[0]); // Select the first conversation by default
  const [conversationMessages, setConversationMessages] = useState<{ [key: number]: Message[] }>(initialMessages);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          {/* Conversations List */}
          <div className="w-1/4 border-r bg-white overflow-y-auto">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4">Conversations</h2>
              {dummyConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`flex items-center p-3 cursor-pointer hover:bg-gray-100 ${selectedConversation?.id === conversation.id ? 'bg-gray-200' : ''}`}
                  onClick={() => setSelectedConversation(conversation)}
                >
                   <img
                    src={conversation.avatar}
                    alt={conversation.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="font-semibold">{conversation.name}</h3>
                    <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                  </div>
                  <span className="ml-auto text-xs text-gray-500">{conversation.time}</span>
                </div>
              ))}
            </div>
          </div>

            <ChatWindow selectedConversation={selectedConversation} messages={selectedConversation ? conversationMessages[selectedConversation.id] : []} />
          
        </div>
      </div>
    </div>
  );
};

export default MessengerPage;