import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {MockModule} from 'ng-mocks';
import {TableModule} from 'primeng/table';
import {DriveModule} from './components/drive/drive.module';
import {AccountBookModule} from './adapters/account-book/account-book.module';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                FormsModule,
                TableModule,
                DriveModule,
                MockModule(AccountBookModule)
            ],
            declarations: [
                AppComponent,
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

});
