import { async, TestBed } from '@angular/core/testing';
import { DialogComponentComponent } from './dialog-component.component';
describe('DialogComponentComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DialogComponentComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DialogComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=G:/wwwRoot/AngularJS/Material-Design-AngularJS2-App/MDA2A/src/app/dialog-component/dialog-component.component.spec.js.map