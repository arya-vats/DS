class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) { //pushes an element into the list.
        var current  = new Node(val);
        if(!this.head){
            this.head = current;
            this.tail = this.head;
        }
        else {
            this.tail.next = current;
            this.tail = current;
        }
        this.length++;
        return this;
    }

    pop() { //removes the last element from the list
        let pointer = 0;
        if(this.head == null){
            return undefined;
        }
        else {
            pointer = this.head;
            while(pointer.next.next != null){
                pointer = pointer.next
            }
            this.tail = pointer;
            pointer.next = null;
        }
        this.length--;
        if(this.length===0){
            this.head = null;
            this.tail = null;
        }
        return this; //or another way of doing this was to assign another newTail variable to pointer and keep track of new tail and return simply the pointer.(second option is preferable as it covers more edge cases)
    }
}

var list = new SinglyLinkedList();
console.log(list.push("Hello"));
console.log(list.push("There!"));
console.log(list.push(99));
console.log(list.push(100));
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());