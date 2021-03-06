'use strict';
var delani = (function(window, undefined){

    
  var SELECTORS = {
      pattern: '.pattern',
      card: '.card',
      cardImage: '.card_image',
      cardClose: '.card_btn-close'
   };
   
   var CLASSES = {
       patternHidden: 'pattern--hidden',
       polygon: 'polygon',
       polygonHidden: 'polygon--hidden'
   };

   var polygonMap = {
       paths: null,
       points: null
   };

   var layout = {};

   function init() {

    var pattern = Trianglify({
      width: window.innerWidth,
      height: window.innerHeight,
      cell_size: 90,
      variance: 1,
      stroke_width: 1,
      x_colors: 'Purples' 
    }).svg();

    _mapPolygons(pattern);
    _bindCards();
}; 
        function_mapPolygons(pattern) {

        $(SELECTORS.pattern).append(pattern);

        polyonMap.paths = [].slice.call(pattern.childNodes);

        polygonMap.points = [];

        polygonMap.paths.forEach(function(polygon) {

            $(polygon).attr('class', CLASSES.polygon);

            var rect = polygon.getBoundingClientRect();

            var point = {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            };
            
            polygonMap.points.push(point);
        });

        $(SELECTORS.pattern).removeClass(CLASSES.patternHidden);
    };

    function _bindCards(){

        var elements = $(SELECTORS.card);

        $.each(elements, function(card, i) {

            var instance = new Card (i, card);


            layout[i] = {
                card: instance
            };


            var cardImage = $(card).find(SELECTORS.cardImage);
            var cardClose = $(card).find(SELECTORS.cardClose);

            $(cardImage).on('click', _playSequence.bind(this, true, i));
            $(cardClose).on('click'), _playSequence.bind(this, false, i));
        });
    };

    function _playSequence(isOpenClick, id, e) {

            var card = layout[id].card;
           
            if (card.isOpen && isOpenClick) return;

            var sequence = new TimelineLite({paused: true});

            var tweenOtherCards = _showHideOtherCards (id);

            if (!card.isOpen) {



                _setPatternBgImg(e.target);


                sequence.add(tweenOtherCards);
                sequence.add(card.openCard(_onCardMove), 0);


            } else {


                var closeCard = card.closeCard();
                var position = closeCard.duration() * 0.8;

                sequence.add(closeCard);
                sequence.add(tweenOtherCards, position);
            }


            sequence.play();
        
        };


        function _showHideOtherCards(id)

        var TL = new TimelineLite;

        var selectedCard = layout[id].card;

        for (var i in layout) {

            var card = layout[i].card;

            if (card.id !== id && ! selectedCard.isOpen) {
                TL.add(card.hideCard(), 0);
            }
            if (card.id !== id && ! selectedCard.isOpen) {
                TL.add(card.showCard(), 0);
        }
    }
      return TL;

};

function _setPatternBgImg(image){

    var imagePath = $(image).attr('xlink:href');

    $(SELECTORS.pattern).css('background-image', 'url(' + imagePath + ')');
};

function _onCardMove(track) {

    var radius = track.width / 2;

    var center = {
        x: track.x,
        y: track.y
    };

    polygonMap.points.forEach(function(point, i) {

        if(_detectPointInCircle(point, radius, center)) {

         $(polygonMap.paths[i]).attr('class', CLASSES.polygon + ' ' + CLASSES.polygonHidden);
        }else {
            $(polygonMap.paths[i]).attr('class', CLASSES.polygon);

        }
    });
}

    function _detectPointInCircle(point,radius,center) {

        var xp = point.x;
        var yp = point.y;


        var xc = center.x;
        var yc = center.y; 

        var d = radius * radius;

        var isInside = Math.pow(xp -xc, 2) + Math.pow(yp - yc, 2) <= d;

        return inInside;

    };

    return {
        init: init
    };

})(window); 

window.onload = delani-4.init;
