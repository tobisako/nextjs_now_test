import React, { Component, useState, useEffect } from 'react';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';
import Link from 'next/link'

const _desc = [
  'みんな電力㈱本社ビル。入り口でエレキングがお出迎え。',
  'スタジオはエアロシールドで安全な空気をお届け。イベント情報：xx月xx日オンラインイベント開催！詳しくは公式HPを御覧ください。',
  '園児や保護者の皆様の為に、万全のエアー・クリーン体制を整えております。',
  '架空の空気汚いスポットです。'
];

const _link = [
  '',
　'"/tbs"',
  '',
  ''
];

//class GoogleMap extends Component {
const GoogleMap = (props) => {
  const [marker, setMarker] = useState(null);
  const [description, setDescription] = useState('');

  var onMarkerClick = (props, marker) => {
    console.log('onMarkerClick() marker.title=' + marker.title);
    setMarker(marker);

    let starhtml = [];
    for(let i = 0; i < marker.stars; i++) {
      starhtml.push(<img key={i} src="/star.png" width="18%" />);
    }
    setDescription({id: marker.id, title: marker.title, starhtml: starhtml, desc: _desc[marker.id], linkpath: _link[marker.id]});
  };

  return (
    <React.Fragment>
      <div>
      <Map
        key = {0}
        google = { google }
        zoom = { 12 }
        center = {{ lat: 35.6415307, lng: 139.6668197 }}
        initialCenter = {{ lat: 35.6436399, lng: 139.6713265 }}
        containerStyle={{
          height: '70vh',
          position: 'relative',
          width: '100%'
        }}
      >
        <Marker
          title = { "みんな電力（株）" }
          id = {0}
          stars = {2}
          clickable = { true }
          position = {{ lat: 35.641528, lng: 139.6690298 }}
          onClick={onMarkerClick}
        />
        <Marker
          title = { "TBSラジオ" }
          id = {1}
          stars = {3}
          clickable = { true }
          position = {{ lat: 35.6713993, lng: 139.7343429 }}
          onClick={onMarkerClick}
        />
        <Marker
          title = { "アース・キッズ" }
          id = {2}
          stars = {3}
          clickable = { true }
          position = {{ lat: 35.675016, lng: 139.7061574 }}
          onClick={onMarkerClick}
        />

        <Marker
          title = { "空気汚いスポット" }
          id = {3}
          stars = {1}
          clickable = { true }
          position = {{ lat: 35.650958, lng: 139.7104338 }}
          onClick={onMarkerClick}
        />

        <InfoWindow
          marker={marker}
          visible={true}>
          <div id="main">
            <h1>{description.title}</h1>
            {description.starhtml}<br/><br/>
            {description.desc}<br/>
            <Link href='/tbs'><a>ページへGO</a></Link>
          </div>
        </InfoWindow>
      </Map>
      </div>
      <style jsx>{`
      .main {
        border: 1px solid;
        height: 200px;
      }
      `}</style>
    </React.Fragment>
  );
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyB0pzaIiNOKSiVr-DpF8rbb1rQJ0DDTohU")
})(GoogleMap);
