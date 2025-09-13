'use server';


const getCodeMethod = async ({body, route} : {body : object, route : string}) => {
  return await fetch(`${import.meta.env.VITE_API_BASE_URL}/${route}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

export async function explain(_prevState: unknown, formData : FormData) {
  const code = formData.get('code');
  const language = formData.get('language');

  console.log('base url', import.meta.env.VITE_API_BASE_URL);
  

  try {
   const res = await getCodeMethod({body: { code, language }, route: 'explain-code'});
    
    if (!res.ok) {
      return {
        success: false,
        error: 'Failed to fetch the results',
      };
    }

    const data = await res.json();
    
    return {
      success: true,
      data,
    }
    
  } catch (error : unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';
    return {
      success: false,
      error: `An error occurred: ${errorMessage}`,
    };
  }
}


export async function refactor(_prevState: unknown, formData: FormData) {
  const code = formData.get('code');
  const language = formData.get('language');

  try {
    const res = await getCodeMethod({body: { code, language }, route: 'refactor-code'});

    if (!res.ok) {
      return { success: false, error: 'Failed to fetch the results' };
    }

    const data = await res.json();

    return { success: true, data };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';
    return { success: false, error: `An error occurred: ${errorMessage}` };
  }
}
