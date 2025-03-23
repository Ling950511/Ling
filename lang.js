const translations = {
  fr: {
    pageTitle: "Lingling Kwong",
    nav_home: "Accueil",
    nav_events: "Événements",
    nav_aw: "Always Wonder",
    nav_contact: "Contact",
    name: "Nom",
    job: "Profession",
    job_detail: "Actrice",
    nationality: "Nationalité",
    country: "Thaïlandaise",
    social: "Réseaux",
    title: "Bienvenue sur mon site",
    description: "Ceci est un projet artistique unique.",
    cta_contact: "Contactez-moi",
    section_events: "Événements",
    section_events_text: "Prochains événements à ne pas manquer...",
    section_aw: "Always Wonder",
    section_aw_text: "Découvrez Always Wonder..."
  },
  en: {
    pageTitle: "Lingling Kwong",
    nav_home: "Home",
    nav_events: "Events",
    nav_aw: "Always Wonder",
    nav_contact: "Contact",
    name: "Name",
    job: "Occupation",
    job_detail: "Actress",
    nationality: "Nationality",
    country: "Thai",
    social: "Socials",
    title: "Welcome to my website",
    description: "This is a unique artistic project.",
    cta_contact: "Contact me",
    section_events: "Events",
    section_events_text: "Upcoming events you won't want to miss...",
    section_aw: "Always Wonder",
    section_aw_text: "Explore Always Wonder..."
  },
  th: {
    pageTitle: "หลิงหลิง กว๋อง",
    nav_home: "หน้าแรก",
    nav_events: "กิจกรรม",
    nav_aw: "Always Wonder",
    nav_contact: "ติดต่อ",
    name: "ชื่อ",
    job: "อาชีพ",
    job_detail: "นักแสดง",
    nationality: "สัญชาติ",
    country: "ไทย",
    social: "โซเชียลมีเดีย",
    title: "ยินดีต้อนรับสู่เว็บไซต์ของฉัน",
    description: "นี่คือโปรเจกต์ศิลปะที่ไม่เหมือนใคร",
    cta_contact: "ติดต่อฉัน",
    section_events: "กิจกรรม",
    section_events_text: "กิจกรรมที่กำลังจะมาถึง ห้ามพลาด...",
    section_aw: "Always Wonder",
    section_aw_text: "สำรวจ Always Wonder..."
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
