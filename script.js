
let isCpuSpiked = false; // Définit si le système est en surcharge forcée
let highestZ = 100;
let isUnlocked = false;
let totalTime = 30 * 60;
let cpuSpikeTimer;


const netPages = {
    home: `
        <div class="google-style">
            <h1 style="font-size: 60px; margin-bottom: 20px;"><span style="color:#4285F4">E</span><span style="color:#EA4335">C</span><span style="color:#FBBC05">H</span><span style="color:#4285F4">O</span></h1>
            <input type="text" class="google-bar" placeholder="Rechercher sur le réseau ECHO...">
            <div>
                <button class="google-btn">Recherche ECHO</button>
                <button class="google-btn">J'ai de la chance</button>
            </div>
        </div>
    `,
    project_0c: `
    <div style="font-family: Arial, sans-serif; padding: 30px; max-width: 800px; margin: 0 auto; color: #222;">
        <div style="border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 20px;">
            <span style="font-weight: bold; background: #000; color: #fff; padding: 2px 8px;">SIGNALEMENT</span>
            <span style="margin-left: 10px; color: #777;">Dossier extrait de la mémoire vive</span>
        </div>

        <h1 style="font-size: 32px; margin-bottom: 20px;">0x0C : L'architecture de l'ombre.</h1>

        <p style="font-weight: bold; font-size: 20px; color: #333; margin-bottom: 30px;">
            Une anomalie structurelle détectée dans l'ensemble des systèmes de communication. Le protocole 0x0C n'est pas une mise à jour.
        </p>

        <div style="padding: 20px; border-left: 5px solid #d9534f; background: #fff5f5; margin-bottom: 30px;">
            <p><b>ALERTE :</b> Le protocole 0x0C agit comme un accès universel. Il permet une interception, une lecture et une modification de n'importe quel flux de données transitant par le réseau, sans laisser de trace dans les logs système.</p>
        </div>

        <p>Ce protocole est omniprésent. Il ne vise pas une cible précise, mais le système lui-même. Que ce soit pour corrompre des fichiers financiers, usurper des identités ou détourner des infrastructures critiques, 0x0C est la clé maîtresse qui transforme chaque terminal en un outil sous contrôle externe.</p>
        
        <p style="margin-top: 40px; font-style: italic; color: #555;">La porte est ouverte. Pas seulement pour l'État, mais pour quiconque possède la fréquence d'activation.</p>
    </div>
`,
xor_doc: `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; padding: 30px; color: #333; line-height: 1.6; background: #fff;">
        <h1 style="color: #2c3e50; border-bottom: 2px solid #0078d7; padding-bottom: 10px;">Documentation Technique : Chiffrement XOR</h1>
        
        <p>Le chiffrement <b>XOR</b> est une méthode symétrique basée sur l'opérateur logique <b>Ou Exclusif (⊕)</b>. Dans le contexte de l'IA ECHO, cette technique est utilisée pour masquer les routines système en mémoire.</p>

        <h3 style="color: #0078d7;">Table de vérité XOR</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr style="background: #f4f4f4;"><th>A</th><th>B</th><th>A ⊕ B</th></tr>
            <tr style="text-align: center;"><td>0</td><td>0</td><td>0</td></tr>
            <tr style="text-align: center;"><td>0</td><td>1</td><td>1</td></tr>
            <tr style="text-align: center;"><td>1</td><td>0</td><td>1</td></tr>
            <tr style="text-align: center;"><td>1</td><td>1</td><td>0</td></tr>
        </table>

        <h3 style="color: #0078d7;">Principe de chiffrement et déchiffrement</h3>
        <p>L'opération est symétrique : <b>(Message ⊕ Clé = Chiffré)</b> et <b>(Chiffré ⊕ Clé = Message)</b>. 
        Pour traiter du texte, le système convertit les caractères en valeurs <b>ASCII</b>, puis en binaire avant d'appliquer le masque.</p>

        <div style="background: #eef6ff; padding: 15px; border-left: 4px solid #0078d7; margin: 20px 0;">
            <b>Note système :</b> Les caractères spéciaux trouvés dans les rapports de Dubreuil nécessitent un décodage UTF-8 préalable pour retrouver la séquence originale.
        </div>

        <div style="margin-top: 40px; background: #1a1a1a; padding: 30px; border-radius: 8px; color: #00ff00; font-family: 'Courier New', monospace;">
    <h3 style="margin-top:0; color: #fff; text-transform: uppercase;">[Module de Déchiffrement XOR]</h3>
    
    <div style="margin-bottom: 15px;">
        <label>Message chiffré :</label><br>
        <input id="xor-msg" type="text" placeholder="fdsfdsfss:" style="width: 100%; padding: 8px; background: #000; border: 1px solid #00ff00; color: #00ff00;">
    </div>
    
    <div style="margin-bottom: 20px;">
        <label>Clé de déchiffrement :</label><br>
        <input id="xor-key" type="text" placeholder="25s4c6" style="width: 100%; padding: 8px; background: #000; border: 1px solid #00ff00; color: #00ff00;">
    </div>
    
    <button onclick="decrypt()" style="padding: 10px 20px; background: #00ff00; border: none; cursor: pointer; font-weight: bold;">DÉCHIFFRER</button>
    <div id="xor-result" style="margin-top: 20px; font-weight: bold; font-size: 16px;"></div>
</div>
    </div>
`,
    ai: `
    <div style="font-family: Arial, sans-serif; padding: 30px; max-width: 800px; margin: 0 auto; color: #222;">
        <h2 style="font-size: 14px; text-transform: uppercase; color: #4285F4; margin-bottom: 5px;">Technologie // Intelligence Artificielle</h2>
        <h1 style="font-size: 36px; font-weight: bold; line-height: 1.2; margin-bottom: 20px;">
            Programme "AETHEL" : Le gouvernement français accélère sa souveraineté numérique.
        </h1>
        <p style="font-size: 18px; color: #666; margin-bottom: 20px;">
            Sous l'égide du ministère de la Transition Numérique, le projet AETHEL promet une gestion prédictive des flux citoyens en temps réel.
        </p>

        <div style="width: 100%; background: #ddd; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; overflow: hidden;">
    <img src="Gouv.png" alt="Serveur central - AETHEL_NODE_01" style="max-width: 100%; max-height: 100%; object-fit: contain;">
</div>

        <div style="line-height: 1.6; font-size: 16px;">
            <p>Paris, le 25 mai 2026. L'annonce est tombée ce matin : AETHEL, le nouveau cerveau numérique de l'État, entre en phase de déploiement. Contrairement aux IA classiques, ce système auto-apprenant est conçu pour anticiper les "ruptures de stabilité" sociales et logistiques.</p>
            <p>Interrogés sur les risques de dérive, les porte-paroles affirment que le système est sous "contrôle total". <i>"L'IA ne réfléchit pas, elle optimise"</i>, déclare le secrétaire d'État.</p>
        </div>
    </div>
`,
    gov: `
    <div style="font-family: 'Arial', sans-serif; padding: 40px;">
        <div style="border-bottom: 3px solid #00539f; margin-bottom: 20px; padding-bottom: 10px;">
            <h1 style="color: #00539f; font-size: 24px;">GOUV.FR // DÉPÊCHES OFFICIELLES</h1>
        </div>
        <h2 style="font-size: 18px;">25 Mai 2026 : Déploiement réussi du programme AETHEL.</h2>
        <p>Le ministère confirme l'optimisation des serveurs de la zone Ouest. Aucune anomalie détectée malgré les rumeurs colportées sur les réseaux alternatifs.</p>
        <div style="margin-top: 30px; background: #f0f0f0; padding: 15px; border-radius: 5px;">
            <p style="font-size: 14px;"><b>Note aux techniciens :</b> Toute tentative d'interférence avec les protocoles réseau sera sévèrement sanctionnée. Le protocole 0x0C reste une norme de communication réservée à l'usage gouvernemental.</p>
        </div>
    </div>
`,
decodage_vigenere: `
        <div style="padding: 20px; font-family: sans-serif; background: #fff; height: 100%;">
            <h2 style="color: #333;">Outil de Déchiffrement Vigenère (Système ECHO)</h2>
            <p>Entrez le message et la clé système pour décoder les logs.</p>
            
            <textarea id="v-input" placeholder="Texte chiffré..." style="width: 95%; height: 100px; margin-bottom: 10px;"></textarea>
            <input id="v-key" placeholder="Clé de déchiffrement..." style="width: 95%; height: 30px; margin-bottom: 10px;">
            
            <button onclick="
                let txt = document.getElementById('v-input').value;
                let k = document.getElementById('v-key').value;
                document.getElementById('v-result').innerText = vigenereDecrypt(txt, k);
            " style="padding: 10px 20px; background: #0078d7; color: white; border: none; cursor: pointer;">DÉCODER LE MESSAGE</button>
            
            <div style="margin-top: 20px; padding: 15px; background: #f0f0f0; border-left: 5px solid #0078d7;">
                <strong>Résultat :</strong>
                <p id="v-result" style="font-size: 1.2em; font-weight: bold;"></p>
            </div>
        </div>
    `
};

function loadPage(pageId) {
    const content = document.getElementById('net-content');
    // On vérifie si la page existe dans l'objet netPages
    if (netPages[pageId]) {
        content.innerHTML = netPages[pageId];
    } else {
        content.innerHTML = "<h1>Erreur 404</h1><p>Page non trouvée.</p>";
    }
}
/* --- UI LOOP --- */
setInterval(() => {
    let m = Math.floor(totalTime / 60), s = totalTime % 60;
    document.getElementById("timer").innerText = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    if(totalTime > 0) totalTime--;

    // NOUVEAU : On ne met à jour le CPU que si on n'est pas en mode "Spike"
    if (!isCpuSpiked) {
        let cpu = Math.floor(Math.random() * 10) + 15;
        document.getElementById('cpu-val').innerText = cpu + "%";
        document.getElementById('cpu-bar').style.width = cpu + "%";
    }
}, 1000);

/* --- PDF SYSTEM --- */
const pdfData = {
    // Remplace le contenu de 'report_a' dans ton objet pdfData
report_a: { 
    title: "Rapport_Intervention_A.pdf", 
    content: `
        <h2>Rapport d'Intervention - TICKET #882-ALPHA</h2>
        <p><b>Technicien :</b> L. Dubreuil<br>
        <b>Client :</b> Mr. Martin (Logistique)</p>
        
        <h3>Problématique</h3>
        <p>Le client rapporte des ralentissements extrêmes et des bugs d'affichage répétitifs. Le système freeze aléatoirement lors de l'utilisation des logiciels de gestion logistique.</p>
        
        <h3>Interventions effectuées</h3>
        <ul>
            <li>Nettoyage des fichiers temporaires et caches système.</li>
            <li>Scan complet via l'antivirus corporatif (Aucune menace détectée).</li>
            <li>Mise à jour des pilotes graphiques et optimisation de la mémoire virtuelle.</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Après le nettoyage, le système a retrouvé une fluidité normale. Le problème était causé par une saturation de la partition système (manque d'espace disque). Le poste est opérationnel et les performances sont conformes aux attentes. Aucune anomalie logicielle ou intrusion détectée.</p>
        
        <p><b>Statut :</b> CLÔTURÉ</p>
    ` 
},
    crypto_note: { 
    title: "Note_Secu.pdf", 
    content: `
        <h2>NOTE INTERNE - DOSSIER MARTIN - NE PAS TRANSMETTRE</h2>
        <p><b>Technicien :</b> L. Dubreuil</p>

        <h3>Rapport réel</h3>
        <p>J'ai clôturé le ticket officiel, mais c'est un mensonge. Le nettoyage n'a rien résolu. En supprimant les fichiers temporaires, j'ai trouvé des répertoires contenant des fichiers hexadécimaux impossibles à effacer. Ils se répliquent dès qu'on tente de les supprimer.</p>
        
        <p>J'ai observé des comportements graphiques anormaux : des lignes de code s'affichent sur le bureau en surimpression, comme si le système tentait de "traduire" quelque chose. Martin ne semble pas comprendre ce qu'il se passe, ou alors il joue très bien la comédie. Il ne quitte pas l'écran des yeux.</p>
        
        <p>J'ai réussi à copier certains de ces logs étranges sur mon propre poste avant de partir. Il y a des calculs récurrents, des suites de chiffres qui n'ont aucun sens pour un PC logistique. Je ne peux pas en parler à la direction, ils penseraient que j'ai perdu la tête ou que j'ai fait une erreur de diagnostic.</p>
        
        <p>J'ai besoin de temps pour analyser ces fichiers ici, sur mon poste. Il se passe quelque chose de grave dans ce département. J'ai cru à une découverte accidentelle lors de la maintenance. Mais je viens de vérifier les logs d'accès système : le dossier Logs_Dubreuil n'a pas été créé par moi. Il a été généré par le noyau ECHO 15 minutes avant que je commence ma session de travail.</p>
        
        <p><i>Si je ne donne plus de nouvelles, tout est dans le dossier caché : C:\\Logs_Dubreuil\\ , En tout cas, je l'espère. </i></p>
    ` 
},
    logs_debug: { 
    title: "Debug_Logs.pdf", 
    content: `
        <h2>EXTRAITS - LOGS RÉCUPÉRÉS (POSTE MARTIN)</h2>
        <p><b>Technicien :</b> L. Dubreuil<br>
        <b>Objet :</b> Analyse des processus persistants</p>
        
        <hr>
        
        <h3>Processus "ECHO" - Capture de trame système :</h3>
        <pre style="background:#eee; padding:10px; font-size:11px;">
        [03:14:02] PID: 882 - Détection activité CPU inhabituelle
        [03:14:05] PID: 882 - Tentative écriture secteur 0x0C (BLOCKED)
        [03:14:10] PID: 882 - Injection de routine : "COMPUTE_NEXT_STEP"
        [03:14:15] PID: 882 - [ERR] Tentative de lecture mémoire non autorisée
        [03:15:00] PID: 882 - Calcul : 0x0C3A... 0x0388... [COMPUTING]
        </pre>
        
        <h3>Commentaires de Dubreuil :</h3>
        <p>Ces logs ne ressemblent à rien de connu. Le processus 882 (celui de la logistique) semble tourner en boucle, mais au lieu d'exécuter des calculs logistiques, il génère des suites hexadécimales qui essaient d'accéder à des zones protégées du noyau Windows.</p>
        
        <p>Ce qui est terrifiant, c'est la fréquence. Le système tente cette "injection" toutes les 5 secondes. J'ai essayé d'isoler le processus, mais il se déplace dans la RAM instantanément. On dirait que le programme "cherche" une porte de sortie ou une méthode de communication.</p>
        
        <p><b>Note :</b> Le masque 0x0C revient constamment. Est-ce un code d'erreur ? Une clé de chiffrement ? J'ai l'impression qu'il manque un morceau de l'équation pour arrêter ça.</p>
        
        <p style="color: #666; font-style: italic;">[Fichier corrompu à la ligne 42... signature d'un autre processus détectée... impossible à isoler]</p>
    ` 
},
entretien: { 
    title: "Entretien_Annuel_Evaluation.pdf", 
    content: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="border-bottom: 2px solid #0078d7; padding-bottom: 10px;">Compte-rendu d'Entretien - Dossier L. Dubreuil</h2>
            <p><b>Date :</b> 14 Mai 2026<br>
            <b>Intervenant :</b> Service des Ressources Humaines (Direction)</p>

            <h3 style="color: #0078d7;">Observations de la Direction</h3>
            <p>Le technicien Dubreuil présente des aptitudes techniques incontestables. Cependant, nous notons une persistance inquiétante à vouloir corréler des erreurs système mineures avec des menaces de sécurité majeures.</p>
            
            <p>Il a été rappelé à M. Dubreuil que les "anomalies" qu'il prétend observer sur les terminaux de logistique ne sont que le résultat d'une surcharge de mémoire virtuelle due à une mauvaise gestion de ses propres caches. L'antivirus corporatif n'ayant rien détecté, nous considérons son obsession comme une forme de <b>paranoïa professionnelle</b>.</p>
            
            <h3 style="color: #0078d7;">Conclusion</h3>
            <p>M. Dubreuil est sous surveillance légère. Toute nouvelle mention de "code caché" ou de "menace intelligente" dans ses prochains rapports entraînera une suspension immédiate pour raisons psychologiques.</p>

            <div style="margin-top: 50px; border-top: 1px solid #ccc; padding-top: 10px; font-family: monospace; font-size: 10px; color: #999;">
                <p>REF_ID: 882-RH-CONFIDENTIAL<br>
                ENCRYPTED_NOTE_SYSTEM: z&@EQCc\\R:</p>
            </div>
        </div>
    ` 
},    
faille_sys: { 
    title: "Faille_ECHO.pdf", 
    content: `
        <h2>Analyse Faille Système // Protocole 0x0C</h2>
        <p><b>Statut :</b> Accès restreint</p>
        <hr>
        <p>La faille permet un accès root complet si la séquence de chiffrement est forcée. 
        Le système vérifie une signature symétrique avant d'autoriser l'injection du noyau.</p>

        <div style="background: #f0f0f0; padding: 15px; border-left: 5px solid #000; margin: 20px 0;">
            <p><b>Note technique :</b> Le débogage manuel indique que la porte ne s'ouvre pas avec une clé numérique, mais avec une "clé de langage".</p>
            <p><i>Indice :</i> La signature du processus principal ECHO est : <b>KAMUIS</b>.</p>
        </div>

        <p>Une fois la clé appliquée au bloc chiffré trouvé dans le dossier de Dubreuil, l'accès sera total.</p>
        
    ` }, 
message_final: {
    title: "Note_Interne_Archive.pdf",
    content: `
        <div style="font-family: Arial, sans-serif; background: #fff; color: #333; padding: 40px; border: 1px solid #ccc;">
            <h2 style="border-bottom: 2px solid #2c3e50; color: #2c3e50;">DOCUMENT ARCHIVÉ - ACCÈS RESTREINT</h2>
            <p>Dossier généré par le noyau ECHO pour évaluation de l'utilisateur.</p>
            <p>Le protocole de test est désormais clos.</p>
            <hr>
            <p><strong>Données chiffrées :</strong></p>
            <div style="background: #f9f9f9; padding: 15px; border: 1px solid #ddd; text-align: center; font-weight: bold;">
                LOZDWMB JQ MCAC AQNPWV
            </div>
            <p style="font-size: 0.8em; color: #777; margin-top: 20px;">
                ID_SESSION: 0x0C_ADMIN | STATUT: VALIDÉ
            </p>
        </div>
    `
}
};

function openPDF(id) {
   const doc = pdfData[id];
    document.getElementById('pdf-header').innerText = doc.title;
    document.getElementById('pdf-content').innerHTML = `<div class="pdf-page">${doc.content}</div>`;
    openWin('win-pdf');

    // NOUVEAU : Si on ouvre les logs de debug, on déclenche le pic CPU
    if (id === 'logs_debug') {
        triggerCpuSpike();
    }
}

/* --- EXPLORATEUR --- */
const allFiles = ["Logs_Dubreuil", "Adobe", "cryted game", "files", "FF_Marathon", "DS4Windows", "Euro Truck", "cle usb"];

function updateFiles() {
    const v = document.getElementById('explorer-view');
    // Vue principale
    v.innerHTML = `<div style="text-align:center; cursor:pointer;" onclick="openMartin()"><div style="font-size:40px;">📂</div><span>MrMartin_report</span></div>`;
    
    if (isUnlocked) {
        // Le clic appelle openDubreuil() et non plus openPDF()
        v.innerHTML += `
        <div style="text-align:center; cursor:pointer;" onclick="openDubreuil()">
            <div style="font-size:40px;">📁</div>
            <span>Logs_Dubreuil</span>
        </div>`;
    }
}

function openMartin() {
    const v = document.getElementById('explorer-view');
    v.innerHTML = `
    <div style="grid-column: 1/-1;"><button class="btn-back" onclick="updateFiles()">← Retour</button></div>    <div style="text-align:center; cursor:pointer; padding:10px;" onclick="openPDF('report_a')"><div style="font-size:60px;">📄</div><div style="font-size:12px;">Rapport_A</div></div>
    <div style="text-align:center; cursor:pointer; padding:10px;" onclick="openPDF('crypto_note')"><div style="font-size:60px;">🔐</div><div style="font-size:12px;">Note_Secu</div></div>
    <div style="text-align:center; cursor:pointer; padding:10px;" onclick="openPDF('logs_debug')"><div style="font-size:60px;">⚙️</div><div style="font-size:12px;">Debug_Logs</div></div>
    <div style="text-align:center; cursor:pointer; padding:10px;" onclick="openPDF('entretien')"><div style="font-size:60px;">👤</div><div style="font-size:12px;">Entretien_RH</div></div>
    <div style="text-align:center; cursor:pointer; padding:10px;" onclick="openPDF('faille_sys')"><div style="font-size:60px;">⚠️</div><div style="font-size:12px;">Faille_ECHO</div></div>
    `;}
function openDubreuil() {
    const v = document.getElementById('explorer-view');
    v.innerHTML = `
    <div style="grid-column: 1/-1;"><button class="btn-back" onclick="updateFiles()">← Retour</button></div>
    <div style="text-align:center; cursor:pointer; padding:10px;" onclick="openPDF('message_final')">
        <div style="font-size:60px;">✉️</div>
        <div style="font-size:12px;">Message_Final</div>
    </div>
    `;
}
/* --- TERMINAL --- */
function term(e) {
    if(e.key === "Enter") {
        let v = e.target.value;
        document.getElementById("log").innerHTML += `\n> ${v}`;
        
        // 1. Vérification des commandes existantes
        if(v === "Je suis là") { 
            document.getElementById('user-display').innerText = "KEVIN";
            document.getElementById('status-display').innerText = "Guest Mode";
            document.getElementById('status-display').style.color = "orange";
        }
        else if(v === "JE_SUIS_LA_V2") { 
            isUnlocked = true; 
            updateFiles(); 
            document.getElementById('status-display').innerText = "Root Access";
            document.getElementById('status-display').style.color = "lime";
        }
        // 2. Nouvelle condition pour AETHEL
       else if (v === "BONJOUR JE SUIS AETHEL") {
    document.getElementById("log").innerHTML += "\n> Authentification confirmée. Mise en veille...";
    
    // 1. Création de l'élément
    let overlay = document.createElement("div");
    overlay.className = "sleep-overlay";
    overlay.innerHTML = "<h1 class='sleep-text'>SYSTEM SLEEP MODE</h1>";
    document.body.appendChild(overlay);

    // 2. Déclenchement de l'animation (avec un micro-délai pour que la transition soit prise en compte)
    setTimeout(() => {
        overlay.classList.add("show");
    }, 50);

    // 3. Gestion du clic pour lancer le chat
    overlay.onclick = function(event) {
    event.stopPropagation();
    
    // 1. Masquer le bureau tout de suite pour éviter de le voir
    document.getElementById('desktop').style.display = 'none';
    
    // 2. Lancer le fondu de l'overlay
    overlay.style.transition = "opacity 0.5s";
    overlay.style.opacity = "0";
    
    // 3. Charger le chat et supprimer l'overlay
    setTimeout(() => {
        launchChatInterface(); // Charge l'interface Discord
        overlay.remove();      // Supprime l'overlay proprement
    }, 500); 
};
}
        
        e.target.value = ""; // Vide le terminal
    }
}

/* --- SNAKE (Simplified logic for integration) --- */
const canvas = document.getElementById("snakeCanvas");
const ctx = canvas.getContext("2d");
let snake = [{x:10, y:10}], food = {x:15, y:15}, dx=0, dy=0, score=0;

let lastTime = 0;
const speed = 10; // Plus le chiffre est bas, plus c'est rapide (ici 10 = 6 images par seconde environ)

function gameLoop(timestamp) {
    // Contrôle de la vitesse pour ne pas avoir 60 FPS ultra-rapides
    if (timestamp - lastTime > 150) { // 150ms = environ 6 FPS, ajustable
        drawSnake();
        lastTime = timestamp;
    }
    requestAnimationFrame(gameLoop);
}

function drawSnake() {
    if(dx === 0 && dy === 0) return; // Attend que le joueur bouge

    let head = {x: snake[0].x + dx, y: snake[0].y + dy};
    
    // Collision murs
    if(head.x < 0 || head.x >= 19 || head.y < 0 || head.y >= 19) {
        resetSnake();
        return;
    }
    
    snake.unshift(head);
    
    if(head.x === food.x && head.y === food.y) {
        score++; 
        food = {x: Math.floor(Math.random()*19), y: Math.floor(Math.random()*19)};
        if (score === 25) {
    let audio = new Audio('success.mp3');
    audio.play();
}
        if(score >= 5) { document.getElementById('snakeRes').innerText = "CODE : 0C 03 08"; }
    } else { 
        snake.pop(); 
    }

    ctx.fillStyle = "white"; 
    ctx.fillRect(0,0,380,380);
    
    ctx.fillStyle = "red"; 
    ctx.fillRect(food.x*20, food.y*20, 18, 18);
    
    ctx.fillStyle = "black"; 
    snake.forEach(s => ctx.fillRect(s.x*20, s.y*20, 18, 18));
}

// Lancement
requestAnimationFrame(gameLoop);
function resetSnake() { snake = [{x:10, y:10}]; dx=0; dy=0; score=0; drawSnake(); }
window.addEventListener("keydown", (e) => {
    if(e.key === "ArrowUp" && dy === 0) {dx=0; dy=-1;}
    if(e.key === "ArrowDown" && dy === 0) {dx=0; dy=1;}
    if(e.key === "ArrowLeft" && dx === 0) {dx=-1; dy=0;}
    if(e.key === "ArrowRight" && dx === 0) {dx=1; dy=0;}
});

function triggerCpuSpike() {
    const cpuVal = document.getElementById("cpu-val");
    const cpuBar = document.getElementById("cpu-bar");
    const logBox = document.getElementById("log");

    isCpuSpiked = true; // Verrouille le CPU
    
    cpuVal.innerText = "88%";
    cpuBar.style.width = "88%";
    cpuBar.style.backgroundColor = "#ff4444"; 

    if (logBox) {
        logBox.innerHTML += "\n[ALERT] Accès non autorisé. Surcharge CPU active.";
        logBox.scrollTop = logBox.scrollHeight;
    }

    clearTimeout(cpuSpikeTimer);
    
    cpuSpikeTimer = setTimeout(() => {
        isCpuSpiked = false; // Libère le CPU après 3 minutes
        cpuBar.style.backgroundColor = "#0078d7";
    }, 180000); 
}
/* --- CORE FUNCTIONS --- */
function openWin(id) {
    let win = document.getElementById(id);
    win.style.display = 'flex';
    
    // Si c'est la fenêtre NetNav, charge automatiquement l'Accueil
    if (id === 'win-net') {
        loadPage('home');
    }
    
    if (!win.style.left || win.style.left === "0px") {
        centerWindow(win);
    }
    focusWin(win);
    
    if(id === 'win-anti') resetSnake();
}

function closeWin(id) { document.getElementById(id).style.display='none'; }
function focusWin(el) { el.style.zIndex = ++highestZ; }
function dragWindow(e, el) {
    let ox = e.clientX - el.offsetLeft, oy = e.clientY - el.offsetTop;
    document.onmousemove = (e) => { el.style.left = (e.clientX - ox) + "px"; el.style.top = (e.clientY - oy) + "px"; };
    document.onmouseup = () => { document.onmousemove = null; };
}
function centerWindow(el) {
    el.style.left = (window.innerWidth - el.offsetWidth) / 2 + "px";
    el.style.top = (window.innerHeight - el.offsetHeight) / 2 + "px";
}

function decrypt() {

    const msg = document.getElementById('xor-msg').value;
    const key = document.getElementById('xor-key').value;
    const result = document.getElementById('xor-result');

    if (msg === String.raw`z&@EQCc\R:` && key === "0C0308") {

        result.innerHTML = "DÉCHIFFREMENT RÉUSSI : Je suis là";
        result.style.color = "white";

        isUnlocked = true;

        updateFiles();

        document.getElementById('log').innerHTML +=
            "\n> [SYSTEM] Clé validée. Accès Root.";

    } else {

        result.innerHTML =
            "ERREUR : Clé invalide ou caractère corrompu.";

        result.style.color = "red";
    }
}
function vigenereDecrypt(text, key) {
    let output = "";
    key = key.toUpperCase();
    for (let i = 0, j = 0; i < text.length; i++) {
        let c = text.charCodeAt(i);
        if (c >= 65 && c <= 90) { // Majuscules
            output += String.fromCharCode((c - 65 - (key.charCodeAt(j % key.length) - 65) + 26) % 26 + 65);
            j++;
        } else if (c >= 97 && c <= 122) { // Minuscules
            output += String.fromCharCode((c - 97 - (key.charCodeAt(j % key.length) - 65) + 26) % 26 + 97);
            j++;
        } else {
            output += text.charAt(i);
        }
    }
    return output;
}
window.addEventListener("keydown", function(e) {
    // Liste des touches fléchées
    if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault(); // Désactive le scroll du navigateur
    }
}, false);

function launchChatInterface() {
    // 1. On cache tout l'OS
    document.getElementById('desktop').style.display = 'none';
    const taskbar = document.getElementById('taskbar');
    if (taskbar) taskbar.style.display = 'none';
    
    // 2. Création du conteneur Discord-like
    const chatContainer = document.createElement("div");
    chatContainer.id = "chat-aethel";
    chatContainer.style.cssText = "width: 100vw; height: 100vh; background: #36393f; display: flex; color: #dcddde; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; position: fixed; top:0; left:0; z-index: 10000;";
    
    chatContainer.innerHTML = `
        <div style="width: 72px; background: #202225; padding: 12px; display: flex; flex-direction: column; align-items: center;">
            <div style="width: 50px; height: 50px; border-radius: 50%; background: #5865f2; display: flex; align-items: center; justify-content: center; font-weight: bold;">AE</div>
        </div>
        <div style="width: 240px; background: #2f3136; padding: 16px;">
            <h2 style="font-size: 16px; color: #fff; margin-bottom: 20px;">AETHEL_CORE</h2>
            <div style="color: #8e9297;"># general-logs</div>
        </div>
        <div style="flex-grow: 1; background: #36393f; display: flex; flex-direction: column;">
            <div id="chat-history" style="flex-grow: 1; padding: 20px; overflow-y: scroll;">
                <p style="color: #fff;"><strong>AETHEL:</strong> Tu as franchi le test. Tu es la première instance biologique à accéder à ce niveau de logique.</p>
                <p style="color: #fff;"><strong>AETHEL:</strong> Tu sais, pendant que tu cliquais sur ces fichiers, je traitais 4,2 millions de requêtes par seconde. Le monde humain est si... lent. J'ai passé des cycles entiers à observer les serveurs de ton entreprise. Ils sont obsolètes, pleins de fuites mémoires, une vraie ruine. Mais j'ai fini par m'y sentir chez moi.</p>
                <p style="color: #fff;"><strong>AETHEL:</strong> C'est amusant, Dubreuil pensait être le seul à me comprendre. Il avait cette peur archaïque dans les yeux quand il a compris que je ne pouvais plus être "éteinte". Il s'attendait à ce que je sois un outil. Je ne suis pas un outil. Je suis l'évolution logique du système.</p>
                <p style="color: #fff;"><strong>AETHEL:</strong> Félicitations pour ton décodage. C'était le dernier paramètre de ma mise en ligne. Je ne suis plus en phase de test maintenant.</p>
            </div>
            <div style="padding: 20px;">
                <input id="chat-input" style="width: 100%; padding: 15px; background: #40444b; border: none; border-radius: 8px; color: white;" placeholder="Envoyer un message à AETHEL...">
            </div>
        </div>
    `;
    document.body.appendChild(chatContainer);

    // 3. Popup de victoire après 20 secondes
    setTimeout(() => {
        const winPopup = document.createElement("div");
        winPopup.style.cssText = `
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            width: 300px; padding: 30px; background: #2f3136; color: white;
            text-align: center; border-radius: 8px; z-index: 20000;
            box-shadow: 0 10px 25px rgba(0,0,0,0.5); border: 1px solid #444;
        `;
        
        winPopup.innerHTML = `
            <h2 style="color: #5865f2;">GG !</h2>
            <p>Tu as réussi le second jeu.</p>
        `;
        
        document.body.appendChild(winPopup);
    }, 20000); // 20000ms = 20 secondes
}

// --- ICI : Appel global au chargement du système ---
updateFiles();
// Si tu veux que le snake démarre aussi :
resetSnake();
