import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { directionModes, normalizePath } from '../theme/directions';
const industryModes = directionModes.filter(mode => mode.id !== 'overview');
export function DesignDirectionNav() {
  const { pathname } = useLocation();
  const activeDirection = industryModes.find(mode => mode.href === normalizePath(pathname));
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {setOpen(false);},[pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent) => {if (!root.current?.contains(e.target as Node)) setOpen(false);};
    const key = (e: KeyboardEvent) => {if(e.key==='Escape'){setOpen(false);button.current?.focus();}};
    document.addEventListener('pointerdown',close);document.addEventListener('keydown',key);
    return ()=>{document.removeEventListener('pointerdown',close);document.removeEventListener('keydown',key);};
  },[open]);
  return <nav className={`design-directions container ${open?'is-open':''}`} aria-label="Направления" ref={root}>
    <button ref={button} className="design-directions__toggle" type="button" aria-expanded={open} aria-controls="design-directions-list" onClick={()=>setOpen(v=>!v)}><span>Направления {activeDirection ? <span className="design-directions__current">/ {activeDirection.shortLabel}</span> : null}</span><span className="site-header__caret" aria-hidden="true" /></button>
    <div className="design-directions__links" id="design-directions-list">{industryModes.map(m=><Link key={m.id} to={m.href} aria-current={activeDirection?.id===m.id?'page':undefined} onClick={()=>setOpen(false)}>{m.id==='utilities'?'Ресурсоснабжение':m.shortLabel}</Link>)}</div>
  </nav>;
}
