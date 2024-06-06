import { Howl } from "howler";
import keyPressSound from "../assets/keyPress.mp3";
import textPrintSound from "../assets/textPrint.mp3";
import errorSound from "../assets/error.mp3";
import clearSound from "../assets/clear.mp3";

export const keyPressAudio = new Howl({ src: [keyPressSound] });
export const textPrintAudio = new Howl({ src: [textPrintSound] });
export const errorAudio = new Howl({ src: [errorSound] });
export const clearAudio = new Howl({ src: [clearSound] });

export const playSound = (type) => {
  switch (type) {
    case "keyPress":
      keyPressAudio.play();
      break;
    case "textPrint":
      textPrintAudio.play();
      break;
    case "errorA":
      console.log("Attempting to play error sound");
      errorAudio.play();
      break;
    case "clearSound":
      clearAudio.play();
      break;
    default:
      break;
  }
};

export const Typewriter = (text, delay, func, Spinner, spinTime) => {
  const startTime = new Date();
  let Output = "";
  let index = 0;
  text = Spinner ? "⠋⠙⠹⠸⠼⠴⠦⠧⠇" : text;

  const intervalId = setInterval(() => {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        return clearInterval(intervalId);
      }
    });

    const endTime = new Date();
    if (index < text.length) {
      Output += text[index];
      index += 1;

      if (Spinner) {
        func(text[index]);
        setTimeout(function () {
          func(text[index + 1]);
        }, 700);
        if (index === 8) {
          if (endTime.getTime() - startTime.getTime() < spinTime) {
            index = 0;
          } else {
            clearInterval(intervalId);
          }
        }
      } else {
        func(Output);
      }
    } else {
      return clearInterval(intervalId);
    }
  }, delay);
};

export const startbanner = `

      /   /                                     /   /
      | O |                                     | O |
      |   |- - - - - - - - - - - - - - - - - - -|   |
      | O |                                     | O |
      |   |                                     |   |
      | O |           T E R M I N A L           | O |
      |   |                                     |   |
      | O |          P O R T F O L I O          | O |
      |   |                                     |   |
      | O |                                     | O |
      |   |                                     |   |
      | O |- - - - - - - - - - - - - - - - - - -| O |
      |   |                                     |   |

,---,---,---,---,---,---,---,---,---,---,---,---,---,-------,
|1/2| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0 | + | ' | <-    |
|---'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-----|
| ->| | Q | W | E | R | T | Y | U | I | O | P | ] | ^ |     |
|-----',--',--',--',--',--',--',--',--',--',--',--',--'|    |
| Caps | A | S | D | F | G | H | J | K | L | / | [ | * |    |
|----,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'---'----|
|    | < | Z | X | C | V | B | N | M | , | . | - |          |
|----'-,-',--'--,'---'---'---'---'---'---'-,-'---',--,------|
| ctrl |  | alt |                          |altgr |  | ctrl |
'------'  '-----'--------------------------'------'  '------'      

              `;
