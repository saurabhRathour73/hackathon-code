import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  hi: { translation: { selectLanguage: 'भाषा चुनें', welcome: 'स्वागत है', description: 'यह आपकी बहुभाषी वेबसाइट है।' } },
  bn: { translation: { selectLanguage: 'ভাষা নির্বাচন করুন', welcome: 'স্বাগতম', description: 'এটি আপনার বহুভাষিক ওয়েবসাইট।' } },
  te: { translation: { selectLanguage: 'భాషను ఎంచుకోండి', welcome: 'స్వాగతం', description: 'ఇది మీ బహుభాషా వెబ్‌సైట్.' } },
  mr: { translation: { selectLanguage: 'भाषा निवडा', welcome: 'स्वागत आहे', description: 'ही तुमची बहुभाषिक वेबसाइट आहे.' } },
  ta: { translation: { selectLanguage: 'மொழியை தேர்வுசெய்க', welcome: 'வரவேற்பு', description: 'இது உங்கள் பன்மொழி வலைத்தளம்.' } },
  gu: { translation: { selectLanguage: 'ભાષા પસંદ કરો', welcome: 'સ્વાગત છે', description: 'આ તમારી બહુભાષી વેબસાઇટ છે.' } },
  kn: { translation: { selectLanguage: 'ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ', welcome: 'ಸ್ವಾಗತ', description: 'ಇದು ನಿಮ್ಮ ಬಹುಭಾಷಾ ವೆಬ್‌ಸೈಟ್ ಆಗಿದೆ.' } },
  ml: { translation: { selectLanguage: 'ഭാഷ തിരഞ്ഞെടുക്കുക', welcome: 'സ്വാഗതം', description: 'ഇത് നിങ്ങളുടെ ബഹുഭാഷാ വെബ്‌സൈറ്റ് ആണ്.' } },
  or: { translation: { selectLanguage: 'ଭାଷା ଚୟନ କରନ୍ତୁ', welcome: 'ସ୍ୱାଗତ', description: 'ଏହା ଆପଣଙ୍କର ବହୁଭାଷୀ ୱେବସାଇଟ୍ ଅଟେ।' } },
  pa: { translation: { selectLanguage: 'ਭਾਸ਼ਾ ਚੁਣੋ', welcome: 'ਸੁਆਗਤ ਹੈ', description: 'ਇਹ ਤੁਹਾਡੀ ਬਹੁਭਾਸ਼ੀ ਵੈਬਸਾਈਟ ਹੈ।' } },
  as: { translation: { selectLanguage: 'ভাষা বাচনি কৰক', welcome: 'স্বাগতম', description: 'এইটো আপোনাৰ বহু ভাষিক ৱেবচাইট।' } },
  ma: { translation: { selectLanguage: 'भाषा चुनें', welcome: 'स्वागत है', description: 'यह आपकी बहुभाषी वेबसाइट है।' } }, // Manipuri
  ne: { translation: { selectLanguage: 'भाषा चयन गर्नुहोस्', welcome: 'स्वागत छ', description: 'यो तपाईंको बहुभाषिक वेबसाइट हो।' } },
  ks: { translation: { selectLanguage: 'زبان منتخب کریں', welcome: 'خوش آمدید', description: 'یہ آپ کی کثیر لسانی ویب سائٹ ہے۔' } }, // Kashmiri
  sd: { translation: { selectLanguage: 'ٻولي چونڊيو', welcome: 'خوش آمدید', description: 'هي توهان جي گهڻ ٻولي واري ويب سائيٽ آهي.' } }, // Sindhi
  ur: { translation: { selectLanguage: 'زبان منتخب کریں', welcome: 'خوش آمدید', description: 'یہ آپ کی کثیر لسانی ویب سائٹ ہے۔' } },
  bh: { translation: { selectLanguage: 'भाषा चुनें', welcome: 'स्वागत है', description: 'ई राउर बहुभाषी वेबसाइट ह।' } }, // Bihari
  sa: { translation: { selectLanguage: 'भाषा चुनोतु', welcome: 'स्वागतं', description: 'एषा भवतः बहुभाषिक वेब्साइट अस्ति।' } }, // Sanskrit
  doi: { translation: { selectLanguage: 'भाषा चुनो', welcome: 'स्वागत है', description: 'ए यह आपकी बहुभाषी वेबसाइट है।' } }, // Dogri
  kok: { translation: { selectLanguage: 'भाषा निवडा', welcome: 'स्वागत आहे', description: 'हे तुमचं बहुभाषिक वेबसाइट आहे.' } }, // Konkani
  ku: { translation: { selectLanguage: 'भाषा चुनें', welcome: 'स्वागत है', description: 'यह आपकी बहुभाषी वेबसाइट है।' } }, // Khasi
  manip: { translation: { selectLanguage: 'भाषा चुनें', welcome: 'स्वागत है', description: 'यह आपकी बहुभाषी वेबसाइट है।' } }, // Maithili (alias)
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'hi', // default language
    fallbackLng: 'hi',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
