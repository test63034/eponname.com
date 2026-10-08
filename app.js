"use strict";

/* ===== i18n (EN / FR / ES) ===== */
window.I18N = {
  current: "en",
  en: {
    welcome_title:"Welcome to Egbanname",welcome_sub:"One platform. Sixteen trades. Total control.",
    intro:"Egbanname is the all-in-one command center for managing multiple projects across every trade. Create work orders, capture timesheets, track progress in real time, and let your General Manager approve everything from a single secure queue. Built for contractors who run teams and demand accountability down to the last timestamp.",
    nav_home:"Home",nav_about:"About Us",nav_contact:"Contact",nav_login:"Login",nav_register:"Register",
    nav_dashboard:"Dashboard",nav_workorder:"Work Orders",nav_timesheet:"Timesheets",nav_queue:"GM Queue",
    nav_accounts:"Accounts",nav_tools:"Tools & Resources",nav_tickets:"Tickets & Travel",nav_audit:"Audit Log",nav_news:"News",
    about_title:"About Us",
    about_text:"Founded on the belief that great construction runs on trust and transparency, Egbanname connects sixteen specialized trades under one roof. Every contractor becomes an administrator of their own crew, every employee logs their hours, and every purchase request flows to a single approval point. We are not just software — we are the digital backbone of teams who build, wire, plumb, tile, farm, drive, guard, weld, and power the world around us.",
    contact_title:"Tech Support & Contact",admin_name:"Admin: Adam Jesus",email:"info@egbanname.com",phone:"336-123-5678",
    login_heading:"Secure Login",username:"Username",password:"Password",select_contractor:"Select your contract name",
    register_heading:"Create Your Credential",first_name:"First Name",last_name:"Last Name",address:"Address",
    street:"Street",city:"City",state:"State",zip:"Zip Code",telephone:"Telephone",email_address:"Email Address",
    create_account:"Create Account",submit:"Submit",approve:"Approve",reject:"Reject",
    status_pending:"Pending GM Approval",status_approved:"Approved",status_rejected:"Rejected",status_pending_approval:"Awaiting GM Audit",
    gm_only_notice:"Only the General Manager can approve requests."
  },
  fr: {
    welcome_title:"Bienvenue chez Egbanname",welcome_sub:"Une plateforme. Seize métiers. Contrôle total.",
    intro:"Egbanname est le centre de commandement tout-en-un pour gérer plusieurs projets dans tous les corps de métier. Créez des ordres de travail, saisissez des feuilles de temps, suivez l'avancement en temps réel et laissez votre Directeur Général tout approuver depuis une seule file sécurisée.",
    nav_home:"Accueil",nav_about:"À propos",nav_contact:"Contact",nav_login:"Connexion",nav_register:"Inscription",
    nav_dashboard:"Tableau de bord",nav_workorder:"Ordres de travail",nav_timesheet:"Feuilles de temps",nav_queue:"File DG",
    nav_accounts:"Comptes",nav_tools:"Outils et Ressources",nav_tickets:"Billets et Voyages",nav_audit:"Journal d'audit",nav_news:"Actualités",
    about_title:"À propos de nous",
    about_text:"Fondée sur la conviction que la grande construction repose sur la confiance et la transparence, Egbanname réunit seize métiers spécialisés sous un même toit. Chaque entrepreneur devient administrateur de sa propre équipe, chaque employé consigne ses heures, et chaque demande d'achat converge vers un seul point d'approbation.",
    contact_title:"Support technique et Contact",admin_name:"Admin : Adam Jesus",email:"info@egbanname.com",phone:"336-123-5678",
    login_heading:"Connexion sécurisée",username:"Nom d'utilisateur",password:"Mot de passe",select_contractor:"Sélectionnez votre nom de contrat",
    register_heading:"Créez votre identifiant",first_name:"Prénom",last_name:"Nom",address:"Adresse",street:"Rue",city:"Ville",state:"État",zip:"Code postal",telephone:"Téléphone",email_address:"Adresse e-mail",
    create_account:"Créer un compte",submit:"Soumettre",approve:"Approuver",reject:"Rejeter",
    status_pending:"En attente d'approbation du DG",status_approved:"Approuvé",status_rejected:"Rejeté",status_pending_approval:"En attente d'audit DG",
    gm_only_notice:"Seul le Directeur Général peut approuver les demandes."
  },
  es: {
    welcome_title:"Bienvenido a Egbanname",welcome_sub:"Una plataforma. Dieciséis oficios. Control total.",
    intro:"Egbanname es el centro de mando todo en uno para gestionar múltiples proyectos en todos los oficios. Cree órdenes de trabajo, registre hojas de horas, siga el progreso en tiempo real y deje que su Gerente General apruebe todo desde una única cola segura.",
    nav_home:"Inicio",nav_about:"Nosotros",nav_contact:"Contacto",nav_login:"Iniciar sesión",nav_register:"Registrarse",
    nav_dashboard:"Panel",nav_workorder:"Órdenes de trabajo",nav_timesheet:"Hojas de horas",nav_queue:"Cola del GG",
    nav_accounts:"Cuentas",nav_tools:"Herramientas y Recursos",nav_tickets:"Boletos y Viajes",nav_audit:"Registro de auditoría",nav_news:"Noticias",
    about_title:"Sobre nosotros",
    about_text:"Fundada sobre la creencia que la gran construcción se basa en la confianza y la transparencia, Egbanname reúne dieciséis oficios especializados bajo un mismo techo. Cada contratista se convierte en administrador de su propio equipo, cada empleado registra sus horas y cada solicitud de compra fluye hacia un único punto de aprobación.",
    contact_title:"Soporte técnico y Contacto",admin_name:"Admin: Adam Jesus",email:"info@egbanname.com",phone:"336-123-5678",
    login_heading:"Inicio de sesión seguro",username:"Usuario",password:"Contraseña",select_contractor:"Seleccione su nombre de contrato",
    register_heading:"Cree su credencial",first_name:"Nombre",last_name:"Apellido",address:"Dirección",street:"Calle",city:"Ciudad",state:"Estado",zip:"Código postal",telephone:"Teléfono",email_address:"Correo electrónico",
    create_account:"Crear cuenta",submit:"Enviar",approve:"Aprobar",reject:"Rechazar",
    status_pending:"Pendiente de aprobación del GG",status_approved:"Aprobado",status_rejected:"Rechazado",status_pending_approval:"Pendiente de auditoría GG",
    gm_only_notice:"Solo el Gerente General puede aprobar solicitudes."
  }
};

/* ===== Data layer, auth, permissions, routing ===== */
const CONTRACTORS = ["Macon","Electricien","Plombier","Builder","Tile Maker","Farmer","Driver","Guard","Supervisor","Manager","Mechanic","Solder","Carpenter","Solar Panel Technician","Internet Service Technician","Ion Maker (Ferrailleur)"];

const TICKET_LINKS = [
  {label:"Flight Tickets", url:"https://www.expedia.com/Flights"},
  {label:"Cruises", url:"https://www.carnival.com"},
  {label:"Movies", url:"https://www.fandango.com"},
  {label:"Sports", url:"https://www.ticketmaster.com/sports"},
  {label:"Events & Entertainment", url:"https://www.stubhub.com"}
];

const TOOL_LINKS = [
  {trade:"Macon / Concrete", url:"https://www.homedepot.com/b/Concrete-Construction-Cement-Concrete/N5101", label:"Cement & concrete supply"},
  {trade:"Electricien", url:"https://www.menards.com/main/electrical/c-13892.htm", label:"Electrical supply"},
  {trade:"Plombier", url:"https://www.ferguson.com", label:"Plumbing supply"},
  {trade:"Carpenter", url:"https://www.rockler.com", label:"Woodworking tools"},
  {trade:"Welder / Solder", url:"https://www.weldingweb.com", label:"Welding info & gear"},
  {trade:"Solar Technician", url:"https://www.solarreviews.com", label:"Solar panels & guides"},
  {trade:"Internet Tech", url:"https://www.dslreports.com", label:"ISP troubleshooting"},
  {trade:"Mechanic", url:"https://www.autozone.com", label:"Auto parts & diagnostics"},
  {trade:"General Tools", url:"https://www.milwaukeetool.com", label:"Power tools"},
  {trade:"Safety / Guard", url:"https://www.osha.gov", label:"OSHA safety standards"}
];

const KEY="egbanname_db_v1", SESSION="egbanname_session";
let db = loadDB();

function loadDB(){ try{ const d=localStorage.getItem(KEY); return d?JSON.parse(d):{users:[],requests:[],timesheets:[],audit:[]}; }catch(e){ return {users:[],requests:[],timesheets:[],audit:[]}; } }
function saveDB(){ localStorage.setItem(KEY, JSON.stringify(db)); exportBilling(); }
function hashStr(s){ let h=5381; for(let i=0;i<s.length;i++) h=((h<<5)+h+s.charCodeAt(i))>>>0; return "h"+h.toString(16); }
function uid(){ return "id-"+Math.random().toString(36).slice(2,10)+Date.now().toString(36); }
function ts(){ return new Date().toISOString(); }
function logAction(user,action,detail){ db.audit.push({id:uid(),user,action,detail,at:ts()}); }

// Bootstrap Super User
if(!db.users.find(u=>u.username==="Adam")){
  db.users.push({id:"admin-adam",username:"Adam",pw:hashStr("Jesus123"),role:"gm",contractor:null,fullName:"Adam Jesus",email:"info@egbanname.com",phone:"336-123-5678",createdAt:ts()});
  logAction("system","BOOTSTRAP","Super user Adam created"); saveDB();
}

function currentUser(){ const sid=sessionStorage.getItem(SESSION); return db.users.find(u=>u.id===sid)||null; }
function doLogin(uname,pword){ const x=db.users.find(z=>z.username===uname && z.pw===hashStr(pword)); if(x){ sessionStorage.setItem(SESSION,x.id); logAction(x.username,"LOGIN","ok"); saveDB(); } return x; }
function doLogout(){ const u=currentUser(); if(u) logAction(u.username,"LOGOUT",""); sessionStorage.removeItem(SESSION); }

function doSignup(uname,pword,contractor,profile){
  if(!CONTRACTORS.includes(contractor)) return {err:"Pick a valid contract name."};
  if(db.users.find(z=>z.username===uname)) return {err:"Username already taken."};
  if(!pword||pword.length<6) return {err:"Password must be at least 6 characters."};
  const u={id:uid(),username:uname,pw:hashStr(pword),role:"contractor_admin",contractor:contractor,firstName:profile.firstName,lastName:profile.lastName,address:profile.address,street:profile.street,city:profile.city,state:profile.state,zip:profile.zip,phone:profile.phone,email:profile.email,createdAt:ts()};
  db.users.push(u); logAction(uname,"SIGNUP","role=contractor_admin contractor="+contractor); saveDB();
  return {ok:u};
}

// Work Order: Submits to GM Queue with "pending_approval" status
function doCreateWorkOrder(user,data){
  const r={id:uid(),type:"work_order",owner:user.username,contractor:user.contractor,title:data.title,items:data.items,cost:Number(data.cost)||0,status:"pending_approval",createdAt:ts(),updatedAt:ts()};
  db.requests.push(r); logAction(user.username,"WORK_ORDER_SUBMIT",r.id+" -> GM queue"); saveDB(); return r;
}

// Timesheet: Submits to GM Queue with "pending_approval" status
function doSubmitTimesheet(user,data){
  const t={id:uid(),owner:user.username,contractor:user.contractor,date:data.date,hours:Number(data.hours)||0,notes:data.notes,status:"pending_approval",createdAt:ts()};
  db.timesheets.push(t); logAction(user.username,"TIMESHEET_SUBMIT",t.id+" -> GM queue"); saveDB(); return t;
}

// GM Approves: Changes status to "approved" and logs audit
function doGMApprove(gm,id,type){ 
  if(gm.role!=="gm") return {err:"Only the General Manager can approve."};
  const list=type==="timesheet"?db.timesheets:db.requests; 
  const r=list.find(x=>x.id===id); 
  if(!r) return {err:"Not found"};
  r.status="approved"; r.updatedAt=ts(); 
  logAction(gm.username,"APPROVE",id+" by "+type); saveDB(); 
  return {ok:r}; 
}

// GM Rejects: Changes status to "rejected" and logs audit
function doGMReject(gm,id,type){ 
  if(gm.role!=="gm") return {err:"Only the General Manager can reject."};
  const list=type==="timesheet"?db.timesheets:db.requests; 
  const r=list.find(x=>x.id===id); 
  if(!r) return {err:"Not found"};
  r.status="rejected"; r.updatedAt=ts(); 
  logAction(gm.username,"REJECT",id+" by "+type); saveDB(); 
  return {ok:r}; 
}

// GM Sets Role: Logs audit and saves change
function doGMSetRole(gm,userId,role){ 
  if(gm.role!=="gm") return {err:"Super user only."};
  const u=db.users.find(x=>x.id===userId); 
  if(!u||u.id==="admin-adam") return {err:"Cannot modify that account."};
  u.role=role; 
  logAction(gm.username,"SET_ROLE",u.username+" -> "+role); saveDB(); 
  return {ok:u}; 
}

function exportBilling(){ localStorage.setItem("egbanname_billing_export", JSON.stringify({exportedAt:ts(),requests:db.requests,timesheets:db.timesheets})); }

function renderNav(){
  const u=currentUser(), t=I18N[I18N.current];
  let items=[t.nav_home,t.nav_about,t.nav_news,t.nav_contact,t.nav_tools,t.nav_tickets];
  if(u){ 
    items.push(t.nav_dashboard);
    if(u.role==="contractor_admin"){ items.push(t.nav_workorder,t.nav_timesheet); }
    if(u.role==="gm"){ items.push(t.nav_queue,t.nav_accounts,t.nav_audit); }
    items.push(t.nav_logout||"Logout");
  } else { items.push(t.nav_login,t.nav_register); }
  document.getElementById("nav").innerHTML = items.map(function(i){ return '<a href="#" data-page="'+i+'">'+i+'</a>'; }).join(" ");
  document.getElementById("userbox").innerHTML = u ? "<strong>"+u.username+(u.role==="gm"?" (GM)":" ("+u.contractor+")")+"</strong>" : "";
}

function showPage(page){
  renderNav();
  const u=currentUser(), t=I18N[I18N.current], app=document.getElementById("app");
  switch(page){
    case "Home": case t.nav_home:
            app.innerHTML='<section class="hero"><h1>'+t.welcome_title+'</h1><p class="sub">'+t.welcome_sub+'</p><p>'+t.intro+'</p></section>';
      break;

    case "About Us": case t.nav_about:
      app.innerHTML='<section class="hero"><h1>'+t.about_title+'</h1><p>'+t.about_text+'</p></section>';
      break;

    case "Contact": case t.nav_contact:
      app.innerHTML='<section class="hero"><h1>'+t.contact_title+'</h1><p><strong>'+t.admin_name+'</strong><br>'+t.email+'<br>'+t.phone+'</p></section>';
      break;

    case "News": case t.nav_news:
      // Generate dynamic news content based on DB stats
      const totalOrders = db.requests.length;
      const pendingOrders = db.requests.filter(r => r.status === "pending_approval").length;
      const totalUsers = db.users.length;
      const newsItems = [
        {title:"Platform Update", body:"Egbanname now supports 16 specialized trades with full audit logging."},
        {title:"Security Alert", body:"All service requests are now routed through the GM Queue for approval."},
        {title:"New Features", body:"Bubble-style UI and animated video background are now live!"},
        {title:"System Stats", body:"Total Registered Users: " + totalUsers + " | Active Work Orders: " + totalOrders + " | Pending Approvals: " + pendingOrders}
      ];
      app.innerHTML = '<section class="card"><h2>'+t.nav_news+'</h2><div class="tool-grid">';
      newsItems.forEach(function(item){
        app.innerHTML += '<div class="tool-card"><h3>'+item.title+'</h3><p>'+item.body+'</p></div>';
      });
      app.innerHTML += '</div><p style="margin-top:20px;opacity:.7;font-size:.9em;">This banner updates in real-time based on platform activity.</p></section>';
      break;

    case "Login": case t.nav_login:
      app.innerHTML='<section class="card"><h2>'+t.login_heading+'</h2>'+
        '<form id="loginForm">'+
        '<input id="lUser" placeholder="'+t.username+'" required>'+
        '<input id="lPass" type="password" placeholder="'+t.password+'" required>'+
        '<button type="submit">'+t.submit+'</button></form><div id="loginMsg"></div></section>';
      document.getElementById("loginForm").onsubmit=function(e){
        e.preventDefault();
        if(doLogin(document.getElementById("lUser").value, document.getElementById("lPass").value)){ showPage(t.nav_dashboard); }
        else { document.getElementById("loginMsg").textContent="Invalid credentials."; }
      };
      break;

    case "Register": case t.nav_register:
      app.innerHTML='<section class="card"><h2>'+t.register_heading+'</h2>'+
        '<form id="regForm">'+
        '<input id="rUser" placeholder="'+t.username+'" required>'+
        '<input id="rPass" type="password" placeholder="'+t.password+'" minlength="6" required>'+
        '<select id="rContractor" required><option value="">'+t.select_contractor+'</option>'+
          CONTRACTORS.map(function(c){ return '<option value="'+c+'">'+c+'</option>'; }).join('')+
        '</select>'+
        '<input id="rFirst" placeholder="'+t.first_name+'" required>'+
        '<input id="rLast" placeholder="'+t.last_name+'" required>'+
        '<input id="rStreet" placeholder="'+t.street+'" required>'+
        '<input id="rAddress" placeholder="'+t.address+'" required>'+
        '<input id="rCity" placeholder="'+t.city+'" required>'+
        '<input id="rState" placeholder="'+t.state+'" required>'+
        '<input id="rZip" placeholder="'+t.zip+'" required>'+
        '<input id="rPhone" placeholder="'+t.telephone+'" required>'+
        '<input id="rEmail" type="email" placeholder="'+t.email_address+'" required>'+
        '<button type="submit">'+t.create_account+'</button></form><div id="regMsg"></div></section>';
      document.getElementById("regForm").onsubmit=function(e){
        e.preventDefault();
        var res=doSignup(rUser.value,rPass.value,rContractor.value,{
          firstName:rFirst.value,lastName:rLast.value,address:rAddress.value,street:rStreet.value,
          city:rCity.value,state:rState.value,zip:rZip.value,phone:rPhone.value,email:rEmail.value});
        if(res.ok){ sessionStorage.setItem(SESSION,res.ok.id); logAction(res.ok.username,"LOGIN","after signup"); saveDB();
          document.getElementById("regMsg").innerHTML="<p style='color:#4f4'>Account created! Welcome.</p>";
          setTimeout(function(){ showPage(I18N[I18N.current].nav_dashboard); },900);
        } else { document.getElementById("regMsg").textContent=res.err; }
      };
      break;

    case "Dashboard": case t.nav_dashboard:
      if(!u){ showPage(t.nav_login); return; }
      var myReqs=db.requests.filter(function(r){return r.owner===u.username;});
      var myTS=db.timesheets.filter(function(r){return r.owner===u.username;});
      var lastAct=db.audit.filter(function(a){return a.user===u.username;}).pop();
      app.innerHTML='<section class="card"><h2>'+t.nav_dashboard+" — "+u.username+(u.contractor?" ("+u.contractor+")":"")+'</h2>'+
        '<div class="stats"><div class="stat-box"><h3>Orders</h3><span>'+myReqs.length+'</span></div>'+
        '<div class="stat-box"><h3>Timesheets</h3><span>'+myTS.length+'</span></div>'+
        '<div class="stat-box"><h3>Last Activity</h3><span>'+(lastAct?lastAct.at:"—")+'</span></div></div>'+
        '<h3>Work Orders</h3>'+renderReqs(myReqs)+
        '<h3>Timesheets</h3>'+renderTS(myTS)+'</section>';
      break;

    case "Work Orders": case t.nav_workorder:
      if(!u){ showPage(t.nav_login); return; }
      var mine=db.requests.filter(function(r){return r.owner===u.username;});
      app.innerHTML='<section class="card"><h2>'+t.nav_workorder+'</h2>'+
        '<form id="woForm"><input id="woTitle" placeholder="Work Order Title" required>'+
        '<textarea id="woItems" placeholder="Equipment / Tools needed" rows="4" required></textarea>'+
        '<input id="woCost" type="number" min="0" step="0.01" placeholder="Estimated Cost ($)" required>'+
        '<button type="submit">'+t.submit+'</button></form><div id="woMsg"></div>'+
        '<h3>My Orders</h3>'+renderReqs(mine)+'</section>';
      document.getElementById("woForm").onsubmit=function(e){
        e.preventDefault();
        doCreateWorkOrder(u,{title:woTitle.value,items:woItems.value,cost:woCost.value});
        document.getElementById("woMsg").innerHTML="<p style='color:#4f4'>Submitted! Status: "+t.status_pending_approval+"</p>";
        showPage(t.nav_workorder);
      };
      break;

    case "Timesheets": case t.nav_timesheet:
      if(!u){ showPage(t.nav_login); return; }
      var myTs=db.timesheets.filter(function(r){return r.owner===u.username;});
      app.innerHTML='<section class="card"><h2>'+t.nav_timesheet+'</h2>'+
        '<form id="tsForm"><input id="tsDate" type="date" required>'+
        '<input id="tsHours" type="number" min="0" max="24" step="0.5" placeholder="Hours worked" required>'+
        '<textarea id="tsNotes" placeholder="Notes" rows="3"></textarea>'+
        '<button type="submit">'+t.submit+'</button></form><div id="tsMsg"></div>'+
        '<h3>My Timesheets</h3>'+renderTS(myTs)+'</section>';
      document.getElementById("tsForm").onsubmit=function(e){
        e.preventDefault();
        doSubmitTimesheet(u,{date:tsDate.value,hours:tsHours.value,notes:tsNotes.value});
        document.getElementById("tsMsg").innerHTML="<p style='color:#4f4'>Submitted! Status: "+t.status_pending_approval+"</p>";
        showPage(t.nav_timesheet);
      };
      break;

    case "GM Queue": case t.nav_queue:
      if(!u||u.role!=="gm"){ showPage(t.nav_dashboard); return; }
      app.innerHTML='<section class="card"><h2>'+t.nav_queue+'</h2><p>'+t.gm_only_notice+'</p>'+
        '<h3>Pending Work Orders</h3>'+renderReqs(db.requests.filter(function(r){return r.status==="pending_approval";}),true)+
        '<h3>Pending Timesheets</h3>'+renderTS(db.timesheets.filter(function(r){return r.status==="pending_approval";}),true)+'</section>';
      break;

    case "Accounts": case t.nav_accounts:
      if(!u||u.role!=="gm"){ showPage(t.nav_dashboard); return; }
      app.innerHTML='<section class="card"><h2>'+t.nav_accounts+'</h2><table class="tbl"><tr><th>Username</th><th>Role</th><th>Contractor</th><th>Action</th></tr>'+
        db.users.map(function(x){
          if(x.id==="admin-adam") return "<tr><td>"+x.username+"</td><td>gm</td><td>—</td><td><em>Super user</em></td></tr>";
          return '<tr><td>'+x.username+'</td><td>'+x.role+'</td><td>'+(x.contractor||"—")+'</td>'+
            '<td><select class="role-sel" data-uid="'+x.id+'">'+
            '<option value="contractor_admin"'+(x.role==="contractor_admin"?" selected":"")+'>contractor_admin</option>'+
            '<option value="employee"'+(x.role==="employee"?" selected":"")+'>employee</option>'+
            '<option value="gm"'+(x.role==="gm"?" selected":"")+'>gm</option></select> '+
            '<button class="role-btn" data-uid="'+x.id+'">Update</button></td></tr>';
        }).join('')+'</table></section>';
      Array.prototype.forEach.call(document.querySelectorAll(".role-btn"),function(btn){
        btn.onclick=function(){ 
          var sel=btn.parentNode.querySelector(".role-sel");
          doGMSetRole(u,btn.dataset.uid,sel.value); 
          showPage(t.nav_accounts); 
        };
      });
      break;

    case "Audit Log": case t.nav_audit:
      if(!u||u.role!=="gm"){ showPage(t.nav_dashboard); return; }
      app.innerHTML='<section class="card"><h2>'+t.nav_audit+'</h2><table class="tbl"><tr><th>Time</th><th>User</th><th>Action</th><th>Details</th></tr>'+
        db.audit.slice().reverse().map(function(a){
          return "<tr><td>"+a.at+"</td><td>"+a.user+"</td><td>"+a.action+"</td><td>"+a.detail+"</td></tr>";
        }).join('')+'</table></section>';
      break;

    case "Tools & Resources": case t.nav_tools:
      app.innerHTML='<section class="card"><h2>'+t.nav_tools+'</h2><div class="tool-grid">'+
        TOOL_LINKS.map(function(l){ return '<a href="'+l.url+'" target="_blank" rel="noopener" class="tool-card"><h3>'+l.trade+'</h3><p>'+l.label+'</p></a>'; }).join('')+
        '</div></section>';
      break;

    case "Tickets & Travel": case t.nav_tickets:
      app.innerHTML='<section class="card"><h2>'+t.nav_tickets+'</h2>'+
        '<p style="opacity:.8;font-size:.9em">Browse freely without registering. To purchase tickets you need a valid registered profile (age + address verified) and must enter credit card, debit card or check details at checkout.</p>'+
        '<div class="tool-grid">'+
        TICKET_LINKS.map(function(l){ return '<a href="'+l.url+'" target="_blank" rel="noopener" class="tool-card"><h3>'+l.label+'</h3></a>'; }).join('')+
        '</div></section>';
      break;

    default:
      app.innerHTML='<section class="hero"><h1>404</h1><p>Page not found.</p></section>';
  }
}

function renderReqs(reqs, gmMode){
  if(!reqs.length) return "<p>No requests yet.</p>";
  var t=I18N[I18N.current], isGM=currentUser() && currentUser().role==="gm";
  return "<table class='tbl'><tr><th>Title</th><th>Items</th><th>Cost</th><th>Status</th><th>Timestamp</th>"+((gmMode||isGM)?"<th>Actions</th>":"")+"</tr>"+
    reqs.map(function(r){
      return "<tr><td>"+r.title+"</td><td>"+r.items+"</td><td>$"+r.cost.toFixed(2)+"</td>"+
        "<td><span class='badge "+r.status+"'>"+r.status+"</span></td><td>"+r.createdAt+"</td>"+
        ((gmMode||isGM)?"<td>"+(r.status==="pending_approval"
          ?"<button class='approve-btn' data-id='"+r.id+"' data-type='work_order'>"+t.approve+"</button> <button class='reject-btn' data-id='"+r.id+"' data-type='work_order'>"+t.reject+"</button>"
          :"")+"</td>":"")+
        "</tr>";
    }).join("")+"</table>";
}

function renderTS(rows, gmMode){
  if(!rows.length) return "<p>No timesheets yet.</p>";
  var t=I18N[I18N.current], isGM=currentUser() && currentUser().role==="gm";
  return "<table class='tbl'><tr><th>Date</th><th>Hours</th><th>Notes</th><th>Status</th><th>Timestamp</th>"+((gmMode||isGM)?"<th>Actions</th>":"")+"</tr>"+
    rows.map(function(r){
      return "<tr><td>"+r.date+"</td><td>"+r.hours+"</td><td>"+(r.notes||"")+"</td>"+
        "<td><span class='badge "+r.status+"'>"+r.status+"</span></td><td>"+r.createdAt+"</td>"+
        ((gmMode||isGM)?"<td>"+(r.status==="pending_approval"
          ?"<button class='approve-btn' data-id='"+r.id+"' data-type='timesheet'>"+t.approve+"</button> <button class='reject-btn' data-id='"+r.id+"' data-type='timesheet'>"+t.reject+"</button>"
          :"")+"</td>":"")+
        "</tr>";
    }).join("")+"</table>";
}

/* ===== Global click handlers ===== */
document.addEventListener("click", function(e){
  var u=currentUser(), t=I18N[I18N.current];
  if(e.target.tagName==="A"){ e.preventDefault();
    if(e.target.textContent===(t.nav_logout||"Logout")){ doLogout(); showPage(t.nav_home); return; }
    showPage(e.target.textContent); return;
  }
  if(e.target.classList.contains("approve-btn")){
    var ra=doGMApprove(u,e.target.dataset.id,e.target.dataset.type);
    if(ra.ok){ exportBilling(); showPage(t.nav_queue); } else alert(ra.err); return;
  }
  if(e.target.classList.contains("reject-btn")){
    var rr=doGMReject(u,e.target.dataset.id,e.target.dataset.type);
    if(rr.ok){ exportBilling(); showPage(t.nav_queue); } else alert(rr.err); return;
  }
});

/* ===== Language switcher + init ===== */
document.addEventListener("DOMContentLoaded", function(){
  Array.prototype.forEach.call(document.querySelectorAll(".lang-switch button"), function(btn){
    btn.onclick=function(){ I18N.current=btn.dataset.lang; showPage(I18N[I18N.current].nav_home); };
  });
  showPage(I18N[I18N.current].nav_home);
});