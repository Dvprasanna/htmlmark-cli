#!/usr/bin/env node 

// htmlmark-cli
// Adds numbered comment blocks to HTML

const fs = require("fs");

let input = "";

// Read from stdin
process.stdin.on("data", chunk => {
  input += chunk.toString();
});

process.stdin.on("end", () => {
  const output = numberHtmlBlocks(input);
  process.stdout.write(output);
});

function numberHtmlBlocks(html) {
  const blockTags = [
    "div",
    "section",
    "header",
    "footer",
    "main",
    "article",
    "nav"
  ];

  let stack = [];
  let counters = [];
  let result = "";

  const lines = html.split("\n");

  for (let line of lines) {
    const openMatch = line.match(/<\s*([a-zA-Z0-9-]+)/);
    const closeMatch = line.match(/<\/\s*([a-zA-Z0-9-]+)\s*>/);

    if (openMatch && blockTags.includes(openMatch[1])) {
      const depth = stack.length;
      counters[depth] = (counters[depth] || 0) + 1;
      counters = counters.slice(0, depth + 1);

      const number = counters.join(".");
      result += `<!-- ${number} -->\n`;
      stack.push(openMatch[1]);
    }

    result += line + "\n";

    if (closeMatch && stack[stack.length - 1] === closeMatch[1]) {
      stack.pop();
    }
  }

  return result;
}