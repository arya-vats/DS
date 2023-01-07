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
            this.tail = this.head;
        }
        else {
            this.tail.next = current;
            current.prev = this.tail;
            this.tail = current;
        }
        this.length++;
        return this;
    }
}

var list = new DoublyLinkedList();

console.log(list.push(99));
console.log(list.push(100));
// var newNode = new Node(12);
// console.log(newNode);
