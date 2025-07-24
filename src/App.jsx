import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import JournalForm from './components/JournalForm/JournalForm';

// const INITIAL_DATA = [
//   // {
//   //   id: 1,
//   //   title: 'Подготовка к обновлению курсов',
//   //   text: 'Сегодня провёл весь день за...',
//   //   date: new Date() 
//   // },
//   // {
//   //   id: 2,
//   //   title: 'Поход в годы',
//   //   text: 'Думал, что очень много време...',
//   //   date: new Date()
//   // }
// ]

function App() {
  const [items, setItems] = useState([]); //первончальное состояние INITIAL_DATA useState(INITIAL_DATA)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data')); //добавили JSON руками в localStorage
    if (data) {
      setItems(data.map(item => ({
        ...item,
        date: new Date(item.date)
      })))
    }

  }, []) // [] пустой, нет завимостей для ререндеринга



  useEffect(() => {
    if (items.length) {
      console.log('Записали в localStorage')
      localStorage.setItem('data', JSON.stringify(items))
    }
  }, [items])   //[items] есть зависимости от items 

  const addItem = item => {
    setItems(oldItems => [...oldItems, {//спрэдом добавляем новый item
      id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1, //TODO находим max id в старом массиве и +1 и доавляем id чтобы не ренерить каждый раз заново
      title: item.title,
      post: item.post,
      date: new Date(item.date)
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
