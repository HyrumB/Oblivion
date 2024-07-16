export async function getAPOD(api_key, date) {
  try {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}&concept_tags=True`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getLibraryMedia(endPoint = "search", params) {
  try {
    const url = `https://images-api.nasa.gov/${endPoint}`;

    // Encode parameters as a URLSearchParams object
    const encodedParams = new URLSearchParams(params);

    // Build the full URL with encoded parameters

    const fullUrl = `${url}?${encodedParams.toString()}`;

    const response = await fetch(fullUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getPatent(api_key, query = "engine") {
  try {
    const url = `https://api.nasa.gov/techtransfer/patent/?${query}&api_key=${api_key}`;
    // Build the full URL with encoded parameters

    const response = await fetch(url);
    console.log(url);

    const data = await response.json();
    return data;

  } catch (error) {

    console.log(error);
    alert("Patent lookup failed. Please try again later.");
    return null;
  }
}

export async function getUrl(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
