import storage from '../utils/storage';
import ListItem, { IListItem } from './ListItem';

interface IList {
    list: IListItem[];
    load(): void;
    save(): void;
    clearList(): void;
    addItem(itemObj: IListItem): void;
    removeItem(id: string): void;

}


export default class List implements IList {

    static instance = new List;
    
    private constructor(
       private _list: IListItem[] = []
    ) {}

    get list(): IListItem[] {
        return this._list;
    }   

    load(): void {
        //  const storedList: string | null = localStorage.getItem('myList');

        //  if(typeof storedList !== 'string') return;

        //  const parsedList: {
        //     _id: string;
        //     _item: string;
        //     _checked: boolean;
        //  }[] = JSON.parse(storedList);

         const parsedList = storage.get<{
            _id: string;
            _item: string;
            _checked: boolean;
         }[]>('myList')

         
         parsedList.forEach(itemObj => {
            const newListItem = new ListItem(
                itemObj._id,
                itemObj._item,
                itemObj._checked
            )

            List.instance.addItem(newListItem);
         })


         

    }

    save(): void {
        localStorage.setItem('myList', JSON.stringify(this._list));
    }

    clearList(): void {
        this._list = [];
        this.save();
    }

    addItem(itemObj: IListItem): void {
            this._list.push(itemObj);
            this.save();
    }

    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id);
        this.save();
    }


}

