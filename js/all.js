
// Hero slider
$(function() {
    $('#hoverPrint').hover(function() {
        $('.overlayPrint').css('background', 'none');
    }, function() {
        $('.overlayPrint').css('background', '');
    });
    $('#hoverAsesory').hover(function() {
        $('.overlayAsesory').css('background', 'none');
    }, function() {
        $('.overlayAsesory').css('background', '');
    });
    $('#hoverDesign').hover(function() {
        $('.overlayDesign').css('background', 'none');
    }, function() {
        $('.overlayDesign').css('background', '');
    });
    $('#hoverMade').hover(function() {
        $('.overlayMade').css('background', 'none');
    }, function() {
        $('.overlayMade').css('background', '');
    });

});