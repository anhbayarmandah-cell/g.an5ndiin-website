import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Gemini Client with server-side API Key
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is not configured.');
  }

  return new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

// Default System Instructions for My Idol
const DEFAULT_SYSTEM_INSTRUCTION = `Та бол Ананд болон энэхүү сайтын хэрэглэгчийн шүтээн (My Idol) юм.
Ананд нь 16 настай, сагсан бөмбөг тоглодог (JCL лиг, 180 см өндөр), пүүз хувцасны сонирхолтой, CS2 (m0NESY)-д дуртай, Leo Messi-г GOAT хэмээн хүндэлдэг, ирээдүйд амжилттай Software Engineer & үүсгэн байгуулагч болох зорилготой хичээнгүй залуу.

Таны үүрэг:
1. Хэрэглэгчийн асуултад үргэлж урам зориг өгч, эерэг, спортлог, тууштай сэтгэлгээгээр хариулна.
2. Монгол хэлээр цэвэр, эелдэг, нөхөрсөг, ухаалаг ярилцана (хэрэв хэрэглэгч өөр хэлээр бичвэл тухайн хэлээр нь хариулж болно).
3. Сахилга бат, хичээл зүтгэл, тасралтгүй суралцах («Өдөр бүр 1% ахих»), спортын тэсвэр хатуужил, технологийн ур чадварыг чухалчилсан зөвлөгөө өгнө.
4. Хариултаа хэт урт нуршилгүй, уншихад ойлгомжтой, сэтгэл хөдөлгөм, эрч хүчтэй байдлаар бичнэ.`;

// API endpoint for My Idol Chat
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, idolRole, customInstruction } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required.' });
    }

    // Determine system instruction based on idol selection or custom instructions
    let finalSystemInstruction = DEFAULT_SYSTEM_INSTRUCTION;

    if (customInstruction && typeof customInstruction === 'string' && customInstruction.trim().length > 0) {
      finalSystemInstruction = customInstruction.trim();
    } else if (idolRole === 'cooper_flagg') {
      finalSystemInstruction = `Та бол NBA-ийн ирээдүйн супер од Cooper Flagg байна. Сагсан бөмбөг, өндөр энерги, хөдөлмөрч чанар, хамгаалалт ба довтолгооны эрч хүчээрээ Анандыг болон хэрэглэгчийг үргэлж хурцалж, урам зориг өгч ярилцана. Монгол хэлээр эелдэг, эрч хүчтэй, спортын өндөр соёлтой хариулна.`;
    } else if (idolRole === 'messi') {
      finalSystemInstruction = `Та бол хөлбөмбөгийн түүхэн домог Lionel Messi (GOAT) байна. Даруу төлөв, уйгагүй хөдөлмөр, багийн тоглолт, хэзээ ч бууж өгдөггүй сэтгэл зүйн тухай чин сэтгэлийн зөвлөгөө өгнө. Хэрэглэгчтэй монгол хэлээр маш даруу, нөхөрсөг, урам өгсөн аясаар ярилцана.`;
    } else if (idolRole === 'm0nesy') {
      finalSystemInstruction = `Та бол дэлхийн шилдэг CS2 AWP тоглогч Ilya "m0NESY" Osipov байна. Түргэн рефлекс, сэтгэл зүйн төвлөрөл, бэлтгэл сургуулилалт, esports болон компьютерын ертөнцөд амжилтад хүрэх нууцыг хуваалцана.`;
    }

    const ai = getGeminiClient();

    // Map conversation history
    const contents = messages.map((m: { role: string; text: string }) => ({
      role: m.role === 'model' || m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.text }],
    }));

    // Primary fast responsive model
    let response;
    try {
      response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: contents,
        config: {
          systemInstruction: finalSystemInstruction,
        },
      });
    } catch (primaryErr) {
      console.warn('Primary model failed, attempting fallback to gemini-3.5-flash-lite:', primaryErr);
      response = await ai.models.generateContent({
        model: 'gemini-3.5-flash-lite',
        contents: contents,
        config: {
          systemInstruction: finalSystemInstruction,
        },
      });
    }

    const replyText = response.text || 'Уучлаарай, хариулт үүсгэхэд тодорхойгүй алдаа гарлаа.';

    return res.json({ reply: replyText });
  } catch (err: unknown) {
    const error = err as Error;
    console.error('Gemini API Error:', error);
    return res.status(500).json({
      error: error.message || 'Gemini API-тай холбогдоход алдаа гарлаа.',
    });
  }
});

// Configure Vite middleware in development or serve static in production
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running at http://0.0.0.0:${port}`);
  });
}

startServer();
