const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Bonjour');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page non trouvée');
    }
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
