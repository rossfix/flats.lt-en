import React, { useState, useEffect } from "react";
import {
  ProfileContainer,
  CardDesign,
  ChangeButton,
  CardL,
  CardR,
  CardContainer,
  CardLeft,
  CardRight,
  CardOutContainer
} from "./ProfileElements";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const ProfileComponent = () => {
  const resetPassword = () => {
    const useremail = JSON.parse(localStorage.getItem("user"));
    const email = useremail.user.email;
    sendPasswordResetEmail(auth, email, null)
      .then(() => {
        alert("naujas slaptazodis issiustas " + email);
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];

      try {
        const userid = await JSON.parse(localStorage.getItem("user"));
        const id = await userid.user.uid;
        const docRef = await doc(db, "users", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          list.push(docSnap.data());
          setData(list);
        }
      } catch (err) {
        console.log(err);
        window.location.reload(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ProfileContainer>
      <CardOutContainer>
        <CardDesign title="Profilis">
          <CardContainer>
            <CardLeft>
              <CardL>Vardas</CardL>
              <CardL>Pavardė</CardL>
              <CardL>El. Paštas</CardL>
              <CardL>Tel. Nr.</CardL>
              <CardL>Šalis</CardL>
              <CardL>Miestas</CardL>
              <CardL>Adresas</CardL>
            </CardLeft>

            {data.map((item, i) => (
              <CardRight key={i}>
                <CardR>{item.name}</CardR>
                <CardR>{item.surname}</CardR>
                <CardR>{item.email}</CardR>
                <CardR>{item.number}</CardR>
                <CardR>{item.country}</CardR>
                <CardR>{item.city}</CardR>
                <CardR>{item.adress}</CardR>
              </CardRight>
            ))}
          </CardContainer>
        </CardDesign>
      </CardOutContainer>

      <CardDesign title="Slaptažodis">
        <CardContainer>
          <CardLeft>
            <CardL>Atnaujinti slaptažodį</CardL>
          </CardLeft>
          <CardRight>
            <ChangeButton onClick={resetPassword}>
              Atkurti slaptažodį
            </ChangeButton>
          </CardRight>
        </CardContainer>
      </CardDesign>
    </ProfileContainer>
  );
};

export default ProfileComponent;
