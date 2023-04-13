## Brudnopis
Takie rzeczy są możliwe brzy budowaniu warunkowym JSX 
[Playground](https://stackblitz.com/edit/react-playground-practice-rvbb4p?file=App.js)
```
import React, { useState } from 'react';

export default function App() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const actionHandler = function () {
    setShowConfirmation(true);
  };

  const proceedHandler = function () {
    setShowConfirmation(false);
  };

  // YES, you can store JSX in variable
  const warning = (
    <div id="warning">
      <p>Are you sure to do stupid thing?</p>
      <button onClick={proceedHandler}>Proceed</button>
    </div>
  );

  const action = (
    <div id="action">
      <p />
      <button onClick={actionHandler}>Do stupid thing!</button>
    </div>
  );

  // YES, you can conditionally build the content returned by the component
  let content = null;
  if (showConfirmation) {
    content = (
      <div>
        {warning}
        {action}
      </div>
    );
  } else {
    content = <div>{action}</div>;
  }

  return (
    <div>
      <h3>Test App component!</h3>
      {/* and YES, you can simplify the component return JSX */}
      {content}
    </div>
  );
}

```