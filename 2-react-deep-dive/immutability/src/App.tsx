import { useState } from 'react';
import ShikiHighlighter from 'react-shiki';

interface Permissions {
  admin: boolean;
  writeMessage: boolean;
  readMessage: boolean;
}

function makePermissions(): Permissions {
  return {
    admin: false,
    writeMessage: false,
    readMessage: false,
  };
}

function App() {
  const [permissions, setPermissions] = useState(makePermissions());

  return (
    <>
      <h1>Select Permissions</h1>
      <section id="inputs">
        <label>
          <input
            type="checkbox"
            checked={permissions.admin}
            onChange={() => {
              permissions.admin = !permissions.admin;
              setPermissions(permissions);
            }}
          />
          Admin
        </label>
        <label>
          <input
            type="checkbox"
            checked={permissions.writeMessage}
            onChange={() => {
              permissions.writeMessage = !permissions.writeMessage;
              setPermissions(permissions);
            }}
          />
          Write Message
        </label>
        <label>
          <input
            type="checkbox"
            checked={permissions.readMessage}
            onChange={() => {
              permissions.readMessage = !permissions.readMessage;
              setPermissions(permissions);
            }}
          />
          Read Message
        </label>
      </section>

      <ShikiHighlighter language={'json'} theme={'ayu-dark'}>
        {JSON.stringify(permissions, undefined, 2)}
      </ShikiHighlighter>
    </>
  );
}

export default App;
