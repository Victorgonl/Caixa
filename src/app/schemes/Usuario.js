const Usuario = `
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    senha TEXT NOT NULL,
    dataCriacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    administrador BOOLEAN DEFAULT 0
  );
`;

export default Usuario;
