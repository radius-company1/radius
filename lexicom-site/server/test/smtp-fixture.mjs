import { createServer } from 'node:net';

/** Loopback-only SMTP receiver; messages stay in memory, never forwarded. */
export async function smtpFixture() {
  const messages = [], sockets = new Set();
  const server = createServer(socket => {
    sockets.add(socket); socket.on('close', () => sockets.delete(socket));
    socket.write('220 localhost test SMTP\r\n');
    let buffer = '', data = false, message = '', recipients = [];
    socket.on('data', chunk => {
      buffer += chunk.toString();
      let end;
      while ((end = buffer.indexOf('\r\n')) !== -1) {
        const line = buffer.slice(0, end); buffer = buffer.slice(end + 2);
        if (data) {
          if (line === '.') { messages.push({ recipients, message }); data = false; socket.write('250 accepted locally\r\n'); }
          else message += line + '\r\n';
        } else if (/^EHLO|^HELO/.test(line)) socket.write('250-localhost\r\n250 SIZE 20000\r\n');
        else if (line.startsWith('MAIL FROM')) { recipients = []; message = ''; socket.write('250 OK\r\n'); }
        else if (line.startsWith('RCPT TO')) { recipients.push(line); socket.write('250 OK\r\n'); }
        else if (line === 'DATA') { data = true; socket.write('354 End with dot\r\n'); }
        else if (line === 'QUIT') socket.end('221 Bye\r\n');
        else socket.write('250 OK\r\n');
      }
    });
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  return { port: server.address().port, messages, close: () => new Promise(resolve => { for (const socket of sockets) socket.destroy(); server.close(resolve); }) };
}
