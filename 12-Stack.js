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

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("stack:");
stack.print();   // 10 20 30

console.log("pop =>",stack.pop());  // 30
console.log("peek =>",stack.peek()); // 20
console.log("size after operation =>",stack.size()); // 2

