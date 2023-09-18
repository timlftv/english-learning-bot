export const translateRequest = async (text: string, from?: string, to?: string) => {
    const url =
        'https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=uk&api-version=3.0&from=en&profanityAction=NoAction&textType=plain'
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
        const result = await response.text()
        console.log(result)
    } catch (error) {
        console.error(error)
    }
}