import { useState } from 'react';
import { Box, ToggleButton, ToggleButtonGroup, Drawer } from '@mui/material';
import Map from './components/Map';
import PropertyCard from './components/PropertyCard';
import { properties } from './data/properties';
import 'leaflet/dist/leaflet.css';

function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [propertyType, setPropertyType] = useState('all');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const filteredProperties = properties.filter(property => 
    propertyType === 'all' || property.type === propertyType
  );

  const handlePropertySelect = (property) => {
    setSelectedProperty(property);
    setIsDrawerOpen(true);
  };

  return (
    <Box sx={{ height: '100vh' }}>
      <Box sx={{ position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 1000 }}>
        <ToggleButtonGroup
          value={propertyType}
          exclusive
          onChange={(e, value) => setPropertyType(value || 'all')}
          sx={{ backgroundColor: 'white', boxShadow: 2 }}
        >
          <ToggleButton value="all">Sve</ToggleButton>
          <ToggleButton value="sale">Prodaja</ToggleButton>
          <ToggleButton value="rent">Izdavanje</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Map 
        properties={filteredProperties} 
        onPropertySelect={handlePropertySelect} 
      />

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        sx={{ width: '30%' }}
      >
        <Box sx={{ width: 300, p: 2 }}>
          {selectedProperty && <PropertyCard property={selectedProperty} />}
        </Box>
      </Drawer>
    </Box>
  );
}

export default App;