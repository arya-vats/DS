class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertElement(data){
        this.head = new Node(data, this.head)
    }

    printList(){
        let current = this.head;

        while(current){
            console.log(current.data);
            current = current.next;
        }
        
    }
}

const ll = new LinkedList()
ll.insertElement(100);
ll.insertElement(200);
ll.insertElement(300);
ll.printList();