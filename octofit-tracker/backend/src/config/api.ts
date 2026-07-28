const PORT = "8000";
const CODESPACE_NAME = process.env.CODESPACE_NAME;

export const apiUrl = CODESPACE_NAME
  ? `https://${CODESPACE_NAME}-${PORT}.app.github.dev`
  : `http://localhost:${PORT}`;
