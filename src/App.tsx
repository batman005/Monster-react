import { useState,useEffect, ChangeEvent} from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

import { getData } from './utils/data.utils';


export type Monster = {
  name: string;
  email: string;
  id: string;
}

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then((response) => response.json())
    // .then((users) => setMonsters(users));

    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
      setMonsters(users);
    
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
  });

  setFilteredMonsters(newfilteredMonsters);
  },[monsters, searchField]);

  const onSearchChange = (event:ChangeEvent<HTMLInputElement>) : void => {
    const searchFieldString= event.target.value.toLowerCase();
     setSearchField(searchFieldString);
      }

      
  
  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className='search-box' onChangeHandler={onSearchChange} placeholder='search monsters'/>
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

// class App extends Component {
  
//    constructor () {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => this.setState(() => {
//       return{ monsters: users }
//     }
//     ));
//   }

//   onSearchChange = (event) => {
//     const searchField= event.target.value.toLowerCase();
//      this.setState(() => {
//        return { searchField };
//        }); 
//   }

//   render() {

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     })
 
// }
// }

export default App;
