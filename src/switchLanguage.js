import React from 'react';
import i18n from "i18next";

export default class Lang extends React.Component {

  getAlert() {
    console.log('HELLO😁😁😁!');
  }

  switchLang(code){
    switch (code){
      case 'af': i18n.changeLanguage(code);break;
      case 'am': i18n.changeLanguage(code);break;
      case 'ar': i18n.changeLanguage(code);document.documentElement.dir = i18n.dir();break;
      case 'az': i18n.changeLanguage(code);break;
      case 'be': i18n.changeLanguage(code);break;
      case 'bg': i18n.changeLanguage(code);break;
      case 'bn': i18n.changeLanguage(code);break;
      case 'bs': i18n.changeLanguage(code);break;
      case 'cs': i18n.changeLanguage(code);break;
      case 'da': i18n.changeLanguage(code);break;
      case 'de': i18n.changeLanguage(code);break;
      case 'el': i18n.changeLanguage(code);break;
      case 'en': i18n.changeLanguage(code);break;
      case 'es': i18n.changeLanguage(code);break;
      case 'et': i18n.changeLanguage(code);break;
      case 'fa': i18n.changeLanguage(code);break;
      case 'fi': i18n.changeLanguage(code);break;
      case 'fr': i18n.changeLanguage(code);break;
      case 'ga': i18n.changeLanguage(code);break;
      case 'he': i18n.changeLanguage(code);document.documentElement.dir = i18n.dir();break;
      case 'hi': i18n.changeLanguage(code);break;
      case 'hr': i18n.changeLanguage(code);break;
      case 'hu': i18n.changeLanguage(code);break;
      case 'hy': i18n.changeLanguage(code);break;
      case 'id': i18n.changeLanguage(code);break;
      case 'is': i18n.changeLanguage(code);break;
      case 'it': i18n.changeLanguage(code);break;
      case 'ja': i18n.changeLanguage(code);break;
      case 'ka': i18n.changeLanguage(code);break;
      case 'kk': i18n.changeLanguage(code);break;
      case 'km': i18n.changeLanguage(code);break;
      case 'ko': i18n.changeLanguage(code);break;
      case 'ku': i18n.changeLanguage(code);break;
      case 'ky': i18n.changeLanguage(code);break;
      case 'lb': i18n.changeLanguage(code);break;
      case 'lt': i18n.changeLanguage(code);break;
      case 'lo': i18n.changeLanguage(code);break;
      case 'lv': i18n.changeLanguage(code);break;
      case 'mg': i18n.changeLanguage(code);break;
      case 'mk': i18n.changeLanguage(code);break;
      case 'mn': i18n.changeLanguage(code);break;
      case 'ms': i18n.changeLanguage(code);break;
      case 'mt': i18n.changeLanguage(code);break;
      case 'my': i18n.changeLanguage(code);break;
      case 'nl': i18n.changeLanguage(code);break;
      case 'no': i18n.changeLanguage(code);break;
      case 'pl': i18n.changeLanguage(code);break;
      case 'pt': i18n.changeLanguage(code);break;
      case 'ro': i18n.changeLanguage(code);break;
      case 'ru': i18n.changeLanguage(code);break;
      case 'sq': i18n.changeLanguage(code);break;
      case 'sw': i18n.changeLanguage(code);break;
      case 'sv': i18n.changeLanguage(code);break;
      case 'th': i18n.changeLanguage(code);break;
      case 'tl': i18n.changeLanguage(code);break;
      case 'tr': i18n.changeLanguage(code);break;
      case 'uk': i18n.changeLanguage(code);break;
      case 'ur': i18n.changeLanguage(code);document.documentElement.dir = i18n.dir();break;
      case 'vi': i18n.changeLanguage(code);break;
      case 'zh': i18n.changeLanguage(code);break;
      default:
        i18n.changeLanguage('en');
    }
  }

}
