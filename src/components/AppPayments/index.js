import React, { useState, useEffect } from "react";
import {
  PaymentsContainer,
  CardDesign,
  TableDesign,
  SpaceDesign
} from "./PaymentsElements";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

const { Column } = TableDesign;

const PaymentsComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const userid = JSON.parse(localStorage.getItem("user"));
        const id = userid.user.uid;
        const querySnapshot = await getDocs(
          query(collection(db, "invoices"), where("tenant_id", "==", id))
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
    <PaymentsContainer>
      <CardDesign title="Sąskaitos">
        <TableDesign
          dataSource={data}
          pagination={false}
          scroll={{
            y: 300,
            x: "max-content"
          }}
        >
          <Column
            title="Sąskaita"
            dataIndex="invoice_name"
            key="invoice_name"
          />

          <Column title="Paslauga" dataIndex="services" key="services" />
          <Column width="5rem" title="Kaina" dataIndex="price" key="price" />
          <Column width="7rem" title="Apmokėta" dataIndex="paid" key="paid" />
          <Column
            title="Veiksmai"
            key="action"
            render={(_, record) => (
              <SpaceDesign size="middle">
                <a
                  href="https://psd2.neopay.lt/widget/banks"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sumokėti
                </a>
              </SpaceDesign>
            )}
          />
        </TableDesign>
      </CardDesign>
    </PaymentsContainer>
  );
};

export default PaymentsComponent;
