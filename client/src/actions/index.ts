'use server';


interface ExplanationData {
  explanation: string;
  language: string;
}

interface ExplainResult {
  success: boolean;
  data?: unknown;
  error?: string;
}

export async function explain(
  _prevState: unknown,
  formData: FormData
): Promise<ExplainResult> {
  const code = formData.get('code') as string | null;
  const language = formData.get('language') as string | null;

  console.log(`Generating explanation for ${language ?? 'unknown'}`);

  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/explain-code`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, language }),
      }
    );

    if (!res.ok) {
      return {
        success: false,
        error: 'Failed to fetch the results',
      };
    }

    const data = (await res.json()) as ExplanationData;

    return {
      success: true,
      data,
    };
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : 'Unknown error occurred';

    return {
      success: false,
      error: `An Error Occurred: ${errorMessage}`,
    };
  }
}

export default explain;