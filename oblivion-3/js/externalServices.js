

export async function getAPOD(api_key, date) {
    try {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}&concept_tags=True`
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        console.log(data.hdurl);
        return data;
        
    } catch (error) {
        console.log(error);
        return null;
    }
   
}

