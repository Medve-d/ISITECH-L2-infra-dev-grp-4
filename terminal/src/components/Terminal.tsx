import React, { useState, useEffect } from 'react';
import "../index.css";

type Command = {
  command: string;
  output: string;
};

const Terminal: React.FC = () => {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // UseEffect to handle adding/removing classes for dark/light mode
  useEffect(() => {
    const terminalElement = document.querySelector('.terminal');
    if (isDarkMode) {
      terminalElement?.classList.add('dark');
      terminalElement?.classList.remove('light');
    } else {
      terminalElement?.classList.add('light');
      terminalElement?.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const output = handleCommand(currentInput);
      
      // If the command is 'clear', we don't add it to the commands state
      if (currentInput.trim() !== 'clear') {
        setCommands([...commands, { command: currentInput, output }]);
      }
      
      setCurrentInput('');
    }
  };

  const handleCommand = (command: string): string => {
    switch (command.trim()) {
      case 'help':
        return 'Commands:\n- help: Show this help message\n- version: Show the version information\n- about: About this terminal\n- toggle-mode: Switch between dark and light mode\n- clear: Clear the terminal output';
      case 'version':
        return 'Terminal v1.0.0';
      case 'about':
        return 'This is a simple terminal simulation built with React and TypeScript.';
      case 'toggle-mode':
        toggleMode();
        return `Switched to ${isDarkMode ? 'light' : 'dark'} mode`;
      case 'clear':
        setCommands([]); 
        return ''; 
      default:
        return `Command not found: ${command}`;
    }
  };

  return (
    <div className="terminal">
      <div className="fakeMenu">
        <div className="fakeButtons">
          <span className="material-icons">close</span>
          <span className="material-icons">refresh</span>
        </div>
        <div className="fakeTitle">
          <h3>Terminal</h3>
        </div>
        <button className="toggle-button" onClick={toggleMode}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
      <div className="output-area">
        {commands.map((cmd, index) => (
          <div key={index}>
            <p className="command">admin@test &gt; {cmd.command}</p>
            <p className="output">{cmd.output}</p>
          </div>
        ))}
      </div>
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
