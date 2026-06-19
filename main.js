// ===== STREAM / COURSE SELECTOR =====
const STREAM_SERVICES = {
  pcm: {
    tag: 'What We Offer — PCM (Science)',
    sub: 'Complete guidance for PCM students — Engineering, Computer Science, Maths, BCA and more.',
    cards: [
      {icon:'⚙️', title:'B.Tech / Engineering', desc:'JEE Main & Advanced strategy, rank-to-college mapping for IIT Delhi, DTU, NSIT, NIT and top private colleges.', items:['JEE Main & Advanced prep guidance','Branch selection strategy','GGSIPU / IPU CET colleges','Form-filling & counselling support']},
      {icon:'💻', title:'BCA / B.Sc Computer Science', desc:'For PCM students targeting IT careers without JEE pressure. IPU CET, DU CUET and direct admission guidance.', items:['IPU CET & CUET shortlisting','Top BCA colleges in Delhi/NCR','Career path to MCA / M.Tech','Amity, JIIT, IP University guidance']},
      {icon:'📐', title:'B.Sc Mathematics', desc:'Pure Maths at DU, JNU, BHU — leading to data science, research and civil services careers.', items:['CUET subject strategy','DU college preference filling','JNU & BHU entrance guidance','Career: Data Science, Teaching, Actuarial']},
      {icon:'🏨', title:'BHM (Hotel Management)', desc:'PCM students can join IHM Delhi and top hotel schools via NCHMCT JEE. 20+ years of expertise.', items:['NCHMCT JEE preparation','IHM Delhi, Mumbai shortlisting','Hospitality career planning','Form-filling & college allotment']},
      {icon:'💼', title:'MBA (after graduation)', desc:'PCM graduates pivot to management via CAT, XAT. We guide B-school shortlisting and GD/PI prep.', items:['CAT / XAT / CMAT guidance','IIM, FMS Delhi, MDI Gurgaon','Operations & Tech Management','GD & PI preparation']},
      {icon:'🔬', title:'M.Tech / MCA', desc:'For B.Tech/BCA graduates seeking specialisation. GATE strategy and NIMCET college shortlisting.', items:['GATE score-to-college mapping','NIMCET for MCA admissions','IIT / NIT / DTU M.Tech guidance','PSU recruitment support']},
    ]
  },
  pcb: {
    tag: 'What We Offer — PCB (Biology)',
    sub: 'Complete guidance for PCB students — Medical, Nursing, Pharmacy, Physiotherapy and Hotel Management.',
    cards: [
      {icon:'🏥', title:'MBBS / Medical', desc:'NEET UG counselling, AIQ vs State quota strategy, private medical college admissions — 100+ students guided.', items:['NEET score-to-college mapping','AIQ & State quota strategy','Choice filling & locking support','AIIMS, MAMC, Lady Hardinge Delhi']},
      {icon:'🦷', title:'BDS (Dentistry)', desc:'NEET-based BDS admissions, state quota seats and MDS planning for Delhi/NCR and top colleges.', items:['NEET BDS counselling','State vs Management quota','Maulana Azad Dental, IP University','MDS specialisation planning']},
      {icon:'💊', title:'B.Pharm / Pharmacy', desc:'Pharmacy entrance guidance for Jamia Hamdard, Delhi Institute of Pharma and top private colleges.', items:['State Pharmacy CET guidance','Jamia Hamdard Delhi','GPAT planning for M.Pharm','Hospital & industry career paths']},
      {icon:'💉', title:'B.Sc Nursing', desc:'Government nursing entrances — AIIMS Nursing, PGIMER and state nursing CETs with full college shortlisting.', items:['AIIMS Nursing Entrance','PGIMER Chandigarh guidance','State nursing CET strategy','International nursing career paths']},
      {icon:'🏃', title:'BPT (Physiotherapy)', desc:'Physiotherapy admissions via IPU CET and Jamia for careers in sports, hospitals and clinics.', items:['IPU CET Physio guidance','JMI Delhi shortlisting','Sports & hospital Physio careers','IP University affiliated colleges']},
      {icon:'🏨', title:'BHM (Hotel Management)', desc:'PCB students can also join IHM via NCHMCT JEE. We have 20+ years placing students in IHMs.', items:['NCHMCT JEE for PCB students','IHM Delhi & Mumbai guidance','F&B and culinary career paths','College shortlisting & forms']},
    ]
  },
  'com-math': {
    tag: 'What We Offer — Commerce with Maths',
    sub: 'Complete guidance for Commerce + Maths students — B.Com, BBA, CA, Law, Economics and MBA.',
    cards: [
      {icon:'📊', title:'B.Com (Hons)', desc:'SRCC, Hindu College, Ramjas — the most prestigious B.Com colleges via CUET. We specialise in DU preference strategy.', items:['CUET Commerce subject strategy','SRCC / Hindu / Ramjas shortlisting','JMI & IP University guidance','CA / CS / MBA career path planning']},
      {icon:'🏢', title:'BBA / BMS', desc:'DU JAT, IPU CET, Symbiosis SET — complete BBA college shortlisting for Delhi/NCR and top private colleges.', items:['DU JAT preparation','IPU CET BBA guidance','Symbiosis Pune SET','Christ, Amity, JIMS shortlisting']},
      {icon:'📋', title:'CA (Chartered Accountancy)', desc:'CA Foundation route, B.Com parallel pathway and articleship planning from ICAI-registered experts.', items:['CA Foundation strategy','B.Com + CA parallel plan','Big 4 & articleship guidance','Study timetable & exam plan']},
      {icon:'⚖️', title:'BBA LLB (Law)', desc:'CLAT, AILET, SLAT — 20 years of law admission expertise. NLU, Symbiosis and Delhi law college shortlisting.', items:['CLAT & AILET preparation','NLU Delhi, NLU Jodhpur','Symbiosis Law Pune (SLAT)','Corporate & litigation career paths']},
      {icon:'📈', title:'B.A. Economics (Hons)', desc:'DU Economics Hons via CUET — SRCC, LSR, Hindu College. Leads to DSE, banking and civil services.', items:['CUET Economics strategy','SRCC, LSR, Hindu College','JNU Economics entrance','DSE M.A. & UPSC preparation']},
      {icon:'💼', title:'MBA', desc:'Commerce + Maths is ideal for Finance MBA. CAT, XAT, CMAT guidance with top B-school shortlisting.', items:['CAT, XAT, CMAT, SNAP','FMS Delhi, MDI Gurgaon','IIM Lucknow, IMT Ghaziabad','Finance & Marketing specialisation']},
    ]
  },
  'com-no-math': {
    tag: 'What We Offer — Commerce without Maths',
    sub: 'Complete guidance for Commerce (no Maths) students — B.Com, BBA, Law, BJMC, Hotel Management and B.Ed.',
    cards: [
      {icon:'📦', title:'B.Com (General)', desc:'B.Com General for banking, insurance and government job careers. IPU CET and CUET guidance for Delhi/NCR colleges.', items:['CUET & IPU CET guidance','IP University affiliated colleges','Banking & SSC CGL career paths','JMI Delhi, Maharaja Agrasen']},
      {icon:'🏢', title:'BBA', desc:'DU JAT, IPU CET — BBA management degree for commerce students wanting business careers.', items:['DU JAT guidance','IPU CET BBA shortlisting','Amity, JIMS, Fairfield Delhi','Marketing & HR career paths']},
      {icon:'⚖️', title:'BA LLB (Law)', desc:'CLAT, AILET, SLAT — 20 years of law admission success. NLU Delhi, Symbiosis, JMI and Delhi law schools.', items:['CLAT preparation strategy','NLU Delhi (AILET)','Symbiosis Law Pune','JMI & IP University Law']},
      {icon:'🎬', title:'BJMC / Mass Communication', desc:'IPU CET BJMC, JMI, Symbiosis SET for journalism and media. IIMC entrance coaching support.', items:['IPU CET BJMC guidance','JMI & IIMC Delhi shortlisting','Symbiosis Pune SET','PR, Digital Media, Journalism paths']},
      {icon:'🏨', title:'BHM (Hotel Management)', desc:'NCHMCT JEE for IHM Delhi, Mumbai and top hotel schools. 20+ years of hospitality placement expertise.', items:['NCHMCT JEE guidance','IHM Delhi, Mumbai, IIHM','Tourism & hospitality careers','Form-filling & college allotment']},
      {icon:'📚', title:'B.Ed (Teacher Training)', desc:'Delhi B.Ed CET, JMI and state B.Ed entrances — for students aiming at TGT, PGT and KVS/NVS teaching jobs.', items:['Delhi B.Ed CET guidance','JMI & MDU Rohtak entrance','KVS / NVS / DSSSB planning','Top B.Ed college shortlisting']},
    ]
  },
  humanities: {
    tag: 'What We Offer — Humanities',
    sub: 'Complete guidance for Humanities students — Law, Journalism, Psychology, B.Ed, Hotel Management and more.',
    cards: [
      {icon:'⚖️', title:'BA LLB (Law)', desc:'Humanities is the perfect foundation for CLAT, AILET and SLAT. 20 years of NLU and Symbiosis placement expertise.', items:['CLAT, AILET, SLAT guidance','NLU Delhi, NALSAR, NLU Jodhpur','Symbiosis Law Pune','Litigation, Corporate & Judiciary paths']},
      {icon:'🎬', title:'BJMC / Journalism', desc:'IPU CET, JMI, IIMC, Symbiosis SET — humanities students excel in media and PR careers.', items:['IPU CET BJMC & IIMC prep','JMI Delhi (AJK MCRC)','LSR DU, Symbiosis Pune','Journalism, PR & Digital Media']},
      {icon:'🧠', title:'BA Psychology', desc:'LSR, JMI, Amity — Psychology via CUET for clinical, school counselling and organisational careers.', items:['CUET Psychology strategy','LSR, JMI, IP University','Clinical vs School Counselling','M.Phil / PhD pathways']},
      {icon:'📝', title:'BA English / Political Science', desc:'Top DU and JNU colleges via CUET — leading to Civil Services, journalism, academia and law.', items:['CUET Humanities strategy','Miranda House, Hindu, LSR DU','JNU entrance guidance','UPSC, Journalism, Academia paths']},
      {icon:'📚', title:'B.Ed (Teacher Training)', desc:'The most direct path to government teaching jobs for Humanities. Delhi B.Ed CET, JMI and MDU guidance.', items:['Delhi B.Ed CET preparation','JMI & MDU Rohtak entrance','KVS, NVS, DSSSB teaching jobs','Top B.Ed college shortlisting']},
      {icon:'🏨', title:'BHM (Hotel Management)', desc:'Humanities students fit perfectly in Hotel Management — guest relations, HR and F&B. NCHMCT JEE guidance.', items:['NCHMCT JEE for Humanities','IHM Delhi, Mumbai guidance','Event & Tourism management','College shortlisting & forms']},
    ]
  }
};

function renderServices(streamId) {
  const data = STREAM_SERVICES[streamId] || STREAM_SERVICES['pcm'];
  document.getElementById('services-stream-tag').textContent = data.tag;
  document.getElementById('services-stream-sub').textContent = data.sub;
  const grid = document.getElementById('services-grid');
  grid.innerHTML = data.cards.map(c => `
    <div class="service-card">
      <div class="service-icon">${c.icon}</div>
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
      <ul>${c.items.map(i=>`<li>${i}</li>`).join('')}</ul>
    </div>
  `).join('');
}

function selectStream(streamId, tab) {
  document.querySelectorAll('.stream-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  document.querySelectorAll('.courses-panel').forEach(p => p.classList.remove('active'));
  const panel = document.getElementById('panel-' + streamId);
  if (panel) panel.classList.add('active');
  renderServices(streamId);
}
function selectCourse(stream, courseId, item) {
  const list = document.getElementById('list-' + stream);
  list.querySelectorAll('.course-item').forEach(i => i.classList.remove('active'));
  item.classList.add('active');
  const detailContainer = document.getElementById('detail-' + stream);
  detailContainer.querySelectorAll('.course-detail').forEach(d => d.classList.remove('active'));
  const detail = document.getElementById('cd-' + stream + '-' + courseId);
  if (detail) detail.classList.add('active');
}


// ===== BACKEND API CONFIG =====
// Point this at your deployed FastAPI backend (e.g. https://sarvpratham-backend.onrender.com)
const API_BASE = window.SP_API_BASE || 'https://sarvpratham-backend.onrender.com';

async function apiFetch(path, options = {}) {
  const headers = Object.assign({ 'Content-Type': 'application/json' }, options.headers || {});
  const res = await fetch(API_BASE + path, Object.assign({}, options, { headers }));
  if (!res.ok) {
    let detail = 'Request failed';
    try { detail = (await res.json()).detail || detail; } catch(e) {}
    throw new Error(detail);
  }
  if (res.status === 204) return null;
  return res.json();
}

function scrollToEnquiry() { document.getElementById('enquiry').scrollIntoView({behavior:'smooth'}); }

async function submitEnquiry() {
  const name = document.getElementById('f-name').value.trim();
  const phone = document.getElementById('f-phone').value.trim();
  if (!name || !phone) { alert('Please enter your name and phone number.'); return; }

  const btn = document.querySelector('.form-submit');
  const originalText = btn ? btn.textContent : '';
  if (btn) { btn.disabled = true; btn.textContent = 'Submitting...'; }

  try {
    await apiFetch('/api/enquiries', {
      method: 'POST',
      body: JSON.stringify({
        name, phone,
        email: document.getElementById('f-email').value.trim(),
        student_class: document.getElementById('f-class').value,
        stream: document.getElementById('f-stream').value,
        course: document.getElementById('f-course').value,
        city: document.getElementById('f-city').value.trim(),
        message: document.getElementById('f-msg').value.trim(),
      })
    });
    ['f-name','f-phone','f-email','f-city','f-msg'].forEach(id=>document.getElementById(id).value='');
    ['f-class','f-stream','f-course'].forEach(id=>document.getElementById(id).selectedIndex=0);
    showToast('✓ Enquiry submitted! We\'ll call you within 24 hours.');
  } catch (e) {
    alert('Sorry, we could not submit your enquiry: ' + e.message + '\nPlease try again or call us directly.');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = originalText; }
  }
}

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg || '✓ Done!';
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 3500);
}

// ===== BOOKING =====
let selectedDayISO = '', selectedDayLabel = '', selectedTime = '', selectedType = 'Phone Call';

function setSlotType(btn, type) {
  // type comes in as an emoji-labelled string from the HTML onclick, e.g. "📞 Phone Call"
  selectedType = type.replace(/^[^\w]+\s*/, '').trim() || type;
  document.querySelectorAll('.slot-type-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

async function initSlots() {
  const today = new Date();
  const days = [];
  for(let i=1; i<=7; i++) {
    const d = new Date(today); d.setDate(today.getDate()+i);
    const iso = d.toISOString().slice(0,10);
    const label = d.toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short'});
    days.push({label, iso});
  }

  let calendar = [];
  try {
    calendar = await apiFetch('/api/bookings/calendar');
  } catch (e) {
    // If the backend is unreachable, still render days so the form isn't blank;
    // the actual booking attempt will surface the error.
  }
  const fullByDate = {};
  calendar.forEach(c => { fullByDate[c.date] = c.is_full; });

  const daysRow = document.getElementById('slotDays');
  daysRow.innerHTML = days.map(d=>`
    <button class="slot-day ${fullByDate[d.iso] ? 'full' : ''}" onclick="pickDay('${d.iso}','${d.label}',this)" data-iso="${d.iso}">
      ${d.label.split(' ')[0]}<br><strong>${d.label.split(' ').slice(1).join(' ')}</strong>
    </button>
  `).join('');

  document.getElementById('slotTimes').innerHTML = '<p style="color:rgba(0,0,0,0.4);font-size:13px">Pick a day first</p>';
}

async function pickDay(iso, label, btn) {
  selectedDayISO = iso;
  selectedDayLabel = label;
  selectedTime = '';
  document.querySelectorAll('.slot-day').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');

  const timesRow = document.getElementById('slotTimes');
  timesRow.innerHTML = '<p style="color:rgba(0,0,0,0.4);font-size:13px">Loading times…</p>';

  try {
    const data = await apiFetch('/api/bookings/available-slots?slot_date=' + iso);
    const allTimes = data.booked_times.concat(data.available_times);
    // Preserve a sensible chronological order rather than booked-then-available
    const ORDER = ['9:00 AM','10:00 AM','11:00 AM','12:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM'];
    const ordered = ORDER.filter(t => allTimes.includes(t));
    timesRow.innerHTML = ordered.map(t => {
      const isBooked = data.booked_times.includes(t);
      return `<button class="slot-time ${isBooked?'booked':''}" onclick="pickTime('${t}',this)">${t}</button>`;
    }).join('');
  } catch (e) {
    timesRow.innerHTML = '<p style="color:#c0392b;font-size:13px">Could not load slots: ' + esc(e.message) + '</p>';
  }
}

function pickTime(time, btn) {
  if(btn.classList.contains('booked')) return;
  selectedTime = time;
  document.querySelectorAll('.slot-time').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

async function bookSlot() {
  const name = document.getElementById('b-name').value.trim();
  const phone = document.getElementById('b-phone').value.trim();
  if(!name||!phone) { alert('Please enter your name and phone.'); return; }
  if(!selectedDayISO) { alert('Please select a day.'); return; }
  if(!selectedTime) { alert('Please select a time slot.'); return; }

  const btn = document.querySelector('.book-btn');
  const originalText = btn ? btn.textContent : '';
  if (btn) { btn.disabled = true; btn.textContent = 'Booking...'; }

  try {
    await apiFetch('/api/bookings', {
      method: 'POST',
      body: JSON.stringify({
        name, phone,
        slot_date: selectedDayISO,
        slot_time: selectedTime,
        session_type: selectedType,
        stream: document.getElementById('b-stream').value,
        course: document.getElementById('b-course').value,
      })
    });
    showToast('📅 Slot booked! We\'ll call you at ' + selectedTime + ' on ' + selectedDayLabel);
    document.getElementById('b-name').value=''; document.getElementById('b-phone').value='';
    document.getElementById('b-stream').selectedIndex=0; document.getElementById('b-course').selectedIndex=0;
    const bookedTime = selectedTime;
    selectedTime = '';
    // Refresh the time grid for this day so the just-booked slot now shows as booked
    const activeDayBtn = document.querySelector('.slot-day.active');
    if (activeDayBtn) pickDay(selectedDayISO, selectedDayLabel, activeDayBtn);
  } catch (e) {
    // 409 means someone else grabbed the slot first - refresh times to show current state
    alert('Could not book this slot: ' + e.message);
    const activeDayBtn = document.querySelector('.slot-day.active');
    if (activeDayBtn) pickDay(selectedDayISO, selectedDayLabel, activeDayBtn);
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = originalText; }
  }
}

// ===== BLOG =====
const BLOGS = [
  {
    id:1, tag:'Hotel Management', emoji:'🏨',
    title:'Best Hotel Management Colleges in Delhi NCR 2025',
    summary:'A complete guide to IHM Delhi, IIHM, Amity and other top HM colleges — with NCHMCT JEE cut-offs and fee structures.',
    date:'10 Jun 2025', readTime:'6 min read',
    content:`
      <h3>Why Hotel Management from Delhi NCR?</h3>
      <p>Delhi NCR is home to India's finest hotel management institutions — from the government-run IHM Pusa (one of the oldest IHMs) to private colleges with strong industry tie-ups. Getting into the right college can set the foundation for a global hospitality career.</p>
      <h3>Top Colleges in Delhi NCR</h3>
      <ul>
        <li><strong>IHM Delhi (Pusa Road)</strong> — India's #1 government HM college. NCHMCT JEE rank required: under 500 for best branches. Fees: ~₹1.8L/year.</li>
        <li><strong>IIHM Delhi</strong> — Private, strong industry exposure. eCHAT entrance exam. Fees: ~₹2.5–3L/year.</li>
        <li><strong>Amity School of Hospitality, Noida</strong> — Well-placed graduates. Direct admission. Fees: ~₹3L/year.</li>
        <li><strong>Welcome Hotel Graduate School (ITC)</strong> — Highly competitive, industry-sponsored programme.</li>
        <li><strong>Banarsidas Chandiwala Institute (BCIHMCT)</strong> — Affordable, NCHMCT JEE based.</li>
      </ul>
      <h3>NCHMCT JEE 2025 — What You Need to Know</h3>
      <ul>
        <li>Conducted by NTA. Usually held in April–May.</li>
        <li>Subjects: Numerical Ability, Reasoning, Scientific Aptitude, General Knowledge, English.</li>
        <li>Top IHMs require under rank 1000. Private colleges accept up to rank 10,000+.</li>
      </ul>
      <h3>How Sarvpratham Can Help</h3>
      <p>We have 20+ years of guiding students into IHM programmes. We provide <strong>NCHMCT JEE preparation guidance, college preference-filling support, and form-filling assistance</strong> so you don't miss any deadlines or make costly mistakes.</p>
    `
  },
  {
    id:2, tag:'Law Admissions', emoji:'⚖️',
    title:'CLAT 2025: NLU Cut-offs, Strategy & College Selection',
    summary:'Everything a Class 12 student needs to know about CLAT — from exam pattern to NLU preference filling and what rank gets you where.',
    date:'5 Jun 2025', readTime:'8 min read',
    content:`
      <h3>What is CLAT?</h3>
      <p>CLAT (Common Law Admission Test) is the gateway to 24 National Law Universities across India, including the prestigious NLU Delhi (via AILET), NLU Jodhpur, NALSAR Hyderabad and more. It is conducted by the Consortium of NLUs.</p>
      <h3>Exam Pattern 2025</h3>
      <ul>
        <li>120 questions, 120 marks, 2 hours</li>
        <li>Sections: English (30), Current Affairs & GK (35), Legal Reasoning (35), Logical Reasoning (30), Quantitative Techniques (10)</li>
        <li>Negative marking: 0.25 per wrong answer</li>
      </ul>
      <h3>Expected Cut-offs 2025</h3>
      <ul>
        <li><strong>NLU Delhi (AILET)</strong> — Separate exam, top 110 students. Score needed: 85+/150.</li>
        <li><strong>NALSAR Hyderabad</strong> — CLAT rank under 200</li>
        <li><strong>NLU Jodhpur</strong> — CLAT rank under 500</li>
        <li><strong>NLU Lucknow</strong> — CLAT rank under 1000</li>
        <li><strong>Symbiosis Law Pune (SLAT)</strong> — Separate exam, score 60+/150</li>
      </ul>
      <h3>Our CLAT Guidance at Sarvpratham</h3>
      <p>We have guided 100+ students through CLAT over 20 years. We help with <strong>study plan creation, mock test analysis, preference filling strategy and NLU shortlisting</strong> based on your specific rank and category.</p>
    `
  },
  {
    id:3, tag:'DU Admissions', emoji:'🎓',
    title:'Delhi University CUET 2025: Stream-wise Complete Guide',
    summary:'How CUET works for DU, which subjects to choose, cut-off trends for top colleges, and how to fill preferences without wasting a seat.',
    date:'1 Jun 2025', readTime:'7 min read',
    content:`
      <h3>How Does DU Admission Work in 2025?</h3>
      <p>Delhi University uses CUET (Common University Entrance Test) scores for UG admissions. There are no more class 12 percentage-based cut-offs. Your CUET score determines your rank in each programme.</p>
      <h3>Key Facts</h3>
      <ul>
        <li>CUET is conducted by NTA, usually in May–June.</li>
        <li>You choose subjects based on the course you want — e.g., B.Com Hons requires Accountancy/Business Studies + English.</li>
        <li>Multiple attempts are allowed within the same year.</li>
        <li>DU releases CSAS (Common Seat Allocation System) rounds — 3 rounds of seat allotment.</li>
      </ul>
      <h3>Top DU Colleges — 2024 Cut-off Benchmark</h3>
      <ul>
        <li><strong>SRCC</strong> — B.Com Hons: 99+ percentile in commerce subjects</li>
        <li><strong>Hindu College</strong> — BA Hons Economics: 97+ percentile</li>
        <li><strong>Miranda House</strong> — Most Hons programmes: 95–98 percentile</li>
        <li><strong>LSR</strong> — Psychology, Journalism: 95–97 percentile</li>
        <li><strong>Hansraj</strong> — Science programmes: 93–96 percentile</li>
      </ul>
      <h3>How We Help</h3>
      <p>Our counsellors have tracked DU CUET cut-offs since its introduction. We help you <strong>choose the right CUET subjects, fill DU programme preferences strategically, and avoid common CSAS mistakes</strong> that can cost you a seat.</p>
    `
  },
  {
    id:4, tag:'Career Planning', emoji:'🗺️',
    title:'Which Stream Should You Choose After Class 10?',
    summary:'PCM, PCB, Commerce or Humanities — a no-fluff guide to choosing the stream that fits your interests, strengths and career goals.',
    date:'28 May 2025', readTime:'5 min read',
    content:`
      <h3>The Most Important Decision After Class 10</h3>
      <p>Choosing the wrong stream can waste 2 years and close career doors. But choosing right — based on genuine interest and strengths — sets you on a path that feels natural, not forced.</p>
      <h3>PCM (Science with Maths)</h3>
      <ul>
        <li><strong>Best for:</strong> Engineering (JEE), Architecture, BCA, Defence</li>
        <li><strong>Choose if:</strong> You enjoy solving problems, like Physics and Maths, and are okay with a rigorous 2 years</li>
        <li><strong>Doors it opens:</strong> Engineering, Technology, Data Science, Design</li>
      </ul>
      <h3>PCB (Science with Biology)</h3>
      <ul>
        <li><strong>Best for:</strong> MBBS (NEET), Pharmacy, Nursing, BPT</li>
        <li><strong>Choose if:</strong> You're drawn to healthcare, medicine, or life sciences</li>
        <li><strong>Doors it opens:</strong> Medicine, Dentistry, Pharmacy, Biotech Research</li>
      </ul>
      <h3>Commerce with Maths</h3>
      <ul>
        <li><strong>Best for:</strong> CA, B.Com Hons, BBA, Law, Economics</li>
        <li><strong>Choose if:</strong> You like business, finance, are good at numbers</li>
      </ul>
      <h3>Humanities</h3>
      <ul>
        <li><strong>Best for:</strong> Law (CLAT), Journalism, Psychology, Civil Services, Education</li>
        <li><strong>Choose if:</strong> You enjoy reading, writing, social sciences, debate</li>
        <li><strong>Often underrated:</strong> Opens doors to some of India's highest-paid careers (law, civil services, media)</li>
      </ul>
      <h3>Talk to Us Before You Decide</h3>
      <p>We offer a free 15-minute call to help you and your parents evaluate stream options based on your marks, interests and long-term goals. Book a slot on this page.</p>
    `
  },
  {
    id:5, tag:'MBA Admissions', emoji:'💼',
    title:'CAT vs XAT vs CMAT vs SNAP: Which Exam Should You Target?',
    summary:'A clear comparison of India\'s top MBA entrance exams — difficulty, colleges accepting each, and how to decide which ones to sit.',
    date:'22 May 2025', readTime:'6 min read',
    content:`
      <h3>The MBA Entrance Landscape in India</h3>
      <p>There are 6+ national MBA entrance exams, which confuses most students. The good news: most top B-schools accept 2–3 exams. Here's a clear breakdown.</p>
      <h3>CAT (Common Admission Test)</h3>
      <ul>
        <li>Held by IIMs (rotates annually), usually November</li>
        <li>Accepts: All IIMs, FMS Delhi, MDI Gurgaon, SPJIMR, NITIE, IMT Ghaziabad and 1200+ others</li>
        <li>Difficulty: Very High. Target 95+ percentile for top IIMs.</li>
        <li><strong>Best for:</strong> Students aiming for IIMs, top tier B-schools</li>
      </ul>
      <h3>XAT (Xavier Aptitude Test)</h3>
      <ul>
        <li>Held by XLRI, January</li>
        <li>Accepts: XLRI Jamshedpur, XIMB, XIME and 150+ colleges</li>
        <li>Unique section: Decision Making — tests ethical and situational reasoning</li>
        <li><strong>Best for:</strong> Students who want XLRI HR/Business Management specifically</li>
      </ul>
      <h3>CMAT (Common Management Admission Test)</h3>
      <ul>
        <li>Held by NTA, January–February</li>
        <li>Accepts: 1000+ AICTE-approved MBA colleges across India</li>
        <li>Difficulty: Moderate. 90+ percentile needed for decent colleges.</li>
        <li><strong>Best for:</strong> Students wanting good state-level or mid-tier B-schools</li>
      </ul>
      <h3>SNAP (Symbiosis National Aptitude Test)</h3>
      <ul>
        <li>Held by Symbiosis International, December</li>
        <li>Accepts: All Symbiosis institutes (SIBM Pune, SIIB, SCMHRD, etc.)</li>
        <li><strong>Best for:</strong> Students specifically targeting Symbiosis campuses</li>
      </ul>
      <h3>Our Recommendation</h3>
      <p>Appear in <strong>CAT + CMAT minimum</strong>. Add XAT if you want XLRI. Add SNAP if Symbiosis interests you. We help you build a personalised exam calendar and B-school shortlist.</p>
    `
  },
  {
    id:6, tag:'BJMC / Media', emoji:'🎬',
    title:'Top Journalism & Mass Comm Colleges in Delhi 2025',
    summary:'IIMC, JMI, LSR, IP University — a ranked guide to Delhi\'s best BJMC colleges with entrance details and placement records.',
    date:'18 May 2025', readTime:'5 min read',
    content:`
      <h3>Why Delhi for Mass Communication?</h3>
      <p>Delhi is India's media capital. IIMC, Doordarshan, major newspaper HQs, PR agencies and digital media companies are all based here. Studying journalism in Delhi gives you unmatched internship and placement access.</p>
      <h3>Top BJMC Colleges in Delhi NCR</h3>
      <ul>
        <li><strong>IIMC Delhi (Indian Institute of Mass Communication)</strong> — India's #1 media school. PG Diploma in Journalism. Entrance + Interview. Highly competitive.</li>
        <li><strong>AJK MCRC, Jamia Millia Islamia</strong> — Excellent faculty, strong alumni network in TV and print. BJMC programme via JMI entrance exam.</li>
        <li><strong>Lady Shri Ram College (DU)</strong> — BA Journalism (Hons). CUET-based. One of the most sought-after UG media programmes.</li>
        <li><strong>IP University (BJMC Colleges)</strong> — Multiple affiliated colleges via IPU CET BJMC. Good industry exposure.</li>
        <li><strong>Symbiosis Institute of Media & Communication, Pune</strong> — Not Delhi, but worth considering. SET-based. Strong placement in Pune/Mumbai media.</li>
      </ul>
      <h3>Entrance Exams Needed</h3>
      <ul>
        <li>IPU CET BJMC — For IP University affiliated colleges</li>
        <li>CUET — For DU, JNU</li>
        <li>JMI Entrance — For Jamia</li>
        <li>IIMC Entrance Exam — Separate, highly competitive</li>
        <li>Symbiosis SET — For SIMC Pune</li>
      </ul>
      <h3>How We Help</h3>
      <p>We have guided students into IIMC, JMI and IP University BJMC programmes. We help with entrance prep strategy, GD/PI coaching, and college preference filing.</p>
    `
  }
];

function renderBlog() {
  const grid = document.getElementById('blogGrid');
  const colors = ['#0D2240','#1a3a5c','#2a4a6c','#0D2240','#1a3a5c','#2a4a6c'];
  grid.innerHTML = BLOGS.map((b,i) => `
    <div class="blog-card" onclick="openBlog(${b.id})">
      <div class="blog-thumb" style="background:${colors[i]}">${b.emoji}</div>
      <div class="blog-body">
        <div class="blog-tag">${b.tag}</div>
        <h3>${b.title}</h3>
        <p>${b.summary}</p>
        <div class="blog-meta"><span>📅 ${b.date}</span><span>⏱ ${b.readTime}</span></div>
        <a class="blog-read-more">Read More →</a>
      </div>
    </div>
  `).join('');
}

function openBlog(id) {
  const b = BLOGS.find(x=>x.id===id);
  if (!b) return;
  document.getElementById('blogModalContent').innerHTML = `
    <div class="blog-tag" style="margin-bottom:10px">${b.tag}</div>
    <h2>${b.title}</h2>
    <div class="bm-meta"><span>📅 ${b.date}</span><span>⏱ ${b.readTime}</span></div>
    <div class="bm-content">${b.content}</div>
    <div style="margin-top:28px;padding-top:20px;border-top:1px solid var(--border)">
      <p style="font-size:14px;color:var(--text-mid);margin-bottom:12px">Need personalised guidance on this topic?</p>
      <button class="cd-cta" onclick="closeBlog();scrollToEnquiry()">Get Free Guidance →</button>
    </div>
  `;
  document.getElementById('blogModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBlog() {
  document.getElementById('blogModal').classList.remove('open');
  document.body.style.overflow = '';
}

// ===== COMMUNITY RESOURCES =====
function downloadResource(name) {
  event.preventDefault();
  showToast('📥 ' + name + ' — Link coming soon! Submit enquiry for early access.');
}

// ===== UTILITY =====
function esc(s) { return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initSlots();
  renderBlog();
  renderServices('pcm'); // default stream
});

// Close blog modal on overlay click
document.addEventListener('click', e => {
  const overlay = document.getElementById('blogModal');
  if (e.target === overlay) closeBlog();
  const adminOverlay = document.getElementById('adminLoginOverlay');
  if (adminOverlay && e.target === adminOverlay) adminOverlay.classList.remove('open');
});
