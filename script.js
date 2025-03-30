// Store current user globally
let currentUser = null;

// Password Database
const users = {
  nokib3d: [
    { ip: "147.135.129.37:10115:QVDaS:3vW6p", location: "Primary Node" },
    { ip: "74.208.205.97:9001:tx5747df5s:tx314694qhs", location: "Texas Node" },
    { ip: "207.244.246.180:10100:tx2414fs:tx49753af", location: "Texas 2 Node" },
    { ip: "46.21.151.242:9023:ny74511:ny63149tua", location: "New York  Node" },
    { ip: "46.21.151.242:9033:c244f32s:c756asffw", location: "New York 2 Node" },
    { ip: "67.217.244.3:5700:ca414452:ca85216wer", location: "California Node" },
    { ip: "46.21.151.242:9019:ga1741dws:g852sdf49", location: "Georgia Node" },
    { ip: "67.217.244.3:9001:fl144sa5:f65asf79", location: "Florida Node" },
    { ip: "                 18 March 2025               ", location: "Birth" },
    { ip: "                 16 April 2025               ", location: "Death" },
    { ip: "https://drive.google.com/drive/folders/1RG_C7VNh6a8WPOH-ojtnm_b-h3CVmg3Y?usp=sharing", location: "Drive Link" }
  ],
  borhan2df: [
    { ip: "74.208.205.97:9001:tx5747df5s:tx314694qhs", location: "Texas Node" },
    { ip: "207.244.246.180:10100:tx2414fs:tx49753af", location: "Texas 2 Node" },
    { ip: "46.21.151.242:9023:ny74511:ny63149tua", location: "New York  Node" },
    { ip: "46.21.151.242:9033:c244f32s:c756asffw", location: "New York 2 Node" },
    { ip: "67.217.244.3:5700:ca414452:ca85216wer", location: "California Node" },
    { ip: "46.21.151.242:9019:ga1741dws:g852sdf49", location: "Georgia Node" },
    { ip: "67.217.244.3:9001:fl144sa5:f65asf79", location: "Florida Node" },
    { ip: "                 18 March 2025               ", location: "Birth" },
    { ip: "                 16 April 2025               ", location: "Death" },
    { ip: "https://drive.google.com/drive/folders/1RG_C7VNh6a8WPOH-ojtnm_b-h3CVmg3Y?usp=sharing", location: "Drive Link" }
  ],
  tanbir4d: [
    { ip: "74.208.205.97:9001:tx5747df5s:tx314694qhs", location: "Texas Node" },
    { ip: "207.244.246.180:10100:tx2414fs:tx49753af", location: "Texas 2 Node" },
    { ip: "46.21.151.242:9023:ny74511:ny63149tua", location: "New York  Node" },
    { ip: "46.21.151.242:9033:c244f32s:c756asffw", location: "New York 2 Node" },
    { ip: "67.217.244.3:5700:ca414452:ca85216wer", location: "California Node" },
    { ip: "46.21.151.242:9019:ga1741dws:g852sdf49", location: "Georgia Node" },
    { ip: "67.217.244.3:9001:fl144sa5:f65asf79", location: "Florida Node" },
    { ip: "                 18 March 2025               ", location: "Birth" },
    { ip: "                 16 April 2025               ", location: "Death" },
    { ip: "https://drive.google.com/drive/folders/1RG_C7VNh6a8WPOH-ojtnm_b-h3CVmg3Y?usp=sharing", location: "Drive Link" }
  ],
  riyad33f: [
    { ip: "74.208.205.97:9001:tx5747df5s:tx314694qhs", location: "Texas Node" },
    { ip: "207.244.246.180:10100:tx2414fs:tx49753af", location: "Texas 2 Node" },
    { ip: "46.21.151.242:9023:ny74511:ny63149tua", location: "New York  Node" },
    { ip: "46.21.151.242:9033:c244f32s:c756asffw", location: "New York 2 Node" },
    { ip: "67.217.244.3:5700:ca414452:ca85216wer", location: "California Node" },
    { ip: "46.21.151.242:9019:ga1741dws:g852sdf49", location: "Georgia Node" },
    { ip: "67.217.244.3:9001:fl144sa5:f65asf79", location: "Florida Node" },
    { ip: "                 18 March 2025               ", location: "Birth" },
    { ip: "                 16 April 2025               ", location: "Death" },
    { ip: "https://drive.google.com/drive/folders/1RG_C7VNh6a8WPOH-ojtnm_b-h3CVmg3Y?usp=sharing", location: "Drive Link" }
  ],
  noyon7fd: [
    { ip: "74.208.205.97:9001:tx5747df5s:tx314694qhs", location: "Texas Node" },
    { ip: "207.244.246.180:10100:tx2414fs:tx49753af", location: "Texas 2 Node" },
    { ip: "46.21.151.242:9023:ny74511:ny63149tua", location: "New York  Node" },
    { ip: "46.21.151.242:9033:c244f32s:c756asffw", location: "New York 2 Node" },
    { ip: "67.217.244.3:5700:ca414452:ca85216wer", location: "California Node" },
    { ip: "46.21.151.242:9019:ga1741dws:g852sdf49", location: "Georgia Node" },
    { ip: "67.217.244.3:9001:fl144sa5:f65asf79", location: "Florida Node" },
    { ip: "                 18 March 2025               ", location: "Birth" },
    { ip: "                 16 April 2025               ", location: "Death" },
    { ip: "https://drive.google.com/drive/folders/1RG_C7VNh6a8WPOH-ojtnm_b-h3CVmg3Y?usp=sharing", location: "Drive Link" }
  ],
  jihad28: [
    { ip: "74.208.205.97:9001:tx5747df5s:tx314694qhs", location: "Texas Node" },
    { ip: "207.244.246.180:10100:tx2414fs:tx49753af", location: "Texas 2 Node" },
    { ip: "46.21.151.242:9023:ny74511:ny63149tua", location: "New York  Node" },
    { ip: "46.21.151.242:9033:c244f32s:c756asffw", location: "New York 2 Node" },
    { ip: "67.217.244.3:5700:ca414452:ca85216wer", location: "California Node" },
    { ip: "46.21.151.242:9019:ga1741dws:g852sdf49", location: "Georgia Node" },
    { ip: "67.217.244.3:9001:fl144sa5:f65asf79", location: "Florida Node" },
    { ip: "                 18 March 2025               ", location: "Birth" },
    { ip: "                 16 April 2025               ", location: "Death" },
    { ip: "https://drive.google.com/drive/folders/1RG_C7VNh6a8WPOH-ojtnm_b-h3CVmg3Y?usp=sharing", location: "Drive Link" }
  ],
  alif9g: [
    { ip: "74.208.205.97:9001:tx5747df5s:tx314694qhs", location: "Texas Node" },
    { ip: "207.244.246.180:10100:tx2414fs:tx49753af", location: "Texas 2 Node" },
    { ip: "46.21.151.242:9023:ny74511:ny63149tua", location: "New York  Node" },
    { ip: "46.21.151.242:9033:c244f32s:c756asffw", location: "New York 2 Node" },
    { ip: "67.217.244.3:5700:ca414452:ca85216wer", location: "California Node" },
    { ip: "46.21.151.242:9019:ga1741dws:g852sdf49", location: "Georgia Node" },
    { ip: "67.217.244.3:9001:fl144sa5:f65asf79", location: "Florida Node" },
    { ip: "                 18 March 2025               ", location: "Birth" },
    { ip: "                 16 April 2025               ", location: "Death" },
    { ip: "https://drive.google.com/drive/folders/1RG_C7VNh6a8WPOH-ojtnm_b-h3CVmg3Y?usp=sharing", location: "Drive Link" }
  ],
  hridoy39: [
    { ip: "74.208.205.97:9001:tx5747df5s:tx314694qhs", location: "Texas Node" },
    { ip: "207.244.246.180:10100:tx2414fs:tx49753af", location: "Texas 2 Node" },
    { ip: "46.21.151.242:9023:ny74511:ny63149tua", location: "New York  Node" },
    { ip: "46.21.151.242:9033:c244f32s:c756asffw", location: "New York 2 Node" },
    { ip: "67.217.244.3:5700:ca414452:ca85216wer", location: "California Node" },
    { ip: "46.21.151.242:9019:ga1741dws:g852sdf49", location: "Georgia Node" },
    { ip: "67.217.244.3:9001:fl144sa5:f65asf79", location: "Florida Node" },
    { ip: "                 23 March 2025               ", location: "Birth" },
    { ip: "                 21 April 2025               ", location: "Death" },
    { ip: "https://drive.google.com/drive/folders/1RG_C7VNh6a8WPOH-ojtnm_b-h3CVmg3Y?usp=sharing", location: "Drive Link" }
  ],
  tonmoy224: [
    { ip: "74.208.205.97:9001:tx5747df5s:tx314694qhs", location: "Texas Node" },
    { ip: "207.244.246.180:10100:tx2414fs:tx49753af", location: "Texas 2 Node" },
    { ip: "46.21.151.242:9023:ny74511:ny63149tua", location: "New York  Node" },
    { ip: "46.21.151.242:9033:c244f32s:c756asffw", location: "New York 2 Node" },
    { ip: "67.217.244.3:5700:ca414452:ca85216wer", location: "California Node" },
    { ip: "46.21.151.242:9019:ga1741dws:g852sdf49", location: "Georgia Node" },
    { ip: "67.217.244.3:9001:fl144sa5:f65asf79", location: "Florida Node" },
    { ip: "                 23 March 2025               ", location: "Birth" },
    { ip: "                 21 April 2025               ", location: "Death" },
    { ip: "https://drive.google.com/drive/folders/1RG_C7VNh6a8WPOH-ojtnm_b-h3CVmg3Y?usp=sharing", location: "Drive Link" }
  ],
  nibir3d: [
    { ip: "74.208.205.97:9001:tx5747df5s:tx314694qhs", location: "Texas Node" },
    { ip: "207.244.246.180:10100:tx2414fs:tx49753af", location: "Texas 2 Node" },
    { ip: "46.21.151.242:9023:ny74511:ny63149tua", location: "New York  Node" },
    { ip: "46.21.151.242:9033:c244f32s:c756asffw", location: "New York 2 Node" },
    { ip: "67.217.244.3:5700:ca414452:ca85216wer", location: "California Node" },
    { ip: "46.21.151.242:9019:ga1741dws:g852sdf49", location: "Georgia Node" },
    { ip: "67.217.244.3:9001:fl144sa5:f65asf79", location: "Florida Node" },
    { ip: "                 18 March 2025               ", location: "Birth" },
    { ip: "                 16 April 2025               ", location: "Death" },
    { ip: "https://drive.google.com/drive/folders/1RG_C7VNh6a8WPOH-ojtnm_b-h3CVmg3Y?usp=sharing", location: "Drive Link" }
  ],
  shimul3d: [
    { ip: "74.208.205.97:9001:tx5747df5s:tx314694qhs", location: "Texas Node" },
    { ip: "207.244.246.180:10100:tx2414fs:tx49753af", location: "Texas 2 Node" },
    { ip: "46.21.151.242:9023:ny74511:ny63149tua", location: "New York  Node" },
    { ip: "46.21.151.242:9033:c244f32s:c756asffw", location: "New York 2 Node" },
    { ip: "67.217.244.3:5700:ca414452:ca85216wer", location: "California Node" },
    { ip: "46.21.151.242:9019:ga1741dws:g852sdf49", location: "Georgia Node" },
    { ip: "67.217.244.3:9001:fl144sa5:f65asf79", location: "Florida Node" },
    { ip: "                 26 March 2025               ", location: "Birth" },
    { ip: "                 24 April 2025               ", location: "Death" },
    { ip: "https://drive.google.com/drive/folders/1RG_C7VNh6a8WPOH-ojtnm_b-h3CVmg3Y?usp=sharing", location: "Drive Link" }
  ],
  f: [
    { ip: "67.217.243.238:10580:ca24fd14ds:cgh5dgfv", location: "California 2 NODE" },
    { ip: "67.217.244.5:9050:ny054czvrfd:cs46f4wef", location: "New York  NODE" },
    { ip: "                 18 March 2025               ", location: "Birth" },
    { ip: "                 16 April 2025               ", location: "Death" },
    { ip: "https://drive.google.com/drive/folders/1RG_C7VNh6a8WPOH-ojtnm_b-h3CVmg3Y?usp=sharing", location: "Drive Link" }
  ],
  g: [
    { ip: "67.217.243.238:10580:ca24fd14ds:cgh5dgfv", location: "California 2 NODE" },
    { ip: "67.217.244.5:9050:ny054czvrfd:cs46f4wef", location: "New York  NODE" },
    { ip: "                 18 March 2025               ", location: "Birth" },
    { ip: "                 16 April 2025               ", location: "Death" },
    { ip: "https://drive.google.com/drive/folders/1RG_C7VNh6a8WPOH-ojtnm_b-h3CVmg3Y?usp=sharing", location: "Drive Link" }
  ],
  niloy3d: [
    { ip: "147.135.129.37:10115:QVDaS:3vW6p", location: "Primary Node" },
    { ip: "74.208.205.97:9001:tx5747df5s:tx314694qhs", location: "Texas Node" },
    { ip: "207.244.246.180:10100:tx2414fs:tx49753af", location: "Texas 2 Node" },
    { ip: "46.21.151.242:9023:ny74511:ny63149tua", location: "New York  Node" },
    { ip: "46.21.151.242:9033:c244f32s:c756asffw", location: "New York 2 Node" },
    { ip: "67.217.244.3:5700:ca414452:ca85216wer", location: "California Node" },
    { ip: "46.21.151.242:9019:ga1741dws:g852sdf49", location: "Georgia Node" },
    { ip: "67.217.244.3:9001:fl144sa5:f65asf79", location: "Florida Node" },
    { ip: "                 18 March 2025               ", location: "Birth" },
    { ip: "                 16 April 2025               ", location: "Death" },
    { ip: "https://drive.google.com/drive/folders/1RG_C7VNh6a8WPOH-ojtnm_b-h3CVmg3Y?usp=sharing", location: "Drive Link" }
  ],
  com1: [
    { ip: "147.135.129.37:10115:QVDaS:3vW6p", location: "Primary Node" },
    { ip: "74.208.205.97:9001:tx5747df5s:tx314694qhs", location: "Texas Node" },
    { ip: "207.244.246.180:10100:tx2414fs:tx49753af", location: "Texas 2 Node" },
    { ip: "46.21.151.242:9023:ny74511:ny63149tua", location: "New York  Node" },
    { ip: "46.21.151.242:9033:c244f32s:c756asffw", location: "New York 2 Node" },
    { ip: "67.217.244.3:5700:ca414452:ca85216wer", location: "California Node" },
    { ip: "46.21.151.242:9019:ga1741dws:g852sdf49", location: "Georgia Node" },
    { ip: "67.217.244.3:9001:fl144sa5:f65asf79", location: "Florida Node" },
    { ip: "https://drive.google.com/drive/folders/1RG_C7VNh6a8WPOH-ojtnm_b-h3CVmg3Y?usp=sharing", location: "Drive Link" }
  ]
};

// Collection of funny error messages
const errorMessages = [
  "⚠️ Nice try! This isn't the password.",
  "⛔ Oops! That password was last correct in an alternate timeline.",
  "🤡 That password is a joke, right? RIGHT?!",
  "🕵️‍♂️ Nice guess! If this were 1892, it might've worked.",
  "🐌 Your password attempt was so bad, even a snail outran it.",
  "📟 Our security system just faxed your password attempt to the past.",
  "🔄 Processing… Just kidding, it's wrong.",
  "👽 Even aliens don't recognize that password.",
  "💥 Your attempt was so wrong, the system self-destructed… almost.",
  "🎭 That password deserves an award—for best incorrect attempt.",
  "🚦 Red light! That password isn't going anywhere.",
  "🚷 This password is so incorrect, it got banned from the internet.",
  "📢 Breaking News: Local user enters wrong password… again.",
  "📉 That password was so bad, our server's confidence level dropped.",
  "💀 That attempt just resurrected an ancient IT curse.",
  "🍩 Close, but no donut.",
  "🏴‍☠️ If passwords were treasure, you just dug in the wrong ocean.",
  "🌪️ That guess was so off, it caused a butterfly effect somewhere.",
  "🐦 Your password attempt just got tweeted as 'most creative fail'.",
  "🕹️ Nice try, Player 2, but this is a single-player game.",
  "🏗️ That password is under construction. Try another.",
  "🎬 That attempt was rejected by the Academy for lack of originality.",
  "🕰️ If you entered that password in the 1800s, it might have worked.",
  "🌍 Congratulations! You've discovered a new continent of incorrectness.",
  "🔮 My crystal ball says… nope, not your password.",
  "🐉 That attempt just woke up the security dragon.",
  "🚔 Warning: Your password attempt has been reported to the pun police.",
  "🔒 Access denied! Did you think it would be that easy?",
  "🤖 ERROR: Human intelligence detected. Please try harder.",
  "🛑 That password is as correct as dividing by zero.",
  "🔍 Our quantum algorithm detected your incorrect password before you even typed it.",
  "⚡ Your password attempt was so wrong, it created a disturbance in the Force.",
  "🚫 If passwords were doors, you just walked into a wall.",
  "💾 Your password has been added to our 'nice attempts' database.",
  "🛸 The aliens controlling this system are laughing at your attempt.",
  "🔐 Our AI just filed that password under 'creative but incorrect'.",
  "🧠 Your neural interface appears to be malfunctioning. Try rebooting your brain.",
  "🦄 That password is as real as unicorns.",
  "🤯 Password so wrong it broke our incorrect counter.",
  "👾 You've unlocked the 'keep trying' achievement!",
  "🔥 Your password attempt was incinerated by our security dragons.",
  "🌌 That password exists in a parallel universe, not this one.",
  "🤔 Hmm... innovative approach, still wrong though.",
  "📊 Our statistics show a 0.0001% chance of you guessing correctly. Keep trying!",
  "🧩 So close, yet so cosmically far away.",
  "🚀 Your password traveled to space and came back with no matches."
];

// Add this array of success messages
const successMessages = [
    "🎯 Access granted! Your hacking skills are almost as good as your coffee addiction.",
    "🚀 Authentication successful! Your password game is stronger than a double espresso.",
    "🔓 Welcome aboard! You've just unlocked the digital equivalent of Narnia.",
    "✨ Access granted! You're officially cooler than a quantum computer in a freezer.",
    "🎮 Level unlocked! You're now playing in god mode.",
    "🌟 Identity confirmed! You're either a genius or you found the sticky note under the keyboard.",
    "🎭 Welcome, Agent! Your mission, should you choose to accept it, has already begun.",
    "🎪 Ta-da! You've successfully pulled a digital rabbit out of the authentication hat.",
    "🎸 Access granted! You're now rocking the cybersecurity stage.",
    "🎨 Authentication successful! Leonardo da Vinci would be proud of your code art.",
    "🎭 Welcome to the matrix! Red pill successfully digested.",
    "🦄 Access granted! You've found the unicorn of passwords.",
    "🎪 Welcome to the digital circus! You're now the ringmaster.",
    "🔮 Authentication successful! The cyber oracle predicted your arrival.",
    "🚁 Cleared for landing in the mainframe! Your virtual helicopter is now boarding.",
    "🎯 Bullseye! You've hit the authentication target dead center.",
    "🎪 Welcome to the show! Your ticket has been validated by our AI bouncer.",
    "🎨 Access granted! Your password is a masterpiece of modern security art.",
    "🎭 Identity confirmed! Even James Bond is taking notes.",
    "🔓 Access granted! Your password skills are sharper than a ninja's katana.",  
    "🚀 Welcome aboard! Your authentication speed just broke the sound barrier.",  
    "🎩 Ta-da! You've magically unlocked the gates of cyberspace.",  
    "🎮 Cheat code accepted! Unlimited access unlocked.",  
    "🛸 Access granted! You've just been beamed into the system.",  
    "🏆 Welcome, VIP! Even our firewalls are rolling out the red carpet.",  
    "🏆 Congratulations! You just won the grand prize in the password Olympics.",  
    "🎭 Welcome, Master of Disguise! Your login was as smooth as a secret agent's.",  
    "🌟 Identity verified! You're now the chosen one… at least for this login.",  
    "🔥 Authentication successful! Your password game is hotter than a dragon's breath.",  
    "⚡ Access granted! Even The Flash couldn't log in faster.",  
    "🎯 Bullseye! Your password precision is worthy of a digital sniper.",  
    "🎶 Welcome! Your login attempt just dropped the hottest track of the year.",  
    "🔮 The system foresaw your arrival… and prepared the VIP entrance.",  
    "🍕 Authentication complete! Free pizza has been delivered to your virtual doorstep.",  
    "🎸 Rock on! You just shredded that login like a guitar solo.",  
    "🚦 Green light! Your password game is smoother than a self-driving car.",  
    "📜 Access granted! The ancient scrolls predicted you'd be worthy.",  
    "🌌 Welcome to the cyberspace galaxy! Your password is the guiding star.",  
    "🎩 Hocus pocus! Your login just performed a successful digital magic trick.",
    "🌟 Welcome! You've just earned your digital frequent flyer miles."
];

function checkPassword() {
  const password = document.getElementById('passwordInput').value;
  const loginSection = document.getElementById('loginSection');
  const ipSection = document.getElementById('ipSection');
  const container = document.querySelector('.container');
  const siteTitle = document.querySelector('.site-title');

  if (users[password]) {
    currentUser = password;
    showToast(true);
    
    // Hide login section and show IP section immediately
    loginSection.style.display = 'none';
    ipSection.classList.remove('hidden');
    container.classList.add('expanded');
    displayIPs(users[password]);
    
    // Hide the site title
    siteTitle.classList.add('hidden-title');
    
    // Add glitch effect to IP section title
    const ipTitle = document.querySelector('.tech-header h2');
    ipTitle.classList.add('glitch-text');
    
    // Add scanline effect
    const scanline = document.createElement('div');
    scanline.className = 'scanline';
    container.appendChild(scanline);
  } else {
    showToast(false);
    document.getElementById('passwordInput').value = '';
  }
}

function displayIPs(ipList) {
  const downloadButton = `
    <div class="download-button-container">
      <button class="download-button" onclick="downloadZipFile()">
        <i class="fas fa-download"></i>
        <span>DOWNLOAD DATA</span>
        <div class="button-glow"></div>
      </button>
    </div>
  `;
  const ipDisplay = document.getElementById('ipDisplay');
  ipDisplay.innerHTML = `
    <div class="title-spacing"></div>
    ${ipList.map((ip, index) => `
      <div class="ip-item" onclick="copyIP('${ip.ip.replace(/'/g, "\\'")}')" style="animation-delay: ${index * 0.1}s">
        <div class="ip-content">
          <span class="ip-location">${ip.location}</span>
          <div class="ip-address">${ip.ip}</div>
        </div>
        <i class="fas fa-copy copy-icon"></i>
      </div>
    `).join('')}
    ${downloadButton}`;
}

function copyIP(ip) {
  // Prevent the click event from bubbling up
  event.stopPropagation();
  
  // Create a temporary textarea element
  const textarea = document.createElement('textarea');
  textarea.value = ip;
  document.body.appendChild(textarea);
  
  try {
    // Select and copy the text
    textarea.select();
    document.execCommand('copy');
    
    // Show the toast notification
    const toast = document.getElementById('copyToast');
    toast.classList.add('toast-visible');
    setTimeout(() => toast.classList.remove('toast-visible'), 1500);
  } catch (err) {
    console.error('Failed to copy:', err);
  } finally {
    // Clean up the temporary element
    document.body.removeChild(textarea);
  }
}

// Add this to handle modern browsers that support the Clipboard API
async function modernCopyIP(ip) {
  try {
    await navigator.clipboard.writeText(ip);
    const toast = document.getElementById('copyToast');
    toast.classList.add('toast-visible');
    setTimeout(() => toast.classList.remove('toast-visible'), 1500);
  } catch (err) {
    console.error('Failed to copy:', err);
    // Fallback to the old method
    copyIP(ip);
  }
}

// Add this function to handle window resize
window.addEventListener('resize', () => {
  const ipSection = document.getElementById('ipSection');
  if (!ipSection.classList.contains('hidden')) {
    const container = document.querySelector('.container');
    container.classList.add('expanded');
  }
});

// Reset on refresh
window.addEventListener('load', () => {
  document.getElementById('loginSection').classList.remove('hidden');
  document.getElementById('ipSection').classList.add('hidden');
  document.getElementById('passwordInput').value = '';
  document.querySelector('.container').classList.remove('expanded');
  
  // Show the site title on page load
  const siteTitle = document.querySelector('.site-title');
  siteTitle.classList.remove('hidden-title');
  
  // Start updating tech stats
  setInterval(updateTechStats, 2000);
  updateTechStats(); // Initial update
});

// Add event listener for Enter key
document.getElementById('passwordInput').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    checkPassword();
  }
});

// Add these functions at the end of the file, before any other code
function generateRandomUptime() {
  return (99.90 + Math.random() * 0.09).toFixed(2);
}

function generateRandomNodeCount() {
  return Math.floor(Math.random() * 8) + 5;
}

function downloadZipFile() {
  let zipFileName;
  
  switch(currentUser) {
    case 'nokib3d':
      zipFileName = 'Nokib.zip';
      break;
    case 'borhan2df':
      zipFileName = 'Borhan.zip';
      break;
    case 'tanbir4d':
      zipFileName = 'Tanbir.zip';
      break;
    case 'riyad33f':
      zipFileName = 'Riyad.zip';
      break;
    case 'noyon7fd':
      zipFileName = 'Noyon.zip';
      break;
    case 'jihad28':
      zipFileName = 'Jihad.zip';
      break;
    case 'alif9g':
      zipFileName = 'Alif.zip';
      break;
    case 'hridoy39':
      zipFileName = 'Hridoy.zip';
      break;
    case 'tonmoy224':
      zipFileName = 'Tonmoy.zip';
      break;
    case 'nibir3d':
      zipFileName = 'Nibir.zip';
      break;
    case 'niloy3d':
      zipFileName = 'Niloy.zip';
      break;
    case 'shimul3d':
      zipFileName = 'Shimul.zip';
      break;
    case 'g':
      zipFileName = 'g.zip';
      break;
    case 'g':
      zipFileName = 'g.zip';
      break;
    case 'g':
      zipFileName = 'g.zip';
      break;
    case 'comon':
      zipFileName = 'comon.zip';
      break;
    default:
      return;
  }

  // Check if file exists by trying to fetch it
  fetch(zipFileName)
    .then(response => {
      if (!response.ok) {
        // If file not found, redirect to 404.html
        window.location.href = '404.html';
        return;
      }
      // If file exists, trigger download
      const link = document.createElement('a');
      link.href = zipFileName;
      link.download = zipFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch(() => {
      // Handle network errors by redirecting to 404.html
      window.location.href = '404.html';
    });
}

function updateTechStats() {
  const nodeCountElement = document.getElementById('nodeCount');
  const uptimeElement = document.getElementById('uptime');
  
  if (nodeCountElement && uptimeElement) {
    const nodeCount = generateRandomNodeCount();
    const uptime = generateRandomUptime();
    
    nodeCountElement.textContent = nodeCount;
    uptimeElement.textContent = uptime;
  }
}

// Make sure this runs when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Start updating tech stats immediately
  updateTechStats();
  
  // Then update every 2 seconds
  setInterval(updateTechStats, 2000);
});

// Replace showSuccessToast with a combined toast function
function showToast(isSuccess) {
    const messages = isSuccess ? successMessages : errorMessages;
    const randomIndex = Math.floor(Math.random() * messages.length);
    const message = messages[randomIndex];
    
    // Remove any existing toasts
    const existingToast = document.querySelector('.toast-message');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create and show toast
    const toast = document.createElement('div');
    toast.className = `toast-message ${isSuccess ? 'success-toast' : 'error-toast'}`;
    
    // Add icon based on success/error
    const icon = isSuccess ? '🎯' : '⚠️';
    
    toast.innerHTML = `
        <div class="toast-content">
            <div class="toast-icon">${icon}</div>
            <div class="toast-text">${message}</div>
        </div>
        ${!isSuccess ? '<div class="toast-progress"></div>' : ''}
    `;
    
    document.body.appendChild(toast);
    
    // Remove toast after animation
    setTimeout(() => {
        toast.remove();
    }, isSuccess ? 3000 : 3000); // Error messages show longer
}
