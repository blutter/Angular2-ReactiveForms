import { TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { WelcomComponent } from './welcome.component';

describe('A working test', () => {
    it('a passing test', () => {
        expect(1).toBe(1);
    });

    it('another passing test', () => {
        expect(2).toBe(2);
    });

    it('and another test', () => {
        expect('a').toBe('a');
    });
});

describe('Template for a component test', () => {
    let fixture;

    beforeEach(done => {
        const configure = (testBed: TestBed) => {
            testBed.configureTestingModule({
                imports: [ AppModule],
            });
        }

        fixture = TestBed.createComponent(WelcomComponent);
    });
});