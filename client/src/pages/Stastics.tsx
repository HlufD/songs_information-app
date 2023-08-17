import { css } from "@emotion/react";
import { FaMusic, FaChartBar, FaFolder, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RootStateType } from "../redux/store";
import StaticsCard from "../componentes/StaticsCard";
import { StasticsType } from "../types/SongType";
import { getStatsFetched } from "../redux/features/songSlice";
import BarChart from "../componentes/BarChart";
import { useEffect } from "react";

function Stastics() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStatsFetched());
  }, []);

  const stastics: StasticsType = useSelector(
    (state: RootStateType) => state.songs.statsics
  );
  return (
    <div css={staticWraper}>
      <h4>Stastics</h4>
      <section
        css={css`
          display: flex;
          justify-content: space-between;
          @media (max-width: 989px) {
            flex-direction: column;
            align-items: center;
          }
        `}
      >
        <StaticsCard
          Icon={<FaMusic />}
          text="Songs"
          total={stastics.totalNumberOfSongs}
        />
        <StaticsCard
          Icon={<FaChartBar />}
          text="Genres"
          total={stastics.totalNumberOfGenre}
        />

        <StaticsCard
          Icon={<FaFolder />}
          text="Albums"
          total={stastics.totalNumberOfAlbums}
        />
        <StaticsCard
          Icon={<FaUser />}
          text="Artist"
          total={stastics.totalNumberOfArtists}
        />
      </section>
      <section css={serctionWrapper}>
        <div
          css={css`
            ${charWarpper};
            flex: 2;
          `}
        >
          <BarChart stastics={stastics} />
        </div>
        <div
          css={css`
            ${charWarpper};
            flex: 1;
          `}
        >
          <p>Number Of Songs In Each Album</p>
          <div css={numberOfSongsAndAblumsPerArtist}>
            <div>
              <h4>Album</h4>
            </div>
            <div>
              <h4>Songs</h4>
            </div>
          </div>
          {stastics.numberOfSongsInEachAlbum.map((album) => {
            return (
              <div key={album._id} css={numberOfSongsAndAblumsPerArtist}>
                <div>
                  <h4>{album._id}</h4>
                </div>
                <div>
                  <h4>{album.numberOfSongs}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section css={serctionWrapper}>
        <div
          css={css`
            ${charWarpper}
            flex: 2;
            @media (max-width: 1262px) {
              box-shadow: 39px 0px 18px -23px rgba(0, 0, 0, 0.1),
                0px 10px 15px -3px rgba(0, 0, 0, 0.1);
            }
          `}
        >
          <p>Number of Songs and Albums per Artist</p>
          <div css={numberOfSongsAndAblumsPerArtist}>
            <div>
              <h4>Artist</h4>
            </div>
            <div>
              <h4>Songs</h4>
            </div>
            <div>
              <h4>Albums</h4>
            </div>
          </div>
          {stastics.numberOfSongsAndAblumsPerArtist.map((artist) => {
            return (
              <div key={artist.artist} css={numberOfSongsAndAblumsPerArtist}>
                <div>
                  <h4>{artist.artist}</h4>
                </div>
                <div>
                  <h4>{artist.totalSongs}</h4>
                </div>
                <div>
                  <h4>{artist.totalAlbums}</h4>
                </div>
              </div>
            );
          })}
        </div>
        <div
          css={css`
            ${charWarpper};
            flex: 1;
            @media (max-width: 1262px) {
              box-shadow: 39px 0px 18px -23px rgba(0, 0, 0, 0.1),
                0px 10px 15px -3px rgba(0, 0, 0, 0.1);
            }
          `}
        >
          <p>Number Of Songs In Genre</p>
          <div css={numberOfSongsAndAblumsPerArtist}>
            <div>
              <h4>Genre</h4>
            </div>
            <div>
              <h4>Songs</h4>
            </div>
          </div>
          {stastics.numberOfSongsInGenre.map((genre) => {
            return (
              <div key={genre._id} css={numberOfSongsAndAblumsPerArtist}>
                <div>
                  <h4>{genre._id}</h4>
                </div>
                <div>
                  <h4>{genre.count}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Stastics;

const staticWraper = css`
  padding: 10px;
  margin-top: 30px;
  width: 100%;
`;

export const charWarpper = css`
  min-height: 350px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 25px;
  text-align: center;
`;

const serctionWrapper = css`
  display: flex;
  margin-top: 30px;
  gap: 20px;
  p {
    color: #545a69;
    font-size: 12px;
  }
  @media (max-width: 1262px) {
    flex-direction: column;
  }
`;

export const numberOfSongsAndAblumsPerArtist = css`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  padding: 10px 0;
  margin-top: 20px;
  h4 {
    color: #545a69;
    font-size: 12px;
  }

  border-bottom: 1px solid #cacaca;
  div {
    flex: 1;
    text-align: left;
  }
`;
