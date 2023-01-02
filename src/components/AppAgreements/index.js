import React, { useState, useEffect } from "react";
import {
  AgreementsContainer,
  CardDesign,
  TableDesign,
  SpaceDesign
} from "./AgreementsElements";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

const { Column } = TableDesign;

const AgreementsComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const userid = JSON.parse(localStorage.getItem("user"));
        const id = userid.user.uid;
        const querySnapshot = await getDocs(
          query(collection(db, "contracts"), where("tenant_id", "==", id))
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
    <AgreementsContainer>
      <CardDesign title="Sutartys">
        <TableDesign
          dataSource={data}
          pagination={false}
          scroll={{
            y: 300,
            x: "max-content"
          }}
        >
          <Column
            title="Pavadinimas"
            dataIndex="contract_name"
            key="contract_name"
          />
          <Column title="Objektas" dataIndex="property" key="property" />

          <Column title="Addresas" dataIndex="adress" key="adress" />
          <Column width="7rem" title="Terminas" dataIndex="term" key="term" />
          <Column
            title="Veiksmai"
            key="action"
            render={(_, record) => (
              <SpaceDesign size="middle">
                <a
                  href="https://app.dokobit.com/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  Peržiūrėti ir pasirašyti
                </a>
              </SpaceDesign>
            )}
          />
        </TableDesign>
      </CardDesign>
    </AgreementsContainer>
  );
};

export default AgreementsComponent;
