!function($) {
    $(document).ready(function() {
        // Function to handle sticky header
        const initStickyHeader = () => {
            const $header = $(".header");
            $(window).on("scroll", () => {
                $header.toggleClass("sticky-header", $(window).scrollTop() > 100);
            });
        };
        initStickyHeader();
    });
}(jQuery);
