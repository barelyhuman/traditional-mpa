/** @jsx h */
import { h, Fragment } from "preact";

export const BaseLayout = ({ children }) => {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
        />

        <title>Ideas</title>
      </head>
      <body>
        <header
          style={{
            height: "100px",
          }}
        >
          <nav
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <a href="/ideas"> Home </a>
            <a href="/ideas/new"> + Add New </a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
};
