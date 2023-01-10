class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}



class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var current =  new Node(val);
        //list is empty
        if(!this.head) {
            this.head = current;
            this.tail = current;
        }
        else {
            this.tail.next = current;
            current.prev = this.tail;
            this.tail = current;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head){
            return undefined;
        }
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }
        else {
            var poppedNode = this.tail;
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return this;

    }
    shift(){
        if(!this.head){
            return undefined;
        }
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }
        else{
            var poppedNode = this.head;
            this.head = poppedNode.next;
            this.head.prev = null;
            poppedNode.next = null;
        }
        this.length--;
        return this;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        }
        this.length++;
        return this;
    }
    getVal(index){
        if(!this.head){
            return undefined;
        }
        if(index < this.length || index > this.length) return `out of bounds`
        var current = this.head;
        var pointer = 0;
        while(pointer != index){
            current = current.next;
            pointer++;
        }
        return current;
    }
    // setVal(index, val){

    // }
}

var list = new DoublyLinkedList();

list.push(99);
list.push(100);
list.unshift(89);
// list.push(200);
console.log(list.getVal(4));
// console.log(list.pop());
// var newNode = new Node(12);
// console.log(newNode);
