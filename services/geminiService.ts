
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const generateSiteConcept = async (userDescription: string) => {
  if (!API_KEY) {
    throw new Error("API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate a professional website strategy and structure for: ${userDescription}. The language should be Hebrew.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          brandName: { type: Type.STRING },
          tagline: { type: Type.STRING },
          colors: {
            type: Type.OBJECT,
            properties: {
              primary: { type: Type.STRING, description: "Hex code" },
              secondary: { type: Type.STRING, description: "Hex code" },
              accent: { type: Type.STRING, description: "Hex code" }
            }
          },
          sections: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING }
              }
            }
          },
          priceEstimation: { type: Type.STRING, description: "Professional price estimate in NIS" }
        },
        required: ["brandName", "tagline", "colors", "sections", "priceEstimation"]
      }
    }
  });

  return JSON.parse(response.text);
};
