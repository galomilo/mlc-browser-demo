import { Mic } from "lucide-react";
import { CornerDownRight } from "lucide-react";

export function ChatInput() {
  return (
    <div className="chat-input">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Escribí tu mensaje..."
        />

        <button className="mic-inside" title="Hablar">
          <Mic size={18} />
        </button>
      </div>

      <button className="send-button">
        <CornerDownRight size={18} />
      </button>
    </div>
  );
}
