/*
Stack is a LIFO data structure where insertion and deletion happen from the same end (top).
 Because JS arrays already support push/pop from the end in O(1).
*/
class Stack {

    constructor(){
        // This array will store stack elements
        this.items = [];
    }

    // Push element into stack
    push(element){
        this.items.push(element);
    }

    pop(){    // Remove top element from stack
        if (this.isEmpty()){
            return "Stack Underflow";
        }
        return this.items.pop();
    }

    
    peek(){   // View top element
        if (this.isEmpty()){
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if stack is empty
    isEmpty(){
        return this.items.length === 0;
    }

    // Size of stack
    size(){
        return this.items.length;
    }

    // Print stack (for debugging)
    print(){
        console.log(this.items.join(" "));
    }
}

let stack = new Stack(); // creating class obj

stack.push(10);
stack.push(20);
stack.push(30);

console.log("stack:");
stack.print();   // 10 20 30

console.log("pop =>",stack.pop());  // 30
console.log("peek =>",stack.peek()); // 20
console.log("size after operation =>",stack.size()); // 2

/*
O U T P U T
 
stack:
10 20 30
pop => 30
peek => 20
size after operation => 2

*/