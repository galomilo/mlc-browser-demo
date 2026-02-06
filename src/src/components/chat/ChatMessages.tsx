export function ChatMessages() {
  return (
    <div className="chat-messages">
      <div className="message-wrapper user">
        <div className="message user">
          Hola, ¿cómo funciona este modelo?
        </div>
        <span className="message-hour">15:41</span>
      </div>

      <div className="message-wrapper assistant">
        <div className="message assistant">
          Soy un modelo LLM ejecutándose en tu navegador.
        </div>
      </div>
    </div>
  );
}
