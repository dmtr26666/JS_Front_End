function extract(content) {
    let textElement = document.getElementById(content)

    let matches = textElement.textContent.matchAll(/\((.*?)\)/g);

    let text = Array.from(matches).map(match => match[1]).join('; ')

    return text
}