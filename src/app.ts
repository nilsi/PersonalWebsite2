export class App {
    dots = 4;
    pos = 0;
    direction = 'slider__indicator--right'

    dot(pos) {
        this.direction = this.pos > pos ? 'slider__indicator--left' : 'slider__indicator--right'
        this.pos = pos;
    }
}
