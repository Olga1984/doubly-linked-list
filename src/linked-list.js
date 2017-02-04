const Node = require('./node');

class LinkedList {
    constructor() {
        //assign 0 to this.length
        this._head = null;
        this._tail = null;
        this.length = 0;
    }
    append(data) {
        //should assign any nodes to this._head and this._tail if list is empty
        //should add new data to the end of list    
        var node = new Node(data);
        var tail = this._tail;
        if (this.isEmpty()) {
            this._head = node;
            this._tail = node;
        } else {            
            tail.next = node;
            node.prev = tail;
            this._tail = node;
        }        
    if (this.length === 0) {
        // first node, so all pointers to this
        this._head = node;
        this._tail = node;
    } else {
        // put on the tail
        this._tail.next = node;
        node.prev = this._tail;
        this._tail = node;
    }
    // update count
        this.length += 1;
        return node;
    }
    head() {
        //should return data from the this.head
        return this._head;
    }
    tail() {
        //should return data from the this.tail
        return this._tail;
    }
    at(position) {
        //should return Node.data by index
        var node = new Node(data);
        var i;
        if (position > -1 && position < this.length) {
            node = this._head;
            i = 0;
            while (i < position) {
                node = node.next;
                i++;
            }
            return node;
        }
        return null;
    }
    insertAt(position, data) {
        //should insert data by index
        function insert(data) {
            var newNode = new Node(data);
            if (this.isEmpty()) {
                this._head = this._tail = newNode;
            } else {
                this._tail.next = newNode;
                newNode.prev = this._tail;
                this._tail = newNode;
            }
            this.length += 1;
            return true;
        }
        function insertFirst(data) {
            if (this.isEmpty()) {
                this.insert(data);
            } else {
                var newNode = new Node(data);
                newNode.next = this.head;
                this._head.prev = newNode;
                this._head = newNode;
                this.length += 1;
            }
            return true;
        }        
        var newNode = new Node(data);
        var current = this._head;        
        var previous = null;
        var index = 0;

        // check
        if (position < 0 || position > this.length - 1) {
            return false;
        }
        // if position is 0, we just need to insert the first node
        if (position === 0) {
            this.insertFirst(data);
            return true;
        }
        while (index < position) {
            previous = current;
            current = current.next;
            index += 1;
        }
        current.prev.next = newNode;
        newNode.prev = current.prev;
        current.prev = newNode;
        newNode.next = current;
        this.length += 1;
        return true;
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
            if (this.isEmpty()) {
                return null;
            } 
        var list = this;
        while (!this.isEmpty()) {           
           if (this.prev !== null) {
                this.prev.next = this.next;
            }
            if (this.next !== null) {
                this.next.prev = this.prev;
            }
            if (list._head === this) {
                list._head = this.next;
            }
            if (list._tail === this) {
                list._tail = this.prev;
            }
            list._length--; 
        }
    }
    deleteAt(position) {
        //should delete element by index
        var node = this.at(position);
        var isHead = this.head();
        var isTail = this.tail();

        if (node !== null) {
            if (isHead) {
                this._head = node.next;
            }
            if (isTail) {
                this._tail = node.prev;
            }
            if (node.next !== null) {
                node.next.prev = node.prev;
            }
            if (node.prev !== null) {
                node.prev.next = node.next;
            }
            this.length--;
            return node.data;
        }

        return null;
    }

    reverse() {
        //should reverse the list
    }

    indexOf(data) {
        //should return index of element if data is found
        var index = 0,
            resultIndex = -1;
        var node;
        if (Node.data === data) {
            resultIndex = index;
            index += 1;
        }
        return resultIndex;
    }
}

module.exports = LinkedList;