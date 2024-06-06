import React from "react";
import "../css/Errorpage.css";

const Errorpage = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">WATCH_DOG VIOLATION ⌢</h1>
      <p className="error-message">We just ran into a problem.</p>
      <p className="error-code">Error Code: (0 x EA1LPR1Z6ES009)</p>
      <p className="error-message">
        Probably you did something you were not meant to. Now we have to go
        through a long maintenance process to make it up and running.
      </p>
      <p className="error-message">Take a look at the StackTrace below:</p>
      <pre className="error-stacktrace">
        GLOBAL _START
        <br />
        SECTION .TEXT
        <br />
        _START:
        <br />
        MOV RAX, 1 ; WRITE(
        <br />
        MOV RDI, 1 ; STDOUT_FILENO
        <br />
        MOV RSI, MSG ; "0 X EA1LPR1Z6ES009"
        <br />
        MOV RDX, MSGLEN ; SIZEOF("0 X EA1LPR1Z6ES009")
        <br />
        MOV RAX, 60(
        <br />
        MOV RDI, 0
        <br />
        SYSCALL
        <br />
        EXIT_STATUS, -092716653543 X 7
      </pre>
    </div>
  );
};

export default Errorpage;
