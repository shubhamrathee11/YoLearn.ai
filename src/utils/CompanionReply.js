const replies = {
  alex: (message) => {
    const msg = message.toLowerCase();
    if (msg.includes("math")) return "Let's simplify that math problem step by step.";
    if (msg.includes("science")) return "Science is fun! Which topic are you curious about?";
    if (msg.includes("history")) return "History teaches us so much—what era are you exploring?";
    if (msg.includes("hard") || msg.includes("difficult")) return "Don’t worry! I’ll help you understand it clearly.";
    if (msg.includes("hello") || msg.includes("hi")) return "Hi! I'm Alex, your study buddy. What can I help you with today?";
    return "Great! Let's dive into the topic. What would you like to study?";
  },

  john: (message) => {
    const msg = message.toLowerCase();
    if (msg.includes("motivate") || msg.includes("motivation"))
      return "You are stronger than you think. Let’s keep going!";
    if (msg.includes("focus")) return "Try to take small steps. Focus builds with momentum.";
    if (msg.includes("goal") || msg.includes("dream"))
      return "Your goals are within reach. Stay consistent and believe in yourself.";
    if (msg.includes("anxious") || msg.includes("nervous"))
      return "Breathe in. Breathe out. Let’s take this one step at a time.";
    if (msg.includes("hi") || msg.includes("hello"))
      return "Hey! I’m John, your personal coach. Ready to grow today?";
    return "Let’s work through this together. Tell me what’s on your mind.";
  },

  katherine: (message) => {
    const msg = message.toLowerCase();
    if (msg.includes("friend") || msg.includes("buddy"))
      return "Aww, I'm always here for you 💛 Let's talk!";
    if (msg.includes("fun")) return "Wanna hear a fun fact or a joke? I’ve got both!";
    if (msg.includes("lonely")) return "You're never alone. I’m here for you anytime.";
    if (msg.includes("sad") || msg.includes("upset"))
      return "Hugs! 💖 Want to talk about it?";
    if (msg.includes("hi") || msg.includes("hello"))
      return "Hey hey! It’s me, Katherine 👋 What’s going on?";
    return "I’m all ears! Tell me what’s up 😊";
  },
};

export default function getCompanionReply(companion, message) {
  const responder = replies[companion];
  if (responder) return responder(message);
  return "I'm here for you!";
}
