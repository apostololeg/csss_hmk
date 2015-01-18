define(
    [
        'jquery',
        'core/engine'
    ],
    function($, Engine) {

        function App() {
            this.engine = new Engine($('.canvas').eq(0));
        }

        $.extend(App.prototype, {

            add: function(elem) {
                this.engine.build(elem)
            }

        });

        return App;

    }
);
