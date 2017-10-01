const Node = require('./node');

class LinkedList {
    constructor() {
        //assign 0 to this.length
        this._head = 0;
        this._tail = 0;
        this.length = 0;
    }
    append(data) {
        //should assign any nodes to this._head and this._tail if list is empty
        //should add new data to the end of list    
        var current = new Node(data);
        if (!this._head) {
            this._head = current;
        } else {
            this._tail.next = current;
            current.prev = this._tail;
        }

        this._tail = current;
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
        /**/
        return this.Node(position).data;
    }
    Node(position) {
        if (position < 0 || position >= this.length) {
            return null;
        }
        var current = this._head;
        for (var i = 0; i < position; i++) {
            current = current.next;
        }
        return current;
    }
    insertAt(index, data) {
        //should insert data by index
        var current = new Node(data);
        if (index == 0) {
            current.next = this._head;
            this._head.prev = current;
            this._head = current;
        } else if (index < this.length && index > 0) {
            var count = 0;
            var insert = this._head;
            while (count < index) {
                insert = insert.next;
                count++;
            }
            this._head = insert;
            this._tail = insert.next;
            current.prev = insert;
            insert.next = current;
            current.next = insert.next.next;
            insert.next.next = current;
            insert = current;
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
        var current = new Node();
        this._head = current;
        this._tail = current;
        this.length = 0;
        return this;
    }
    deleteAt(index) {
        //should delete element by index
        if (index === 0) {
            if (this.length === 1) {
                this.clear();
            } else {
                this._head.next.prev = this._head.prev;
            }
        } else if (index === this.length - 1) {
            this._tail.prev.next = this._tail.next;
        } else {
            var current = this.Node(index);
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        this.length -= 1;
        return this;
    }
    reverse() {
        //should reverse the list       
        var current = this._head;
        for (var i = 0; i < this.length; i++) {
            var tmp = current.next;
            current.next = current.prev;
            current.prev = tmp;
            current = tmp;
        }
        var head = this._head;
        this._head = this._tail;
        this._tail = head;

        return this;
    }
    indexOf(data) {
        //should return index of element if data is found
        var ind = 0;
        var current = this._head;
        while (ind < this.length) {
            if (current.data == data) {
                return ind;
            }
            current = current.next;
            ind += 1;
        }
        return -1;
    }
}

module.exports = LinkedList;