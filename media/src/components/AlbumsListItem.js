import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { useRemoveAlbumMutation } from "../store";

function AlbumsListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();
  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };
  const header = (
    <>
      <Button className="mr-2" loading={results.isLoading} onClick={handleRemoveAlbum}>
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel header={header} key={album.id}>
      List of photos in the album
    </ExpandablePanel>
  );
}

export default AlbumsListItem;
