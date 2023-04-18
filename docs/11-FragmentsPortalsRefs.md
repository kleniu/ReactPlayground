## Brudnopis

w JSX mamy pewne ograniczenia:
1) __PROBLEM1__:  nie możemy renderować, gdy nie ma pojedynczego root elementu, np
```
return (
	<h2>Hi</h2>
	<p>It doesn't work!</p>
);
```
rozwiązujemy ten problem pakując elementy w jeden <div>, ale

robi nam się prawdziwa `<div> Soup`, czyli miliardy zagnieżdżonych div'ów
```
<div>
	<div>
		<div>
			<div>
				<h2>Hi</h2>
				<p>It works, but looks ugly :(</p>
			</div>
		</div>
	</div>
</div>
```

### Rozwiązania
a) wykorzystaj Wrapper :)
- zbuduj nowy komponent, mało spektakularny, ale pomocny :) 
_Wrapper.js_
```
const Wrapper = (props) => {
	return props.children;
}

export default Wrapper;
```
- i używaj do woli :) 
```
return (
	<Wrapper>
		<h2>Hi</h2>
		<p>It does work! No Div Soup :)</p>
	</Wrapper>
);
```
- dobra wiadomość, ten trik tak się spodobał społeczności, że ów Wrapper wbudowali w Reacta nazywając go:
#Fragments

tak działa:
```
return (
	<React.Fragment>
		<h2>Hi</h2>
		<p>It does work! No Div Soup :)</p>
	</react.Fragment>
);
```
albo krócej :) 
```
return (
	<>
		<h2>Hi</h2>
		<p>It does work! No Div Soup :)</p>
	</>
);
```

2) __PROBLEM2__: gdy stosujemy `modals`, `side bars` lub jakiekolwiek komponenty typu `overlay`
dla czystego kodu HTML, powinniśmy przywiązywać je do `root`, a nie gdzieś w drzewie DOM

jak sobie poradzić - używaj 
#Portals

a) zmodyfikuj `index.html`, i zrób tam div w którym będziesz generował wszystkie overley'e
_index.html_
```
...
<body>
	...
	<div id="overlay-root"></div>
	<div id="root">
		...
	</div>
</body
```
b) w komponencie który renderuje jakiś komponent overlay (np modal), przenieś go w wskazane miejsce - port it :)
_MyModal.js_
```
import ReactDOM from 'react-dom';

const RenderMyModal = (props) => {
	return (
		<>
			...
		</>
	);
} 

const MyModal = (props) => {
	return (
		<>
		 {ReactDOM.createPortal(
			<RenderMyModal />,
			document.getElementById('overlay-root')
		 )}
		</>
	)
} 

export default MyModal;

``` 

3) __PROBLEM3__: jak dostawać się do real DOM z poziomu JS?

Używaj `refs` - np zamiast `useState` przy odczytywaniu wartości z `input` z formularzy. Proste!