'use component';

import AddItem from './add';
import ListItems from './list';


export default function Home() {
  return (
    <div>
      <div className="text-center text-blue-600 pt-16 text-5xl">Inventory</div>
      <AddItem/>
      <ListItems/>


    </div>
  );
}
