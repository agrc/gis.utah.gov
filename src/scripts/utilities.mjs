import ky from 'ky';

export async function validateUrl(url) {
  let parsedUrl;

  try {
    parsedUrl = new URL(url);
  } catch (error) {
    return {
      valid: false,
      message: `invalid url: ${error.message}`,
    };
  }

  let response;
  try {
    response = await ky(url, {
      throwHttpErrors: false,
      redirect: 'manual',
    });
  } catch (error) {
    return {
      valid: false,
      message: `failed request with error: ${error.message}`,
    };
  }

  if (!response.ok) {
    if ([301, 302].includes(response.status)) {
      let redirect = response.headers.get('location');
      if (redirect.startsWith('/')) {
        redirect = new URL(redirect, url).href;
      }

      return {
        redirect: `${redirect}${parsedUrl.hash}${parsedUrl.search}`,
        ...(await validateUrl(`${redirect}`)),
      };
    }

    return {
      valid: false,
      message: `failed request with status: ${response.statusText} (${response.status})`,
    };
  }

  return {
    valid: true,
  };
}
