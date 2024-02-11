import React from "react";
import Shoe from "../components/Shoe";
import styles from "../css/Results.module.css"; // Assuming the export is default

const Results = ({ items }) => {
  return (
    <>
      {/* Assuming you have or will add a .title style */}
      <div className={styles.Results}>
        {/* {items.map((item, index) => (
          <Shoe key={index} {...item} /> // Spread item props into Shoe component
        ))} */}
        <Shoe
          title={"Jordans"}
          price={50}
          gender={"Male"}
          source={"https://imgnike-a.akamaihd.net/1300x1300/0253927T.jpg"}
        ></Shoe>
        <Shoe
          title={"Adidas"}
          price={70}
          gender={"Female"}
          source={
            "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/9a1c1af88f044d2288d2a5a90114db97_9366/samba-classic.jpg"
          }
        ></Shoe>
        <Shoe
          title={"Nike"}
          price={80}
          gender={"Male"}
          source={
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/hbaotfderndelmnbcm9t/revolution-5-mens-road-running-shoes-ZXqS6C.png"
          }
        ></Shoe>
        <Shoe
          title={"New Balance"}
          price={65}
          gender={"Male"}
          source={
            "https://static.qns.digital/img/p/2/5/0/3/5/4/0/2503540-full_product.jpg"
          }
        />
        <Shoe
          title={"Bata"}
          price={70}
          gender={"Female"}
          source={
            "https://content.jdmagicbox.com/quickquotes/images_main/bata-blue-casual-shoes-for-women-3-164451738-xbd9v.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit"
          }
        ></Shoe>
        <Shoe
          title={"Dr.Martin"}
          price={50}
          gender={"Female"}
          source={
            "https://www.kickscrew.com/cdn/shop/products/main-square_edebe1c6-afcb-423f-b764-9bf6b9d2bf68_877x.jpg?v=1690732992"
          }
        ></Shoe>
        <Shoe
          title={"Birkenstock"}
          price={90}
          gender={"Male"}
          source={
            "https://media.finishline.com/i/finishline/560771_250_P1?$default$&w=671&&h=671&bg=rgb(237,237,237)"
          }
        ></Shoe>
        <Shoe
          title={"Salmon"}
          price={60}
          gender={"Unisex"}
          source={
            "https://image.goxip.com/D0QtTB5NvUlEweDZK2DgVD4oMNo=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.stockx.com%2Fimages%2FSalomon-XT-6-Adv-Dover-Street-Market-Silver-Product.jpg"
          }
        ></Shoe>
        <Shoe
          title={"On Cloud"}
          price={85}
          gender={"Unisex"}
          source={
            "https://www.prodirectsoccer.com/ProductImages/Gallery_1/231322_Gallery_1_0887111.jpg"
          }
        ></Shoe>
      </div>
    </>
  );
};

export default Results;
