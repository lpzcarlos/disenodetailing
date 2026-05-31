"use client";

import Script from "next/script";
import "./chatbot.css";

export default function Chatbot() {
  const webhookUrl = process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL || "https://yestern-dyostyle-shenika.ngrok-free.dev/webhook/9ac9f18c-a528-41d3-b563-3dc277df09fe/chat";

  return (
    <>
      <Script
        id="n8n-chat-script"
        type="module"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
            
            // Fix for ngrok-free.dev CORS/interstitial error on GET requests
            const originalFetch = window.fetch;
            window.fetch = async function() {
              let [resource, config] = arguments;
              if (typeof resource === 'string' && resource.includes('ngrok-free.dev')) {
                config = config || {};
                const method = (config.method || 'GET').toUpperCase();
                if (method === 'GET') {
                  config.headers = config.headers || {};
                  config.headers['ngrok-skip-browser-warning'] = 'true';
                  arguments[1] = config;
                }
              }
              return originalFetch.apply(this, arguments);
            };

            createChat({
              webhookUrl: '${webhookUrl}',
              mode: 'window',
              showWelcomeScreen: true,
              initialMessages: ['¡Hola! ¿En qué puedo ayudarte?'],
              i18n: {
                en: {
                  title: 'Diseño Detailing',
                  subtitle: 'Disponible 24/7',
                  inputPlaceholder: 'Escribe tu pregunta...',
                  }
                }
            });
          `
        }}
      />
    </>
  );
}
