import "./styles.css";
import Game from "./Game";

export default function App() {
  const bowling = new Game();

  // spare: user1 (Requirements)

  //frame 1: caso 1
  bowling.roll(2);
  bowling.roll(7);
  console.log("frame 1", bowling.score()); // 9

  // frame 2: Strike, caso 2
  bowling.roll(10);
  console.log("frame 2", bowling.score()); // score 10+9=19

  // frame 3: caso 3
  bowling.roll(1);
  bowling.roll(7);
  console.log("frame 3", bowling.score()); //19+8+8=35

  // frame 4: Spare, caso 4
  bowling.roll(1);
  bowling.roll(9);
  console.log("frame 4", bowling.score()); // 45

  // frame 5: caso 5
  bowling.roll(1);
  bowling.roll(5);
  console.log("frame 5", bowling.score()); // 52

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
