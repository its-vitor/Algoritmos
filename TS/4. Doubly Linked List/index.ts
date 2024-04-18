interface INext {
    previus: string | object;
    value: string | object;
    next: string | object;
}

class Next {
    public previus: INext | string | undefined;
    public value: INext | string | undefined;
    public next: INext | string | undefined;

    constructor() {
        this.previus = undefined;
        this.value = undefined;
        this.next = undefined;
    }
    
    add(value: string | INext, next?: string | INext) {
        this.previus = this.value;
        this.value = value;
        if (next) this.next = next;
    }

    remove() {
        if (this.next) this.value = this.next;
        else if (this.previus) this.value = this.previus;
        this.previus = undefined;
        this.next = undefined;
    }
}
