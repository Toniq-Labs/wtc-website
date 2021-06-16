// import external dependencies
import 'jquery';

// Import everything from autoload
import 'bootstrap';
import 'page-scroll-to-id';
import 'jquery-match-height';

jQuery(document).ready(() => {

    //nav bar smooth scroll
    $('a[href*="#"]').mPageScroll2id();

    //match height of team member bios
    $('.team-member__bio').matchHeight();

    //hamburger animation
    $('.hamburger').click(function() {
        $(this).toggleClass('is-active');
    });


});
