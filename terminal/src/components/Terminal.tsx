import React, { useState } from 'react';
import "../index.css"

type Command = {
  command: string;
  output: string;
};

const Terminal: React.FC = () => {

  const [commands, setCommands] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState('');


  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Process the command
    if (e.key === 'Enter') {
      const output = handleCommand(currentInput);
      setCommands([...commands, { command: currentInput, output }]);
      setCurrentInput(''); // Reset input field after processing
    }
  };

  // Function to handle commands and return their output
  const handleCommand = (command: string): string => {
    const args = command.trim().split(' ').slice(1).join(' ');

    switch (command.trim()) {
      case 'help':
        return 'Commands:\n- help: Show this help message\n- version: Show the version information\n- about: About this terminal';
      case 'version':
        return 'Terminal v1.0.0'; // Adjust version as needed
      case 'about':
        return 'This is a simple terminal simulation built with React and TypeScript.';
      default:
        return `Command not found: ${command}`;
    }
  };

  return (
    <div className="terminal">
      {/* Fake menu bar (styling and functionality can be adjusted) */}
      <div className="fakeMenu">
        <div className="fakeButtons">
          <span className="material-icons">close</span>
          <span className="material-icons">refresh</span>
        </div>
        <div className="fakeTitle">
          <h3>Terminal</h3>
        </div>
      </div>
      {/* Output area to display command history */}
      <div className="output-area">
        {commands.map((cmd, index) => (
          <div key={index}>
            <p className="command">admin@test &gt; {cmd.command}</p>
            <p className="output">{cmd.output}</p>
          </div>
        ))}
      </div>
      {/* Input area for user to type commands */}
      <div className="input-area">
        <span>&gt;&nbsp;&nbsp;</span>
        <input
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleInput}
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;
