define(
    [
        'jquery',
        'core/app',
        'modernizr'
    ],
    function($, App, Modernizr) {

        // $(document).on('deviceready', function() {
        //     console.log('deviceready');

            var app = new App(),
                prefix = Modernizr.prefixed,
                elems = [,{
                    radius: 100,
                    width: 20,
                    height: 40,
                    space: 5,
                    timeline: 'ring1',
                    animation: { time: 10 },
                    build: function() {
                        return $('<div>')
                            .addClass('elem')
                            .css({
                                width: '20px',
                                height: '30px',
                                'background-color': 'rgba(117, 247, 219, .5)'
                            })
                    }
                },{
                    radius: 110,
                    width: 20,
                    height: 40,
                    space: 1,
                    timeline: 'ring1',
                    animation: { time: 22 },
                    build: function() {
                        return $('<div>')
                            .addClass('elem')
                            .css({
                                width: '25px',
                                height: '30px',
                                'background-color': 'rgba(117, 247, 219, 0.36)'
                            })
                            .css(prefix('transform'), 'rotate(45deg) skewX(.1)');
                    }
                },{
                    radius: 97,
                    width: 4,
                    height: 40,
                    space: 10,
                    timeline: 'ring1',
                    animation: { time: 23 },
                    build: function() {
                        return $('<div>')
                            .addClass('elem')
                            .css({
                                width: '4px',
                                height: '40px',
                                'background-color': 'rgba(117, 247, 219, 0.3)'
                            })
                            .css(prefix('transform'), 'rotate(45deg) skewX(.1)');
                    }
                },{
                    radius: 97,
                    width: 1,
                    height: 40,
                    space: 13,
                    timeline: 'ring1',
                    animation: { time: 4 },
                    build: function() {
                        return $('<div>')
                            .addClass('elem')
                            .css({
                                width: '1px',
                                height: '40px',
                                'background-color': 'rgba(255,255,255, .4)'
                            })
                            .css(prefix('transform'), 'rotate(45deg) skewX(.1)');
                    }
                }];

            elems.forEach(function(elem) {
                app.add(elem);
            })

        // });

    }
);
