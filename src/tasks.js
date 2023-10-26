const db = {
    "tasks": [
      {
        "propertyId": 1,
        "address": "456 Oak Avenue, Springfield, XYZ789",
        "legalDescription": "Parcel 5, Block B, Springfield Heights",
        "size": "3200 square meters",
        "owner": {
          "name": "Alice Johnson",
          "contact": "+1 987-654-3210"
        },
        "encumbrances": [
          {
            "type": "Mortgage",
            "details": "Bank of Springfield, Loan Agreement #12345"
          }
        ],
        "zoning": "Commercial",
        "landUseRestrictions": "No industrial activities allowed",
        "topography": "Flat terrain suitable for construction",
        "utilities": {
          "water": "Available",
          "electricity": "Available",
          "gas": "Available",
          "sewage": "Public Sewer System",
          "internet": "Available"
        },
        "environmentalConsiderations": "No environmental concerns reported",
        "nearbyAmenities": ["High School", "Medical Center", "Public Park"],
        "price": "$250,000",
        "historicalData": "Site of a former small farm, no significant events",
        "images": ["property_image1.jpg", "property_image2.jpg"],
        "maps": ["property_map.jpg"]
      },
      {
        "propertyId": 2,
        "address": "123 Main Street, Exampleville, ABC123",
        "legalDescription": "Lot 1, Block A, Example Subdivision",
        "size": "5000 square meters",
        "owner": {
          "name": "John Doe",
          "contact": "+1 123-456-7890"
        },
        "encumbrances": [],
        "zoning": "Residential",
        "landUseRestrictions": "None",
        "topography": "Gentle slope with scenic views",
        "utilities": {
          "water": "Available",
          "electricity": "Available",
          "gas": "Not Available",
          "sewage": "Septic System",
          "internet": "Available"
        },
        "environmentalConsiderations": "No flood zone, fertile soil suitable for agriculture",
        "nearbyAmenities": ["Elementary School", "Hospital", "Shopping Mall"],
        "price": "$150,000",
        "historicalData": "No significant historical events",
        "images": ["image1.jpg", "image2.jpg"],
        "maps": ["map.jpg"]
      },
      {
        "propertyId": 3,
        "address": "789 Pine Lane, Greensville, LMN456",
        "legalDescription": "Lot 10, Block C, Pinecrest Estates",
        "size": "4500 square meters",
        "owner": {
          "name": "Michael Rodriguez",
          "contact": "+1 555-789-1234"
        },
        "encumbrances": [],
        "zoning": "Residential",
        "landUseRestrictions": "No subdividing allowed",
        "topography": "Moderate slope with a panoramic view of the lake",
        "utilities": {
          "water": "Available",
          "electricity": "Available",
          "gas": "Not Available",
          "sewage": "Septic System",
          "internet": "Available"
        },
        "environmentalConsiderations": "Adjacent to protected natural reserve, no construction limitations",
        "nearbyAmenities": ["Elementary School", "Grocery Store", "Lake Park"],
        "price": "$180,000",
        "historicalData": "Native American heritage site, artifacts found nearby",
        "images": ["property_photo1.jpg", "property_photo2.jpg"],
        "maps": ["property_map.jpg"]
      },
      {
        "propertyId": 4,
        "address": "789 Pine Lane, Greensville, LMN456",
        "legalDescription": "Lot 10, Block C, Pinecrest Estates",
        "size": "4500 square meters",
        "owner": {
          "name": "Michael Rodriguez",
          "contact": "+1 555-789-1234"
        },
        "encumbrances": [],
        "zoning": "Residential",
        "landUseRestrictions": "No subdividing allowed",
        "topography": "Moderate slope with a panoramic view of the lake",
        "utilities": {
          "water": "Available",
          "electricity": "Available",
          "gas": "Not Available",
          "sewage": "Septic System",
          "internet": "Available"
        },
        "environmentalConsiderations": "Adjacent to protected natural reserve, no construction limitations",
        "nearbyAmenities": ["Elementary School", "Grocery Store", "Lake Park"],
        "price": "$180,000",
        "historicalData": "Native American heritage site, artifacts found nearby",
        "images": ["property_photo1.jpg", "property_photo2.jpg"],
        "maps": ["property_map.jpg"]
      },
      {
        "propertyId": 5,
        "address": "789 Pine Lane, Greensville, LMN456",
        "legalDescription": "Lot 10, Block C, Pinecrest Estates",
        "size": "4500 square meters",
        "owner": {
          "name": "Michael Rodriguez",
          "contact": "+1 555-789-1234"
        },
        "encumbrances": [],
        "zoning": "Residential",
        "landUseRestrictions": "No subdividing allowed",
        "topography": "Moderate slope with a panoramic view of the lake",
        "utilities": {
          "water": "Available",
          "electricity": "Available",
          "gas": "Not Available",
          "sewage": "Septic System",
          "internet": "Available"
        },
        "environmentalConsiderations": "Adjacent to protected natural reserve, no construction limitations",
        "nearbyAmenities": ["Elementary School", "Grocery Store", "Lake Park"],
        "price": "$180,000",
        "historicalData": "Native American heritage site, artifacts found nearby",
        "images": ["property_photo1.jpg", "property_photo2.jpg"],
        "maps": ["property_map.jpg"]
      },
      {
        "propertyId": 6,
        "address": "789 Pine Lane, Greensville, LMN456",
        "legalDescription": "Lot 10, Block C, Pinecrest Estates",
        "size": "4500 square meters",
        "owner": {
          "name": "Michael Rodriguez",
          "contact": "+1 555-789-1234"
        },
        "encumbrances": [],
        "zoning": "Residential",
        "landUseRestrictions": "No subdividing allowed",
        "topography": "Moderate slope with a panoramic view of the lake",
        "utilities": {
          "water": "Available",
          "electricity": "Available",
          "gas": "Not Available",
          "sewage": "Septic System",
          "internet": "Available"
        },
        "environmentalConsiderations": "Adjacent to protected natural reserve, no construction limitations",
        "nearbyAmenities": ["Elementary School", "Grocery Store", "Lake Park"],
        "price": "$180,000",
        "historicalData": "Native American heritage site, artifacts found nearby",
        "images": ["property_photo1.jpg", "property_photo2.jpg"],
        "maps": ["property_map.jpg"]
      },
      {
        "propertyId": 7,
        "address": "789 Pine Lane, Greensville, LMN456",
        "legalDescription": "Lot 10, Block C, Pinecrest Estates",
        "size": "4500 square meters",
        "owner": {
          "name": "Michael Rodriguez",
          "contact": "+1 555-789-1234"
        },
        "encumbrances": [],
        "zoning": "Residential",
        "landUseRestrictions": "No subdividing allowed",
        "topography": "Moderate slope with a panoramic view of the lake",
        "utilities": {
          "water": "Available",
          "electricity": "Available",
          "gas": "Not Available",
          "sewage": "Septic System",
          "internet": "Available"
        },
        "environmentalConsiderations": "Adjacent to protected natural reserve, no construction limitations",
        "nearbyAmenities": ["Elementary School", "Grocery Store", "Lake Park"],
        "price": "$180,000",
        "historicalData": "Native American heritage site, artifacts found nearby",
        "images": ["property_photo1.jpg", "property_photo2.jpg"],
        "maps": ["property_map.jpg"]
      },
      {
        "propertyId": 8,
        "address": "789 Pine Lane, Greensville, LMN456",
        "legalDescription": "Lot 10, Block C, Pinecrest Estates",
        "size": "4500 square meters",
        "owner": {
          "name": "Michael Rodriguez",
          "contact": "+1 555-789-1234"
        },
        "encumbrances": [],
        "zoning": "Residential",
        "landUseRestrictions": "No subdividing allowed",
        "topography": "Moderate slope with a panoramic view of the lake",
        "utilities": {
          "water": "Available",
          "electricity": "Available",
          "gas": "Not Available",
          "sewage": "Septic System",
          "internet": "Available"
        },
        "environmentalConsiderations": "Adjacent to protected natural reserve, no construction limitations",
        "nearbyAmenities": ["Elementary School", "Grocery Store", "Lake Park"],
        "price": "$180,000",
        "historicalData": "Native American heritage site, artifacts found nearby",
        "images": ["property_photo1.jpg", "property_photo2.jpg"],
        "maps": ["property_map.jpg"]
      },
      {
        "propertyId": 9,
        "address": "789 Pine Lane, Greensville, LMN456",
        "legalDescription": "Lot 10, Block C, Pinecrest Estates",
        "size": "4500 square meters",
        "owner": {
          "name": "Michael Rodriguez",
          "contact": "+1 555-789-1234"
        },
        "encumbrances": [],
        "zoning": "Residential",
        "landUseRestrictions": "No subdividing allowed",
        "topography": "Moderate slope with a panoramic view of the lake",
        "utilities": {
          "water": "Available",
          "electricity": "Available",
          "gas": "Not Available",
          "sewage": "Septic System",
          "internet": "Available"
        },
        "environmentalConsiderations": "Adjacent to protected natural reserve, no construction limitations",
        "nearbyAmenities": ["Elementary School", "Grocery Store", "Lake Park"],
        "price": "$180,000",
        "historicalData": "Native American heritage site, artifacts found nearby",
        "images": ["property_photo1.jpg", "property_photo2.jpg"],
        "maps": ["property_map.jpg"]
      },
      {
        "propertyId": 10,
        "address": "789 Pine Lane, Greensville, LMN456",
        "legalDescription": "Lot 10, Block C, Pinecrest Estates",
        "size": "4500 square meters",
        "owner": {
          "name": "Michael Rodriguez",
          "contact": "+1 555-789-1234"
        },
        "encumbrances": [],
        "zoning": "Residential",
        "landUseRestrictions": "No subdividing allowed",
        "topography": "Moderate slope with a panoramic view of the lake",
        "utilities": {
          "water": "Available",
          "electricity": "Available",
          "gas": "Not Available",
          "sewage": "Septic System",
          "internet": "Available"
        },
        "environmentalConsiderations": "Adjacent to protected natural reserve, no construction limitations",
        "nearbyAmenities": ["Elementary School", "Grocery Store", "Lake Park"],
        "price": "$180,000",
        "historicalData": "Native American heritage site, artifacts found nearby",
        "images": ["property_photo1.jpg", "property_photo2.jpg"],
        "maps": ["property_map.jpg"]
      }
    ]
  }
  
  export default db; 