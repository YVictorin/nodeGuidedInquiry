import LanguageDetect from "languagedetect";

const findLanguage = (promptArr) => {
    const detector = new LanguageDetect();
    let result = [];

    for(let index = 0; index < promptArr.length; index++) {
        result.push(detector.detect(promptArr[index])[0][0]);
    }

    return result;
}

console.log(findLanguage(['Es macht gut', 'Dobrá práce', 'Gwaith da”']));