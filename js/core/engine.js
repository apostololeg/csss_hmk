define([
        'jquery',
        'modernizr',
        'lib/gsap'
    ],
    function($, Modernizr) {

        var transformProp = Modernizr.prefixed('transform');

        function Engine(domElem) {
            this.domElem = domElem;
            this._timelines = {};
            this._items = {};
        }

        function getCount(distance, itemWidth, space) {
            return +(2 * Math.PI * distance / (itemWidth + space)).toFixed();
        }

        $.extend(Engine.prototype, {

            /**
             * Build new ring
             *
             * @param {Object} item – DOM-элемент, для наполнения им кольца
             * @param {String} timeline – имя таймлайна, на котором нужно разместить это кольцо
             */
            build: function(item, timeline) {
                var ring = $('<div>').addClass('ring'),
                    cnt = getCount(item.radius, item.width, item.space),
                    step = 360/cnt,
                    tl = this._timelines[timeline];

                console.log(cnt,'/',step);

                if(!tl) {
                    tl = new TimelineMax({ repeat: -1 });
                }

                for(var i=0; i<cnt; i++) {
                    var halfWidth = -item.width/2,
                        wrap = $('<div>').addClass('wrap')
                            .css('margin-top', item.radius)
                            .css('transform-origin', '0 '+(-item.radius)+'px')
                            .css(transformProp, 'rotateZ('+ step*i +'deg)'),
                        elem = item.build()
                            .css('margin-left', halfWidth);

                    ring.append(wrap.append(elem));
                }

                this.domElem.append(ring);
                tl.add(TweenLite.to(ring, item.animation.time, { rotation: 360, ease: Linear.easeNone }));
            }

        });

        return Engine;

    }
);
