import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalItem from './components/JournalItem/JournalItem';
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
      id: Math.max(...oldItems.map(i => i.id)) + 1 //TODO находим max id в старом массиве и +1 и доавляем id чтобы не ренерить каждый раз заново
    }])
  }
  const sortItems = (a, b) => {
    if (a.date > b.date) {
      return -1
    } else {
      return 1;
    }
  }
  return (
    <div className='app'>
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {/* {[<Button>1</Button>, <Button>2</Button>]} */}
          {items.sort(sortItems).map(el => (
            <CardButton key={el.id}>
              <JournalItem
                title={el.title}
                text={el.text}
                date={el.date}
              />
            </CardButton>
          ))}
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>

    </div>
  );
}

export default App;
