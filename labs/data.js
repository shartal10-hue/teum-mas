/*
 * נתוני המעבדות.
 * ----------------------------------------------------------------------------
 * זהו המקור היחיד לנתונים: כל מעבדה היא אובייקט במערך LABS.
 * עמוד הרשימה (index.html) בונה כרטיס + קישור לכל מעבדה,
 * ועמוד הפרופיל (lab.html?id=...) מציג את כל השדות של המעבדה.
 *
 * השדות (לפי הבקשה):
 *   id                 מזהה ייחודי לקישור (אנגלית, ללא רווחים)
 *   name               שם המעבדה
 *   logo               נתיב / כתובת ללוגו (אופציונלי)
 *   shortDescription   תיאור קצר
 *   valueProposition   הצעת ערך ייחודית
 *   leadingCompany     חברה עסקית מובילה
 *   partners           שותפים                       (מערך)
 *   dedicatedFunding   מימון ייעודי
 *   challenges         אתגרים                       (מערך)
 *   bguResearchers     חוקרים באוניברסיטת בן גוריון (מערך)
 *   researchInstitutes מכוני מחקר                   (מערך)
 *   departments        מחלקות                       (מערך)
 *   faculties          פקולטות                      (מערך)
 *   infraTrl2to5       תשתיות מחקר ל-TRL 2-5         (מערך)
 *   infraTrl6plus      תשתיות מחקר ל-TRL 6+          (מערך)
 *   infraQuarter       תשתיות ברובע                 (מערך)
 *   infraBeerSheva     תשתיות בבאר שבע               (מערך)
 *   infraNegev         תשתיות בנגב                   (מערך)
 *   innovationAuthorityFunding  מימון מרשות החדשנות
 *   horizonEuropeFunding        מימון מהוריזון אירופה
 *   scientificLead     מוביל מדעי
 *   businessDevelopment פיתוח עסקי
 *   location           איפה יושבים
 *   annualConference   כנס שנתי בחו"ל
 *
 * הנתונים למטה הם דוגמה להמחשת המבנה — יש להחליפם בנתונים אמיתיים.
 */
const LABS = [
  {
    id: "quantum",
    name: "מעבדת קוונטום ננו",
    logo: "",
    shortDescription: "מעבדה לחישוב ולחיישנים קוונטיים מבוססי ננו-טכנולוגיה.",
    valueProposition: "פיתוח חיישנים קוונטיים בדיוק חסר תקדים תוך קיצור משמעותי של זמן ההגעה לשוק.",
    leadingCompany: "Quantum Sense בע\"מ (דוגמה)",
    partners: ["חברת חומרים מתקדמים (דוגמה)", "סטארט-אפ חיישנים (דוגמה)"],
    dedicatedFunding: "12 מיליון ש\"ח לאורך 3 שנים (דוגמה)",
    challenges: [
      "ייצוב תאי קוונטום בטמפרטורת חדר",
      "הקטנת רעש מדידה",
    ],
    bguResearchers: ["פרופ' דוגמה כהן", "ד\"ר דוגמה לוי"],
    researchInstitutes: ["המכון לננו-טכנולוגיה ע\"ש אילסה כ\"ץ"],
    departments: ["הנדסת חשמל ומחשבים", "פיזיקה"],
    faculties: ["הפקולטה למדעי ההנדסה", "הפקולטה למדעי הטבע"],
    infraTrl2to5: ["מעבדת קֶריוסטט", "חדר נקי ננו"],
    infraTrl6plus: ["קו ייצור פיילוט לחיישנים"],
    infraQuarter: ["מרכז חדשנות ברובע ההיי-טק, באר שבע"],
    infraBeerSheva: ["מתחם המחקר בקמפוס מרקוס"],
    infraNegev: ["אתר ניסויי שדה במצפה רמון (דוגמה)"],
    innovationAuthorityFunding: "מאגד מגנ\"ט פעיל (דוגמה)",
    horizonEuropeFunding: "מענק EIC Pathfinder (דוגמה)",
    scientificLead: "פרופ' דוגמה כהן",
    businessDevelopment: "מר דוגמה אברהם, מנהל פיתוח עסקי",
    location: "בניין 51, קמפוס מרקוס, אוניברסיטת בן-גוריון",
    annualConference: "Quantum Tech Europe, ברלין",
  },
  {
    id: "biomed",
    name: "מעבדת ביו-רפואה דיגיטלית",
    logo: "",
    shortDescription: "מעבדה לפיתוח אבחון רפואי מבוסס בינה מלאכותית ונתוני חולים.",
    valueProposition: "קיצור זמן האבחון ושיפור דיוקו באמצעות מודלים מותאמים-מטופל.",
    leadingCompany: "MedAI Solutions (דוגמה)",
    partners: ["מרכז רפואי סורוקה", "חברת מכשור רפואי (דוגמה)"],
    dedicatedFunding: "8 מיליון ש\"ח (דוגמה)",
    challenges: [
      "פרטיות נתוני מטופלים",
      "אישור רגולטורי (FDA / CE)",
    ],
    bguResearchers: ["פרופ' דוגמה מזרחי", "ד\"ר דוגמה פרץ"],
    researchInstitutes: ["המכון הלאומי לביוטכנולוגיה בנגב (NIBN)"],
    departments: ["הנדסת ביו-רפואה", "מדעי המחשב"],
    faculties: ["הפקולטה למדעי ההנדסה", "הפקולטה למדעי הבריאות"],
    infraTrl2to5: ["מעבדת עיבוד תמונה רפואית"],
    infraTrl6plus: ["סביבת בדיקות קלינית מבוקרת"],
    infraQuarter: ["חממת בריאות דיגיטלית ברובע"],
    infraBeerSheva: ["מעבדות הפקולטה לבריאות, קמפוס סורוקה"],
    infraNegev: ["רשת איסוף נתונים אזורית (דוגמה)"],
    innovationAuthorityFunding: "תכנית חממות טכנולוגיות (דוגמה)",
    horizonEuropeFunding: "מענק Horizon Health Cluster (דוגמה)",
    scientificLead: "פרופ' דוגמה מזרחי",
    businessDevelopment: "גב' דוגמה ביטון, פיתוח עסקי",
    location: "קמפוס הפקולטה למדעי הבריאות, באר שבע",
    annualConference: "MedTech Europe, אמסטרדם",
  },
];
