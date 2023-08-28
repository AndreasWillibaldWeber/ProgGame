[![spec](https://github.com/AndreasWillibaldWeber/ProgGame/actions/workflows/main.yml/badge.svg)](https://github.com/AndreasWillibaldWeber/ProgGame/actions/workflows/main.yml)

# Programming Game
A small game that allows to set and practice programming tasks.

Build with:
* neutralino.js
* React.js
* Mantine
* Monaco-Editor/React
* Tabler-Icons-React

## How to develop

```
cd myapp-react
npm i
npm start
cd ..
neu run --frontend-lib-dev
```

## Roadmap
* [X] Create a GitHub actions workflow for automatic builds.
* [X] Create UI for programming and for program output.
* [X] Connect UI with Python interpreter.
  * Program execution button works.
  * Editor and output clear button works.
* [ ] Implement Game Logic.
  * The player is given 5 randomly selected programming tasks one after the other, which must be solved in a single attempt.
  * Button to start a game round works.
  * Button to reset a game works.
  * Input field for player name works.
  * Tasks, tests and template code can be defined by files.
* [ ] A List of player names that have completely solved a round can be displayed

## License

[MIT](LICENSE)
