/* ============================================================
   이 파일만 고치면 News / Publications / 버튼 링크가 바뀝니다.
   (HTML을 건드릴 필요 없음)
   ============================================================ */

/* ---- 프로필 링크: 빈 문자열("")이면 해당 버튼이 자동으로 숨겨집니다 ---- */
const SITE = {
  name: "Jingyeong Jo",
  emailUser: "jingyeongjo99",          // 스팸 수집 방지를 위해 주소를 나눠서 적음
  emailDomain: "gmail.com",
  orcid: "https://orcid.org/0009-0003-9218-7000",
  scholar: "https://scholar.google.com/citations?user=FXCnNPgAAAAJ&hl=en",
  cv: ""                                // 예: "files/CV_Jingyeong_Jo.pdf" (files 폴더에 PDF를 넣은 뒤 입력)
};

/* ---- News: 최신 항목을 맨 위에 추가. 처음 5개만 보이고 나머지는 "Show More" ---- */
const NEWS = [
  { date: "Nov. 26",  content: "📌 Presenting a poster at <a href=\"publications.html#presentations\">IMCVP 2026</a> in Seoul" },
  { date: "Oct. 26",  content: "📝 Submitted the ISO-BP trial protocol to <em>BMC Sports Science, Medicine and Rehabilitation</em>" },
  { date: "Sep. 26",  content: "📄 Our review <a href=\"https://doi.org/10.1007/s11886-026-02419-8\">“Diet Versus Exercise in Cardiometabolic Disease”</a> was published in <em>Current Cardiology Reports</em>" },
  { date: "2026",     content: "🎉 Awarded a Master's Student Research Grant from the National Research Foundation of Korea as Principal Investigator (2026–2027)" },
  { date: "2026",     content: "📌 Presented a poster at APCMS 2026 in Seoul" },
  { date: "Mar. 26",  content: "📄 Our review on <a href=\"https://doi.org/10.5763/kjsm.2026.44.1.4\">resistance-based exercise snacks</a> was published in <em>The Korean Journal of Sports Medicine</em>" },
  { date: "Mar. 26",  content: "🎤 Guest lectures on surface EMG in a graduate Biomechanics course at Ewha" },
  { date: "June 25",  content: "📄 Our review on <a href=\"https://doi.org/10.5763/kjsm.2025.43.2.61\">exercise strategies for frail cancer survivors</a> was published in <em>The Korean Journal of Sports Medicine</em>" },
  { date: "Mar. 25",  content: "🎓 Started my M.S. in Exercise Physiology at Ewha Womans University with a full-tuition merit scholarship" }
];

/* ---- Publications ----
   authors 안의 "Jingyeong Jo"는 자동으로 굵게 표시됩니다. 공동 1저자는 이름 뒤에 * 표시.
   links: [{ label: "Paper", url: "..." }, ...]  (첫 번째 링크가 강조색 버튼) */
const PUBLICATIONS = [
  {
    year: 2026,
    tag: "International",
    title: "Diet Versus Exercise in Cardiometabolic Disease: Are Two Always Better Than One?",
    authors: "Jingyeong Jo and Kyuwan Lee",
    venue: "<em>Current Cardiology Reports</em>, vol. 28, 95",
    links: [{ label: "Paper", url: "https://doi.org/10.1007/s11886-026-02419-8" }]
  },
  {
    year: 2026,
    tag: "Domestic",
    title: "Feasibility, Physiological Rationale, and Practical Application of Resistance-based Exercise Snacks",
    authors: "Kyuwan Lee and Jingyeong Jo",
    venue: "<em>The Korean Journal of Sports Medicine</em>, vol. 44, no. 1, pp. 4–15",
    links: [{ label: "Paper", url: "https://doi.org/10.5763/kjsm.2026.44.1.4" }]
  },
  {
    year: 2025,
    tag: "Domestic",
    title: "Exercise Strategies for Frail Cancer Survivors across Treatment Phases",
    authors: "Jingyeong Jo*, Sujin Park*, and Kyuwan Lee",
    venue: "<em>The Korean Journal of Sports Medicine</em>, vol. 43, no. 2, pp. 61–77",
    links: [{ label: "Paper", url: "https://doi.org/10.5763/kjsm.2025.43.2.61" }]
  }
];

/* ---- Under review / in preparation ---- */
const IN_PROGRESS = [
  {
    title: "Individualized Home-Based Isometric Wall Squat Training for Blood Pressure (ISO-BP) Trial: Study Protocol for a Randomized Controlled Trial",
    authors: "Kyuwan Lee, Jingyeong Jo, Hyokyung Son, Seo-Yeon Lee, Seul-gi Yang, Seo-Yeon Gwak, and Jin Oh Na",
    venue: "<em>BMC Sports Science, Medicine and Rehabilitation</em> (under review)",
    links: []
  },
  {
    title: "Toward a Standardized Intensity Prescription and Clinical Implementation of Isometric Wall Squat Training for Hypertension: A Critical Review",
    authors: "Jingyeong Jo and Kyuwan Lee",
    venue: "In preparation",
    links: []
  }
];

/* ---- Conference presentations ---- */
const PRESENTATIONS = [
  {
    title: "Anthropometric Characteristics and Dynamic Balance in Healthy Young Women",
    authors: "Jingyeong Jo, Songhee Seo, and Kyuwan Lee",
    venue: "The 3rd International Meeting of CardioVascular Disease Prevention (IMCVP 2026), Seoul, Korea, Nov. 2026. Poster.",
    links: []
  },
  {
    title: "Effects of an 8-Week Mat Pilates Program on Muscle Strength and Physical Function in Young Women with Premature Sarcopenia",
    authors: "Jingyeong Jo and Kyuwan Lee",
    venue: "Asia-Pacific Cardiometabolic Syndrome Congress (APCMS 2026), Seoul, Korea, 2026. Poster.",
    links: []
  }
];
