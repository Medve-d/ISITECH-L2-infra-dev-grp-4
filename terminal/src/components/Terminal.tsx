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
  const [startTime, setStartTime] = useState(performance.now());

  const directory = ['file1.txt', 'file2.txt', 'folder1', 'folder2'];

   
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
  
  useEffect(() => {
    setStartTime(performance.now());
  }, []);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const output = handleCommand(currentInput);
      
      if (currentInput.trim() !== 'clear') {
        setCommands([...commands, { command: currentInput, output }]);
      }
      
      setCurrentInput('');
    }
  };

  const handleCommand = (command: string): string => {
    const args = command.trim().split(' ').slice(1).join(' ');

    switch (command.trim()) {
      case 'help':
        return 'Commands:\n- help: Show this help message\n- version: Show the version information\n- about: About this terminal\n- toggle-mode: Switch between dark and light mode\n- date: Show the current date and time\n- ls: List files in the directory\n- pwd: Show the current directory\n- echo [message]: Echoes the message back\n- clear: Clear the terminal output\n- whoami: Show the current user\n- uptime: Show the uptime of the system';
      case 'version':
        return 'Terminal v1.0.0';
      case 'about':
        return 'This terminal was developed by Anas, Bilal, Massinissa, and Nikolaï.';
      case 'toggle-mode':
        toggleMode();
        return `Switched to ${isDarkMode ? 'light' : 'dark'} mode`;
      case 'date':
        return new Date().toLocaleString();
      case 'ls':
        return directory.join('\n');
      case 'pwd':
        return '/home/user';
      case 'echo':
        return args || 'No message provided';
      case 'clear':
        setCommands([]);
        return '';
      case 'whoami':
        return 'user';
      case 'uptime':
        const elapsedTime = Math.floor((performance.now() - startTime) / 1000);
        const days = Math.floor(elapsedTime / 86400);
        const hours = Math.floor((elapsedTime % 86400) / 3600);
        const minutes = Math.floor((elapsedTime % 3600) / 60);
        const seconds = elapsedTime % 60;
        return `System uptime is ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
      default:
        return `Command not found: ${command}`;
    }
  };

  return (
    <div className='terminaContainer'>
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
              <p className="command">admin@G4 &gt; {cmd.command}</p>
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
    </div>
  );
};

export default Terminal;
