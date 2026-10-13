/* Installation and complete app-shell readiness; no accounts or external services. */
(()=>{
 'use strict';
 const $=id=>document.getElementById(id),install=$('install-app'),guide=$('install-guide'),status=$('offline-status'),update=$('update-app'),help=$('install-dialog');
 let prompt=null,registration=null,reloading=false,updateRequested=false,installed=false;
 const appModes=['standalone','minimal-ui','fullscreen','window-controls-overlay'].map(mode=>matchMedia(`(display-mode: ${mode})`));
 const standalone=()=>appModes.some(mode=>mode.matches)||navigator.standalone===true;
 function refreshInstall(){install.hidden=standalone()||installed;guide.hidden=standalone()||installed;}
 function offlineState(ready){status.hidden=false;status.dataset.ready=String(ready);status.textContent=ready?'Available offline':navigator.onLine?'Preparing offline access…':'Offline access is not ready';}
 window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();prompt=event;refreshInstall();});
 window.addEventListener('appinstalled',()=>{installed=true;prompt=null;refreshInstall();help.close();});
 appModes.forEach(mode=>mode.addEventListener('change',refreshInstall));
 window.addEventListener('pageshow',refreshInstall);
 function showGuide(){help.showModal();$('close-install').focus();}
 install.onclick=async()=>{
  if(!prompt){showGuide();return;}
  const request=prompt;prompt=null;refreshInstall();
  try{await request.prompt();await request.userChoice;}catch{showGuide();}
 };
 guide.onclick=()=>prompt?install.click():showGuide();
 $('close-install').onclick=()=>help.close();
 help.addEventListener('click',event=>{if(event.target===help){const r=help.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)help.close();}});
 refreshInstall();
 if(!('serviceWorker' in navigator)||!isSecureContext||location.protocol==='file:'){
  status.hidden=true;
  if(location.protocol==='file:')$('install-guidance').textContent='Open the published website in Chrome to install the app. Then use the Chrome menu → Install app or Add to Home screen.';
  return;
 }
 offlineState(false);
 navigator.serviceWorker.addEventListener('message',event=>{
  if(event.data?.type==='OFFLINE_READY')offlineState(true);
  if(event.data?.type==='OFFLINE_MISSING'){offlineState(false);status.textContent='Reconnect to restore offline access';}
 });
 navigator.serviceWorker.addEventListener('controllerchange',()=>{
  checkUpdate();
  navigator.serviceWorker.controller?.postMessage({type:'CHECK_OFFLINE'});
  if(updateRequested&&!reloading){reloading=true;location.reload();}
 });
 update.onclick=()=>{if(registration?.waiting){updateRequested=true;update.disabled=true;update.textContent='Updating…';registration.waiting.postMessage({type:'SKIP_WAITING'});}};
 function checkUpdate(){const waiting=Boolean(registration?.waiting&&navigator.serviceWorker.controller);update.hidden=!waiting;if(waiting){update.disabled=false;update.textContent='Update app';}}
 navigator.serviceWorker.register(new URL('sw.js',document.baseURI),{scope:new URL('./',document.baseURI).href,updateViaCache:'none'}).then(reg=>{
  registration=reg;checkUpdate();
  reg.addEventListener('updatefound',()=>{const worker=reg.installing;worker?.addEventListener('statechange',()=>{if(['installed','activated'].includes(worker.state))checkUpdate();if(worker.state==='redundant'&&!navigator.serviceWorker.controller){status.textContent='Offline setup failed. Reconnect and reload.';}});});
  return navigator.serviceWorker.ready;
 }).then(()=>navigator.serviceWorker.controller?.postMessage({type:'REPAIR_OFFLINE'})).catch(()=>{
  status.textContent=navigator.onLine?'Offline setup unavailable. Reload to retry.':'Reconnect once to enable offline access';
 });
 window.addEventListener('online',()=>{if(status.dataset.ready!=='true')offlineState(false);registration?.update().catch(()=>{});navigator.serviceWorker.controller?.postMessage({type:'REPAIR_OFFLINE'});});
 window.addEventListener('offline',()=>{if(status.dataset.ready!=='true')offlineState(false);});
})();
