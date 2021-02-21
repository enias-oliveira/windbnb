import {useEffect, useState} from "react"

import ListHeader from "../../molecules/list-header";
import Card from "../../molecules/card";
import { useSearch } from "../../../store/search-context";

const List = ({ data }) => {
  const [listItems, setListItems] = useState(data)

  const {location : {city}, guests} = useSearch();

  useEffect(() => {

  const dataToFilter = [...data]

  const filterCity = (list) => (list.filter(cur => cur.city === city))
  const filterGuests = (list) => (list.filter(cur => cur.maxGuests >= guests))


  const filteredCity = !!city ? filterCity(dataToFilter) : dataToFilter
  const filteredGuests = !!guests ? filterGuests(filteredCity) : filteredCity

  setListItems(filteredGuests)

  }, [city, guests, data])

  return (
    <div className="flex flex-col items-center">
      <ListHeader quantity={listItems.length} city={city} />
      <section>
        {listItems.map((listItem, idx) => (
          <Card item={listItem} key={idx} />
        ))}
      </section>
    </div>
  );
};

export default List;
