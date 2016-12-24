import { Component, OnInit } from '@angular/core';
import { TranslateService } from './translate';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
})

export class AppComponent implements OnInit {

    public translatedText: string;
    public supportedLanguages: any[];

    constructor(private _translate: TranslateService) { }

    ngOnInit() {
        // standing data
        this.supportedLangs = [
        { display: 'English', value: 'en' },
        { display: 'Español', value: 'es' },
        { display: '华语', value: 'zh' },
        ];

        // set current langage
        this.selectLang('es');
    }

    isCurrentLang(lang: string) {
        // check if the selected lang is current lang
        return lang === this._translate.currentLang;
    }

    selectLang(lang: string) {
        // set current lang;
        this._translate.use(lang);
        this.refreshText();
    }

    refreshText() {
        // refresh translation when language change
        this.translatedText = this._translate.instant('hello world');
    }
}