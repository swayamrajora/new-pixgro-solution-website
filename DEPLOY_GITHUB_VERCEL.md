# PixGro: GitHub + Vercel deployment

1. Extract the ZIP.
2. Create a new GitHub repository.
3. Choose Add file > Upload files. Drag the extracted project files AND folders into the upload area (not the ZIP itself), then commit.
4. Open vercel.com/new, import the GitHub repository.
5. Framework Preset: Vite; Root Directory: ./; Build Command: npm run build; Output Directory: dist.
6. Click Deploy.

Contact form automatic sending needs EmailJS variables set under Vercel Project > Settings > Environment Variables: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY. Add real values from your EmailJS account, then redeploy. Without them the website may use an email-app fallback.

Review legal text and claims before publishing; the included policy sections are drafts, not legal advice.
