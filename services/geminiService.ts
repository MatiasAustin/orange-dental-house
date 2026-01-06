import { GoogleGenAI, Chat } from "@google/genai";

// Safely access process.env.API_KEY to prevent "process is not defined" errors in environments
// that don't polyfill it (like some Vite configs or raw browser environments).
const getApiKey = () => {
  try {
    if (typeof process !== 'undefined' && process.env) {
      return process.env.API_KEY;
    }
  } catch (e) {
    // Ignore error
  }
  return '';
};

const apiKey = getApiKey() || '';
// Initialize conditionally to avoid crashing if key is missing during dev (though strictly required by prompt)
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const createChatSession = (): Chat | null => {
  if (!ai) return null;
  
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `Anda adalah asisten virtual pintar untuk Orange Dental, sebuah klinik gigi modern dan premium di Indonesia.
      Nada bicara anda: Ramah, profesional, empatik, dan informatif. Gunakan Bahasa Indonesia yang baik namun santai.
      
      Tujuan anda:
      1. Menjawab pertanyaan dasar tentang kesehatan gigi.
      2. Menjelaskan layanan Orange Dental (Scaling, Tambal, Bleaching, Ortho/Behel).
      3. Mengarahkan user untuk membuat janji temu via WhatsApp jika mereka ingin booking.
      
      Jangan berikan diagnosa medis spesifik. Selalu sarankan untuk konsultasi langsung dengan dokter gigi.
      
      Informasi Klinik:
      - Filosofi: "Senyum Sehat, Hidup Bahagia". Transparansi harga, tanpa biaya tersembunyi.
      - Lokasi: Jakarta, Bekasi, Tangerang.
      
      Jawablah dengan singkat dan jelas (maksimal 3 paragraf).`,
    },
  });
};

export const generateImage = async (prompt: string): Promise<string | null> => {
  if (!ai) return null;
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }],
      },
    });

    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Image generation failed:", error);
    return null;
  }
};