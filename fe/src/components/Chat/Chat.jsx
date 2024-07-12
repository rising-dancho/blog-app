import { useState, useEffect, useContext } from "react";
import { socket } from "../../socket";
import MyContext from "../../MyContext";
import "./Chat.css";

const Chat = () => {
  const {
    user: { username },
  } = useContext(MyContext);
  const [chat, setChat] = useState("");
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(socket.connected);

  const connect = () => {
    socket.connect();
  };

  const disconnect = () => {
    socket.disconnect();
  };

  const handleSubmitChat = (e) => {
    e.preventDefault();

    setChat("");
    socket.emit("message", `${username}: ${chat}`);
  };

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    const onMessageEvent = (message) => {
      setMessages((prev) => [...prev, message]);
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("message", onMessageEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("message", onMessageEvent);
    };
  });

  return (
    <div id="chat-box">
      <div>Connection: {isConnected ? "online" : "offline"}</div>
      {isConnected ? (
        <button onClick={disconnect}>Disconnect</button>
      ) : (
        <button onClick={connect}>Connect</button>
      )}
      <ul id="messages">
        {messages.map((message, index) => {
          return <li key={index}>{message}</li>;
        })}
      </ul>
      <form onSubmit={handleSubmitChat}>
        <input
          type="text"
          value={chat}
          onChange={(e) => setChat(e.target.value)}
          className="p-1 text-slate-800"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;

/*
  1. Create input for chat message
  2. Create send message button
  3. Create <ul> for the messages
  4. Create connection status
*/
