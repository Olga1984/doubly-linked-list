const Node = require('./node');

class LinkedList {
    constructor() {
        //assign 0 to this.length        
        this.length = 0;
    }
    append(data) {
        //should assign any nodes to this._head and this._tail if list is empty
        //should add new data to the end of list    
        var node = new Node(data);
        if (!this._head){
            this._head = node;
        }else{
            this._tail.next = node;
            node.prev = this._tail;
        }

        this._tail = node;
        this.length += 1;

        return this;
    }
    head() {
        //should return data from the this.head
        return this._head.data;
    }
    tail() {
        //should return data from the this.tail
        return this._tail.data;
    }
    at(position) {
        //should return Node.data by index
        var i = 0;
        var current = this._head;
        while (i < this.length) {
            if(i == position){ return current.data;}
            else{current = current.next;
                i++;}
        }        
    }
    insertAt(index, data) {
        //should insert data by index
         var node = new Node(data);
        if (index == 0) {
            node.next = this._head;
            this._head.prev = node;
            this._head = node;
        } else if (index < this.length && index > 0) {
            var count = 0;
            var insert = this._head;
            while (count < index) { insert = insert.next; count++; }
            this._head = insert;
            this._tail = insert.next;
            node.prev = insert;
            insert.next = node;
            node.next = insert.next.next;
            insert.next.next = node;
            insert = node;
        } else { 
            return this; 
        }
    }
    isEmpty() {
        //should return true if list is empty
        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        //should clear the list        
        var node = new Node();
        this._head = node;
        this._tail = node;
        this.length = 0;
        return this;
    }
    deleteAt(index) {
        //should delete element by index
        if (index > this.length - 1 || index < 0){
            return null;
        }
        var node = this._head;
        var i = 0;
        if(index == 0){
            this._head = node.next;
            if(this._head = null){
                this._tail = null;
            }
            else{
                this._head.prev = null;
            }
        } else if (index ==this.length -1) {
            node = this._tail;
            this._tail = node.prev;
            this._tail.next = null;
        } else {
            while(i++ < index) {
                node = node.next;
            }
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
        this.length--;
        return this;
        
    }

    reverse() {
        //should reverse the list
        var count = 0;
        var len = this.length-1;
        var head = this._head;
        var tail = this._tail;
        while(count < len) {
            var reverse = tail.data;
            tail.data = head.data;
            head.data = reverse;
            tail = tail.prev;
            head = head.next;
            count ++;
            len--;
        }
        return this;
    }

    indexOf(data) {
        //should return index of element if data is found
        var ind = 0;            
        var current = this._head;
        while (ind < this.length) {
            if (current.data == data){return ind;}
            current = current.next;            
            ind += 1;
        }
        return -1;
    }
}

module.exports = LinkedList;