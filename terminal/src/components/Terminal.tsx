import React, { useState } from 'react';
import "../index.css";

type Command = {
  command: string;
  output: string;
};

const Terminal: React.FC = () => {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState('');

  // Simuler un répertoire pour la commande ls
  const directory = ['file1.txt', 'file2.txt', 'folder1', 'folder2'];

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const output = handleCommand(currentInput);
      setCommands([...commands, { command: currentInput, output }]);
      setCurrentInput(''); // Réinitialiser le champ d'entrée après traitement
    }
  };

  const handleCommand = (command: string): string => {
    const args = command.trim().split(' ').slice(1).join(' ');

    switch (command.trim()) {
      case 'help':
        return 'Commands:\n- help: Show this help message\n- version: Show the version information\n- about: About this terminal\n- date: Show the current date and time\n- ls: List files in the directory\n- pwd: Show the current directory\n- echo [message]: Echoes the message back\n- clear: Clear the terminal\n- whoami: Show the current user\n- uptime: Show the uptime of the system';
      case 'version':
        return 'Terminal v1.0.0';
      case 'about':
        return 'This terminal was developed by Anas, Bilal, Massinissa, and Nikolaï.';
      case 'date':
        return new Date().toLocaleString();
      case 'ls':
        return directory.join('\n');
      case 'pwd':
        return '/home/user'; // Simuler un répertoire courant
      case 'echo':
        return args || 'No message provided';
      case 'clear':
        setCommands([]); // Effacer l'historique des commandes
        return '';
      case 'whoami':
        return 'user'; // Simuler un utilisateur courant
      case 'uptime':
        return 'System uptime is 3 days, 4 hours, 23 minutes'; // Simuler un temps de fonctionnement
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
