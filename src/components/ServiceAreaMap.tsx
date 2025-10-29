import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from './ui/input';
import { Button } from './ui/button';

const ServiceAreaMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [isMapReady, setIsMapReady] = useState(false);

  const serviceAreas = [
    { name: 'Parque das Nações', coords: [-9.0947, 38.7681] },
    { name: 'Olivais', coords: [-9.1061, 38.7686] },
    { name: 'Marvila', coords: [-9.1103, 38.7572] },
    { name: 'Alvalade', coords: [-9.1528, 38.7556] },
    { name: 'Areeiro', coords: [-9.1392, 38.7478] },
    { name: 'Benfica', coords: [-9.2056, 38.7411] },
    { name: 'Carnide', coords: [-9.1986, 38.7597] },
    { name: 'Lumiar', coords: [-9.1689, 38.7719] },
    { name: 'Alta de Lisboa', coords: [-9.1611, 38.7789] },
    { name: 'Ameixoeira', coords: [-9.1544, 38.7839] },
    { name: 'Charneca', coords: [-9.1403, 38.7972] },
    { name: 'Póvoa de Santa Iria', coords: [-9.0631, 38.8572] },
    { name: 'Vialonga', coords: [-9.0808, 38.8778] },
    { name: 'Forte da Casa', coords: [-9.0403, 38.8958] },
    { name: 'Alverca do Ribatejo', coords: [-9.0344, 38.8914] },
    { name: 'Moscavide', coords: [-9.1050, 38.7789] },
    { name: 'Portela', coords: [-9.1111, 38.7742] },
    { name: 'Sacavém', coords: [-9.1083, 38.7931] },
    { name: 'Prior Velho', coords: [-9.1022, 38.7981] },
  ];

  useEffect(() => {
    if (!mapContainer.current || !apiKey) return;

    mapboxgl.accessToken = apiKey;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-9.12, 38.78],
      zoom: 10.5,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      setIsMapReady(true);

      // Add markers for each service area
      serviceAreas.forEach((area) => {
        const el = document.createElement('div');
        el.className = 'custom-marker';
        el.style.backgroundColor = 'hsl(var(--primary))';
        el.style.width = '12px';
        el.style.height = '12px';
        el.style.borderRadius = '50%';
        el.style.border = '2px solid white';
        el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';
        el.style.cursor = 'pointer';

        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<div style="padding: 4px 8px; font-weight: 600; color: hsl(var(--foreground));">${area.name}</div>`
        );

        new mapboxgl.Marker(el)
          .setLngLat(area.coords as [number, number])
          .setPopup(popup)
          .addTo(map.current!);
      });
    });

    return () => {
      map.current?.remove();
    };
  }, [apiKey]);

  if (!apiKey) {
    return (
      <div className="w-full space-y-4 p-6 bg-muted/50 rounded-lg border border-border">
        <div className="space-y-2">
          <h3 className="font-semibold text-foreground">Configurar Mapa</h3>
          <p className="text-sm text-muted-foreground">
            Para visualizar o mapa das áreas de atuação, insira sua chave pública do Mapbox.
          </p>
          <p className="text-xs text-muted-foreground">
            Obtenha sua chave em:{' '}
            <a
              href="https://mapbox.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              mapbox.com
            </a>
          </p>
        </div>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="pk.eyJ1..."
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="font-mono text-sm"
          />
          <Button
            onClick={() => {
              if (apiKey.trim()) {
                setIsMapReady(false);
              }
            }}
          >
            Mostrar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md border border-border">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default ServiceAreaMap;
