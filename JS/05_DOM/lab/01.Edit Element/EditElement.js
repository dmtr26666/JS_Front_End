function editElement(elementReference, match, replacer) {
    let element = elementReference

    while (element.textContent.includes(match)) {
        element.textContent = elementReference.textContent.replace(match, replacer)
    }
    
}