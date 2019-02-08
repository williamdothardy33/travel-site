// import $ from 'jquery';
// import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(elements, offsetFromBottom) {
        // this.featureItems = $('.feature-item');
        this.elements = elements;
        this.offsetFromBottom = offsetFromBottom;
        this.hide();
        this.reveal();
    }
    hide() {
        // this.featureItems.addClass('hide');
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.add('hide');
        }
    }
    reveal() {
        // this.featureItems.each(() => {
        //     var currentItem = this;
        //     new Waypoint({
        //         element: currentItem,
        //         handler: function() {
        //             $(currentItem).addClass('hide-to-show');
        //         }
        //     });
        // });
        window.addEventListener('scroll', () => {
            for (var i = 0; i < this.elements.length; i++) {
                var threshold = Math.floor((this.offsetFromBottom*this.elements[i].clientHeight));
                var bottomDistance = this.elements[i].getBoundingClientRect().bottom - innerHeight;
                if (bottomDistance <= threshold) {
                    this.elements[i].classList.add('hide--to-show');
                }
            }
        });
    }
}

export default RevealOnScroll;

