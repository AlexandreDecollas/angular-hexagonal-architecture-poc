import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DriveComponent} from './drive.component';
import {ClientModule} from '../client/client.module';
import {TaxiModule} from '../taxi/taxi.module';

describe('DriveComponent', () => {
    let component: DriveComponent;
    let fixture: ComponentFixture<DriveComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DriveComponent],
            imports: [
                ClientModule,
                TaxiModule
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DriveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
