import React, { useState } from 'react';

// Define the type for a command with its output
type Command = {
  command: string;
  output: string;
};

const Terminal: React.FC = () => {
  // State to hold the list of commands and their outputs
  const [commands, setCommands] = useState<Command[]>([]);
  // State to hold the current input value
  const [currentInput, setCurrentInput] = useState('');

  // Handle input when the user presses a key
  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // Logic to handle command execution should be added here
      // For example, you can process the command and update the state
      
      // Reset input field after processing
      setCurrentInput(''); 
    }
  };

  // Placeholder function to handle commands; this is where you can add logic
  const handleCommand = (command: string): string => {
    // Add your command handling logic here
    // This function should return the output for the given command
    return `Command not found: ${command}`;
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
