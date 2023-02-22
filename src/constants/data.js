import images from "./images"

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "$56",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "$59",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "$44",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "$31",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "$26",
    tags: "IE | 750 ml",
  },
]

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
]

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle:
      "Since 1997, best value for money, offering a three course meal at a reasonable price we recieved special award: The Bib Gourmand.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle:
      "Our restaurant has been awarded the Rising Star award as we have demonstrated exceptional potential, skills, and a strong work ethic.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle:
      "This is highly esteemed recognition in the hospitality industry. It is a testament to the quality of service, comfort, and experience that our establishment provides to our guests.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle:
      "Our chefs are highly trained and their versatile cooking style has been recognized by the hospitality industry and has been consistently recognized for the last 4 years.",
  },
]

export default { wines, cocktails, awards }
