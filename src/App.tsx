import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import Detail from './components/Detail';
import { data, dataEl, detailsData } from './types';
import Loading from './components/Loading';

function App() {
  const [list, setList] = useState<data>([]);
  const [activeItem, setActiveItem] = useState<dataEl>();
  const [details, setDetails] = useState<detailsData>();
  const [loading, setLoading] = useState(true);

  const getList = () => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then(res => res.json()).then(data => {
        setList(data);
        setLoading(false)
      })
  }

  useEffect(getList, [])

  const handleClick = (item: dataEl) => {
    if (activeItem?.id !== item.id) {
      setActiveItem(item)
    }
  }

  useEffect(() => {
    if (activeItem) {
      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${activeItem.id}.json`)
        .then(res => res.json()).then(data => {
          setDetails(data)
        })
    }
    return () => setDetails(undefined)
  }, [activeItem])

  return (
    <div className="App">
      {
        loading ? <Loading /> : <List list={list} onclick={handleClick} />
      }
      <div className='details-container'>
        {
          details ? <Detail item={details} /> : null
        }
      </div>

    </div>
  );
}

export default App;
