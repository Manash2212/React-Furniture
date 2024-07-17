import { useEffect, useState, useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";

const useGetData = (collectionName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const collectionRef = useMemo(
    () => collection(db, collectionName),
    [collectionName]
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getDocs(collectionRef);
        setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [collectionRef]);

  return { data, loading };
};

export default useGetData;
