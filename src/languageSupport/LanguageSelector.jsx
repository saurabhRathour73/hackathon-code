import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'hi', name: 'Hindi' },
  { code: 'bn', name: 'Bengali' },
  { code: 'te', name: 'Telugu' },
  { code: 'mr', name: 'Marathi' },
  { code: 'ta', name: 'Tamil' },
  { code: 'gu', name: 'Gujarati' },
  { code: 'kn', name: 'Kannada' },
  { code: 'ml', name: 'Malayalam' },
  { code: 'or', name: 'Odia' },
  { code: 'pa', name: 'Punjabi' },
  { code: 'as', name: 'Assamese' },
  { code: 'ne', name: 'Nepali' },
  { code: 'ks', name: 'Kashmiri' },
  { code: 'sd', name: 'Sindhi' },
  { code: 'ur', name: 'Urdu' },
  { code: 'bh', name: 'Bihari' },
  { code: 'sa', name: 'Sanskrit' },
  { code: 'doi', name: 'Dogri' },
  { code: 'kok', name: 'Konkani' },
  { code: 'ku', name: 'Khasi' },
  { code: 'manip', name: 'Maithili' },
  { code: 'mni', name: 'Manipuri' }
];

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const selectorRef = useRef(null);

  const toggleDropdown = () => {
    console.log('Dropdown toggled');
    setOpen(!open);
  };

  const changeLanguage = (lang) => {
    console.log('Changing language to:', lang);
    i18n.changeLanguage(lang).then(() => {
      console.log('Language changed successfully to:', i18n.language);
    }).catch((err) => {
      console.error('Error changing language:', err);
    });

    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target)) {
        console.log('Clicked outside, closing dropdown');
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={selectorRef} className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="bg-transparent text-sm font-medium  text-white font-medium px-4 py-2 rounded hover:bg-teal-700"
      >
        Select Language
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-40 ring-1 ring-black ring-opacity-5 bg-white text-black flex flex-col items-center rounded shadow-lg z-50 overflow-y-auto max-h-60"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none'
          }}
        >
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="px-4 py-2  rounded-2xl cursor-pointer w-full text-center"
              onClick={() => changeLanguage(lang.code)}
            >
              {lang.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
