import React, { useState } from "react";
import axios from "axios";

const baseURL = "https://v2.0-dev.mops4.mopssys.com/api/tagbroker";

const TagData = () => {
  const [tags, setTags] = useState("");
  const [cachedConfigData, setCachedConfigData] = useState(
    () => JSON.parse(localStorage.getItem("configData")) || {}
  );
  const [loading, setLoading] = useState(false);

  const fetchConfigData = async (tag) => {
    try {
      // Check if data is available in cache for the current tag
      if (cachedConfigData[tag]) {
        return true;
      }
      setLoading(true);
      // Fetch configuration data if not in cache
      const response = await axios.get(`${baseURL}/browse?tag_filter=${tag}`);

      if (response.status === 200) {
        const configData = response.data;

        // Cache the configuration data separately for each tag
        const updatedCache = { ...cachedConfigData, [tag]: configData };
        localStorage.setItem("configData", JSON.stringify(updatedCache));
        setCachedConfigData(updatedCache);
      }
    } catch (error) {
      console.error(`Error fetching configuration data for ${tag}:`, error);
    } finally {
      setLoading(false);
    }
  };

  const handleFetchData = async () => {
    const selectedTags = tags.split(",").map((tag) => tag.trim());
    console.log({ selectedTags }, cachedConfigData);
    for (const tag of selectedTags) {
      await fetchConfigData(tag);
    }
  };

  return (
    <div>
      <h1>Tag Data Fetcher</h1>
      <div>
        <label>Enter Tags:</label>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value.replace(/\s/g, "").trim())}
        />
        <button onClick={handleFetchData}>Fetch Data</button>
      </div>
      <div>
        <h3>{tags} Configuration Data</h3>
        {loading ? (
          <>Loading</>
        ) : (
          tags.split(",").map((tag) => {
            return (
              <>
                <h3>{tag} Configuration Data</h3>
                {cachedConfigData[tag] ? (
                  <pre>{JSON.stringify(cachedConfigData[tag], null, 2)}</pre>
                ) : (
                  <>No Data</>
                )}
              </>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TagData;
