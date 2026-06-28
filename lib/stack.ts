class Stack<T> {
    private st: T[] = [];
    
    push(item: T): void {
        this.st.push(item);
    }
    pop(): void {
        if(this.st.length === 0) return;
        this.st.pop();
    }
    peek():T {
        if(this.st.length === 0) throw new Error("Stack is empty");
        return this.st[this.st.length - 1];
    }
    isEmpty(): boolean {
        if(this.st.length === 0) return true;
        return false;
    }
    top(): T {
        if(this.st.length === 0) throw new Error("Stack is empty");
        return this.st[this.st.length - 1];
    }
}

export default Stack;