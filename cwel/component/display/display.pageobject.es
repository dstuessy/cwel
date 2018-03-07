import PageObject from '../../../test/e2e/page-object';

export default class DisplayPageObject extends PageObject {
    constructor() {
        super('Component', 'display');
        this.displayImageSelector = '.display--image';
        this.animateTopRightSelector = '.image--animate-top-right';
        this.animateTopLeftSelector = '.image--animate-top-left';
        this.displayLightSelector = '.display--light';
    }

    getAnimationElmTopRight() {
        return element(by.css(this.animateTopRightSelector));
    }

    getAnimationElmTopLeft() {
        return element(by.css(this.animateTopLeftSelector));
    }

    getDisplayElmLight() {
        return element(by.css(this.displayLightSelector));
    }
}
