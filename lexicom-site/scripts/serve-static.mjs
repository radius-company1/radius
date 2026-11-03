// Local launch verification only: no SPA fallback, real HTTP 404.
import {createServer} from 'node:http';
import {readFileSync,existsSync,statSync} from 'node:fs';
import {resolve,extname} from 'node:path';
const root=resolve('dist');
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.woff2':'font/woff2','.xml':'application/xml','.txt':'text/plain','.mp4':'video/mp4'};
createServer((req,res)=>{
 let path;try{path=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400).end();return}
 let file=resolve(root,'.'+path);
 if(!file.startsWith(root+'/')&&file!==root){res.writeHead(403).end();return}
 if(existsSync(file)&&statSync(file).isDirectory()){
  if(!path.endsWith('/')){res.writeHead(301,{Location:path+'/'+new URL(req.url,'http://localhost').search}).end();return}
  file=resolve(file,'index.html');
 }
 if(path.endsWith('/index.html') && existsSync(file)){res.writeHead(301,{Location:path.slice(0,-10)+new URL(req.url,'http://localhost').search}).end();return}
 let status=200;if(!existsSync(file)||!statSync(file).isFile()){file=resolve(root,'404.html');status=404}
 res.writeHead(status,{'Content-Type':mime[extname(file)]||'application/octet-stream'});res.end(readFileSync(file));
}).listen(Number(process.env.PORT || 5240),'127.0.0.1',()=>console.log('Launch verification ready'));
