import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import JournalForm from './components/JournalForm/JournalForm';

const INITIAL_DATA = [
  {
    id: 1,
    title: 'Подготовка к обновлению курсов',
    text: 'Сегодня провёл весь день за...',
    date: new Date()
  },
  {
    id: 2,
    title: 'Поход в годы',
    text: 'Думал, что очень много време...',
    date: new Date()
  }
]

function App() {
  const [items, setItems] = useState(INITIAL_DATA); //первончальное состояние INITIAL_DATA

  const addItem = item => {
    setItems(oldItems => [...oldItems, {//спрэдом добавляем новый item
      text: item.text,
      title: item.title,
      date: new Date(item.date),
      id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1 //TODO находим max id в старом массиве и +1 и доавляем id чтобы не ренерить каждый раз заново
    }])
  }

  return (
    <div className='app'>
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={items} />
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>

    </div>
  );
}

export default App;
