"use client"

import { useEffect, useState } from "react"
import db from "../firebase/firestore"
import { collection, getDocs, DocumentData } from "firebase/firestore"
import DeleteItem from "./delete"

// Define the type for your items
interface Item {
  id: string
  name: string
  count: number
}

const ListItems: React.FC = () => {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, "items"))
      const fetchedItems: Item[] = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Item))
      setItems(fetchedItems)
    }

    fetchItems()
  }, [])

  return (
    <div className="overflow-x-auto">
        <table className="table ">
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Count</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item.id} >
                        <td>{item.name}</td>
                        <td>{item.count}</td>
                        <td>
                            <DeleteItem id={item.id} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

  )
}

export default ListItems
