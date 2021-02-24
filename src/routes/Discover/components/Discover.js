import React, { Component, useState, useEffect } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import Spotify from "spotify-web-api-js";
const spotifyApi = new Spotify();

function Discover() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const token = getHashParams();
    spotifyApi.setAccessToken(token.access_token);
    getData();
  }, []);

  const getHashParams = () => {
    let hashParams = {};

    let e,
      r = /([^&;=]+)=?([^&;]*)/g;
    let q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  };

  const getData = async () => {
    let releases, categories, playlists;

    await spotifyApi.getNewReleases().then((res) => {
      releases = res;
    });
    await spotifyApi.getCategories().then((res) => {
      categories = res;
    });
    await spotifyApi.getFeaturedPlaylists().then((res) => {
      playlists = res;
    });

    setData({
      newReleases: releases,
      categories: categories,
      playlists: playlists,
    });
  };

  // getHashParams();
  // getNewReleases();
  // getCategories();
  // getPlayList();
  return (
    <div className="discover">
      <div>
        <button className="">
          <a href="http://localhost:8888/">inicia sesion</a>
        </button>
      </div>

      <div>
        {data && (
          <>
            <DiscoverBlock
              text="RELEASED THIS WEEK"
              id="released"
              data={[data.newReleases.albums.items]}
            />
            <DiscoverBlock
              text="FEATURED PLAYLISTS"
              id="featured"
              data={[data.playlists.playlists.items]}
            />
            <DiscoverBlock
              text="BROWSE"
              id="browse"
              data={[data.categories.categories.items]}
              imagesKey="icons"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Discover;
