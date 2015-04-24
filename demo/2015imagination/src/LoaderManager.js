this.gameCore = this.gameCore || {}; (function() {
    function a(d, e, c) {
        this.LoadQueue_constructor(d, e, c)
    }
    var b = createjs.extend(a, createjs.LoadQueue);
    gameCore.LoadContentQueue = createjs.promote(a, "LoadQueue")
})(); (function() {
    function getProxy(value, funF) {
        var f = function(event) {
            funF.apply(value, [event])
        };
        return f
    }
    var _coreList = [];
    var _manifest = [];
    function LoaderManager() {
        this.EventDispatcher_constructor()
    }
    var p = createjs.extend(LoaderManager, createjs.EventDispatcher);
    p.loadCore = function(value, result) {
        var _list = [];
        if (typeof value == "string") {
            _list.push({
                src: value,
                type: createjs.AbstractLoader.JAVASCRIPT
            })
        } else {
            if (value instanceof Array) {
                for (var i = 0; i < value.length; i++) {
                    if (typeof value[i] == "string") {
                        _list.push({
                            src: value[i],
                            type: createjs.AbstractLoader.JAVASCRIPT
                        })
                    } else {
                        _list.push({
                            src: value[i].src,
                            type: createjs.AbstractLoader.JAVASCRIPT,
                            lib: value[i].lib,
                            image: value[i].image
                        })
                    }
                }
            } else {
                if (value instanceof Object) {
                    _list.push(value)
                }
            }
        }
        var loader = new createjs.LoadQueue();
        for (var i = 0; i < _list.length; i++) {
            loader.loadFile(_list[i])
        }
        var _item = null;
        var p = 0;
        this.isMore = false;
        var _self = this;
        loader.on("fileload",
        function(event) {
            if (event.item.type == createjs.AbstractLoader.JAVASCRIPT) {
                if (event.item.lib) {
                    p++;
                    var obj = eval(event.item.lib);
                    _item = eval(event.item.image);
                    loader.loadManifest(obj.properties.manifest);
                    _self.isMore = true
                } else {
                    _item = null
                }
            } else {
                if (event.item.type == createjs.AbstractLoader.IMAGE) {
                    _item[event.item.id] = event.result
                }
            }
        });
        this.progress = 0;
        loader.on("progress",
        function(event) {
            _self.progress = (p + event.progress) / 2;
            _self.dispatchEvent(event)
        });
        loader.on("complete",
        function(event) {
            loader.removeAllEventListeners();
            result();
            _self.dispatchEvent(event)
        })
    };
    gameCore.LoaderManager = createjs.promote(LoaderManager, "EventDispatcher")
})();