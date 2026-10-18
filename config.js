// ===== SARVPRATHAM BACKEND CONFIG =====
// IMPORTANT: main.js reads `window.SP_API_BASE` (NOT window.API_BASE_URL — that was
// a naming bug in the old config, which meant this file was silently ignored and
// main.js fell back to its own hardcoded default. That is very likely why enquiries
// were not reaching the database or triggering emails.
//
// Set this to the ROOT URL of your deployed FastAPI backend — do NOT include /api
// at the end, because main.js already appends paths like "/api/enquiries" itself.
//
// Example if deployed on Render with the service name from render.yaml:
//   window.SP_API_BASE = 'https://sarvpratham-backend.onrender.com';
//
// Replace the value below with whatever URL your backend is ACTUALLY deployed at
// (check your Render/Railway dashboard for the exact live URL).
window.SP_API_BASE = 'https://sarvpratham-backend.onrender.com';
