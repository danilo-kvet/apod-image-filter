import axios from "axios";
import { ContentContainer, PageContainer } from "./style";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import MediaContainer from "./components/MediaContainer";

function App() {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);

  const filterObject = (oldObj) => {
    const filteredKeysList = [
      "title",
      "explanation",
      "copyright",
      "url",
      "media_type",
    ];

    const filtered = Object.keys(oldObj)
      .filter((key) => filteredKeysList.includes(key))
      .reduce((obj, key) => {
        return { ...obj, [key]: oldObj[key] };
      }, {});

    return filtered;
  };

  async function getImages() {
    const response = await axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2021-04-01&end_date=2021-04-30"
    );
    const filteredResponse = [
      ...response.data.map((element) => {
        return filterObject(element);
      }),
    ];
    setLoading(false);
    setMedia(filteredResponse);
  }

  useEffect(() => {
    if (!media[0]) {
      getImages();
    }
  }, [media]); // eslint-disable-line

  return (
    <PageContainer>
      <h1>Picture Gallery</h1>
      <ContentContainer>
        {media &&
          media.map((element, index) => (
            <MediaContainer element={element} key={index} />
          ))}
      </ContentContainer>
      {loading && <Loading />}
    </PageContainer>
  );
}

export default App;
