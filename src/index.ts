export class List {
    private readonly _readOnly: boolean;
    private _size: number;
    private _elements: any[];

    constructor(readOnly: boolean) {
        this._readOnly = readOnly;
        this._size = 0;
        this._elements = new Array(this._size);
    }

    public add(element: any): void {
        if(this._readOnly) return;
        const newSize = this.getNewSize();
        
        if (newSize > this._elements.length) {
          this.resizeArray();
        }

        this._elements[this._size++] = element;
        
    }

    private resizeArray(): void {
        const newElements = this.addTen();
        for (let i = 0; i < this._size; i++) {
            newElements[i] = this._elements[i];
        }
        this._elements = newElements;
    }

    private getNewSize(): number {
        return this._size + 1;
    }

    private addTen(): any[]{
        return new Array(this._elements.length + 10)
    }

    public elements(): any[] {
        return this._elements;
    }
}
