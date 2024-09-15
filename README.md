# Memory Game

This is a simple Memory Game built using Nextjs, Typescript and styled with Tailwind CSS. The objective of the game is to match all pairs of cards within a limited number of turns.

## Features

- **Dynamic Card Generation**: The cards are randomly shuffled each time the game starts.
- **Turn-Based Gameplay**: The player has a limited number of turns (16) to match all the pairs.
- **Game Over Conditions**: The game ends when either all pairs are matched (win) or the player runs out of turns (lose).
- **Responsive Design**: The game layout is responsive and adapts to various screen sizes.

## Technologies Used

- **Nextjs**: For building the user interface and managing the game state.
- **Tailwind CSS**: For styling the application with utility-first CSS classes.

## How to Play

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/hafsasiddiqa/memory-game.git
    ```
2. Navigate to the project directory:
    ```bash
    cd memory-game
    ```
3. Install the necessary dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```
5. Open your browser and navigate to `http://localhost:3000` to play the game.

## Game Rules

- **Objective**: Match all pairs of cards within 16 turns.
- **How to Play**:
  - Click on a card to flip it over.
  - Try to find the matching card by clicking on another card.
  - If the cards match, they remain flipped. If not, they flip back after a short delay.
  - The game ends when all cards are matched, or when you run out of turns.

## Project Structure

- **`components/MemoryGame.tsx`**: The main game component, containing all the game logic and UI elements.
- **`styles/globals.css`**: Global styles, including Tailwind's base styles.
- **`public/`**: Static assets such as images, icons, etc.
- **`pages/index.tsx`**: The main page that renders the Memory Game component.

## Customization

- **Modify Game Difficulty**: To change the difficulty (number of turns or cards), you can edit the logic in the `MemoryGame.tsx` component.
- **Add New Symbols**: You can easily add or replace the card symbols by modifying the `CardSymbol` type and the `symbols` array in the `generateCards` function.

## Future Improvements

- **Timer**: Add a timer to challenge the player further.
- **Multiple Levels**: Introduce multiple difficulty levels with varying numbers of cards and turns.
- **Scoring System**: Implement a scoring system based on time taken and turns used.


## Acknowledgments

- Thanks to the Nextjs, Typescript and Tailwind CSS communities for their excellent documentation and resources.

---

Enjoying play Memory Game 😊. Feel free to fork and contribute to this project!
