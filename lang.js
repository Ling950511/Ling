const translations = {
  fr: {
    titre: "Bienvenue sur mon site",
    description: "Ceci est un projet artistique unique.",
    "lien-contact": "Contactez-moi"
  },
  en: {
    titre: "Welcome to my website",
    description: "This is a unique artistic project.",
    "lien-contact": "Contact me"
  },
  th: {
    titre: "ยินดีต้อนรับสู่เว็บไซต์ของฉัน",
    description: "นี่คือโปรเจกต์ศิลปะที่ไม่เหมือนใคร",
    "lien-contact": "ติดต่อฉัน"
  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[id]");
  elements.forEach(el => {
    const key = el.id;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
