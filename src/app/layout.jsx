import '../styles/globals.css';
import '../styles/product-stage.css';

export const metadata = {
  title: 'Shreyans Jain — Applied LLM & Agentic AI Systems Architect',
  description:
    'Portfolio of Shreyans Jain: AI Engineer building autonomous agent swarms, low-latency Voice AI, and enterprise RAG systems at dentsu and beyond.',
  keywords: [
    'Shreyans Jain',
    'AI Engineer',
    'Agentic AI',
    'LangGraph',
    'Voice AI',
    'Enterprise RAG',
    'Google ADK',
    'Gemini',
    'Google Veo',
    'DeepEval',
  ],
  authors: [{ name: 'Shreyans Jain' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#07090e',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <div id="root-portal">{children}</div>
      </body>
    </html>
  );
}
