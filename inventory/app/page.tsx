// components/Home.tsx
'use client';

import AddItem from './components/add';
import ListItems from './components/list';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-16 gap-4">
      <div className="text-center text-blue-600 text-5xl mb-8">Inventory</div>
      <AddItem />
      <ListItems />
    </div>
  );
}
