import fs from "fs";

export async function handler(event) {
  const { username, password } = JSON.parse(event.body);
  const users = JSON.parse(fs.readFileSync("users.json", "utf8"));

  if (users[username] && users[username] === password) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({ success: false, message: "Credenciales inválidas" })
    };
  }
}
