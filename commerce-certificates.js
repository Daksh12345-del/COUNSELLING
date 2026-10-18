// Career / certificate courses for Commerce with Maths students.
// Source: "Certificate Courses for Commerce Students: National and International Options".
// Hover info: first line = who it suits / who awards it, second line = career value / best for.
window.PCM_D = window.PCM_D || {};
Object.assign(window.PCM_D, {
  // ----- National certificates (India) -----
  'Tally Prime with GST': ['Beginners and B.Com students.', 'Accountant, billing executive, GST assistant.'],
  'GST Practitioner / Certificate in GST': ['Tax-focused students.', 'GST assistant, tax-consultancy support.'],
  'Income Tax / e-filing certificate': ['Commerce and law-oriented students.', 'Tax assistant, accounts executive.'],
  'Certificate in Financial Accounting': ['School and B.Com students.', 'Junior accountant, back-office roles.'],
  'NISM Certifications (Mutual Fund, Equity Derivatives, etc.)': ['Finance and investment aspirants.', 'Banking, mutual funds, stock-broking roles.'],
  'Certificate in Banking & Finance': ['Banking aspirants.', 'Bank clerk / PO preparation, NBFC roles.'],
  'Digital Marketing Certificate': ['Students interested in business promotion.', 'Social media, SEO, performance marketing.'],
  'Excel + Power BI / Data Analytics': ['Commerce students entering corporate jobs.', 'MIS executive, business analyst trainee.'],
  'Company Secretary (CS) Foundation-stage preparation': ['Corporate-law aspirants.', 'CS career pathway.'],
  'CA Foundation preparation': ['Accounting and auditing aspirants.', 'Chartered Accountancy pathway.'],
  // ----- International certificates -----
  'ACCA': ['UK-based global accounting body.', 'International accounting, audit and taxation.'],
  'CMA (USA)': ['Institute of Management Accountants, USA.', 'Management accounting, budgeting and cost control.'],
  'CFA': ['CFA Institute, USA.', 'Investment analysis, portfolio management and equity research.'],
  'FRM': ['Global Association of Risk Professionals.', 'Risk management, banking and financial modelling.'],
  'CPA (US)': ['American Institute of CPAs.', 'US accounting and audit careers.'],
  'CIMA': ['UK-based management-accounting body.', 'Business finance and management accounting.'],
  'SAP FICO certification': ['SAP.', 'ERP, finance systems and corporate IT-finance roles.'],
  'Global Trade / Export-Import Certificate': ['ICC Academy.', 'International trade, export-import documentation and trade finance.']
});

window.COMMERCE_EXTRA_CARDS = [
  {
    icon: '🇮🇳', title: 'Career Courses: National Certificates',
    desc: 'Short certificate courses (India) that add job-ready skills alongside a degree. Pick based on your goal: accounting, taxation, banking, analytics, digital marketing or professional pathways.',
    labels: ['Suitable for', 'Career value'],
    groups: [{ h: 'National certificates', items: ['Tally Prime with GST', 'GST Practitioner / Certificate in GST', 'Income Tax / e-filing certificate', 'Certificate in Financial Accounting', 'NISM Certifications (Mutual Fund, Equity Derivatives, etc.)', 'Certificate in Banking & Finance', 'Digital Marketing Certificate', 'Excel + Power BI / Data Analytics', 'Company Secretary (CS) Foundation-stage preparation', 'CA Foundation preparation'] }]
  },
  {
    icon: '🌍', title: 'Career Courses: International Certificates',
    desc: 'Globally recognised qualifications for accounting, finance, risk and trade careers in India and abroad. These need more time and investment, so they are better as long-term goals than first certificates.',
    labels: ['Awarded by', 'Best for'],
    groups: [{ h: 'International certificates', items: ['ACCA', 'CMA (USA)', 'CFA', 'FRM', 'CPA (US)', 'CIMA', 'SAP FICO certification', 'Global Trade / Export-Import Certificate'] }]
  },
  {
    icon: '🧭', title: 'Which Career Course Should You Choose?', wide: true,
    desc: 'The best certificate depends on your career goal.',
    items: [
      '<b>Job soon after Class 12 / B.Com:</b> Tally Prime + GST + Advanced Excel / Power BI',
      '<b>Accounting career abroad:</b> ACCA or CPA (US)',
      '<b>Finance / investment career:</b> CFA, NISM or FRM',
      '<b>Management accounting:</b> CMA (USA) or CIMA',
      '<b>Export-import / international business:</b> ICC Academy Export-Import or Global Trade Certificate',
      '<b>Corporate / tech-finance roles:</b> SAP FICO, Power BI, SQL and financial modelling',
      '<b>Low-cost pathway:</b> 1) Tally Prime + GST, 2) Advanced Excel + Power BI, 3) NISM or Digital Marketing, 4) ACCA / CMA / CFA later'
    ]
  }
];
