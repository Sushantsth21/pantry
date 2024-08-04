import db from "../firebase/firestore"
import { doc, deleteDoc } from "firebase/firestore"

interface DeleteItemProps {
  id: string
}

const DeleteItem: React.FC<DeleteItemProps> = ({ id }) => {
  const handleDelete = async () => {
    const itemRef = doc(db, "items", id)
    try {
      await deleteDoc(itemRef)
      alert("Item deleted successfully")
    } catch (error) {
      console.error("Error deleting document: ", error)
      alert("Error deleting item")
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="btn btn-warning"
    >
      Delete Item
    </button>
  )
}

export default DeleteItem
