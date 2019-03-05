console.log('Lection_8');


var data = {
    list: [],
    fillArr: function(length){
        // this.list = [];
        // this.list.length = length;
        this.list = new Array(length);

        for(var i = 0; i < this.list.length; i++ ){
            this.list[i] = Math.floor(Math.random()*20)
        }
    },
    render: function(){
        document.write(this.list + '<hr />');
    },
    setMarker: function(position, marker, id){
        if(position < 0) return;
        if(!this._storage) {
            // this._storage = [];
            this._storage = {};
        }

        // this._storage.push({
        //     position: position,
        //     marker: marker,
        //     oldValue: this.list[position],
        //     id: id // !important
        // });

        this._storage[id] = {
            position: position,
            marker: marker,
            oldValue: this.list[position],
        };

        this.list[position] = marker;
    },
    moveMarker: function(id, newPosition){
        // var storageRecord;
        // for(var i = 0; i < this._storage.length; i++){
        //     storageRecord = this._storage[i];

        //     if(storageRecord.id === id) {
        //         // this._storage[i].position // index of old value
        //         this.list[storageRecord.position] = storageRecord.oldValue;
        //         storageRecord.oldValue = this.list[newPosition];
        //         storageRecord.position = newPosition;
        //         this.list[newPosition] = storageRecord.marker;

        //         return;
        //     }
        // }
        storageRecord = this._storage[id];
        if(!storageRecord) return'

        this.list[storageRecord.position] = storageRecord.oldValue;
        storageRecord.oldValue = this.list[newPosition];
        storageRecord.position = newPosition;
        this.list[newPosition] = storageRecord.marker;


    }
};


data.fillArr(15);
data.render();
data.setMarker(6, '*', 'zvezda');
data.setMarker(3, '/', 'delenie');
data.render();

data.moveMarker('zvezda', 10)

data.render();