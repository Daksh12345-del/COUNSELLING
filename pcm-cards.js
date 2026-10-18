// PCM service cards: every course / specialisation from the PCM guide, grouped under the 9 main PCM courses
// plus extra cards for other routes PCM students can take. Hover (or tap) a chip to see study + career details.
// Descriptions live in pcm-desc-a.js and pcm-desc-b.js (window.PCM_D).
Object.assign(window.PCM_D, {
  // ---------- ENTRANCE EXAMS ----------
  'JEE Main': ['National exam for B.E. / B.Tech admission (Paper 1) and B.Arch / B.Planning (Paper 2). Paper and institute-specific eligibility apply.', 'Admission to NITs, IIITs, CFTIs and many state / private colleges; gateway to JEE Advanced.'],
  'JEE Advanced': ['Exam for IIT undergraduate admission. Requires qualifying through JEE Main and meeting current criteria.', 'IIT B.Tech and related programmes.'],
  'CUET-UG': ['Common university entrance test for participating central and other universities. Course eligibility is set by each university.', 'B.Sc., BCA, BBA, B.A. and other UG programmes at DU, JNU, BHU and more.'],
  'NATA': ['Architecture aptitude test (drawing, observation, aesthetics). Qualifying is not a guarantee of admission.', 'B.Arch admission, along with JEE Main Paper 2 as per rules.'],
  'UCEED / NID DAT / NIFT tests': ['Design entrance tests: UCEED (IIT B.Des), NID DAT (NID) and NIFT entrance. Test and programme eligibility differ.', 'B.Des and fashion / design programmes at IITs, NID and NIFT.'],
  'CLAT / AILET': ['Law entrance tests for NLUs and participating law schools. Check current marks, age and programme rules.', 'BA LLB and other integrated law programmes.'],
  'IPMAT': ['Entrance for selected integrated management programmes; each institute has its own criteria.', 'Five-year integrated BBA–MBA / management programmes (IIMs and others).'],
  'NDA': ['UPSC defence officer-entry exam after Class 12, with wing-specific subject and medical requirements.', 'Officer training for Army, Navy and Air Force.'],
  'DGCA flight crew examinations': ['Pilot licensing exams; Physics, Maths, medical and licensing rules apply.', 'Commercial pilot licence pathway.'],
  'ISI / NEST / IISER routes': ['Admission routes for specialised science and research programmes; current participating programme rules apply.', 'Research-focused science and statistics degrees.'],
  'CA / CS / CMA entry exams': ['Professional accounting, company-secretary and cost-accounting pathways, each with its own registration and exams.', 'Accounting, compliance, audit and finance careers.'],
  'ACET / actuarial exams': ['Entry test for the actuarial profession; check current institute rules and progression requirements.', 'Actuarial career in insurance and finance.'],
  'GATE': ['Postgraduate engineering / science exam, also used for some recruitment routes.', 'M.Tech admission and PSU / research opportunities.'],
  'UPSC Civil Services': ['Civil services exam after graduation; requires a recognised degree and the current notification.', 'IAS, IPS, IFS and other services.'],
  'SSC CHSL / CGL': ['Government recruitment exams; different posts have different minimum qualifications.', 'Central-government posts at 10+2 and graduate level.'],
  'State PSC / banking exams': ['State public-service and bank recruitment; check each current notification.', 'State administrative, technical and banking roles.'],
  'NCHMCT JEE': ['National entrance exam for hotel-management programmes at IHMs and affiliated institutes.', 'BHM / hospitality degrees.'],
  'CAT / XAT / CMAT': ['Management entrance exams for MBA / PGDM admission after graduation.', 'IIMs, FMS, MDI and other B-schools.']
});

window.PCM_CARDS = [
  {
    icon: '⚙️', title: 'B.Tech / Engineering',
    desc: 'JEE Main & Advanced strategy and rank-to-college mapping for IITs, NITs, DTU, NSIT and top private colleges. Typically a 4-year B.E. / B.Tech.',
    groups: [
      { h: 'Computer & computing branches', items: ['Computer Science and Engineering (CSE)', 'Information Technology (IT)', 'Software Engineering', 'Artificial Intelligence and Machine Learning', 'Artificial Intelligence and Data Science', 'Data Science and Engineering', 'Cybersecurity', 'Cloud Computing', 'Internet of Things (IoT)', 'Blockchain Technology', 'Computer Science and Business Systems', 'Computer Engineering', 'Computational Engineering', 'Human-Computer Interaction and related computing programmes'] },
      { h: 'Electronics, electrical & communication', items: ['Electronics and Communication Engineering (ECE)', 'Electrical Engineering', 'Electrical and Electronics Engineering', 'Electronics Engineering', 'VLSI Design and Technology', 'Semiconductor Technology', 'Embedded Systems', 'Instrumentation and Control', 'Telecommunication Engineering', 'Power Systems', 'Microelectronics', 'Control and Automation'] },
      { h: 'Mechanical, manufacturing & mobility', items: ['Mechanical Engineering', 'Mechatronics', 'Robotics and Automation', 'Automobile Engineering', 'Automotive Design', 'Manufacturing Engineering', 'Production Engineering', 'Industrial Engineering', 'Tool Engineering', 'Marine Engineering', 'Aerospace Engineering', 'Aeronautical Engineering', 'Mining Engineering', 'Metallurgical Engineering', 'Materials Engineering', 'Textile Engineering'] },
      { h: 'Civil, chemical, energy & specialist', items: ['Civil Engineering', 'Construction Engineering and Management', 'Chemical Engineering', 'Petroleum Engineering', 'Petrochemical Engineering', 'Environmental Engineering', 'Agricultural Engineering', 'Food Technology', 'Biotechnology Engineering (eligibility varies)', 'Biomedical Engineering', 'Nuclear Engineering', 'Engineering Physics', 'Energy Engineering', 'Renewable Energy Engineering', 'Fire and Safety Engineering', 'Geoinformatics Engineering', 'Water Resources Engineering', 'Industrial Biotechnology'] }
    ],
    note: 'For NITs, IIITs and CFTIs, the JEE / NTA rules decide subject combinations and qualifying marks. State and private colleges may differ, so we check the admission-year bulletin for you.'
  },
  {
    icon: '💻', title: 'BCA / B.Sc Computer Science',
    desc: 'For PCM students targeting IT careers without JEE pressure. IPU CET, DU CUET and direct admission guidance. Programmes are usually 3 years, many with 4-year honours options.',
    groups: [
      { h: 'Degree options', items: ['BCA (Bachelor of Computer Applications)', 'B.Sc. Computer Science', 'B.Sc. Information Technology', 'B.Sc. Software Development', 'B.Sc. Data Science / Data Analytics', 'B.Sc. Artificial Intelligence', 'B.Sc. Cybersecurity', 'B.Sc. Cloud Computing', 'B.Sc. Computer Applications', 'B.Sc. Gaming Technology', 'Bachelor of Computer Science', 'Integrated BCA–MCA', 'Integrated B.Sc.–M.Sc. Computer Science', 'Bachelor\'s in Information Systems or Business Analytics'] },
      { h: 'Shorter skill & certification routes', items: ['Web development', 'Mobile application development', 'Python / Java / C++ programming', 'Data analysis (spreadsheets, SQL, Python, dashboards)', 'Cloud platforms and cloud administration', 'Cybersecurity fundamentals and defensive security', 'Networking and system administration', 'UI/UX design and product prototyping', 'Software testing and quality assurance', 'DevOps and deployment basics', 'Database administration', 'AI/ML foundations and applied projects'] }
    ],
    note: 'Certifications build a portfolio but do not replace a degree or guarantee a job. Projects and fundamentals matter most.'
  },
  {
    icon: '📐', title: 'B.Sc Mathematics / Statistics',
    desc: 'Pure Maths, Statistics and computation at DU, JNU, BHU and specialist institutes, leading to data science, research, actuarial and civil-services careers.',
    groups: [
      { h: 'Mathematics, statistics & computation', items: ['B.Sc. Mathematics / Applied Mathematics', 'B.Sc. Statistics', 'B.Stat. and B.Math. programmes at specialist institutions', 'B.Sc. Operations Research', 'B.Sc. Actuarial Science', 'B.Sc. Computational Mathematics', 'B.Sc. Financial Mathematics', 'B.Sc. Econometrics', 'B.Sc. Quantitative Economics', 'B.Sc. Data Analytics', 'Mathematics and Computing', 'Integrated BS-MS / Integrated M.Sc. science programmes'] }
    ]
  },
  {
    icon: '🏛️', title: 'B.Arch (Architecture) & Built Environment',
    desc: 'PCM students with Maths in Class 12 can pursue B.Arch via JEE Main Paper 2 or NATA, or choose related planning, interior and construction routes.',
    groups: [
      { h: 'Architecture, planning & construction', items: ['B.Arch. (Bachelor of Architecture), typically 5 years', 'B.Planning (Bachelor of Planning), commonly 4 years', 'Landscape architecture programmes', 'Interior design degrees', 'Urban and regional planning', 'Construction management', 'Quantity surveying', 'Building technology', 'Sustainable building design', 'Real estate and infrastructure management', 'Geoinformatics / GIS programmes', 'Civil engineering and structural engineering'] }
    ],
    note: 'NATA and JEE Main Paper 2 are the main routes, but the Council of Architecture\'s current rules and each prospectus decide eligibility. Passing an aptitude test alone does not guarantee admission.'
  },
  {
    icon: '🎨', title: 'B.Des (Design / UCEED)',
    desc: 'For PCM students with creative aptitude. UCEED (IITs), NID DAT and NIFT entrance guidance and portfolio prep, plus skill-first design routes.',
    groups: [
      { h: 'Design degrees', items: ['B.Des. Product Design', 'Industrial Design', 'Communication Design', 'Graphic Design', 'UI/UX and Interaction Design', 'Transportation / Automobile Design', 'Furniture Design', 'Fashion Design', 'Textile Design', 'Interior Design', 'Animation and Game Design', 'Visual Communication', 'Exhibition and Spatial Design'] },
      { h: 'Skill-first routes', items: ['Graphic design and brand identity', 'Video editing and colour grading', 'Motion design', '3D design', 'Social media content production', 'Copywriting and creative strategy', 'Web design and no-code tools', 'Portfolio development and client work'] }
    ]
  },
  {
    icon: '🎬', title: 'Media, Film & Animation',
    desc: 'Film, video, animation, VFX, photography, journalism and game art. Creative fields value portfolio quality and practical skills alongside formal qualifications.',
    groups: [
      { h: 'Media & production', items: ['Film and Television Production', 'Cinematography', 'Video Editing', 'Motion Graphics', 'Visual Effects (VFX)', '3D Modelling and Animation', 'Photography', 'Sound Design and Audio Production', 'Journalism and Mass Communication', 'Advertising and Public Relations', 'Digital Media Production', 'Game Art and Game Development'] }
    ]
  },
  {
    icon: '⚗️', title: 'B.Sc Physics / Chemistry & Research',
    desc: 'Honours science degrees at top DU, JNU and IISER-type institutes for research, defence and GATE pathways. Some careers need an M.Sc. or PhD.',
    groups: [
      { h: 'Physics, chemistry & related sciences', items: ['B.Sc. Physics / Applied Physics', 'B.Sc. Chemistry / Industrial Chemistry', 'B.Sc. Electronics', 'B.Sc. Materials Science', 'B.Sc. Nanoscience or Nanotechnology', 'B.Sc. Geology / Earth Science', 'B.Sc. Geophysics', 'B.Sc. Astronomy and Astrophysics (where offered)', 'B.Sc. Meteorology / Atmospheric Science', 'B.Sc. Oceanography', 'B.Sc. Environmental Science', 'B.Sc. Forensic Science (subject rules vary)', 'B.Sc. Instrumentation', 'B.Sc. Scientific Computing'] },
      { h: 'Research pathways', items: ['IISER science programmes and research-focused degrees', 'NEST-based integrated science programmes where applicable', 'IIT and university science degrees', 'Research internships and laboratory projects', 'M.Sc. followed by research / Ph.D.'] }
    ]
  },
  {
    icon: '🏨', title: 'BHM (Hotel Management) & Hospitality',
    desc: 'PCM students can join IHM Delhi and top hotel schools via NCHMCT JEE. Hospitality, tourism, events and airline-service careers, with 20+ years of expertise.',
    groups: [
      { h: 'Hospitality, tourism & services', items: ['BHM / Bachelor of Hotel Management', 'B.Sc. Hospitality and Hotel Administration', 'Hotel Management and Catering Technology', 'Culinary Arts', 'Food Production', 'Bakery and Patisserie', 'Food and Beverage Management', 'Travel and Tourism Management', 'Airline and Airport Management', 'Event Management', 'Luxury Brand Management', 'Resort and Cruise Management', 'Tourism and Destination Management', 'Cabin crew training pathways'] }
    ],
    note: 'Selection may include interviews, aptitude tests, language skills or medical / physical criteria for certain roles.'
  },
  {
    icon: '💼', title: 'BBA / Commerce / MBA',
    desc: 'PCM students can enter many management and commerce programmes at UG level, and PCM graduates can pivot to management via CAT, XAT and CMAT. Maths is an advantage in finance and analytics.',
    groups: [
      { h: 'Undergraduate degrees', items: ['BBA', 'BBA Finance / Marketing / HR / Operations', 'BBA Business Analytics', 'BBA Entrepreneurship', 'BBA International Business', 'BMS (Bachelor of Management Studies)', 'Integrated BBA–MBA / IPM programmes', 'B.Com. and B.Com. (Hons.), where eligible', 'Bachelor of Business Economics', 'B.A. Economics / B.Sc. Economics', 'B.Sc. Finance', 'B.Sc. Financial Mathematics', 'Banking and Insurance', 'Financial Markets', 'Logistics and Supply Chain Management', 'International Business', 'Retail and E-commerce Management'] },
      { h: 'Professional qualifications', items: ['Chartered Accountant (CA)', 'Company Secretary (CS)', 'Cost and Management Accountancy (CMA)', 'Actuarial qualification pathway', 'CFA programme pathway', 'Financial Risk Manager (FRM)', 'Financial modelling and investment analysis', 'Taxation and accounting software skills'] },
      { h: 'After graduation', items: ['MBA after graduation'] }
    ],
    note: 'Professional qualifications have their own registration, exam and work-experience rules. Senior management roles usually need experience and sometimes postgraduate study.'
  },
  {
    icon: '🔬', title: 'M.Tech / MCA & Postgraduate',
    desc: 'For B.Tech / BCA / B.Sc. graduates seeking specialisation. GATE strategy, NIMCET for MCA, and college shortlisting.',
    groups: [
      { h: 'Postgraduate routes', items: ['M.Tech via GATE', 'MCA (Master of Computer Applications)', 'NIMCET (for MCA)', 'M.Sc. in a science subject', 'GATE (current official site)'] }
    ]
  },

  // ----- Extra routes for PCM students (from the PCM guide) -----
  {
    icon: '✈️', title: 'Aviation & Aerospace',
    desc: 'Pilot training, aviation degrees, aircraft maintenance and airport careers. A degree in aviation is not a pilot licence: a CPL pathway has its own medical, exams and flying hours.',
    groups: [
      { h: 'Aviation routes', items: ['Commercial Pilot Licence (CPL) pathway', 'Flight training and ratings', 'B.Sc. Aviation', 'BBA Aviation Management', 'Airport Management', 'Airline Operations', 'Aircraft Maintenance Engineering (AME) through approved pathways', 'Aerospace Engineering', 'Aeronautical Engineering', 'Aviation Safety and Quality', 'Air Traffic Services career pathway', 'Aircraft systems and avionics programmes'] }
    ],
    note: 'Pilot training can cost far more than a normal degree. Always get a written, all-inclusive estimate and verify the approved training organisation with DGCA.'
  },
  {
    icon: '🪖', title: 'Defence, Police & Government Service',
    desc: 'Some options open right after Class 12 (like NDA), others after a degree (like UPSC). The official notification controls age, subjects, physical and medical standards.',
    groups: [
      { h: 'After Class 12', items: ['NDA entry: Army, Navy and Air Force wings, subject to wing-specific eligibility', 'Technical officer-entry schemes when notified', 'Air Force and Navy entries as advertised by the relevant service', 'SSC CHSL and other 10+2-level recruitment where eligible', 'Railway recruitment for posts matching the notification', 'State police and other uniformed services where eligible', 'Apprenticeships and technical government training routes'] },
      { h: 'After a degree', items: ['UPSC Civil Services Examination', 'SSC CGL', 'Engineering Services Examination for eligible engineering graduates', 'GATE for postgraduate admissions and some recruitment pathways', 'State public service commissions', 'Banking and insurance recruitment exams', 'Defence officer entries for eligible graduates', 'Government research and technical posts'] }
    ],
    note: 'Government exams are competitive and selection is not guaranteed.'
  },
  {
    icon: '🚢', title: 'Merchant Navy & Maritime',
    desc: 'Civilian maritime careers (distinct from the Indian Navy). Check Directorate General of Shipping approval, medical fitness, eyesight standards and placement claims before paying fees.',
    groups: [
      { h: 'Maritime routes', items: ['B.Sc. Nautical Science', 'Diploma in Nautical Science (DNS)', 'B.Tech. Marine Engineering', 'Marine Electrical / Electro-Technical Officer pathways', 'Naval Architecture', 'Ocean Engineering', 'Port and Shipping Management', 'Logistics and Supply Chain', 'Offshore Engineering', 'Maritime Safety and Environmental Management', 'Marine operations and ship management'] }
    ]
  },
  {
    icon: '⚖️', title: 'Law (CLAT / AILET)',
    desc: 'Integrated law degrees are open to PCM students who meet the criteria. CLAT, AILET and university tests are the main routes; check current marks, age and programme rules.',
    groups: [
      { h: 'Law', items: ['BA LLB (integrated)', 'BBA LLB', 'B.Com. LLB where offered', 'B.Sc. LLB where offered', 'Other approved integrated law degrees', 'Later pathways to legal practice subject to degree and Bar Council requirements'] }
    ],
    note: 'Legal practice also depends on the degree and Bar Council requirements.'
  },
  {
    icon: '📖', title: 'Humanities & Social Sciences',
    desc: 'PCM does not lock you into science. Many humanities and social-science programmes accept students from any stream if they meet the stated criteria.',
    groups: [
      { h: 'Humanities & social sciences', items: ['B.A. Psychology', 'B.A. Sociology', 'B.A. Political Science', 'B.A. History', 'B.A. Philosophy', 'B.A. English and other languages', 'B.A. International Relations', 'B.A. Public Administration', 'B.A. Geography', 'B.A. Education', 'B.A. Journalism / Mass Communication', 'Social Work', 'Development Studies', 'Public Policy', 'Security and Strategic Studies'] }
    ],
    note: 'For psychology, teaching, social work and counselling, a bachelor\'s degree alone may not qualify you for every professional role.'
  },
  {
    icon: '🩺', title: 'Pharmacy & Healthcare (check eligibility)',
    desc: 'Eligibility needs especially careful checking: some programmes accept PCM, some require Biology. PCM alone generally does not qualify for MBBS / BDS.',
    groups: [
      { h: 'Pharmacy, healthcare & allied fields', items: ['B.Pharm.', 'Pharm.D.', 'Biomedical Engineering (healthcare route)', 'Biotechnology', 'Medical Laboratory Technology', 'Medical Imaging / Radiology Technology', 'Optometry', 'B.Sc. Nursing', 'MBBS / BDS', 'BPT / Physiotherapy', 'Nutrition / Dietetics', 'Hospital Administration / Healthcare Management', 'Public Health / Health Informatics'] }
    ],
    note: 'Confirm requirements with the official regulator, university and admission bulletin. A course may be academically available but still not give the licence or scope you expect.'
  },
  {
    icon: '🌱', title: 'Agriculture, Environment & Earth Sciences',
    desc: 'Careers in agriculture, food, climate, water and earth sciences. Agriculture admissions can depend on the accepted Class 12 subject combination and state / university policy.',
    groups: [
      { h: 'Agriculture, food, environment & earth', items: ['B.Sc. Agriculture (subject eligibility varies)', 'Agricultural Engineering', 'Food Technology', 'Food Processing', 'Dairy Technology (eligibility varies)', 'Forestry', 'Environmental Science', 'Environmental Engineering', 'Geology / Earth Sciences', 'Geophysics', 'Hydrology and Water Resources', 'Meteorology and Atmospheric Science', 'Oceanography', 'Climate Science', 'Renewable Energy', 'Sustainability Studies', 'Environmental Management', 'Remote Sensing and GIS', 'Disaster Management', 'Water and Waste Management', 'Soil and Water Conservation'] }
    ]
  },
  {
    icon: '🛠️', title: 'Diplomas, ITI & Short Courses',
    desc: 'Shorter, skill-based routes. Check accreditation, placement evidence, curriculum and refund policy: a certificate is not the same as a recognised degree or licence.',
    groups: [
      { h: 'Technical diplomas & trades', items: ['Diploma in Computer Engineering / IT', 'Diploma in Mechanical, Civil, Electrical or Electronics Engineering', 'Diploma in Automobile Engineering', 'Diploma in Mechatronics / Robotics', 'Diploma in Instrumentation', 'Diploma in Interior Design', 'Diploma in Fashion Design', 'Diploma in Animation / VFX', 'Diploma in Web Development', 'Diploma in Cybersecurity / Networking', 'Diploma in Data Analytics', 'Diploma in Digital Marketing', 'Diploma in Photography / Film Editing', 'Diploma in Hotel Management', 'ITI technical trades, according to trade eligibility', 'Apprenticeships under eligible schemes'] },
      { h: 'Short skills that complement a degree', items: ['Excel and spreadsheet analysis', 'SQL and database basics', 'Python programming', 'Web development', 'Cloud fundamentals', 'Networking fundamentals', 'Cybersecurity basics', 'CAD / BIM tools', '3D modelling', 'Graphic design', 'Video editing', 'Digital marketing and analytics', 'Technical writing', 'Project management fundamentals'] }
    ]
  },
  {
    icon: '📝', exam: true, title: 'Key Entrance Exams (reference, not a course)',
    desc: 'The main exams PCM students should know about. Exam names, dates, participating institutes and eligibility change every year, so always verify on the official site.',
    labels: ['What it is', 'Leads to'],
    groups: [
      { h: 'Key exams', items: ['JEE Main', 'JEE Advanced', 'CUET-UG', 'NATA', 'UCEED / NID DAT / NIFT tests', 'NCHMCT JEE', 'CLAT / AILET', 'IPMAT', 'NDA', 'DGCA flight crew examinations', 'ISI / NEST / IISER routes', 'CA / CS / CMA entry exams', 'ACET / actuarial exams', 'GATE', 'CAT / XAT / CMAT', 'UPSC Civil Services', 'SSC CHSL / CGL', 'State PSC / banking exams'] }
    ]
  }
];
