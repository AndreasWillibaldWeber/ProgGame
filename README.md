[![spec](https://github.com/AndreasWillibaldWeber/ProgGame/actions/workflows/main.yml/badge.svg)](https://github.com/AndreasWillibaldWeber/ProgGame/actions/workflows/main.yml)

# Programming Game
A small game that allows to set and practice programming tasks.

![ProgGame on Linux](media/Screenshot_Full_Screen_Dark.png)

Build with:
* neutralino.js
* React.js
* Mantine
* Monaco-Editor/React
* Tabler-Icons-React

## How to setup
```
sudo npm install -g @neutralinojs/neu
neu create ProgApp --template AndreasWillibaldWeber/ProgGame
```

## How to develop
```
cd react-src
npm i
npm start
cd ..
neu run --frontend-lib-dev
```

## How to build
```
cd react-src
npm i
npm run build
cd ..
neu build --release
```

## Roadmap to v1.0.0
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
