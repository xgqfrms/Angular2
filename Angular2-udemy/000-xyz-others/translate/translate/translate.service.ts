
import { TRANSLATIONS } from './translations'; // import our opaque token

import { Injectable, Inject, EventEmitter } from '@angular/core'; // import event emitter


@Injectable()
export class TranslateService {
    private _currentLang: string;

    public get currentLang() {
        return this._currentLang;
    }

    // inject our translations
    constructor(@Inject(TRANSLATIONS) private _translations: any) {
    }

    public use(lang: string): void {
        // set current language
        this._currentLang = lang;
        //???
        this.onLangChanged.emit(lang); // publish changes
    }

    private translate(key: string): string {
        // private perform translation
        let translation = key;

        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }

        return translation;
    }

    public instant(key: string) {
        // call translation
        return this.translate(key); 
    }
    // ???
    private PLACEHOLDER = '%'; // our placeholder

    public replace(word: string = '', words: string | string[] = '') {
        let translation: string = word;

        const values: string[] = [].concat(words);
        values.forEach((e, i) => {
            translation = translation.replace(this.PLACEHOLDER.concat(<any>i), e);
        });

        return translation;
    }
    // ??? 
    // add event
    public onLangChanged: EventEmitter<string> = new EventEmitter<string>();

}