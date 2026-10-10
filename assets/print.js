/* Snapshot the current reference into a full, normal-flow printable document. */
(()=>{
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function createHTML(element,title){
  const copy=element.cloneNode(true),selects=element.querySelectorAll('select');
  copy.querySelectorAll('select').forEach((select,i)=>{const p=document.createElement('p');p.textContent='Response curve input: '+selects[i].selectedOptions[0].textContent;select.replaceWith(p);});
  copy.querySelectorAll('button,input,.detail-actions,.calc-buttons,.slider-bounds,.live-label,.related-references,.reader-controls,.reader-headings').forEach(node=>node.remove());
  copy.querySelectorAll('details').forEach(node=>{if(node.classList.contains('sensitivity-details')&&!node.hasAttribute('open')){node.remove();return;}node.querySelector('summary')?.remove();node.replaceWith(...node.childNodes);});
  copy.querySelectorAll('[id]').forEach(node=>node.removeAttribute('id'));
  copy.querySelectorAll('a[href]').forEach(a=>a.href=new URL(a.getAttribute('href'),location.href).href);
  const css=new URL('assets/print.css',location.href).href;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} — printable reference</title><link rel="stylesheet" href="${esc(css)}"></head><body><div class="print-toolbar"><button onclick="window.print()">Print / Save PDF</button><span>Full reference with the current values. Select paper size and margins in the print dialog.</span></div><main class="print-sheet">${copy.innerHTML}<p class="reader-notice">Transportation Engineering Atlas</p></main></body></html>`;
 }
 let snapshot=null;
 function open(element,title){snapshot={html:createHTML(element,title),title};return !!window.open(new URL('print.html',location.href).href,'_blank');}
 window.ATLAS_PRINT={createHTML,open,getSnapshot:()=>snapshot};
})();
