import { Card, CardContent, Typography } from '@mui/material';

const PropertyCard = ({ property }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardContent>
        <Typography variant="h6">{property.address}</Typography>
        <Typography>Cena: {property.price}€</Typography>
        <Typography>Kvadratura: {property.size}m²</Typography>
        <Typography>Broj soba: {property.rooms}</Typography>
        <Typography>Tip: {property.type === 'sale' ? 'Prodaja' : 'Izdavanje'}</Typography>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;