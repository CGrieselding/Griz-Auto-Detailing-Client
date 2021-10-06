import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function OurWorkPage() {
  return (
    <>
      <h1 className="workTitle">Our Work</h1>
      <ImageList
        sx={{
          width: 800,
          height: 650,
          margin: "auto",
          marginTop: "70px",
          marginBottom: "100px",
          border: "5px solid white",
        }}
        cols={4}
        rowHeight={164}
        variant="quilted"
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

const itemData = [
  {
    img: "./images/Audi1.jpg",
    title: "Audi Q3",
  },
  {
    img: "./images/Audi2.jpg",
    title: "Audi Q3",
  },
  {
    img: "./images/Audi3.jpg",
    title: "Audi Q3",
  },
  {
    img: "./images/Audi4.jpg",
    title: "Audi Q3",
  },
  {
    img: "./images/Audi5.jpg",
    title: "Audi Q3",
  },
  {
    img: "./images/Audi6.jpg",
    title: "Audi Q3",
  },
  {
    img: "./images/Audi7.jpg",
    title: "Audi Q3",
  },
  {
    img: "./images/Audi8.jpg",
    title: "Audi Q3",
  },
  {
    img: "./images/Tesla1.jpg",
    title: "Tesla Model X",
  },
  {
    img: "./images/Tesla2.jpg",
    title: "Tesla Model X",
  },
  {
    img: "./images/Tesla3.jpg",
    title: "Tesla Model X",
  },
  {
    img: "./images/Tesla4.jpg",
    title: "Tesla Model X",
  },
  {
    img: "./images/Tesla5.jpg",
    title: "Tesla Model X",
  },
  {
    img: "./images/Tesla6.jpg",
    title: "Tesla Model X",
  },
  {
    img: "./images/Tesla7.jpg",
    title: "Tesla Model X",
  },
  {
    img: "./images/Tesla8.jpg",
    title: "Tesla Model X",
  },
  {
    img: "./images/BMW1.jpeg",
    title: "BMW X1",
  },
  {
    img: "./images/BMW2.jpeg",
    title: "BMW X1",
  },
  {
    img: "./images/BMW3.jpeg",
    title: "BMW X1",
  },
  {
    img: "./images/BMW4.jpeg",
    title: "BMW X1",
  },
  {
    img: "./images/BMW5.jpeg",
    title: "BMW X1",
  },
  {
    img: "./images/BMW6.jpg",
    title: "BMW X1",
  },
  {
    img: "./images/BMW7.jpeg",
    title: "BMW X1",
  },
  {
    img: "./images/BMW8.jpeg",
    title: "BMW X1",
  },
];
