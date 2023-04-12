### Brudnopis
Nie uywaj zmiennych.
Uzywaj `useState` z `react`.
Uzycie kolejne `useState` nie updatetuje stanu.
Jzeli musisz bazowac na poprzedniej wartości, to uzywaj składni:
```
import {useState} from 'react'

const myComponent = () => {
    // useState parameter is an initial value
    const [myValue, setMyValue] = useState(0);

    const exampleHandler = (event) => {
        setMyValue( (oldMyValue) => {
            return oldMyValue + Number(event.target.value);
        })
    }
} 
```