## Brudnopis

1) Side Effects - zazwyczaj wykorzystywane do wszystkiego co nie jest związane bezpośrednio z renderowaniem HTML i reakcją na eventy np. wywoływanie REST API, zapisywanie coś w storage przeglądarki, tworzenie timerów

chodzi o wywoływanie kodu komponentu, ale nie gdy inicjalnie jest renderowany lub zmienia się jego stan (domyślne zachowanie), ale wtedy:
- zmieniają się tylko wskazane stany (robimy to za pomocą dependencies) 
- i gdy inicjalnie jest renderowany komponent (tego nie zablokujemy)

2) Reducers - bardziej zaawansowane zarządzanie stanami 

działa jak useState, ale z nieco większymi możliwościami :) 

3) Context - zarządzanie globalne stanami (app wide) 

unikamy całego `props chain` i umożliwiamy komunikowanie się pomiędzy różnymi komponentami "bezpośrednio".
