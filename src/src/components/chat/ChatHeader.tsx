export function ChatHeader() {
  return (
    <header className="chat-header">
      <select className="model-select">
        <option>Gemma 2 2B</option>
        <option>LLaMA 3</option>
        <option>Mistral</option>
      </select>
    </header>
  );
}
