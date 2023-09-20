export const dictionaryLookup = async (text: string, from?: string, to?: string) => {
    const url =
        'https://microsoft-translator-text.p.rapidapi.com/Dictionary/Lookup?to=uk&api-version=3.0&from=en'
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
        const words = await JSON.parse(await response.text())[0].translations
        // console.log("words: ", words)

        let result = '| '
        words.forEach((word: any) => {
            result += word.displayTarget + ' | '
        })

        return result
    } catch (error) {
        console.error('dictionary lookup error: ', error)
    }
}
