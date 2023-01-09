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
}

var list = new DoublyLinkedList();

list.push(99);
list.push(100);
// list.push(200);
list.pop();
console.log(list);
// console.log(list.pop());
// var newNode = new Node(12);
// console.log(newNode);
