const Spellchecker = require("hunspell-spellchecker");
const fs = require("fs");
import path, { dirname } from "path";
import { fileURLToPath } from "url";

export async function validateDictionaryData(data) {
  if (!data) {
    return {
      status: false,
      message: "Data is empty or undefined",
      messageKu: "زانیاریەکان بەتاڵن یان پێناسە نەکراون تکایە هەوڵ بدەرەوە!",
    };
  }

  //  Validate definitions
  if (data.definitions.length === 0) {
    return {
      status: false,
      message:
        "We found the word, but unfortunately, a detailed definition is not available at the moment. Please try another word.",
      massageKu:
        "وشەکەمان دۆزیەوە، بەڵام بەداخەوە پێناسەیەکی ورد لە ئێستادا لەبەردەستدا نییە. تکایە وشەیەکی تر تاقی بکەرەوە.",
    };
  }

  // If all validations pass, return success status
  return { status: true };
}

export async function checkEnglishWordIsAvailable(word) {
  const isWordAvailable = await checkSpelling(word);

  if (
    isWordAvailable.spelledCorrectly === false &&
    isWordAvailable.suggestion.length > 0
  ) {
    return {
      status: false,
      suggestion: isWordAvailable.suggestion,
      message:
        "Sorry, it looks like you might have a spelling mistake, take a look at your word again.",
      massageKu:
        "ببورە، ڕەنگە هەڵەی ڕێنووسیت هەبێت، جارێکی تر سەیری وشەکەت بکە.",
    };
  } else if (
    isWordAvailable.spelledCorrectly === false &&
    isWordAvailable.suggestion.length === 0
  ) {
    return {
      status: false,
      message: `Sorry! The word '${word}' is unknown in the English dictionary.`,
      massageKu: `ببوورە! وشەی '${word}' لە فەرهەنگی ئینگلیزیدا نەناسراووە.`,
    };
  }

  // If all validations pass, return success status
  return { status: true };
}

// Helper function to check if the word is a English word
async function checkSpelling(word) {
  const folderPath = __dirname;
  // Read the contents of the directory
  const files = fs.readdirSync(folderPath);
  console.log("Path: ", folderPath, "Files in the directory: ", files);

  const filePathAFF = path.join(__dirname, "en_US.aff");
  const filePathDIC = path.join(__dirname, "en_US.dic");

  var spellchecker = new Spellchecker();

  // Parse an hunspell dictionary
  var DICT = spellchecker.parse({
    aff: fs.readFileSync(filePathAFF),
    dic: fs.readFileSync(filePathDIC),
  });

  try {
    // Load a dictionary
    spellchecker.use(DICT);

    // Check a word
    const isSpelledCorrectly = spellchecker.check(word);
    if (isSpelledCorrectly) {
      // Word is spelled correctly
      return true;
    } else {
      // Word is misspelled, get suggestions
      const suggestion = spellchecker.suggest(word, 1);

      if (!suggestion && suggestion.length === 0) {
        return { spelledCorrectly: false };
      }
      return { spelledCorrectly: false, suggestion };
    }
  } catch (error) {
    // Handle dictionary loading error
    console.error("Error:", error);
    return false;
  }
}
