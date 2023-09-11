import axios from "axios";
import { useEffect, useState } from "react";
import Item from "./Item";

const ListItem = () => {
  const [dataPhone, setDataPhone] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5; // Number of items to display per page

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < dataPhone.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await axios.get(
          "http://localhost:8521/api/v1/products/getAll"
        );
        let data = res && res.data ? res.data : [];
        setDataPhone(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-md-12">
            <div className="row align-items-center">
              <div className="col-1">
                <button
                  className="btn btn-primary"
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                >
                  Previous
                </button>
              </div>
              {dataPhone
                .slice(currentIndex, currentIndex + itemsPerPage)
                .map((item, index) => (
                  <div className="col-2 mb-5" key={index}>
                    <Item children={item} />
                  </div>
                ))}
              <div className="col-1">
                <button
                  className="btn btn-primary float-end"
                  onClick={handleNext}
                  disabled={currentIndex >= dataPhone.length - itemsPerPage}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListItem;
