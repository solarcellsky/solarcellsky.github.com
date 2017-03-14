var SuperPool = (function () {
    function SuperPool() {
        this.dict = new Object;
    }
    SuperPool.prototype.SuperPool = function () {
        //this.dict = {}; //no weak keys for now
    };

    SuperPool.getInstance = function () {
        if (this.vaultInstance) {
            return this.vaultInstance;
        } else {
            this.vaultInstance = new SuperPool();
            return this.vaultInstance;
        }
    };

    SuperPool.prototype.setupAPoolFor = function (id, size) {
        if (typeof size === "undefined") { size = 10; }

        if (this.dict[id] == undefined) {
            this.dict[id] = new DisplayObjectPool(id, size);
        } else {
            console.log("WARNING: you tried to set up multiple pools for object: (" + id + ")");
        }
    };

    SuperPool.prototype.getItem = function (id) {
        if (this.dict[id]) {
            return this.dict[id].getItem();
        } else {
            {
                console.log("WARNING: no such object in Vault: " + id);
            }
            return null;
        }
    };

    SuperPool.prototype.returnObject = function (obj, id) {
        this.dict[id].returnItem(obj);
    };
    return SuperPool;
})();


var DisplayObjectPool = (function () {
    function DisplayObjectPool(baseClass, size) {
        if (typeof size === "undefined") { size = 0; }
        this.pool = new Array(); //Vector.<Projectile>(len, true); //fixed length Vector
        this._counter = 0;
        this.itemClass = baseClass;


        for (var i=0; i<size; i++){
            this.returnItem(this.createInstance());
        }
    }

    DisplayObjectPool.prototype.getItem = function () {
        var tempItem;

        if (this._counter > 0) {
            this._counter--;

            tempItem = this.pool[this._counter];
            this.pool[this._counter] = null;

            return tempItem;
        } else {
            //throw new Error("You exhausted the pool!");
            return this.createInstance()
        }
    };


    DisplayObjectPool.prototype.createInstance = function () {
        var anim = new createjs.Sprite(mainSheet, this.itemClass);
        anim.id = this.itemClass;
        return anim;
    };

    DisplayObjectPool.prototype.returnItem = function (item) {
        if (this.pool) {
            if (this.pool.indexOf(item) == -1) {
                this.pool[this._counter] = item;
                this._counter++;
            }
        } else {
            console.log("Pool is not initialized"); //(item as IPoolableObject).destroy();
        }
    };

    DisplayObjectPool.prototype.destroy = function () {
        var tempObj;
        this.itemClass = null;

        while (this.pool.length) {
            tempObj = (this.pool.pop());
            /*if (tempObj) {
             tempObj.pool == null;
             }*/
        }
        this.pool = null;
    };

    Object.defineProperty(DisplayObjectPool.prototype, "counter", {
        get: function () {
            return this._counter;
        },
        enumerable: true,
        configurable: true
    });
    return DisplayObjectPool;
})();