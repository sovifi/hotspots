# Sovifi Hotspots

A comprehensive social media management platform built with Next.js, Supabase, and modern web technologies.

## Features

- 🔐 Secure Authentication with Supabase
- 🌙 Dark/Light Mode
- 📱 Responsive Design
- 🔄 Social Media Integration
- 🛡️ Protected Routes
- 👤 User Profile Management

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env.local` and fill in your environment variables
4. Run the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
├── app/                # Next.js app directory
├── components/         # React components
├── lib/               # Utility functions and configurations
├── public/            # Static assets
└── types/             # TypeScript type definitions
```

## Environment Variables

Required environment variables:

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- Additional social media API keys as needed

## Deployment

This project is configured for deployment on Vercel. Simply connect your repository and deploy.

## Security

- Environment variables are properly managed
- Rate limiting is implemented
- Authentication is handled securely through Supabase
- Protected routes ensure authorized access

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.