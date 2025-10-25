import fs from "fs";

export async function handler(event) {
  const { adminPass, username } = JSON.parse(event.body);

  if (adminPass !== "ADVIKakulaIESLAESTRELLA") {
    return { statusCode: 403, body: "Contraseña admin incorrecta" };
  }

  const users = JSON.parse(fs.readFileSync("users.json", "utf8"));

  if (!users[username]) {
    return { statusCode: 404, body: "Usuario no encontrado" };
  }

  delete users[username];
  fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

  return { statusCode: 200, body: `Usuario ${username} eliminado.` };
}
