/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import "../css/terminal.css";
import HackerSimulator from "./HackSimulator";
import Resume from "./Resume";
import { useNavigate } from "react-router-dom";
import { playSound, Typewriter } from "./Constants";

function Terminal() {
  const [Text1, setText1] = useState("");
  const [Text2, setText2] = useState("");
  const [Text3, setText3] = useState("");
  const [Text4, setText4] = useState("");
  const [prevusedCommand, setprevusedCommand] = useState([]);
  const cursor = "▮";
  let previousCommand = "";
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (
      event.key.length === 1 ||
      event.key === "Backspace" ||
      event.key === "Tab"
    ) {
      playSound("keyPress");
    }
  };

  function SkipIntro() {
    let id = setTimeout(() => {}, 0);
    while (id--) {
      clearTimeout(id);
    }

    id = setInterval(() => {}, 0);
    while (id--) {
      clearInterval(id);
    }
    setText1("ssh guest@aishwaryamensinkai.r");
    setText3("Access Granted!");
  }

  useEffect(() => {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        if (!Text3.includes("Access")) {
          let id = setTimeout(() => {}, 0);
          while (id--) {
            clearTimeout(id);
          }

          id = setInterval(() => {}, 0);
          while (id--) {
            clearInterval(id);
          }
          setText1("ssh guest@aishwaryamensinkai.r");
          setText2("guest@aishwaryamensinkai.r's password:");
          setText3("Access Granted!");
        }
        const CommandArea = document.getElementById("command");
        if (CommandArea) {
          previousCommand = CommandArea.value;
          setprevusedCommand((prevArray) => [
            ...prevArray,
            "guest@aishwaryamensinkai.r:~$ " + previousCommand,
          ]);
          if (previousCommand === "github") {
            window.open("https://github.com/aishwaryamensinkai", "_blank");
          } else if (previousCommand === "source code") {
            window.open(
              "https://github.com/aishwaryamensinkai/Terminal-Portfolio",
              "_blank"
            );
          } else if (previousCommand === "GUI") {
            window.open(
              "https://aishwaryamensinkai.github.io/Portfolio/",
              "_blank"
            );
          } else if (previousCommand === "sudo rm -rf") {
            navigate("/error", { replace: true });
          } else if (previousCommand === "exit") {
            window.close();
          }
          CommandArea.value = "";
        }
      } else if (event.key === "Tab") {
        event.preventDefault();
        const CommandArea = document.getElementById("command");
        const availableCommands = [
          "whoami",
          "banner",
          "clear",
          "date",
          "GUI",
          "help",
          "history",
          "project",
          "contact",
          "theme",
          "pwd",
          "hacksim",
          "aborthack",
          // "resume",
          "source code",
          "github",
          "sudo rm -rf",
          "exit",
        ];
        let currentCommand = CommandArea.value.trim();
        let matches = availableCommands.filter((command) =>
          command.startsWith(currentCommand)
        );

        if (matches.length === 1) {
          CommandArea.value = matches[0];
        } else if (matches.length > 1) {
          let commonPrefix = matches.reduce((acc, val, index) => {
            if (index === 0) return val;
            let i = 0;
            while (i < acc.length && acc[i] === val[i]) i++;
            return acc.slice(0, i);
          }, "");
          CommandArea.value = commonPrefix;
        }

        CommandArea.selectionStart = CommandArea.selectionEnd =
          CommandArea.value.length;
      } else if (event.key === "l" && event.ctrlKey) {
        playSound("clearSound");
        setprevusedCommand([]);
      }
    });

    Typewriter("ssh guest@aishwaryamensinkai.r", 100, setText1);

    setTimeout(() => {
      setText2("guest@aishwaryamensinkai.r's password:▮");
    }, 3000);

    setTimeout(() => {
      Typewriter("", 100, setText4, true, 2500);
    }, 4300);

    setTimeout(() => {
      setText3("Connecting to guest@aishwaryamensinkai.r...");
    }, 4300);

    setTimeout(() => {
      setText2("guest@aishwaryamensinkai.r's password:");
      setText3("> Access granted.");
    }, 7300);

    document.addEventListener("keydown", handleKeyPress);
    document.body.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = () => {
    const commandInput = document.getElementById("command");
    if (commandInput) {
      commandInput.focus();
    }
  };

  const commandActions = {
    whoami: () => {
      playSound("textPrint");
      return (
        <div style={{ textAlign: "justify" }}>
          <p>
            I am <b>Aishwarya Girish Mensinkai </b>, a Computer Science graduate
            with a strong foundation in Software Development Engineering (SDE)
            and front-end development. My passion lies in building highly
            performant applications that address real-world challenges and
            provide users with exceptional experiences. Currently, I specialize
            in the MERN stack, leveraging my skills in both backend and frontend
            technologies to create robust and scalable solutions.
          </p>
          <p>
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            Whether working as part of a team or tackling projects
            independently, I thrive in collaborative environments and am always
            eager to solve complex problems. My curiosity drives me to
            continuously learn and adapt, ensuring that I stay at the forefront
            of technological advancements. I am committed to delivering
            high-quality code and innovative solutions that make a meaningful
            impact.
          </p>
        </div>
      );
    },
    banner: () => {
      playSound("textPrint");
      return (
        <pre>
          {`
  _______                  _             _ 
 |__   __|                (_)           | |
    | | ___ _ __ _ __ ___  _ _ __   __ _| |
    | |/ _ \\ '__| '_ \` _ \\| | '_ \\ / _\` | |
    | |  __/ |  | | | | | | | | | | (_| | |
    |_|\\___|_|  |_| |_| |_|_|_| |_|\\__,_|_|
                                                
    `}
        </pre>
      );
    },
    clear: () => {
      playSound("clearSound");
      setprevusedCommand([]);
      return null;
    },
    date: () => {
      playSound("textPrint");
      return new Date().toString();
    },
    GUI: () => {
      playSound("textPrint");
      return (
        <div>
          To view the Graphical portfolio website
          <a
            href="https://aishwaryamensinkai.github.io/Portfolio/"
            target="_blank"
            rel="noreferrer"
          >
            click here!
          </a>
        </div>
      );
    },
    help: () => {
      playSound("textPrint");
      return (
        <div>
          <span style={{ color: "skyblue" }}>Available Commands:</span>
          <br />
          <span style={{ color: "#c9c9c9" }}>General: </span>
          {[
            '<span class="command">ls &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        - </span>     <span class="helpdes">Display all the commands available</span>',
            '<span class="command">whoami &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        - </span>     <span class="helpdes">Display information about me</span>',
            '<span class="command">banner &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - </span> <span class="helpdes">Display the header</span>',
            '<span class="command">clear &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - </span>  <span class="helpdes">Clear the terminal screen</span>',
            '<span class="command">date  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         - </span> <span class="helpdes">Display the current date</span>',
            '<span class="command">GUI  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          - </span>    <span class="helpdes">Open the Portfolio Website</span>',
            // '<span class="command">resume &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - </span> <span class="helpdes">Display my resume</span>',
            '<span class="command">help  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         - </span>     <span class="helpdes">Show available commands</span>',
            '<span class="command">history &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      - </span> <span class="helpdes">View command history</span>',
            '<span class="command">project &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      - </span>    <span class="helpdes">View coding projects</span>',
            '<span class="command">contact &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - </span>  <span class="helpdes">Display contact form</span>',
            '<span class="command">pwd  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          - </span>    <span class="helpdes">Print present working directory</span>',
            '<span class="command">github  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          - </span>    <span class="helpdes">Github profile</span>',
            '<span class="command">hacksim    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      - </span>    <span class="helpdes">Enter the hacking simulator</span>',
            '<span class="command">aborthack    &nbsp;&nbsp;&nbsp;&nbsp;      - </span>    <span class="helpdes">Abort ongoing hack in the simulator</span>',
            '<span class="command">source code    &nbsp;&nbsp;      - </span>    <span class="helpdes">Link to the source code of this project</span>',
            '<span class="command">exit    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      - </span>    <span class="helpdes">Close the current web page</span>',
            "<br />",
            "[TAB]              Trigger completion",
            "[Ctrl+l]           Clear terminal",
            "<br/><br/>",
            "Never do a 'sudo rm -rf' ,because it will mess our entire internal system!",
          ].map((command, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: command }} />
          ))}
        </div>
      );
    },
    history: () => {
      playSound("textPrint");
      return prevusedCommand.map((cmd, index) => (
        <li key={index}>{cmd.replace("guest@aishwaryamensinkai.r:~$ ", "")}</li>
      ));
    },
    project: () => {
      playSound("textPrint");
      return (
        <div>
          <label htmlFor="mcq">Select another project to view:</label>
          <div className="mcq-wrapper">
            <ul id="mcq" className="mcq">
              <li className="mcq-option" tabIndex="0" data-value="regex">
                <a
                  href="https://github.com/aishwaryamensinkai/Portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  Personal Portfolio ↗
                </a>
              </li>
              <li className="mcq-option" tabIndex="1" data-value="luap">
                <a
                  href="https://github.com/aishwaryamensinkai/Data-Mining-and-Analysis"
                  target="_blank"
                  rel="noreferrer"
                >
                  Data Mining and Analysis ↗
                </a>
              </li>
              <li className="mcq-option" tabIndex="2" data-value="apple">
                <a
                  href="https://github.com/aishwaryamensinkai/TradeMaster"
                  target="_blank"
                  rel="noreferrer"
                >
                  Trade Master ↗
                </a>
              </li>
              <li className="mcq-option" tabIndex="3" data-value="crypto">
                <a
                  href="https://github.com/aishwaryamensinkai/OnlineShopping-frontend"
                  target="_blank"
                  rel="noreferrer"
                >
                  Online Shopping ↗
                </a>
              </li>
              <li className="mcq-option" tabIndex="4" data-value="sampserver">
                <a
                  href="https://github.com/aishwaryamensinkai/Basic-Portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  Basic Portfolio Demo Project ↗
                </a>
              </li>
              <li className="mcq-option" tabIndex="5" data-value="passgen">
                <a
                  href="https://github.com/aishwaryamensinkai/Notes-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  Notes App ↗
                </a>
              </li>
              <li className="mcq-option" tabIndex="5" data-value="passgen">
                <a
                  href="https://github.com/aishwaryamensinkai/Expense-Tracker"
                  target="_blank"
                  rel="noreferrer"
                >
                  Expense-Tracker ↗
                </a>
              </li>
              <li className="mcq-option" tabIndex="5" data-value="passgen">
                <a
                  href="https://github.com/aishwaryamensinkai/Weather-Application"
                  target="_blank"
                  rel="noreferrer"
                >
                  Weather-Application ↗
                </a>
              </li>
              <li className="mcq-option" tabIndex="5" data-value="passgen">
                <a
                  href="https://github.com/aishwaryamensinkai/FlickrImages"
                  target="_blank"
                  rel="noreferrer"
                >
                  Flickr Food Images ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      );
    },
    contact: () => {
      playSound("textPrint");
      navigate("/contact");
    },
    theme: () => {
      playSound("textPrint");
      return "Theme configurations are not implemented yet.";
    },
    pwd: () => {
      playSound("textPrint");
      return "/home/aishwaryamensinkai";
    },
    hacksim: () => {
      playSound("textPrint");
      return (
        <div>
          <HackerSimulator />
          <br />
          To abort, use aborthack
        </div>
      );
    },
    aborthack: () => {
      playSound("textPrint");
      return (
        <div>
          <li key="aborthack">
            guest@aishwaryamensinkai.r:~$ ERROR - Script terminated by the user
          </li>
        </div>
      );
    },
    // resume: () => {
    //   playSound("textPrint");
    //   return <Resume />;
    // },
    ls: () => {
      playSound("textPrint");
      return commandActions.help();
    },
    "sudo rm -rf": () => {
      playSound("textPrint");
      navigate("/error", { replace: true });
      return "Simulating sudo rm -rf command...";
    },
    "source code": () => {
      playSound("textPrint");
      return (
        <div>
          To view the source code of this project on GitHub
          <a
            href="https://github.com/aishwaryamensinkai/Terminal-Portfolio"
            target="_blank"
            rel="noreferrer"
          >
            click here!
          </a>
        </div>
      );
    },
    github: () => {
      playSound("textPrint");
      return (
        <div>
          To view the my Github Profile
          <a
            href="https://github.com/aishwaryamensinkai"
            target="_blank"
            rel="noreferrer"
          >
            click here!
          </a>
        </div>
      );
    },
    exit: () => {
      playSound("textPrint");
      window.location.href = "about:blank";
    },
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleCommand = (command) => {
    if (commandActions[command]) {
      const result = commandActions[command]();
      setTimeout(scrollToBottom, 0); // Defer execution of scrollToBottom
      return result;
    } else {
      const error = errorFunctions(command);
      setTimeout(scrollToBottom, 0); // Defer execution of scrollToBottom
      return error;
    }
  };

  const errorFunctions = (val) => {
    playSound("errorA");
    return `bash: ${val}: command not found`;
  };

  return (
    <div className="terminal">
      <div className="console">
        <span className="userPrefix">
          user@localhost:~$
          <span style={{ color: "white", marginLeft: "8px" }}>
            {Text1}
            {Text1.length === 20 ? "" : cursor}
          </span>
        </span>

        {Text3.includes("Access") ? (
          ""
        ) : (
          <span id="skipButton" onClick={SkipIntro}>
            Press Enter or Click Here to Skip
          </span>
        )}
        {Text2}
        <span>
          {" "}
          {Text4}{" "}
          <span style={{ color: Text3.includes("Access") ? "yellow" : "" }}>
            {Text3}
          </span>
        </span>
        {Text3.includes("Access") ? (
          <pre className="precss">
            {`

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

              `}
          </pre>
        ) : null}

        {Text3.includes("Access") ? (
          <span>
            Welcome to a realm of infinite potential!
            <br />
            You've discovered a virtual terminal experience, meticulously
            designed with passion and vision.
            <br />
            Initially envisioned as a portfolio showcase, this project remains a
            work in progress, inviting you to explore and engage with its
            evolving features.
          </span>
        ) : (
          ""
        )}
        <br />
        {Text3.includes("Access") ? (
          <span>
            <span style={{ color: "skyblue" }}>
              Wondering what you can explore? Simply type 'help' to reveal a
              wealth of available commands.
            </span>
          </span>
        ) : (
          ""
        )}
        <br></br>
        {Text3.includes("Access") ? (
          <span>Thank you for dropping by, adventurer! ◝(ᵔᵕᵔ)◜</span>
        ) : (
          ""
        )}
        <br></br>
        <ul className="previousCommands" id="console23">
          {prevusedCommand.map((item, index) => {
            const command = item.replace("guest@aishwaryamensinkai.r:~$ ", "");
            if (commandActions[command]) {
              return (
                <li key={index}>
                  {item}
                  <br />
                  <br />
                  {handleCommand(command)}
                  <br />
                  <br />
                </li>
              );
            } else if (command.match(new RegExp(`\\b${"clear"}\\b`, "g"))) {
              setprevusedCommand([]);
              return null;
            } else {
              return (
                <li key={index}>
                  {item}
                  <br />
                  <br />
                  bash: {command}: command not found
                  <br />
                  <br />
                </li>
              );
            }
          })}
        </ul>
        {Text3.includes("Access") ? (
          <span className="commands">
            <span className="userPrefix">guest@aishwaryamensinkai.r:~$</span>{" "}
            <input type="text" id="command" name="command" autoFocus></input>
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Terminal;
