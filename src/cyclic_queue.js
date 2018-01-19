function queue (size) {

        this.arr = [];
        this.tail = -1;
        this.head = -1;
        this.size = size || 16;
        this.arr.length = this.size;
};

queue.prototype.IsFull = function () {
    return ((this.tail + 1) % this.size === this.head);
}
queue.prototype.IsEmpty = function () {
    return (this.tail === -1 && this.head === -1);
}

queue.prototype.enQueue = function (elemnt){
    if(this.IsFull())  {
        throw new Error ('queue is full');
    }
  
        if (this.tail === -1 && this.head === -1) {
            this.head =(this.head + 1) % this.size;
        }
        this.tail = (this.tail + 1) % this.size;
        this.arr[this.tail] = elemnt;
    
};
queue.prototype.deQueue = function () {
    if (this.IsEmpty()) {
        throw new Error ('queue is empty');
    }
        var rtnQueue = this.arr[this.head];
        this.arr[this.head] = undefined;
        
    if (this.tail === this.head) {
        this.tail = -1;
        this.head = -1;
    } 
    else {
        this.head = (this.head + 1) % this.size;
    }
    return rtnQueue;
};
queue.prototype.toString = function(){
    var str ='';
    this.forEach(function(x){
        str+= x + ' ';
    })
    return str;
};
queue.prototype.forEach = function (func) {
        var index;
    for (var i = 0;i<this.arr.length;i++) {
        index=(this.tail+i)%this.size;
        func(this.arr[index]);
         
    }
};
var cyclicQueue = new queue(4);
// cyclicQueue.enQueue(1);
// cyclicQueue.enQueue(2);
// cyclicQueue.enQueue(3);
// cyclicQueue.enQueue(4);
// cyclicQueue.deQueue();
// cyclicQueue.enQueue(6);
// cyclicQueue.forEach(6);
// console.log(cyclicQueue.toString());