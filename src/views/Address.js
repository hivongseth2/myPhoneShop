import React, { useEffect, useState } from "react";

const Address = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await fetch(
          "https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1"
        );
        const data = await response.json();
        console.log("procin" + data.data.data);

        setProvinces(data.data.data);
        console.log("procin" + provinces);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchProvinces();
  }, []);

  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const response = await fetch(
          `https://provinces.open-api.vn/api/p/${selectedProvince}?depth=2`
        );
        const data = await response.json();
        setDistricts(data.districts);
      } catch (error) {
        console.error("Error fetching districts:", error);
      }
    };

    if (selectedProvince) {
      fetchDistricts();
    }
  }, [selectedProvince]);

  useEffect(() => {
    const fetchWards = async () => {
      try {
        console.log("ward" + selectedDistrict);
        const response = await fetch(
          `https://provinces.open-api.vn/api/d/${selectedDistrict}?depth=2`
        );
        const data = await response.json();
        setWards(data.wards);
      } catch (error) {
        console.error("Error fetching wards:", error);
      }
    };

    if (selectedDistrict) {
      fetchWards();
    }
  }, [selectedDistrict]);

  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
  };
  const handleDistrictChange = (event) => {
    console.log("district" + event.target.value);
    setSelectedDistrict(event.target.value);
  };
  return (
    <div>
      <select value={selectedProvince} onChange={handleProvinceChange}>
        <option value="">--Chọn tỉnh thành--</option>
        {provinces.map((province) => (
          <option key={province.code} value={province.code}>
            {province.name}
          </option>
        ))}
      </select>

      <select value={selectedDistrict} onChange={handleDistrictChange}>
        <option value="">--Chọn quận/huyện--</option>
        {console.log(districts)}
        {districts.map((district) => (
          <option key={district.code} value={district.code}>
            {district.name}
          </option>
        ))}
      </select>

      <select>
        <option value="">--Chọn xã--</option>
        {console.log(wards)}
        {wards.map((ward) => (
          <option key={ward.code} value={ward.code}>
            {ward.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Address;
