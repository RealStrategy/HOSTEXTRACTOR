// Extraer URL unicas sin duplicado
function extractUrlsFromText(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.match(urlRegex) || [];
}

function extractUrlsFromHref(text) {
    var hrefUrls = [];
    var hrefRegex = /href=["']([^"']+)["']/g;
    var matches;
    while ((matches = hrefRegex.exec(text)) !== null) {
        var hrefUrl = matches[1];
        if (hrefUrl.startsWith("http://") || hrefUrl.startsWith("https://")) {
            hrefUrls.push(hrefUrl);
        }
    }
    return hrefUrls;
}

function extractUrls() {
    var inputText = document.getElementById('input-text').value;
    var resultText = document.getElementById('result-text');

    // Clear previous results
    resultText.value = '';

    // Extract URLs from text and href attributes
    var urls = extractUrlsFromText(inputText);
    var hrefUrls = extractUrlsFromHref(inputText);
    urls = urls.concat(hrefUrls);

    // Display URLs
    if (urls.length > 0) {
        urls = Array.from(new Set(urls));
        resultText.value = urls.join('\n');
    } else {
        resultText.value = 'No encontrado.';
    }
}

function extractUniqueUrls() {
    var inputText = document.getElementById('input-text').value;
    var resultText = document.getElementById('result-text');

    // Clear previous results
    resultText.value = '';

    // Extract URLs from text and href attributes
    var urls = extractUrlsFromText(inputText);
    var hrefUrls = extractUrlsFromHref(inputText);
    urls = urls.concat(hrefUrls);

    // Remove duplicate URLs and extract domains
    var uniqueDomains = [];
    var domainRegex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img;
    var matches;
    while ((matches = domainRegex.exec(urls.join('\n'))) !== null) {
        var domain = matches[1];
        if (!uniqueDomains.includes(domain)) {
            uniqueDomains.push(domain);
        }
    }

    // Display unique domains
    if (uniqueDomains.length > 0) {
        resultText.value = uniqueDomains.join('\n');
    } else {
        resultText.value = 'No encontrado.';
    }
}

// Agrega el evento al botón de extracción
var extractButton = document.getElementById('extract-button');
extractButton.addEventListener('click', extractUrls);

// Agrega el evento al botón de extracción sin repetir
var extractUniqueButton = document.getElementById('extract-unique-button');
extractUniqueButton.addEventListener('click', extr
