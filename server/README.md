# BitBattles ESP Backend Server

Express backend for the BitBattles website. Contact and proposal requests are not stored in the database. They are validated, rate-limited, and sent through the configured support email flow.

## Local Setup

```bash
cd server
npm install
```

Create `server/.env` from `server/.env.example`:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/bitbattles?appName=Cluster0
CLIENT_URL=http://localhost:5173,http://localhost:5174

SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=
MAIL_FROM=
CONTACT_TO_EMAIL=sannidhyast15@gmail.com
AUTO_REPLY_ENABLED=false
```

Start the backend:

```bash
npm run dev
```

Health check:

```bash
curl http://localhost:5000/api/health
```

## Contact Email Configuration

`CONTACT_TO_EMAIL` is the recipient for support and service enquiries.

To change it during deployment, update `CONTACT_TO_EMAIL` in the deployed server environment or in `server/.env`.

Email sending needs SMTP values:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=<company-gmail-address>
SMTP_PASS=<gmail-app-password-or-smtp-password>
MAIL_FROM=BitBattles ESP <company-gmail-address>
AUTO_REPLY_ENABLED=true
```

If SMTP is not configured, the API still validates and accepts the request locally, but no email is delivered.

## Main API Endpoints

Base URL: `http://localhost:5000`

- `GET /api/health`
- `POST /api/contact`
- `GET /api/portfolio`
- `GET /api/portfolio/featured`
- `GET /api/blog`
- `GET /api/blog/:slug`
- `GET /api/careers`

## Contact Form Payload

`POST /api/contact` accepts contact, proposal, and career application payloads from the frontend. The endpoint validates required name/email/message fields, checks email format, validates budget options, trims text input, rate-limits public submissions, and uses a hidden `website` honeypot field for simple bot filtering.

Career applications can include one `resume` upload as `multipart/form-data`. Accepted file types are PDF, DOC, and DOCX up to 5 MB. Resumes are attached to the email notification and are not stored in the database.
