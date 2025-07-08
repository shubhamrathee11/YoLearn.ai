import { useState } from "react";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import EmptyState from "./EmptyState";
import ProfileSection from "./ProfileSection";

import alex from "../assets/alex.png";
import john from "../assets/john.jpg";
import katherine from "../assets/katherine.jpg";

const companions = {
  Alex: { name: "Alex Dagota", role: "Tutor", avatar: alex },
  John: { name: "John Mathews", role: "Coach", avatar: john },
  Katherine: { name: "Katherine Lane", role: "Buddy", avatar: katherine },
};

const getReply = (companionKey, userMessage) => {
  const msg = userMessage.toLowerCase();
  switch (companionKey) {
    case "Alex":
      return msg.includes("math")
        ? "Let's simplify that math problem together!"
        : "Sure, I can help you learn. Just ask!";
    case "John":
      return msg.includes("motivate")
        ? "You’ve got this! Stay strong and keep pushing forward!"
        : "I'm here to coach you. Let's grow together!";
    case "Katherine":
      return msg.includes("friend")
        ? "Aww, you're my best friend too! 😊"
        : "I'm here to chat and keep things light. Tell me anything!";
    default:
      return "I'm here for you!";
  }
};

const Main = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatStarted, setChatStarted] = useState(false);
  const [selectedCompanion, setSelectedCompanion] = useState(companions.Alex);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleSend = () => {
    if (message.trim() === "") return;

    const time = getCurrentTime();
    const userMsg = { text: message, time, sender: "user" };
    const botMsg = {
      text: getReply(
        Object.keys(companions).find((k) => companions[k] === selectedCompanion),
        message
      ),
      time,
      sender: "bot",
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setMessage("");
    setChatStarted(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  const handleSayHi = () => {
    const time = getCurrentTime();
    const userMsg = { text: "Hi", time, sender: "user" };
    const botMsg = {
      text: getReply(
        Object.keys(companions).find((k) => companions[k] === selectedCompanion),
        "Hi"
      ),
      time,
      sender: "bot",
    };

    setMessages([userMsg, botMsg]);
    setChatStarted(true);
  };

  return (
    <div className="flex flex-col md:flex-row w-full" style={{ height: "947px" }}>
      {/* Chat Section */}
      <div
        className="border-gray-300 px-6 flex-1 flex flex-col justify-between border-r"
        style={{ maxWidth: "836px", minHeight: "947px" }}
      >
        <div className="flex-1 overflow-y-auto">
          {!chatStarted && (
            <EmptyState companion={selectedCompanion} onSayHi={handleSayHi} />
          )}

          {messages.length > 0 && (
            <ChatMessages messages={messages} companion={selectedCompanion} />
          )}
        </div>

        <ChatInput
          message={message}
          setMessage={setMessage}
          onSend={handleSend}
          onKeyDown={handleKeyDown}
        />
      </div>

      {/* Profile Section */}
      <ProfileSection
        selected={selectedCompanion}
        onSelect={(companion) => {
          setSelectedCompanion(companion);
          setMessages([]);
          setChatStarted(false);
        }}
      />
    </div>
  );
};

export default Main;
