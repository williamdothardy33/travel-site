import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';
class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector('.site-header');
        this.triggerPoint = document.querySelector('.large-hero__title');
        this.foregroundAssert();
        this.headerLinks = $('.primary-nav a');
        this.pageSections = $(".page-section");
        this.activePageSection();
        this.smoothScrolling();
    }
    foregroundAssert() {
        window.addEventListener('scroll', () => {
            var topDistance = this.triggerPoint.getBoundingClientRect().top;
            if (topDistance <= 0) {
                this.siteHeader.classList.add('site-header--dark');
            }
            else {
                this.siteHeader.classList.remove('site-header--dark');
            }
        });
    }

    smoothScrolling() {
        this.headerLinks.smoothScroll();
    }

    activePageSection() {
        var that = this;
        this.pageSections.each(function() {
            var currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if (direction == 'down') {
                        var activeLinkId = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass('active-link');
                        $(activeLinkId).addClass('active-link');
                    }
                    

                },
                offset: '18%'
            });
            
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if (direction == 'up') {
                        var activeLinkId = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass('active-link');
                        $(activeLinkId).addClass('active-link');
                    }
                    

                },
                offset: '-40%'
            });
        });

    //     window.addEventListener('scroll', () => {
    //         for (var i = 0; i < this.pageSections.length; i++) {
    //             var topThreshold = this.pageSections[i].getBoundingClientRect().top;
    //             var bottomThreshold = this.pageSections[i].getBoundingClientRect().bottom;
    //             var activeLinkId = this.pageSections[i].getAttribute('data-matching-link');
    //             var activeLink = document.querySelector(activeLinkId);
    //             var offset = .18*innerHeight;
    //             if (topThreshold <= offset && bottomThreshold >= offset) {
    //                 activeLink.classList.add('active-link');
    //             }
    //             else {
    //                 activeLink.classList.remove('active-link');
    //             }
    //         }
    //     });
    }
}

export default StickyHeader;