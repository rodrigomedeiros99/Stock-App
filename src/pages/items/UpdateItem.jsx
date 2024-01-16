import { useParams } from "react-router-dom";
import ItemForm from "../../componets/ItemForm";
import useStock from "../../hooks/useStock";

function UpdateItem() {
  const { getItem } = useStock();
  const { id } = useParams();

  const item = getItem(id);
  return (
    <>
      <h2>Update Item</h2>
      <ItemForm itemToUpdate={item} />
    </>
  );
}

export default UpdateItem;
