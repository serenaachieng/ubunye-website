import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './SchoolsMap.css';

// Fix default marker icon broken by Webpack/Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl:       'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl:     'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Custom coloured markers per NPO
function makeIcon(colour) {
  return L.divIcon({
    className: '',
    html: `<div style="
      width:14px;height:14px;
      border-radius:50%;
      background:${colour};
      border:3px solid white;
      box-shadow:0 2px 6px rgba(0,0,0,0.35);
    "></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    popupAnchor: [0, -10],
  });
}

const GOLD  = '#F5C518';
const RED   = '#C0392B';
const BLUE  = '#1A7FD4';

const schools = [
  // TeachOut — gold
  { name: 'Usasazo High School',              area: 'Khayelitsha', npo: 'TeachOut',              lat: -34.0387, lng: 18.6730, colour: GOLD },
  { name: 'Beautiful Gate Centre',             area: 'Philippi',    npo: 'TeachOut',              lat: -34.0055, lng: 18.6108, colour: GOLD },
  // TDL — red
  { name: 'Luhlaza Secondary School',          area: 'Khayelitsha', npo: 'Thethani Debating League', lat: -34.0413, lng: 18.6800, colour: RED },
  { name: 'Heideveld Secondary School',        area: 'Heideveld',   npo: 'Thethani Debating League', lat: -33.9780, lng: 18.5630, colour: RED },
  { name: 'I.D. Mkize Senior Secondary',       area: 'Gugulethu',   npo: 'Thethani Debating League', lat: -33.9870, lng: 18.5760, colour: RED },
  { name: 'Fezeka Secondary School',           area: 'Gugulethu',   npo: 'Thethani Debating League', lat: -33.9910, lng: 18.5800, colour: RED },
  { name: 'New Eisleben High School',          area: 'Gugulethu',   npo: 'Thethani Debating League', lat: -33.9955, lng: 18.5750, colour: RED },
  { name: 'Mfuleni Secondary School',          area: 'Mfuleni',     npo: 'Thethani Debating League', lat: -34.0210, lng: 18.6920, colour: RED },
  { name: 'Sophumelela High School',           area: 'Samora Machel',npo: 'Thethani Debating League',lat: -34.0500, lng: 18.6560, colour: RED },
  { name: 'Zisukhanyo Secondary School',       area: 'Samora Machel',npo: 'Thethani Debating League',lat: -34.0470, lng: 18.6610, colour: RED },
  { name: 'Khulani Secondary School',          area: 'Langa',       npo: 'Thethani Debating League', lat: -33.9478, lng: 18.5360, colour: RED },
  { name: 'LEAP Science and Maths School',     area: 'Langa',       npo: 'Thethani Debating League', lat: -33.9495, lng: 18.5390, colour: RED },
];

// Cape Town centre
const CENTRE = [-33.9955, 18.6200];

const npoColours = [
  { colour: GOLD, label: 'TeachOut' },
  { colour: RED,  label: 'Thethani Debating League' },
  { colour: BLUE, label: 'Inkanyezi (Khayelitsha)' },
];

export default function SchoolsMap() {
  return (
    <section className="schools-map-section section">
      <div className="container">
        <span className="section-label">Where We Work</span>
        <h2 className="section-title">Across Cape Town&apos;s townships.</h2>
        <p className="section-subtitle" style={{ marginBottom: 32 }}>
          Every pin below represents a school where Ubunye volunteers show up every week
          to tutor, coach, and support learners across Khayelitsha, Gugulethu, Langa,
          Mfuleni, Samora Machel, Heideveld, and Philippi.
        </p>

        {/* Legend */}
        <div className="map-legend">
          {npoColours.map(n => (
            <div key={n.label} className="map-legend__item">
              <span className="map-legend__dot" style={{ background: n.colour }} />
              <span>{n.label}</span>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="map-wrap">
          <MapContainer
            center={CENTRE}
            zoom={11}
            scrollWheelZoom={false}
            className="leaflet-map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {schools.map(s => (
              <Marker
                key={s.name}
                position={[s.lat, s.lng]}
                icon={makeIcon(s.colour)}
              >
                <Popup>
                  <div className="map-popup">
                    <span
                      className="map-popup__npo"
                      style={{ color: s.colour }}
                    >
                      {s.npo}
                    </span>
                    <strong className="map-popup__name">{s.name}</strong>
                    <span className="map-popup__area">{s.area}</span>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <p className="map-note">
          Click any pin to see the school name and which programme serves it.
          Map data &copy; OpenStreetMap contributors.
        </p>
      </div>
    </section>
  );
}
