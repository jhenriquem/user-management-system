import { useEffect, useState } from 'react';
import { FaApple } from 'react-icons/fa';

function SnakeGame() {
  const [snake, setSnake] = useState<number[][]>([[16, 16], [16, 17], [16, 18]]);
  const [direction, setDirection] = useState<string>('right');
  const [nextDirection, setNextDirection] = useState<string>('right');
  const [apple, setApple] = useState<number[]>([Math.floor(Math.random() * 32), Math.floor(Math.random() * 32)]);
  const [score, setScore] = useState<number>(0);
  const [gameover, setGameover] = useState<boolean>(false);

  const resetGame = () => {
    setSnake([[16, 16], [16, 17], [16, 18]]);
    setDirection('right');
    setNextDirection('right');
    setApple([Math.floor(Math.random() * 32), Math.floor(Math.random() * 32)]);
    setScore(0);
    setGameover(false);
  };

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = newSnake[0].slice();
    updateDirection();

    if (direction === 'up') head[1]--;
    if (direction === 'left') head[0]--;
    if (direction === 'down') head[1]++;
    if (direction === 'right') head[0]++;

    newSnake.unshift(head);
    newSnake.pop();

    setSnake(newSnake);

    if (hitsWall(head) || hitsBody(head, newSnake)) {
      setGameover(true);
    }

    if (head[0] === apple[0] && head[1] === apple[1]) {
      eatFood(newSnake);
    }
  };

  const updateDirection = () => {
    setDirection(nextDirection);
  };

  const hitsWall = (head: number[]) => {
    return head[0] < 0 || head[0] >= 32 || head[1] < 0 || head[1] >= 32;
  };

  const hitsBody = (head: number[], body: number[][]) => {
    return body.some(segment => segment[0] === head[0] && segment[1] === head[1]);
  };

  const eatFood = (newSnake: number[][]) => {
    const tail = newSnake[newSnake.length - 1];
    newSnake.push(tail);
    setSnake(newSnake);
    setApple([Math.floor(Math.random() * 32), Math.floor(Math.random() * 32)]);
    setScore(score + 1);
  };

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      const directions: { [key: string]: string } = {
        ArrowUp: 'up',
        ArrowDown: 'down',
        ArrowLeft: 'left',
        ArrowRight: 'right',
      };
      if (directions[e.key]) {
        setNextDirection(directions[e.key]);
      }
    };

    document.addEventListener('keyup', handleKeyUp);

    const board = document.querySelector("#game-board")
    board?.addEventListener("click", () => {
      const gameInterval = setInterval(() => {
        if (!gameover) {
          moveSnake();
        } else {
          clearInterval(gameInterval);
          alert('Gameover!!!');
          resetGame();
        }
      }, 200);

      return () => clearInterval(gameInterval);
    })
  }, [direction, nextDirection, gameover]);

  return (
    <main id='game-board'
      className=
      "flex flex-col items-center justify-between w-11/12 h-auto max-w-xl max-h-xl bg-gray-800 rounded-lg">
      <div className="flex items-center justify-center w-full h-10 bg-gray-700 rounded-t-lg">
        <span className="text-xl text-gray-100 flex items-center">
          <span>< FaApple /></span>
          <span> : {score} </span>
        </span>
      </div>
      <div className="grid w-full h-[40rem] grid-cols-32 grid-rows-32">
        {snake.map(([x, y], index) => (
          <div key={index} className="bg-blue-500" style={{ gridColumn: x, gridRow: y }}></div>
        ))}
        <div className="flex items-center justify-center text-red-500" style={{ gridColumn: apple[0] + 1, gridRow: apple[1] + 1 }}>
          <i className="fa-solid fa-apple-whole"></i>
        </div>
      </div>
    </main>
  );
}


export default SnakeGame
