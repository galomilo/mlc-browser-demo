import "../styles/index.css";
import { Sidebar } from "../components/layout/Sidebar";
import { ChatHeader } from "../components/chat/ChatHeader";
import { ChatMessages } from "../components/chat/ChatMessages";
import { ChatInput } from "../components/chat/ChatInput";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="chat-container">
        <ChatHeader />
        <ChatMessages />
        <ChatInput />
      </div>
    </div>
  );
}

export default App;
