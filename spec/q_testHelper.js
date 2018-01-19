describe("tests", function () {
 
    it("check the default size", function () {
        var newQueue = new queue();
        expect(newQueue.size).toEqual(16);
    });

      it("check the input size", function () {
        var newQueue = new queue(4);
        expect(newQueue.size).toEqual(4);
    });
});


describe("embty or full", function () {
  beforeEach(function () {
        this.newQueue = new queue(4);
    });

  it("enqueue", function () {
        var self = this;
        this.newQueue.enqueue(1);
        this.newQueue.enqueue(2);
        this.newQueue.enqueue(3);
        this.newQueue.enqueue(4);
        this.newQueue.enqueue(4);
        expect(function () { self.newQueue.enqueue()}).toThrowError('queue is full');
    });



    it("dequeue", function () {
        var self = this;
        this.newQueue.enqueue(3);
        this.newQueue.enqueue(10);
        this.newQueue.dequeue();
        this.newQueue.dequeue();
        expect(function () { self.newQueue.dequeue() }).toThrowError('queue is empty');
    });
});


describe("check enqueue & dequeue & toString full", function () {

    beforeEach(function () {
        this.newQueue = new queue(4);
    });

    it("enqueue", function () {
        this.newQueue.enqueue(1);
        this.newQueue.enqueue(2);
        this.newQueue.enqueue(3);
        this.newQueue.enqueue(4);
        expect(this.newQueue.arr[this.newQueue.tail]).toEqual(4)
    });

    it("dequeue", function () {
        this.newQueue.enqueue(1);
        this.newQueue.enqueue(2);
        this.newQueue.enqueue(3);
        this.newQueue.enqueue(4);
        this.newQueue.dequeue();
        expect(this.newQueue.arr[this.newQueue.tail]).toEqual(4)
    });
 
    it("toString ", function () {
        this.newQueue.enqueue(1);
        this.newQueue.enqueue(2);
        this.newQueue.enqueue(3);
        this.newQueue.enqueue(4);
        expect(this.newQueue.toString()).toEqual('1 2 3 4 ');
    });

});

describe("check enqueue & dequeue & toString middle", function () {

    beforeEach(function () {
        this.newQueue = new queue(4);
    });

    it("enqueue", function () {
        this.newQueue.enqueue(1);
        this.newQueue.enqueue(2);
        expect(this.newQueue.arr[this.newQueue.tail]).toEqual(2)
    });

  
    it("toString ", function () {
        this.newQueue.enqueue(1);
        this.newQueue.enqueue(2);
        expect(this.newQueue.toString()).toEqual('1 2 undefined undefined ');
    });


});

describe("check enqueue & dequeue & toString after wrap", function () {

    beforeEach(function () {
        this.newQueue = new queue(4);
    });

    it("enqueue", function () {
        this.newQueue.enqueue(1);
        this.newQueue.enqueue(2);
        this.newQueue.enqueue(3);
        this.newQueue.dequeue();
        this.newQueue.dequeue();
        this.newQueue.dequeue();
        this.newQueue.enqueue(4);
        this.newQueue.enqueue(5);
        expect(this.newQueue.arr[this.newQueue.tail]).toEqual(5)
    });

    it("dequeue", function () {
        var self = this;
        this.newQueue.enqueue(1);
        this.newQueue.enqueue(2);
        this.newQueue.enqueue(3);
        this.newQueue.dequeue();
        this.newQueue.enqueue(4);
        this.newQueue.enqueue(6);
        this.newQueue.dequeue();
        this.newQueue.dequeue();
        this.newQueue.dequeue();
        this.newQueue.dequeue();
        expect(function () { self.newQueue.dequeue() }).toThrowError('queue is empty');
    });

    it("toString ", function () {
        this.newQueue.enqueue(1);
        this.newQueue.enqueue(2);
        this.newQueue.enqueue(3);
        this.newQueue.dequeue();
        this.newQueue.dequeue();
        this.newQueue.enqueue(4);
        this.newQueue.enqueue(5);
        this.newQueue.dequeue();
        expect(this.newQueue.toString()).toEqual('5 undefined undefined 4 ');
    });

});