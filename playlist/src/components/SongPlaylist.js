import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../data";
import { addSong, removeSong } from "../store";

function SongPlaylist() {
  const dispatch = useDispatch();
  // To Do:
  // Get list of songs
  const songPlaylist = useSelector((state) => {
    return state.songs;
  });

  const handleSongAdd = (song) => {
    // To Do:
    // Add song to list of songs
    dispatch(addSong(song));
  };
  const handleSongRemove = (song) => {
    // To Do:
    // Remove song from list of songs
    dispatch(removeSong(song));
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song} className="box">
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger is-pulled-right"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header is-flex">
        <h3 className="subtitle m-0 is-3">Song Playlist</h3>
        <div className="buttons ml-auto">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
