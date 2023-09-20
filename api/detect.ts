export const detect = async (text: string) => {
    const url = 'https://microsoft-translator-text.p.rapidapi.com/Detect?api-version=3.0'
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'eda570a7camshb6de8c4d9b00e0bp17028ajsn54bcbe62cac8',
            'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
        },
        body: JSON.stringify([
            {
                Text: text,
            },
        ]),
    }

    try {
        const response = await fetch(url, options)
        const result = JSON.parse(await response.text())[0].language
        
        return result
    } catch (error) {
        console.error("detect is unavailable")
    }
}
