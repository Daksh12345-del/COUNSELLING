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

// ===== BACKEND API HELPER =====
const API_BASE = window.API_BASE_URL || '/api';
const ADMIN_TOKEN_KEY = 'sp_admin_token';

function getAdminToken() { return localStorage.getItem(ADMIN_TOKEN_KEY) || ''; }
function setAdminToken(t) { localStorage.setItem(ADMIN_TOKEN_KEY, t); }
function clearAdminToken() { localStorage.removeItem(ADMIN_TOKEN_KEY); }

async function apiFetch(path, options = {}) {
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
  const res = await fetch(API_BASE + path, { ...options, headers });
  let data = null;
  try { data = await res.json(); } catch (e) { /* no JSON body, e.g. 204 */ }
  if (!res.ok) {
    if (res.status === 401) { clearAdminToken(); adminUnlocked = false; }
    throw new Error((data && data.error) || 'Something went wrong. Please try again.');
  }
  return data;
}

function adminFetch(path, options = {}) {
  return apiFetch(path, { ...options, headers: { ...(options.headers || {}), Authorization: 'Bearer ' + getAdminToken() } });
}

// ===== ADMIN AUTH =====
let adminUnlocked = false;

async function checkAdminPwd() {
  const username = (document.getElementById('adminUserInput').value || 'admin').trim();
  const password = document.getElementById('adminPwdInput').value;
  const errBox = document.getElementById('adminLoginError');
  errBox.style.display = 'none';
  try {
    const { token } = await apiFetch('/admin/login', { method: 'POST', body: JSON.stringify({ username, password }) });
    setAdminToken(token);
    adminUnlocked = true;
    document.getElementById('adminLoginOverlay').classList.remove('open');
    document.getElementById('adminPwdInput').value = '';
    showAdminDashboard();
  } catch (err) {
    errBox.textContent = err.message || 'Incorrect username or password.';
    errBox.style.display = 'block';
    document.getElementById('adminPwdInput').value = '';
  }
}

function showAdminDashboard() {
  document.getElementById('adminDashboard').classList.remove('hidden');
  renderDB();
  renderBookingDB();
  renderAdminStats();
  document.getElementById('adminDashboard').scrollIntoView({ behavior: 'smooth' });
}

function adminLogout() {
  clearAdminToken();
  adminUnlocked = false;
  document.getElementById('adminDashboard').classList.add('hidden');
  showToast('Logged out of admin dashboard.');
}

async function requireAdmin() {
  if (adminUnlocked) { showAdminDashboard(); return true; }
  const token = getAdminToken();
  if (token) {
    try {
      await apiFetch('/admin/me', { headers: { Authorization: 'Bearer ' + token } });
      adminUnlocked = true;
      showAdminDashboard();
      return true;
    } catch (e) { /* token expired/invalid, fall through to login prompt */ }
  }
  document.getElementById('adminLoginOverlay').classList.add('open');
  return false;
}

// ===== ENQUIRY DB =====
let enquiryPage = 1;
const ENQUIRY_PAGE_SIZE = 25;

function fmtDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

async function renderDB(page) {
  if (!adminUnlocked) return;
  enquiryPage = page || enquiryPage;
  const search = document.getElementById('db-search').value.trim();
  const status = document.getElementById('db-status-filter').value;
  const tbody = document.getElementById('db-body');
  try {
    const params = new URLSearchParams({ page: enquiryPage, pageSize: ENQUIRY_PAGE_SIZE });
    if (search) params.set('search', search);
    if (status) params.set('status', status);
    const result = await adminFetch('/admin/enquiries?' + params.toString());
    const data = result.data;
    document.getElementById('db-count').textContent = result.total + ' enquir' + (result.total === 1 ? 'y' : 'ies') + ' total · page ' + result.page;
    document.getElementById('db-pagination').textContent = data.length ? `Showing ${(result.page - 1) * result.pageSize + 1}–${(result.page - 1) * result.pageSize + data.length} of ${result.total}` : '';
    if (!data.length) { tbody.innerHTML = '<tr><td colspan="12" class="db-empty">No enquiries found.</td></tr>'; return; }
    tbody.innerHTML = data.map((r) => `
      <tr>
        <td>${r.id}</td>
        <td>${fmtDate(r.created_at)}</td>
        <td><strong>${esc(r.name)}</strong></td>
        <td><a href="tel:${esc(r.phone)}" style="color:var(--gold)">${esc(r.phone)}</a></td>
        <td>${esc(r.email)}</td>
        <td>${esc(r.current_class)}</td>
        <td>${esc(r.stream)}</td>
        <td>${esc(r.course)}</td>
        <td>${esc(r.city)}</td>
        <td title="${esc(r.message)}" style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(r.message ? r.message.slice(0, 40) + (r.message.length > 40 ? '…' : '') : '')}</td>
        <td>
          <select class="status-select" onchange="updateEnquiryStatus(${r.id}, this.value)">
            <option ${r.status === 'New' ? 'selected' : ''}>New</option>
            <option ${r.status === 'Contacted' ? 'selected' : ''}>Contacted</option>
            <option ${r.status === 'Enrolled' ? 'selected' : ''}>Enrolled</option>
            <option ${r.status === 'Not interested' ? 'selected' : ''}>Not interested</option>
          </select>
        </td>
        <td style="display:flex;gap:6px">
          <a class="db-wa-btn" href="https://wa.me/91${r.phone.replace(/\D/g,'')}?text=Hi%20${encodeURIComponent(r.name)}%2C%20this%20is%20Sarvpratham%20Education%20Consultants.%20We%20received%20your%20enquiry%20and%20would%20love%20to%20connect!" target="_blank">WhatsApp</a>
          <button class="db-delete-btn" onclick="deleteEnquiry(${r.id})">✕</button>
        </td>
      </tr>
    `).join('');
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="12" class="db-empty">${esc(err.message)}</td></tr>`;
  }
}

function enquiryPrevPage() { if (enquiryPage > 1) renderDB(enquiryPage - 1); }
function enquiryNextPage() { renderDB(enquiryPage + 1); }

async function updateEnquiryStatus(id, status) {
  try {
    await adminFetch('/admin/enquiries/' + id, { method: 'PATCH', body: JSON.stringify({ status }) });
    renderAdminStats();
  } catch (err) {
    showToast(err.message);
    renderDB();
  }
}

async function deleteEnquiry(id) {
  if (!confirm('Delete this enquiry? This cannot be undone.')) return;
  try {
    await adminFetch('/admin/enquiries/' + id, { method: 'DELETE' });
    renderDB();
    renderAdminStats();
  } catch (err) {
    showToast(err.message);
  }
}

async function exportCSV() {
  try {
    const res = await fetch(API_BASE + '/admin/enquiries-export', { headers: { Authorization: 'Bearer ' + getAdminToken() } });
    if (!res.ok) throw new Error('Export failed. Please log in again.');
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'enquiries_' + new Date().toISOString().slice(0, 10) + '.csv';
    a.click();
    URL.revokeObjectURL(url);
  } catch (err) {
    showToast(err.message);
  }
}

// ===== BOOKING DB =====
async function renderBookingDB() {
  if (!adminUnlocked) return;
  const tbody = document.getElementById('booking-db-body');
  try {
    const result = await adminFetch('/admin/bookings?page=1&pageSize=50');
    const data = result.data;
    if (!data.length) { tbody.innerHTML = '<tr><td colspan="10" class="db-empty">No bookings yet.</td></tr>'; return; }
    tbody.innerHTML = data.map((r) => `
      <tr>
        <td>${r.id}</td>
        <td>${fmtDate(r.created_at)}</td>
        <td><strong>${esc(r.name)}</strong></td>
        <td><a href="tel:${esc(r.phone)}" style="color:var(--gold)">${esc(r.phone)}</a></td>
        <td>${esc(r.day_label)}, ${esc(r.time_slot)}</td>
        <td>${esc(r.session_type)}</td>
        <td>${esc(r.stream)}</td>
        <td>${esc(r.course)}</td>
        <td>
          <select class="status-select" onchange="updateBookingStatus(${r.id}, this.value)">
            <option ${r.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
            <option ${r.status === 'Completed' ? 'selected' : ''}>Completed</option>
            <option ${r.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
            <option ${r.status === 'No-show' ? 'selected' : ''}>No-show</option>
          </select>
        </td>
        <td><button class="db-delete-btn" onclick="deleteBooking(${r.id})">✕</button></td>
      </tr>
    `).join('');
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="10" class="db-empty">${esc(err.message)}</td></tr>`;
  }
}

async function updateBookingStatus(id, status) {
  try {
    await adminFetch('/admin/bookings/' + id, { method: 'PATCH', body: JSON.stringify({ status }) });
    renderAdminStats();
  } catch (err) {
    showToast(err.message);
    renderBookingDB();
  }
}

async function deleteBooking(id) {
  if (!confirm('Delete this booking? This cannot be undone.')) return;
  try {
    await adminFetch('/admin/bookings/' + id, { method: 'DELETE' });
    renderBookingDB();
    renderAdminStats();
  } catch (err) {
    showToast(err.message);
  }
}

// ===== ADMIN STATS =====
async function renderAdminStats() {
  if (!adminUnlocked) return;
  try {
    const s = await adminFetch('/admin/stats');
    document.getElementById('stat-total').textContent = s.totalEnquiries;
    document.getElementById('stat-new').textContent = s.newEnquiries;
    document.getElementById('stat-enrolled').textContent = s.enrolledEnquiries;
    document.getElementById('stat-bookings').textContent = s.totalBookings;

    const sb = document.getElementById('stream-breakdown');
    if (sb) sb.innerHTML = s.streamBreakdown.map(({ stream, count }) => `
      <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:13px">
        <span style="color:rgba(255,255,255,0.7)">${esc(stream)}</span>
        <span style="color:var(--gold);font-weight:700">${count}</span>
      </div>
    `).join('') || '<p style="color:rgba(255,255,255,0.3);font-size:13px">No data yet.</p>';

    const cb = document.getElementById('course-breakdown');
    if (cb) cb.innerHTML = s.courseBreakdown.map(({ course, count }) => `
      <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:13px">
        <span style="color:rgba(255,255,255,0.7)">${esc(course)}</span>
        <span style="color:var(--gold);font-weight:700">${count}</span>
      </div>
    `).join('') || '<p style="color:rgba(255,255,255,0.3);font-size:13px">No data yet.</p>';
  } catch (err) {
    showToast(err.message);
  }
}

function switchAdminTab(id, el) {
  document.querySelectorAll('.admin-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.admin-panel').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ===== FORM SUBMIT =====
function scrollToEnquiry() { document.getElementById('enquiry').scrollIntoView({behavior:'smooth'}); }

async function submitEnquiry() {
  const name = document.getElementById('f-name').value.trim();
  const phone = document.getElementById('f-phone').value.trim();
  if (!name || !phone) { showToast('Please enter your name and phone number.'); return; }

  const payload = {
    name, phone,
    email: document.getElementById('f-email').value.trim(),
    currentClass: document.getElementById('f-class').value,
    stream: document.getElementById('f-stream').value,
    course: document.getElementById('f-course').value,
    city: document.getElementById('f-city').value.trim(),
    message: document.getElementById('f-msg').value.trim(),
  };

  const btn = document.getElementById('enquirySubmitBtn');
  if (btn) { btn.disabled = true; btn.textContent = 'Submitting…'; }

  try {
    await apiFetch('/enquiries', { method: 'POST', body: JSON.stringify(payload) });
    ['f-name','f-phone','f-email','f-city','f-msg'].forEach(id=>document.getElementById(id).value='');
    ['f-class','f-stream','f-course'].forEach(id=>document.getElementById(id).selectedIndex=0);
    showToast('✓ Enquiry submitted! We\'ll call you within 24 hours.');
    if (adminUnlocked) { renderDB(); renderAdminStats(); }
  } catch (err) {
    showToast(err.message || 'Could not submit your enquiry. Please try again.');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = 'Submit Enquiry — We\'ll Call Within 24 Hours →'; }
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
let selectedDay = '', selectedDayIso = '', selectedTime = '', selectedType = '📞 Phone Call';
const SESSION_TYPE_MAP = { '📞 Phone Call': 'Phone Call', '🎥 Google Meet': 'Google Meet', '💬 WhatsApp': 'WhatsApp' };

function setSlotType(btn, type) {
  selectedType = type;
  document.querySelectorAll('.slot-type-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

function initSlots() {
  const days = [], times = ['9:00 AM','10:00 AM','11:00 AM','12:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM'];
  const today = new Date();
  for(let i=1; i<=7; i++) {
    const d = new Date(today); d.setDate(today.getDate()+i);
    const label = d.toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short'});
    days.push({label, iso: d.toISOString().slice(0,10)});
  }
  const daysRow = document.getElementById('slotDays');
  daysRow.innerHTML = days.map(d=>`
    <button class="slot-day" onclick="pickDay('${d.iso}','${d.label}',this)" data-iso="${d.iso}">
      ${d.label.split(' ')[0]}<br><strong>${d.label.split(' ').slice(1).join(' ')}</strong>
    </button>
  `).join('');

  const timesRow = document.getElementById('slotTimes');
  timesRow.innerHTML = times.map(t=>`<button class="slot-time" onclick="pickTime('${t}',this)">${t}</button>`).join('');
}

async function pickDay(iso, label, btn) {
  selectedDay = label;
  selectedDayIso = iso;
  selectedTime = '';
  document.querySelectorAll('.slot-day').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.slot-time').forEach(b=>b.classList.remove('booked','active'));
  try {
    const { bookedTimes } = await apiFetch('/bookings/availability?date=' + iso);
    document.querySelectorAll('.slot-time').forEach(b=>{
      if (bookedTimes.includes(b.textContent.trim())) b.classList.add('booked');
    });
  } catch (err) {
    showToast('Could not load availability for that day. Please try again.');
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
  if(!name||!phone) { showToast('Please enter your name and phone.'); return; }
  if(!selectedDay) { showToast('Please select a day.'); return; }
  if(!selectedTime) { showToast('Please select a time slot.'); return; }

  const payload = {
    name, phone,
    sessionType: SESSION_TYPE_MAP[selectedType] || 'Phone Call',
    date: selectedDayIso,
    dayLabel: selectedDay,
    time: selectedTime,
    stream: document.getElementById('b-stream').value,
    course: document.getElementById('b-course').value,
  };

  const btn = document.getElementById('bookSlotBtn');
  if (btn) { btn.disabled = true; }

  try {
    await apiFetch('/bookings', { method: 'POST', body: JSON.stringify(payload) });
    document.querySelectorAll('.slot-time').forEach(b=>{ if(b.textContent.trim()===selectedTime) b.classList.add('booked'); b.classList.remove('active'); });
    const bookedTime = selectedTime, bookedDay = selectedDay;
    selectedTime = '';
    document.getElementById('b-name').value=''; document.getElementById('b-phone').value='';
    document.getElementById('b-stream').selectedIndex=0; document.getElementById('b-course').selectedIndex=0;
    showToast('📅 Slot booked! We\'ll call you at ' + bookedTime + ' on ' + bookedDay);
    if(adminUnlocked) { renderBookingDB(); renderAdminStats(); }
  } catch (err) {
    showToast(err.message || 'Could not book this slot. Please try again.');
    if (selectedDayIso) pickDay(selectedDayIso, selectedDay, document.querySelector('.slot-day.active'));
  } finally {
    if (btn) { btn.disabled = false; }
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
  restoreAdminSession();
});

async function restoreAdminSession() {
  const token = getAdminToken();
  if (!token) return;
  try {
    await apiFetch('/admin/me', { headers: { Authorization: 'Bearer ' + token } });
    adminUnlocked = true;
    showAdminDashboard();
  } catch (e) {
    clearAdminToken();
  }
}

// Close blog modal on overlay click
document.addEventListener('click', e => {
  const overlay = document.getElementById('blogModal');
  if (e.target === overlay) closeBlog();
  const adminOverlay = document.getElementById('adminLoginOverlay');
  if (adminOverlay && e.target === adminOverlay) adminOverlay.classList.remove('open');
});
