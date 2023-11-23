// wordOrigin.js
export const getWordOrigin = (document) => {
  try {
    // get word origin from this path we set in querySelector and we get the text inside the tag with textContent and cut the space in before or after the text
    const wordOrigin = document
      .querySelector(
        `div.collapse span.unbox[unbox="wordorigin"] span.body span.p`
      )
      .textContent.trim();

    if (wordOrigin) {
      return wordOrigin;
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
    // find audio button in the dom
    const audioButton = document.querySelector(
      ".phonetics .sound.audio_play_button.pron-us"
    );

    // get the audio Url
    const audioUrl = audioButton.getAttribute("data-src-mp3");

    if (audioUrl) {
      return audioUrl;
    } else {
      // Handle the case when the element is not found
      return "Word origin not available";
    }
  } catch (error) {
    // Handle any errors that might occur during extraction
    console.error("Error extracting audio Url:", error);
    return "Error extracting audio url";
  }
};
