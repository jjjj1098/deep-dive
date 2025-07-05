import List from "./models/List";
import ListItem from "./models/ListItem";
import ListTemplate from "./templates/ListTemplate";

const initApp = (): void => {
  console.log('init!');
  const listInstance = List.instance;
  const listTemplateInstance = ListTemplate.instance;

  const itemForm = document.getElementById('form') as HTMLFormElement;

  itemForm.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault();



    const inputEl = document.getElementById('item-input') as HTMLInputElement;
    const newText = inputEl.value.trim();
    if(!newText.length) return;
    inputEl.value = '';


    const itemId = listInstance.list.length 
      ? parseInt(listInstance.list[listInstance.list.length - 1].id) + 1
      : 1


    const newItem = new ListItem(itemId.toString(), newText);

    listInstance.addItem(newItem)


    listTemplateInstance.render(listInstance);

  })

  const clearItemsEl = document.getElementById('clear-items-btn') as HTMLButtonElement;
  clearItemsEl.addEventListener('click', () => {
    listInstance.clearList();
    listTemplateInstance.clear();
  }) 




  listInstance.load();
  listTemplateInstance.render(listInstance);
}

initApp();