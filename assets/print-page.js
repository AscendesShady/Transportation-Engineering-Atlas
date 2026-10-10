/* A regular same-origin page, without a dialog or blob/data navigation. */
(()=>{
 document.querySelector('#print-document').onclick=()=>window.print();
 let snapshot;try{snapshot=window.opener?.ATLAS_PRINT?.getSnapshot();}catch{}
 if(!snapshot||typeof snapshot.html!=='string')return;
 const parsed=new DOMParser().parseFromString(snapshot.html,'text/html'),sheet=parsed.querySelector('.print-sheet');if(!sheet)return;
 // Keep only inert document content even if a caller tampers with the snapshot.
 sheet.querySelectorAll('script,iframe,object,embed,link,style,form').forEach(n=>n.tagName==='FORM'?n.replaceWith(...n.childNodes):n.remove());
 sheet.querySelectorAll('*').forEach(n=>{for(const a of [...n.attributes])if(/^on/i.test(a.name))n.removeAttribute(a.name);if(n.hasAttribute('href')){try{if(!['http:','https:','file:'].includes(new URL(n.getAttribute('href'),location.href).protocol))n.removeAttribute('href');}catch{n.removeAttribute('href');}}});
 document.title=snapshot.title+' · printable reference';document.querySelector('#print-content').replaceWith(document.adoptNode(sheet));
})();
