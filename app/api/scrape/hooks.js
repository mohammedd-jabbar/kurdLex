"use server";
import cheerio from "cheerio";

// wordOrigin.js
export const getWordOrigin = (html) => {
  try {
    // get word origin from this path we set in querySelector and we get the text inside the tag with textContent and cut the space in before or after the text
    const $ = cheerio.load(html);
    const wordOrigin = $(
      "div.collapse span.unbox[unbox='wordorigin'] span.body span.p"
    ).text();

    if (wordOrigin) {
      return wordOrigin.toString();
    } else {
      // Handle the case when the element is not found
      return "Word origin not available";
    }
  } catch (error) {
    // Handle any errors that might occur during extraction
    console.error("Error extracting word origin:", error);
    return "Error extracting word origin";
  }
};

export const getAudio = (document) => {
  try {
    const $ = cheerio.load(document);
    const audioButton = $(".phonetics .sound.audio_play_button.pron-us");
    const audioUrl = audioButton && audioButton.attr("data-src-mp3");

    if (audioUrl !== undefined) {
      return audioUrl.toString();
    } else {
      // Handle the case when the element is not found or attribute is undefined
      return "Word origin not available";
    }
  } catch (error) {
    // Handle any errors that might occur during extraction
    console.error("Error extracting audio Url:", error);
    return "Error extracting audio url";
  }
};

export const getPhon = (document) => {
  try {
    const $ = cheerio.load(document);
    const phon = $(
      "div.top-container span[class^='phonetic'] .phons_n_am .phon"
    )
      .text()
      .trim();

    if (phon) {
      return phon;
    } else {
      // Handle the case when the element is not found
      return "Phon not available";
    }
  } catch (error) {
    // Handle any errors that might occur during extraction
    console.error("Error extracting Phon:", error);
    return "Error extracting Phon";
  }
};

export const getIdioms = (document, idiom) => {
  const $ = cheerio.load(document);

  try {
    const idmgsElements = $(
      `div[id^='${idiom}_idmgs_'] span[id^='${idiom}_idmg_']`
    );

    const idioms = Array.from(idmgsElements)
      .slice(0, 3)
      .map((element) => {
        const header = $(element)
          .find(`.top-container div[id^='${idiom}_topg_']`)
          .text()
          .trim();

        const status = $(element)
          .find(`li[id^='${idiom}_sng_'] .sensetop`)
          .text()
          .trim();

        const meaning = $(element)
          .find(`li[id^='${idiom}_sng_'] .def`)
          .text()
          .trim();

        const example = $(element)
          .find(`li[id^='${idiom}_sng_'] span.x`)
          .text()
          .trim();

        return {
          header: header,
          status: status,
          meaning: meaning,
          example: example,
        };
      });

    if (idioms) {
      return idioms;
    } else {
      // Handle the case when the element is not found
      return "idioms not available";
    }
  } catch (error) {
    // Handle any errors that might occur during extraction
    console.error("Error extracting idioms:", error);
    return "Error extracting idioms";
  }
};

// Function to extract definitions and examples from the HTML document
export const getDefinitions = (document, word) => {
  try {
    const $ = cheerio.load(document);
    // Select all list items with the class 'sense' inside an ordered list with class 'senses_multiple'
    const classnameDefinition = $(`ol[class^='sense'][htag="ol"] li.sense`);

    // Use the map function to iterate over each 'li.sense' element and extract information
    const definitionSet = Array.from(classnameDefinition)
      .slice(0, 3)
      .map((element) => {
        // Extract the definition text from the 'span.def' element inside the current 'li.sense'
        const definition = $(element).find("span.def").text().trim();

        // Map over the <ul> elements and return as an array
        const examples = Array.from($(element).find("ul.examples li span.x"))
          .slice(0, 3)
          .map((exampleElement) => $(exampleElement).text().trim());

        return {
          definition: definition,
          example: examples,
        };
      });

    if (definitionSet) {
      return definitionSet;
    } else {
      // Handle the case when the element is not found
      return "definition not available";
    }
  } catch (error) {
    // Handle any errors that might occur during extraction
    console.error("Error extracting definition:", error);
    return "Error extracting definition";
  }
};
