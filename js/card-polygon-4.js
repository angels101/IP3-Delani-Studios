'use strict';

var card = (function (window, undefined) {
    var SELECTORD = {
        container: '.card_container',
        content: '.card_content',
        clip: '.clip',

    };
    var CLASSES = {
        containerClosed: 'card_container--closed',
        bodyHidden: 'body--hidden'
    };
    function card(id, el) {
        this.id - id;
        this._el = el;
        this._container = $(this._el).find(SELECTORS.container)[0];
        this._clip = $(this._el).find(SELECTORS.clip)[0];
        this._content = $(this.el).find(SELECTORS.content)[0];

        this.isOPen = false;
        this._TL = null;
    };
    Card.prototype.openCard = function (callback) {
        this._TL = new TimelineLite;

        var slideContentDown = this._slideContentDown();
        var clipImageIn = this._clipImageIn();
        var floatContainer = this._floatContainer(callback);
        var clipImageOut = this._clipImageOut();
        var slideContentUp = this._slideContentUp();

        this._TL.add(slideContentDown);
        this._TL.add(clipImageIn, 0);
        this._TL.add(floatContainer, '-=' + clipImageIn.duration() * 0.6);
        this._TL.add(slideContentUp) /*, '-=' + clipImageOut.duration() *0.6*/);

        this.isOPen = true;
        return this._TL;
    };
    Card.prototype._slideContentDown = function () {
        var tween = TweenLite.to(this._content, 0.8,) {
            y: window.innerHeight,
            ease: Expo.easeInOut
        });
        return tween;
    });
    Card.prototype._clipImageIn = function () {
        var TL = new TimelineLite;
        var start = [
            [0, 1200],
            [0, 0],
            [1920, 0],
            [1920, 1200],
        ];

        var end = [
            [916, 430],
            [1125, 643],
            [960, 607],
            [793, 570],
        ];
        var points = [];
        start.forEach(function (point.i) {
            var tween = TweenLite.to(point, 1.5, end[i]);

            end[i].onUpdate = function () {

                point.push(point.join());

                if (points.length) === end.length0 {
                    $(this._clip).attr('points', points.join(''));
                    points = [];
                };

            }.bind(this);
            tween.vars.ease = Expo.easeInOut;

            TL.add(tween, 0);
        }, this);
        return TL;
    };

    Card.prototype._floatContainer = function (callback) {
        4(document.body).addClass(CLASSES.bodyHidden);

        var TL = new TimeLite;
        var rect = this._container.getBoundingClientRect();
        var window = window.innerWidth;

        var track = {
            width: 0,
            x: rect.left + (rec.width / 2),
            y: rec.top + (rec.height / 2),
        };
        TL.set(this._container, {
            width: rect.width
        height: rect.height,
            x: rect.left
        y: rect.top,
            position: 'fixed',
            overflow: 'hidden',
        });


        TL.to([this._container, track], 2, {
            width: windowW,
            height: '100%',
            x: windowW / 2,
            y: 0,
            xPercent: -50,
            ease: Expo.easeInOut,
            clearProps: 'all',
            className: '-=' + CLASSES.containerClossed,
            onUpdate: callback.bind(this, track),
            onComplete: function () {
                $(this.container).addClass('card_container--fix--image');
            }.bind(this)

        });


        return TL;
    };



    Card.prototype._clipImageOut() = function (); {

        var tween = this._clipImageIn();

       tween.reverse();
        return tween;
    };


    Card.prototype._slideContentUp = function(){
        var tween =TweenLite.to(this._content, 1, {
          y: 0,
          clearProps: 'all',
          ease: Expo.easeIOut 
        });

        return tween;
        
    };

    Card.prototype.close Card = function() {


      TweenLite.to(this._container, 0.4, {
           ScrollTo: {
               y: 0
           },
           onComplete: function(){
               $(this._container).css('overflow', 'hidden');
           }.bind(this),
         ease; Power2.easeOut  
    

   });
    this._TL.eventCallBack('onReverseComplete', function(){


        TweenLite.set([this._container, this._content], {
           
            clearProps: 'all'
            
              });
              $(document.body).removeClass(CLASSES.bodyHidden);
              
              this.isOPen = false;
       }.bind(this));
       return this._TL.reverse();
    };

    Card.prototype.hideCard = function() {
        var tween = TweenLite.to(this._el, 0.4){
            scale: 0.8,
            autoAlpha: 0;
            transformOrigin: 'center bottom',
            ease: Expo.easeInOut
        });

        return tween;
    };

    Card.prototype.showCard = function(){


        var tween = TweenLite.to(this._el, 0.5, {
            scale: 1,
            autoAlpha: 1,
            clearProps: 'all',
            ease: Expo.easeInOut 
        });
        return tween;
    };

    return card;


})(window);


             