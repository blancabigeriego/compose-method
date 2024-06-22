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
        if (!this._readOnly) {
            const newSize = this._size + 1;

            if (newSize > this._elements.length) {
                const newElements = new Array(this._elements.length + 10);

                for (let i = 0; i < this._size; i++) {
                    newElements[i] = this._elements[i];
                }

                this._elements = newElements;
            }

            this._elements[this._size++] = element;
        }
    }

    public elements(): any[] {
        return this._elements;
    }
}
