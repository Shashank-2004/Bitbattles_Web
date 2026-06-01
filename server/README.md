# BitBattles ESP Backend Server

Express + MongoDB backend for the BitBattles website. It stores contact/proposal submissions, exposes portfolio/blog APIs, and supports admin-protected routes.

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
JWT_SECRET=replace-with-a-long-random-secret
JWT_EXPIRE=7d
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

`CONTACT_TO_EMAIL` is the recipient for support and service enquiries. It is currently set to:

```env
CONTACT_TO_EMAIL=sannidhyast15@gmail.com
```

To change it for deployment, update `CONTACT_TO_EMAIL` in the deployed server environment or in `server/.env`. Do not edit source files for deployment email changes.

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

MongoDB storage works even when SMTP is not configured. In that case, the backend saves the form and skips email notification.

## Main API Endpoints

Base URL: `http://localhost:5000`

- `GET /api/health`
- `POST /api/contact`
- `GET /api/contact` admin JWT required
- `PUT /api/contact/:id/read` admin JWT required
- `GET /api/portfolio`
- `GET /api/portfolio/featured`
- `GET /api/blog`
- `GET /api/blog/:slug`

## Contact Form Payload

`POST /api/contact` accepts:

```json
{
  "firstName": "Sannidhya",
  "lastName": "Tiwari",
  "email": "name@example.com",
  "phone": "9876543210",
  "company": "Example Co",
  "companyType": "Startup",
  "support": ["AI Solutions", "Web Development"],
  "summary": "Project summary",
  "reference": "https://example.com",
  "attachmentName": "scope.pdf",
  "deadline": "2 months - 4 months",
  "budget": "Rs. 50,000 - Rs. 2,00,000",
  "comments": "Extra context",
  "source": "website-contact-page"
}
```

The endpoint validates required name/email/message fields, checks email format, validates budget options, trims/sanitizes text input, rate-limits public submissions, and uses a hidden `website` honeypot field for simple bot filtering.
