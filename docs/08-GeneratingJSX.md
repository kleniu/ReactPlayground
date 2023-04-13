## brudnopis
oto jak generujemy dynamiczne listy. W JSX wywołujemy JS, który generuje JSX. 
Zapamiętaj:
* jeżeli w JSX zwrócimy tablice elementów z kodem JSX, to React wyrenderuje zawartość tablicy - zresztą JS to zrobi

```
import React from 'react';

export function App(props) {
  const myArray = [
    { key: '1', text: 'Learn React' }, 
    { key: '2', text: 'One' },
    { key: '3', text: 'Two' },
    { key: '4', text: 'Three' }
  ];

  return (
    <div>
      {/* This is outer JSX */}
      <div className='App'>
        <ul>
            {/* This is vanilla JS */}
            { myArray.map( (element) => {
              /* this returns inner JSX */
              return (
                <li key={element.key}>{element.text}</li>
              ); 
            }) }
          </ul>
      </div>
    </div>
  );
}
```