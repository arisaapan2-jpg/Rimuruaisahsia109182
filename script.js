const chatBox = document.getElementById('chat-box');
const input = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const loader = document.getElementById('loader');
const sidebar = document.getElementById('sidebar');

// Jam Realtime
setInterval(() => {
    document.getElementById('clock').innerText = new Date().toLocaleTimeString();
}, 1000);

function toggleSidebar() {
    sidebar.classList.toggle('sidebar-hidden');
    sidebar.classList.toggle('sidebar-shown');
}

function addBubble(text, type) {
    const div = document.createElement('div');
    div.className = `msg ${type}`;
    div.innerHTML = text.replace(/\n/g, '<br>');
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function hapusChat() {
    chatBox.innerHTML = "";
    addBubble("Memori dibersihkan, Tuan Wahyu. ✨", "bot");
    toggleSidebar();
}

function quickCmd(v) {
    input.value = v;
    executeAI(v);
}

// FUNGSI UTAMA: LANGSUNG BUATKAN APA YANG DIMINTA
async function executeAI(query) {
    const p = query.toLowerCase();
    if (!p) return;

    addBubble(query, 'user');
    input.value = "";
    loader.classList.remove('hidden');

    // Simulasi Proses AI
    setTimeout(() => {
        loader.classList.add('hidden');

        // LOGIKA EKSEKUSI
        if (p.includes("/help") || p.includes("fitur")) {
            addBubble("📋 **SYSTEM COMMANDS**\n• /script - Generate Roblox Hub\n• /music - Music ID Finder\n• /logo - Auto Logo Design\n• /website - Web Builder\n\nAtau minta langsung: 'Buatin script farm'", "bot");
        } 
        else if (p.includes("script") || p.includes("/script")) {
            addBubble("📜 **GENERATE LUAU SCRIPT...**\n```lua\n-- Wahyu Supreme Hub\nlocal ScreenGui = Instance.new('ScreenGui')\nprint('Script Aktif, Tuan!')\n
```", "bot");
        }
        else if (p.includes("music") || p.includes("/music")) {
            addBubble("🎵 **MUSIC ID FOUND**\n• DJ Santai: 1845321\n• Phonk: 5421992\n• Slow: 7654321", "bot");
        }
        else if (p.includes("logo") || p.includes("/logo")) {
            const seed = Math.floor(Math.random() * 8888);
            addBubble(`🎨 **LOGO GENERATED**\n<img src="https://api.dicebear.com/7.x/identicon/svg?seed=${seed}" width="100" style="border:1px solid cyan; margin-top:10px;">`, "bot");
        }
        else if (p.includes("website") || p.includes("/website")) {
            addBubble("🌐 **WEB FRAMEWORK**\n```html\n<section>\n <h1>Wahyu Project</h1>\n <p>Design by AI Supreme</p>\n</section>\n```", "bot");
        }
        else {
            addBubble("Perintah dimengerti, Tuan Wahyu. Sedang memproses data di server... Selesai! ✨🌸", "bot");
        }

    }, 1200);
}

// Event Listeners
sendBtn.addEventListener('click', () => executeAI(input.value));
input.addEventListener('keypress', (e) => { if (e.key === 'Enter') executeAI(input.value); });
