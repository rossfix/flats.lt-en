import React, { useState, useEffect } from "react";
import {
  FlatsContainer,
  CardDesign,
  ImgDesign,
  CardOutContainer,
  CardContainer,
  CardLeft,
  CardL,
  CardRight,
  CardR
} from "./FlatsElements";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

const FlatsComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const userid = JSON.parse(localStorage.getItem("user"));
        const id = userid.user.uid;
        const querySnapshot = await getDocs(
          query(collection(db, "property"), where("tenant_id", "==", id))
        );
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <FlatsContainer>
      <CardOutContainer>
        <CardDesign title="Objekto informacija">
          <CardContainer>
            <CardLeft>
              <CardL>Miestas</CardL>
              <CardL>Adresas</CardL>
              <CardL>Aukštas</CardL>
              <CardL>Kvadratų skaičius</CardL>
              <CardL>Kambarių skaičius</CardL>
              <CardL>Kryptis</CardL>
              <CardL>Gyvūnai</CardL>
            </CardLeft>
            {data.map((item, i) => (
              <CardRight key={i}>
                <CardR>{item.city}</CardR>
                <CardR>{item.adress}</CardR>
                <CardR>{item.floor}</CardR>
                <CardR>{item.square}</CardR>
                <CardR>{item.room}</CardR>
                <CardR>{item.direction}</CardR>
                <CardR>{item.animals}</CardR>
              </CardRight>
            ))}
          </CardContainer>
        </CardDesign>
      </CardOutContainer>
      <CardOutContainer>
        {data.map((item, i) => (
          <CardDesign title="Nuotraukos" key={i}>
            {item.img.map((image, index) => (
              <ImgDesign src={image} key={index} />
            ))}
          </CardDesign>
        ))}
      </CardOutContainer>
    </FlatsContainer>
  );
};

export default FlatsComponent;
