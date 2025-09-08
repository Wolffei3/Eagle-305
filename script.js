const translations = {
  ar: {
    title: "أبو خالد - Eagle",
    subtitle: "خبرة ٥ سنوات في الحياة الواقعية وسنتين في البرمجة",
    "about-title": "عنّي",
    "about-text": "ترأست العديد من السيرفرات الشهيرة، شخص مخضرم بالمجال واسم كبير بالساحة. أقدّم مزايا مثل البرمجة الاحترافية والتصميم الجرافيكي وغيرها الكثير.",
    "skills-title": "المهارات",
    "skills-list": ["تصميم المواقع", "إدارة الأعمال", "البرمجة", "التصميم الجرافيكي"],
    "footer-text": "© 2025 جميع الحقوق محفوظة - أبو خالد"
  },
  en: {
    title: "Abu Khalid - Eagle",
    subtitle: "5 years of Real Life experience & 2 years in Programming",
    "about-title": "About Me",
    "about-text": "Led many popular servers, a veteran in the field and a strong name in the scene. Offering professional programming, graphic design, and much more.",
    "skills-title": "Skills",
    "skills-list": ["Web Design", "Business Management", "Programming", "Graphic Design"],
    "footer-text": "© 2025 All Rights Reserved - Abu Khalid"
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  for (let key in translations[lang]) {
    if (Array.isArray(translations[lang][key])) {
      const ul = document.getElementById(key);
      ul.innerHTML = "";
      translations[lang][key].forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
    } else {
      document.getElementById(key).textContent = translations[lang][key];
    }
  }
}
