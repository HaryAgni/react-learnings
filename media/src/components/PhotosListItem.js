import { GoTrashcan } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

function PhotosListItem({ photo }) {
  const [removePhoto] = useRemovePhotoMutation();
  const handleRemovePhoto = () => {
    removePhoto(photo);
  };
  return (
    <div onClick={handleRemovePhoto} className="relative cursor-pointer m-2">
      <img src={photo.url} className="h-40 w-40" alt="random pic" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrashcan className="text-3xl" />
      </div>
    </div>
  );
}

export default PhotosListItem;
